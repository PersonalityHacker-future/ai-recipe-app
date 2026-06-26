export const ingredientPrices = {
  "嫩豆腐": 3,
  "猪肉末": 0.03,
  "鸡胸肉": 0.025,
  "鸡翅": 1.5,
  "猪里脊": 0.03,
  "五花肉": 0.03,
  "排骨": 0.035,
  "牛肉": 0.05,
  "三黄鸡": 35,
  "火腿肠": 2,
  "腊肠": 2,
  "大虾": 2.5,
  "鱼头": 20,
  "皮蛋": 1.5,
  "鸡蛋": 1,
  "番茄": 2,
  "土豆": 1.5,
  "茄子": 2,
  "青椒": 1.5,
  "胡萝卜": 1,
  "豆芽": 0.01,
  "生菜": 0.01,
  "小油菜": 0.8,
  "黄瓜": 1.5,
  "莲藕": 5,
  "木耳": 0.04,
  "内酯豆腐": 2.5,
  "小米": 0.01,
  "大米": 0.005,
  "面条": 0.005,
  "面粉": 0.005,
  "吐司": 0.8,
  "泡面": 3,
  "粉丝": 1,
  "紫菜": 1,
  "花生米": 0.02,
  "葱": 0.5,
  "姜": 1,
  "蒜": 1.5,
  "红枣": 0.3,
  "枸杞": 0.5,
};

export function estimatePrice(ingredientName) {
  if (ingredientPrices[ingredientName] !== undefined) {
    return ingredientPrices[ingredientName];
  }
  return 2;
}

export function calculateTotalPrice(ingredients) {
  return ingredients.reduce((total, item) => {
    const price = estimatePrice(item.name);
    return total + price;
  }, 0);
}
