import { useState } from "react";

export default function RecipeResult({ menu, inputData, onBack, onViewShopping }) {
  const meals = [
    { key: "breakfast", label: "早餐", icon: "🌅", color: "from-amber-400 to-orange-500" },
    { key: "lunch", label: "午餐", icon: "☀️", color: "from-primary-400 to-emerald-500" },
    { key: "dinner", label: "晚餐", icon: "🌙", color: "from-violet-400 to-purple-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          重新选择
        </button>
        <button
          onClick={onViewShopping}
          className="flex items-center gap-1.5 px-4 py-2 bg-accent-500 text-white rounded-xl text-sm font-medium hover:bg-accent-600 transition-colors shadow-sm"
        >
          <span>🛒</span>
          查看采购清单
        </button>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl border border-slate-200/60 p-5 shadow-sm">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">🥬 食材:</span>
            <span className="font-medium text-slate-700">{inputData.ingredients.join("、")}</span>
          </div>
          {inputData.avoid.length > 0 && (
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">🚫 忌口:</span>
              <span className="font-medium text-red-600">{inputData.avoid.join("、")}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">👥 人数:</span>
            <span className="font-medium text-slate-700">{inputData.people}人</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">🍜 菜系:</span>
            <span className="font-medium text-slate-700">{inputData.cuisine}</span>
          </div>
        </div>
      </div>

      {/* Meals */}
      {meals.map((meal, mealIdx) => (
        <div key={meal.key} className="animate-fade-in-up" style={{ animationDelay: `${mealIdx * 0.15}s` }}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meal.color} flex items-center justify-center text-xl shadow-sm`}>
              {meal.icon}
            </div>
            <h2 className="text-xl font-bold text-slate-800">{meal.label}</h2>
            <span className="text-xs text-slate-400">{menu[meal.key]?.length || 0} 道菜</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {(menu[meal.key] || []).map((recipe, idx) => (
              <RecipeCard key={recipe.id || idx} recipe={recipe} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RecipeCard({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden card-hover cursor-pointer shadow-sm"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-slate-800 text-lg">{recipe.name}</h3>
          <svg
            className={`w-5 h-5 text-slate-400 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded text-xs font-medium">
            {recipe.cuisine}
          </span>
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
            recipe.difficulty === "简单"
              ? "bg-green-50 text-green-600"
              : recipe.difficulty === "中等"
              ? "bg-amber-50 text-amber-600"
              : "bg-red-50 text-red-600"
          }`}>
            {recipe.difficulty}
          </span>
          {recipe.tags?.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1">
          {recipe.ingredients.slice(0, 4).map((ing) => (
            <span
              key={ing.name}
              className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded text-xs"
            >
              {ing.name}
            </span>
          ))}
          {recipe.ingredients.length > 4 && (
            <span className="px-2 py-0.5 bg-slate-50 text-slate-400 rounded text-xs">
              +{recipe.ingredients.length - 4}
            </span>
          )}
        </div>
      </div>

      {expanded && (
        <div className="border-t border-slate-100 p-5 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">📋 食材清单</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {recipe.ingredients.map((ing) => (
                <div key={ing.name} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{ing.name}</span>
                  <span className="text-slate-400">{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">👨‍🍳 做法步骤</h4>
            <ol className="space-y-2">
              {recipe.steps.map((step, idx) => (
                <li key={idx} className="flex gap-2 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-slate-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
