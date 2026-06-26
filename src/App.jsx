import { useState, useCallback } from "react";
import InputPanel from "./components/InputPanel";
import RecipeResult from "./components/RecipeResult";
import ShoppingList from "./components/ShoppingList";
import SettingsPanel from "./components/SettingsPanel";
import { generateOfflineMenu, buildShoppingList } from "./utils/offlineEngine";
import { generateOnlineMenu, buildOnlineShoppingList } from "./utils/onlineEngine";

const STEPS = {
  INPUT: "input",
  LOADING: "loading",
  RESULT: "result",
  SHOPPING: "shopping",
};

export default function App() {
  const [step, setStep] = useState(STEPS.INPUT);
  const [menu, setMenu] = useState(null);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [inputData, setInputData] = useState({
    ingredients: [],
    avoid: [],
    people: 2,
    cuisine: "不限",
  });
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("recipe_app_settings");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { apiKey: "", provider: "deepseek", model: "deepseek-chat" };
      }
    }
    return { apiKey: "", model: "" };
  });
  const [showSettings, setShowSettings] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const isOnline = settings.apiKey && settings.apiKey.length > 5;

  const loadingMessages = isOnline
    ? [
        "AI正在分析您的食材...",
        "正在调用大模型生成菜谱...",
        "智能规划三餐搭配...",
        "即将完成...",
      ]
    : [
        "正在匹配菜谱库...",
        "根据您的食材筛选菜品...",
        "智能规划三餐搭配...",
        "即将完成...",
      ];

  const handleGenerate = useCallback(async (data) => {
    setInputData(data);
    setStep(STEPS.LOADING);

    let msgIndex = 0;
    setLoadingText(loadingMessages[0]);
    const interval = setInterval(() => {
      msgIndex = (msgIndex + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[msgIndex]);
    }, 1500);

    try {
      let result;
      if (isOnline) {
        result = await generateOnlineMenu(
          settings.apiKey,
          settings.model,
          data.ingredients,
          data.avoid,
          data.people,
          data.cuisine
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        result = generateOfflineMenu(
          data.ingredients,
          data.avoid,
          data.people,
          data.cuisine
        );
      }

      clearInterval(interval);
      setMenu(result);

      const items = isOnline
        ? buildOnlineShoppingList(result, data.ingredients)
        : buildShoppingList(result, data.ingredients);
      setShoppingItems(items);

      setStep(STEPS.RESULT);
    } catch (error) {
      clearInterval(interval);
      alert("菜谱生成失败: " + error.message + "\n\n请检查API密钥是否正确，或尝试离线模式");
      setStep(STEPS.INPUT);
    }
  }, [isOnline, settings]);

  const handleBack = useCallback(() => {
    setStep(STEPS.INPUT);
  }, []);

  const handleViewShopping = useCallback(() => {
    setStep(STEPS.SHOPPING);
  }, []);

  const handleBackToResult = useCallback(() => {
    setStep(STEPS.RESULT);
  }, []);

  const handleSaveSettings = useCallback((newSettings) => {
    setSettings(newSettings);
    localStorage.setItem("recipe_app_settings", JSON.stringify(newSettings));
    setShowSettings(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white text-lg">
              🍳
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800 leading-tight">
                AI智能菜谱
              </h1>
              <p className="text-xs text-slate-400">
                食材采购规划工具
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
              isOnline
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                isOnline ? "bg-green-500" : "bg-amber-500"
              }`}></span>
              {isOnline ? "在线模式" : "离线模式"}
            </div>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors text-slate-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Settings Panel */}
      {showSettings && (
        <SettingsPanel
          settings={settings}
          onSave={handleSaveSettings}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {step === STEPS.INPUT && (
          <InputPanel onGenerate={handleGenerate} isOnline={isOnline} />
        )}

        {step === STEPS.LOADING && (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="relative mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl animate-pulse">
                🍳
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                <div className="flex gap-0.5">
                  <span className="loading-dot w-1 h-1 bg-white rounded-full"></span>
                  <span className="loading-dot w-1 h-1 bg-white rounded-full"></span>
                  <span className="loading-dot w-1 h-1 bg-white rounded-full"></span>
                </div>
              </div>
            </div>
            <p className="text-lg font-medium text-slate-700 typewriter-cursor">
              {loadingText}
            </p>
            <p className="text-sm text-slate-400 mt-2">
              {isOnline ? "正在调用AI大模型生成菜谱" : "正在从菜谱库中智能匹配"}
            </p>
          </div>
        )}

        {step === STEPS.RESULT && menu && (
          <RecipeResult
            menu={menu}
            inputData={inputData}
            onBack={handleBack}
            onViewShopping={handleViewShopping}
          />
        )}

        {step === STEPS.SHOPPING && shoppingItems.length > 0 && (
          <ShoppingList
            items={shoppingItems}
            onBack={handleBackToResult}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-slate-300">
        AI智能菜谱·食材采购规划工具 | 基于大模型的智能菜谱生成
      </footer>
    </div>
  );
}
