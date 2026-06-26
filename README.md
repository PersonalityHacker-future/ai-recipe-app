# AI智能菜谱 - 食材采购规划工具

## 项目简介

基于大模型的AI智能菜谱生成 + 食材采购清单定制工具。用户输入现有食材、忌口、用餐人数、菜系偏好，AI自动生成三餐菜谱，同步拆分采购明细、用量、预算。适配家庭日常、学生宿舍简易做饭场景。

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.x | 前端UI框架 |
| Vite | 8.x | 构建工具 + 开发服务器 |
| TailwindCSS | 3.x | 原子化CSS框架 |
| PostCSS | 8.x | CSS处理 |
| Cloudflare Workers | - | 生产环境API反向代理（解决CORS） |

---

## 项目结构

```
recipe-app/
├── index.html                    # 入口HTML
├── package.json                  # 依赖配置
├── vite.config.js                # Vite配置 + 开发代理
├── tailwind.config.js            # TailwindCSS主题配置
├── postcss.config.js             # PostCSS配置
│
├── public/                       # 静态资源
│   └── vite.svg                  # 网站图标
│
├── src/                          # 源代码
│   ├── main.jsx                  # React入口
│   ├── App.jsx                   # 主应用组件（状态管理 + 页面路由）
│   │
│   ├── styles/
│   │   └── index.css             # 全局样式 + 自定义动画
│   │
│   ├── data/
│   │   ├── recipes.js            # 本地菜谱数据库（30道菜）
│   │   ├── modelConfig.js        # 大模型配置 + Prompt模板
│   │   └── prices.js             # 食材参考价格表
│   │
│   ├── utils/
│   │   ├── offlineEngine.js      # 离线模式：规则匹配引擎
│   │   └── onlineEngine.js       # 在线模式：API调用引擎
│   │
│   └── components/
│       ├── InputPanel.jsx         # 输入面板（食材/忌口/人数/菜系）
│       ├── RecipeResult.jsx       # 菜谱结果展示（三餐卡片）
│       ├── ShoppingList.jsx       # 采购清单 + 预算页
│       └── SettingsPanel.jsx      # 设置面板（API Key / 模型名称）
│
└── worker/
    ├── worker.js                  # Cloudflare Worker 反向代理脚本
    └── wrangler.toml              # Worker 部署配置
```

---

## 双模式架构

### 离线模式（默认，无需API Key）

- **菜谱生成**：本地JSON菜谱库 + 规则匹配引擎 + 随机扰动
- **采购清单**：从本地菜谱数据自动拆分汇总
- **预算估算**：本地预置食材均价表
- **用户体验**：打字机效果模拟AI思考过程

匹配逻辑：
1. 对每道菜根据「现有食材匹配度」「忌口过滤」「人数适配」「菜系偏好」计算综合评分
2. 忌口食材命中的菜直接淘汰（评分=-1）
3. 按三餐分类（早餐/午餐/晚餐），根据标签和难度分别筛选候选菜
4. 取高分菜谱，加随机扰动避免每次结果相同

### 在线模式（输入API Key后启用）

- **菜谱生成**：调用国产大模型API实时生成
- **采购清单**：从AI返回的JSON结果解析拆分
- **预算估算**：同上，使用本地均价表
- **用户体验**：真实API调用

API调用流程：
1. 根据用户填写的模型名称自动推断代理路径
2. 请求经Vite开发代理 / Cloudflare Worker转发，解决CORS跨域
3. Prompt严格约束AI返回JSON格式
4. 前端对返回结果做格式校验和容错处理

模型名称推断规则：
- 包含 `qwen/tongyi/dashscope` → 通义千问代理
- 包含 `glm/zhipu/chatglm` → 智谱代理
- 包含 `moonshot/kimi` → Moonshot代理
- 其他默认 → DeepSeek代理

---

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 进入项目目录
cd recipe-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 核心模块说明

### 1. 输入面板 (InputPanel.jsx)

用户输入界面，包含四个模块：

| 模块 | 说明 |
|------|------|
| 现有食材 | 20个常见食材快捷选择 + 自定义输入 |
| 忌口/过敏 | 10个常见忌口快捷选择 + 自定义输入 |
| 用餐人数 | 1-10人，加减按钮调节 |
| 菜系偏好 | 不限 / 八大菜系（川粤鲁苏浙闽湘徽） / 自选输入 |

### 2. 菜谱结果页 (RecipeResult.jsx)

三餐菜谱展示，按早餐/午餐/晚餐分栏：
- 每道菜显示：菜名、菜系、难度、标签、食材预览
- 点击展开：完整食材清单 + 做法步骤
- 顶部摘要栏：显示当前选择的食材、忌口、人数、菜系

### 3. 采购清单页 (ShoppingList.jsx)

自动从菜谱中汇总所有食材：
- **需购买**：现有食材中没有的，显示参考价格
- **已有食材**：标记为无需购买，价格划线
- 顶部三栏汇总：需购买金额 / 已有食材价值 / 总预估

### 4. 设置面板 (SettingsPanel.jsx)

弹出式设置面板：
- API Key输入（密码模式，可显示/隐藏）
- 模型名称输入（自行填写，如 deepseek-chat、qwen-plus、glm-4-flash）
- 安全提示：Key仅存储在浏览器本地
- 清除Key按钮

### 5. 离线引擎 (offlineEngine.js)

```js
generateOfflineMenu(ingredients, avoid, people, cuisine)
// 返回: { breakfast: [...], lunch: [...], dinner: [...] }

buildShoppingList(menu, existingIngredients)
// 返回: [{ name, amount, unit, pricePerUnit, needBuy }, ...]
```

### 6. 在线引擎 (onlineEngine.js)

```js
generateOnlineMenu(apiKey, model, ingredients, avoid, people, cuisine)
// 调用大模型API，返回格式与离线引擎一致

buildOnlineShoppingList(menu, existingIngredients)
// 采购清单拆分逻辑与离线模式一致
```

### 7. 菜谱数据库 (recipes.js)

本地预置30道菜，覆盖以下菜系：
- 川菜（麻婆豆腐、宫保鸡丁、鱼香肉丝、水煮牛肉）
- 粤菜（白切鸡、蒜蓉蒸虾、煲仔饭）
- 湘菜（辣椒炒肉、剁椒鱼头）
- 东北菜（地三鲜、锅包肉）
- 家常菜（番茄炒蛋、可乐鸡翅、红烧肉等）
- 早餐类（鸡蛋灌饼、小米粥、葱油拌面等）
- 宿舍简易（泡面升级版、电饭煲焖饭、蛋炒饭等）
- 汤类（紫菜蛋花汤、番茄蛋汤、排骨莲藕汤）
- 凉菜类（凉拌黄瓜、皮蛋豆腐）

每道菜数据结构：
```js
{
  id, name, cuisine, difficulty, suitablePeople, tags,
  ingredients: [{ name, amount, unit, pricePerUnit }],
  steps: ["步骤1", "步骤2", ...]
}
```

### 8. Prompt模板 (modelConfig.js)

`buildRecipePrompt()` 函数生成结构化Prompt，约束AI返回JSON格式：
- breakfast: 1-2道
- lunch: 2-3道
- dinner: 2-3道

---

## CORS代理配置

### 开发环境

Vite `devServer.proxy` 自动转发API请求：

```
/api/deepseek/*  → https://api.deepseek.com/*
/api/dashscope/* → https://dashscope.aliyuncs.com/*
/api/zhipu/*     → https://open.bigmodel.cn/*
/api/moonshot/*  → https://api.moonshot.cn/*
```

### 生产环境

使用 `worker/worker.js` 部署到 Cloudflare Workers：

1. 安装 Wrangler CLI：`npm install -g wrangler`
2. 登录：`wrangler login`
3. 部署：`cd worker && wrangler deploy`
4. 免费额度：每日10万次请求

部署后，前端API请求地址改为 Worker 的域名即可。

---

## 国产大模型兼容性

所有主流国产大模型均已兼容 OpenAI Chat Completions 格式：

| 平台 | API地址 | 模型名称示例 |
|------|---------|-------------|
| DeepSeek | api.deepseek.com | deepseek-chat |
| 通义千问 | dashscope.aliyuncs.com | qwen-plus |
| 智谱GLM | open.bigmodel.cn | glm-4-flash |
| Moonshot | api.moonshot.cn | moonshot-v1-8k |

鉴权方式统一：`Authorization: Bearer <api_key>`

---

## 部署方案

| 组件 | 平台 | 费用 |
|------|------|------|
| 前端 | Vercel / Cloudflare Pages | 免费 |
| API代理 | Cloudflare Workers | 免费（10万次/天） |
| **总计** | | **0元** |

---

## 自定义与扩展

### 添加新菜谱

编辑 `src/data/recipes.js`，按现有格式添加：

```js
{
  id: 31,
  name: "菜名",
  cuisine: "菜系",
  difficulty: "简单/中等/较难",
  suitablePeople: [最少人数, 最多人数],
  tags: ["标签1", "标签2"],
  ingredients: [
    { name: "食材名", amount: "用量", unit: "单位", pricePerUnit: 单价 }
  ],
  steps: ["步骤1", "步骤2", ...]
}
```

### 添加新食材价格

编辑 `src/data/prices.js`，在 `ingredientPrices` 对象中添加：

```js
"新食材名": 单价
```

### 修改主题配色

编辑 `tailwind.config.js` 中的 `colors` 配置，当前主题色为绿色系（primary）+ 橙色系（accent）。

### 对接新的国产大模型

1. 在 `vite.config.js` 的 `server.proxy` 中添加新的代理规则
2. 在 `worker/worker.js` 的 `API_MAP` 中添加新平台地址
3. 在 `onlineEngine.js` 的 `inferProxyPath()` 中添加模型名称推断规则
