export default function ShoppingList({ items, onBack }) {
  const needBuy = items.filter((i) => i.needBuy);
  const haveAlready = items.filter((i) => !i.needBuy);

  const totalBudget = needBuy.reduce((sum, item) => sum + item.pricePerUnit, 0);
  const savedBudget = haveAlready.reduce((sum, item) => sum + item.pricePerUnit, 0);

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
          返回菜谱
        </button>
      </div>

      {/* Budget summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl p-5 text-white shadow-sm">
          <p className="text-sm opacity-80">需购买</p>
          <p className="text-2xl font-bold mt-1">¥{totalBudget.toFixed(1)}</p>
          <p className="text-xs opacity-70 mt-1">{needBuy.length} 种食材</p>
        </div>
        <div className="bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl p-5 text-white shadow-sm">
          <p className="text-sm opacity-80">已有食材</p>
          <p className="text-2xl font-bold mt-1">¥{savedBudget.toFixed(1)}</p>
          <p className="text-xs opacity-70 mt-1">{haveAlready.length} 种食材</p>
        </div>
        <div className="bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl p-5 text-white shadow-sm">
          <p className="text-sm opacity-80">总预估</p>
          <p className="text-2xl font-bold mt-1">¥{(totalBudget + savedBudget).toFixed(1)}</p>
          <p className="text-xs opacity-70 mt-1">{items.length} 种食材</p>
        </div>
      </div>

      {/* Need to buy */}
      {needBuy.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 bg-accent-50/50">
            <div className="flex items-center gap-2">
              <span className="text-lg">🛒</span>
              <h3 className="font-semibold text-slate-800">需购买食材</h3>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {needBuy.map((item, idx) => (
              <div key={idx} className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-xs text-slate-400 ml-2">{item.amount}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-accent-600">
                  ¥{item.pricePerUnit.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Already have */}
      {haveAlready.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 bg-primary-50/50">
            <div className="flex items-center gap-2">
              <span className="text-lg">✅</span>
              <h3 className="font-semibold text-slate-800">已有食材（无需购买）</h3>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {haveAlready.map((item, idx) => (
              <div key={idx} className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-medium text-slate-500">{item.name}</span>
                    <span className="text-xs text-slate-400 ml-2">{item.amount}</span>
                  </div>
                </div>
                <span className="text-sm text-slate-400 line-through">
                  ¥{item.pricePerUnit.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tip */}
      <div className="bg-slate-50 rounded-2xl p-4 text-sm text-slate-500 text-center">
        💡 以上价格为参考均价，实际价格以当地市场为准
      </div>
    </div>
  );
}
