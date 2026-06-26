export const modelConfig = {
  deepseek: {
    name: "DeepSeek",
    proxyPath: "/recipe-api/deepseek",
    baseUrl: "https://api.deepseek.com/v1",
    models: [
      { id: "deepseek-chat", name: "DeepSeek-V3" },
      { id: "deepseek-reasoner", name: "DeepSeek-R1" },
    ],
  },
  dashscope: {
    name: "通义千问",
    proxyPath: "/recipe-api/dashscope",
    baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    models: [
      { id: "qwen-plus", name: "通义千问-Plus" },
      { id: "qwen-max", name: "通义千问-Max" },
      { id: "qwen-turbo", name: "通义千问-Turbo" },
    ],
  },
  zhipu: {
    name: "智谱GLM",
    proxyPath: "/recipe-api/zhipu",
    baseUrl: "https://open.bigmodel.cn/api/paas/v4",
    models: [
      { id: "glm-4-flash", name: "GLM-4-Flash" },
      { id: "glm-4-plus", name: "GLM-4-Plus" },
      { id: "glm-4", name: "GLM-4" },
    ],
  },
  moonshot: {
    name: "Moonshot",
    proxyPath: "/recipe-api/moonshot",
    baseUrl: "https://api.moonshot.cn/v1",
    models: [
      { id: "moonshot-v1-8k", name: "Moonshot-v1-8k" },
      { id: "moonshot-v1-32k", name: "Moonshot-v1-32k" },
    ],
  },
};

export function getApiUrl(provider) {
  const config = modelConfig[provider];
  if (!config) return "";
  return config.proxyPath;
}

export function buildApiRequest(provider, apiKey, model, messages) {
  return {
    url: `${getApiUrl(provider)}/chat/completions`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: 0.7,
        stream: false,
      }),
    },
  };
}

export function buildRecipePrompt(ingredients, avoid, people, cuisine) {
  const avoidText = avoid.length > 0 ? `忌口/过敏：${avoid.join("、")}` : "无忌口";
  const cuisineText = cuisine !== "不限" ? `菜系偏好：${cuisine}` : "不限菜系";

  return `你是一位专业的家庭菜谱规划师。请根据以下条件生成三餐菜谱：

现有食材：${ingredients.join("、")}
${avoidText}
用餐人数：${people}人
${cuisineText}

请严格按以下JSON格式返回，不要返回任何其他文字：
{
  "breakfast": [
    {
      "name": "菜名",
      "ingredients": [{"name": "食材名", "amount": "用量"}],
      "steps": ["步骤1", "步骤2"]
    }
  ],
  "lunch": [
    {
      "name": "菜名",
      "ingredients": [{"name": "食材名", "amount": "用量"}],
      "steps": ["步骤1", "步骤2"]
    }
  ],
  "dinner": [
    {
      "name": "菜名",
      "ingredients": [{"name": "食材名", "amount": "用量"}],
      "steps": ["步骤1", "步骤2"]
    }
  ]
}

要求：
1. 早餐帮我安排1–2道，午餐和晚餐各安排2–3道
2. 尽量使用现有食材，缺少的可以补充
3. 严格避开忌口食材
4. 根据用餐人数调整用量
5. 只返回JSON，不要有其他内容`;
}
