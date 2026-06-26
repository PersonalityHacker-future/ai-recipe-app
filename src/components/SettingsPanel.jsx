import { useState } from "react";

export default function SettingsPanel({ settings, onSave, onClose }) {
  const [apiKey, setApiKey] = useState(settings.apiKey || "");
  const [model, setModel] = useState(settings.model || "");
  const [showKey, setShowKey] = useState(false);

  const handleSave = () => {
    onSave({ apiKey, model });
  };

  const handleClear = () => {
    setApiKey("");
    onSave({ apiKey: "", model });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            <h2 className="font-bold text-slate-800 text-lg">设置</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Security notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700">
            🔒 API Key仅存储在您的浏览器本地，不会上传至任何服务器
          </div>

          {/* API Key */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              API Key
            </label>
            <div className="relative">
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="请输入您的 API Key"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 pr-20"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showKey ? "隐藏" : "显示"}
              </button>
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              输入国产大模型的 API Key 即可启用在线模式
            </p>
          </div>

          {/* Model name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              模型名称
            </label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="例如：deepseek-chat、qwen-plus、glm-4-flash"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
            />
            <p className="mt-1.5 text-xs text-slate-400">
              请输入您所使用大平台的模型名称，常见示例：deepseek-chat / qwen-plus / glm-4-flash / moonshot-v1-8k
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm text-red-500 hover:text-red-700 transition-colors font-medium"
          >
            清除 Key
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-slate-500 hover:text-slate-700 transition-colors font-medium"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-primary-500 text-white rounded-xl text-sm font-medium hover:bg-primary-600 transition-colors shadow-sm"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
