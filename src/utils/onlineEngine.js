import { buildRecipePrompt } from "../data/modelConfig";

// 根据模型名称自动推断代理路径
function inferProxyPath(modelName) {
  if (!modelName) return "/recipe-api/deepseek";
  const name = modelName.toLowerCase();
  if (name.includes("qwen") || name.includes("tongyi") || name.includes("dashscope")) {
    return "/recipe-api/dashscope";
  }
  if (name.includes("glm") || name.includes("zhipu") || name.includes("chatglm")) {
    return "/recipe-api/zhipu";
  }
  if (name.includes("moonshot") || name.includes("kimi")) {
    return "/recipe-api/moonshot";
  }
  // 默认走 deepseek
  return "/recipe-api/deepseek";
}

export async function generateOnlineMenu(apiKey, model, ingredients, avoid, people, cuisine) {
  const prompt = buildRecipePrompt(ingredients, avoid, people, cuisine);
  const proxyPath = inferProxyPath(model);
  const url = `${proxyPath}/chat/completions`;

  console.log("[在线模式] 请求信息:", { url, model, apiKeyLength: apiKey?.length, promptLength: prompt.length });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[在线模式] 请求失败:", response.status, errorText);
      throw new Error(`API请求失败 (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    console.log("[在线模式] AI返回内容长度:", content.length, "前200字:", content.substring(0, 200));

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("[在线模式] 无法解析JSON, 原始内容:", content);
      throw new Error("AI返回格式异常，无法解析菜谱数据");
    }

    const menuData = JSON.parse(jsonMatch[0]);

    const convertMeal = (meals) => {
      if (!Array.isArray(meals)) return [];
      return meals.map((meal, idx) => ({
        id: `online_${idx}`,
        name: meal.name || "未命名菜品",
        cuisine: "在线生成",
        difficulty: "未知",
        suitablePeople: [1, 10],
        tags: [],
        ingredients: (meal.ingredients || []).map((ing) => ({
          name: ing.name || "",
          amount: ing.amount || "适量",
          unit: "份",
          pricePerUnit: 2,
        })),
        steps: meal.steps || [],
      }));
    };

    return {
      breakfast: convertMeal(menuData.breakfast),
      lunch: convertMeal(menuData.lunch),
      dinner: convertMeal(menuData.dinner),
    };
  } catch (error) {
    console.error("在线菜谱生成失败:", error);
    throw error;
  }
}

export function buildOnlineShoppingList(menu, existingIngredients) {
  const allIngredients = [];
  const allRecipes = [
    ...menu.breakfast,
    ...menu.lunch,
    ...menu.dinner,
  ];

  allRecipes.forEach((recipe) => {
    (recipe.ingredients || []).forEach((ing) => {
      const existing = allIngredients.find((i) => i.name === ing.name);
      if (!existing) {
        allIngredients.push({
          name: ing.name,
          amount: ing.amount,
          unit: ing.unit || "份",
          pricePerUnit: ing.pricePerUnit || 2,
          needBuy: !existingIngredients.some(
            (ei) => ing.name.includes(ei) || ei.includes(ing.name)
          ),
        });
      }
    });
  });

  return allIngredients;
}
