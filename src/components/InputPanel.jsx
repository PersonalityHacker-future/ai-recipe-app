import { useState } from "react";
import { cuisineList, ingredientCategories } from "../data/recipes";

const commonIngredients = [
  "鸡蛋", "番茄", "土豆", "青椒", "胡萝卜",
  "猪肉末", "鸡胸肉", "五花肉", "排骨",
  "大虾", "豆芽", "生菜", "黄瓜", "茄子",
  "豆腐", "米饭", "面条", "葱", "姜", "蒜",
];

const commonAvoid = [
  "辣椒", "花生", "海鲜", "香菇", "芹菜",
  "香菜", "芝麻", "牛奶", "豆制品", "羊肉",
];

const eightCuisines = [
  { name: "川菜", icon: "🌶️" },
  { name: "粤菜", icon: "🥘" },
  { name: "鲁菜", icon: "🍲" },
  { name: "苏菜", icon: "🦐" },
  { name: "浙菜", icon: "🐟" },
  { name: "闽菜", icon: "🍜" },
  { name: "湘菜", icon: "🔥" },
  { name: "徽菜", icon: "🧆" },
];

export default function InputPanel({ onGenerate, isOnline }) {
  const [ingredients, setIngredients] = useState([]);
  const [avoid, setAvoid] = useState([]);
  const [people, setPeople] = useState(2);
  const [cuisine, setCuisine] = useState("不限");
  const [customIngredient, setCustomIngredient] = useState("");
  const [customAvoid, setCustomAvoid] = useState("");
  const [customCuisine, setCustomCuisine] = useState("");

  const toggleIngredient = (item) => {
    setIngredients((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleAvoid = (item) => {
    setAvoid((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const addCustomIngredient = () => {
    const trimmed = customIngredient.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients((prev) => [...prev, trimmed]);
      setCustomIngredient("");
    }
  };

  const addCustomAvoid = () => {
    const trimmed = customAvoid.trim();
    if (trimmed && !avoid.includes(trimmed)) {
      setAvoid((prev) => [...prev, trimmed]);
      setCustomAvoid("");
    }
  };

  const handleSubmit = () => {
    if (ingredients.length === 0) {
      alert("请至少选择一个现有食材");
      return;
    }
    onGenerate({ ingredients, avoid, people, cuisine });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Hero */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          今天吃什么？
        </h2>
        <p className="text-slate-500">
          告诉我你有什么食材，AI帮你规划三餐
        </p>
      </div>

      {/* Ingredients */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🥬</span>
          <h3 className="font-semibold text-slate-800">现有食材</h3>
          <span className="text-xs text-slate-400 ml-auto">已选 {ingredients.length} 个</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {commonIngredients.map((item) => (
            <button
              key={item}
              onClick={() => toggleIngredient(item)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                ingredients.includes(item)
                  ? "bg-primary-500 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={customIngredient}
            onChange={(e) => setCustomIngredient(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomIngredient()}
            placeholder="自己输入食材..."
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
          />
          <button
            onClick={addCustomIngredient}
            className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors"
          >
            添加
          </button>
        </div>

        {ingredients.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {ingredients.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-700 rounded-lg text-xs font-medium"
              >
                {item}
                <button
                  onClick={() => toggleIngredient(item)}
                  className="text-primary-400 hover:text-primary-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Avoid */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🚫</span>
          <h3 className="font-semibold text-slate-800">忌口/过敏</h3>
          <span className="text-xs text-slate-400 ml-auto">可选</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {commonAvoid.map((item) => (
            <button
              key={item}
              onClick={() => toggleAvoid(item)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                avoid.includes(item)
                  ? "bg-red-500 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={customAvoid}
            onChange={(e) => setCustomAvoid(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomAvoid()}
            placeholder="自己输入忌口..."
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
          />
          <button
            onClick={addCustomAvoid}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
          >
            添加
          </button>
        </div>
      </div>

      {/* People */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">👥</span>
          <h3 className="font-semibold text-slate-800">用餐人数</h3>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPeople(Math.max(1, people - 1))}
            className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-lg font-bold hover:bg-slate-200 transition-colors"
          >
            -
          </button>
          <span className="text-3xl font-bold text-slate-800 w-16 text-center">
            {people}
          </span>
          <button
            onClick={() => setPeople(Math.min(10, people + 1))}
            className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-lg font-bold hover:bg-slate-200 transition-colors"
          >
            +
          </button>
        </div>
        <p className="text-center text-xs text-slate-400 mt-2">人</p>
      </div>

      {/* Cuisine */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🍜</span>
          <h3 className="font-semibold text-slate-800">菜系偏好</h3>
          <span className="text-xs text-slate-400 ml-auto">可选</span>
        </div>

        {/* 不限 */}
        <div className="mb-4">
          <button
            onClick={() => { setCuisine("不限"); setCustomCuisine(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              cuisine === "不限" && !customCuisine
                ? "bg-accent-500 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            不限
          </button>
        </div>

        {/* 八大菜系 */}
        <div className="mb-4">
          <p className="text-xs text-slate-400 mb-2 font-medium">八大菜系</p>
          <div className="flex flex-wrap gap-2">
            {eightCuisines.map((c) => (
              <button
                key={c.name}
                onClick={() => { setCuisine(c.name); setCustomCuisine(""); }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  cuisine === c.name && !customCuisine
                    ? "bg-accent-500 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 自选 */}
        <div>
          <p className="text-xs text-slate-400 mb-2 font-medium">自选菜系</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={customCuisine}
              onChange={(e) => {
                setCustomCuisine(e.target.value);
                if (e.target.value.trim()) {
                  setCuisine(e.target.value.trim());
                } else {
                  setCuisine("不限");
                }
              }}
              placeholder="输入其他菜系，如：西北菜、清真菜..."
              className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500"
            />
          </div>
        </div>

        {/* Current selection hint */}
        {cuisine !== "不限" && (
          <div className="mt-3 text-xs text-accent-600 font-medium">
            当前选择：{cuisine}
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl text-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all active:translate-y-0"
      >
        <span className="flex items-center justify-center gap-2">
          <span>{isOnline ? "🤖" : "🍳"}</span>
          <span>{isOnline ? "AI生成菜谱" : "智能匹配菜谱"}</span>
        </span>
      </button>

      {!isOnline && (
        <p className="text-center text-xs text-slate-400">
          当前为离线模式，点击右上角 ⚙️ 设置输入API Key可切换在线模式
        </p>
      )}
    </div>
  );
}
