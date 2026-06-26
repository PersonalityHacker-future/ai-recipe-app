export const recipes = [
  // ===== 川菜 =====
  {
    id: 1,
    name: "麻婆豆腐",
    cuisine: "川菜",
    difficulty: "简单",
    suitablePeople: [2, 4],
    tags: ["家常", "下饭", "辣"],
    ingredients: [
      { name: "嫩豆腐", amount: "1块", unit: "块", pricePerUnit: 3 },
      { name: "猪肉末", amount: "100g", unit: "g", pricePerUnit: 0.03 },
      { name: "豆瓣酱", amount: "1勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "花椒粉", amount: "少许", unit: "g", pricePerUnit: 0.2 },
      { name: "蒜末", amount: "3瓣", unit: "瓣", pricePerUnit: 0.3 },
      { name: "葱花", amount: "适量", unit: "g", pricePerUnit: 0.1 },
      { name: "淀粉", amount: "1勺", unit: "勺", pricePerUnit: 0.1 },
    ],
    steps: [
      "豆腐切小块，焯水去腥",
      "热锅下油，爆香蒜末和豆瓣酱",
      "加入猪肉末炒散",
      "加入适量清水，放入豆腐",
      "中火煮3分钟，勾芡收汁",
      "撒上花椒粉和葱花出锅"
    ],
  },
  {
    id: 2,
    name: "宫保鸡丁",
    cuisine: "川菜",
    difficulty: "中等",
    suitablePeople: [2, 4],
    tags: ["经典", "下饭", "微辣"],
    ingredients: [
      { name: "鸡胸肉", amount: "250g", unit: "g", pricePerUnit: 0.025 },
      { name: "花生米", amount: "50g", unit: "g", pricePerUnit: 0.02 },
      { name: "干辣椒", amount: "8个", unit: "个", pricePerUnit: 0.05 },
      { name: "花椒", amount: "少许", unit: "g", pricePerUnit: 0.2 },
      { name: "葱段", amount: "适量", unit: "g", pricePerUnit: 0.1 },
      { name: "蒜末", amount: "3瓣", unit: "瓣", pricePerUnit: 0.3 },
      { name: "醋", amount: "1勺", unit: "勺", pricePerUnit: 0.1 },
      { name: "白糖", amount: "1勺", unit: "勺", pricePerUnit: 0.05 },
      { name: "淀粉", amount: "1勺", unit: "勺", pricePerUnit: 0.1 },
    ],
    steps: [
      "鸡胸肉切丁，加料酒、淀粉腌制15分钟",
      "调碗汁：醋、酱油、糖、淀粉、水",
      "热锅下油，小火炒花生米盛出",
      "爆香干辣椒和花椒",
      "下鸡丁翻炒至变色",
      "倒入碗汁翻炒，加花生米出锅"
    ],
  },
  {
    id: 3,
    name: "鱼香肉丝",
    cuisine: "川菜",
    difficulty: "中等",
    suitablePeople: [2, 4],
    tags: ["经典", "下饭", "甜酸"],
    ingredients: [
      { name: "猪里脊", amount: "200g", unit: "g", pricePerUnit: 0.03 },
      { name: "木耳", amount: "50g", unit: "g", pricePerUnit: 0.04 },
      { name: "胡萝卜", amount: "1根", unit: "根", pricePerUnit: 1 },
      { name: "青椒", amount: "1个", unit: "个", pricePerUnit: 1.5 },
      { name: "蒜末", amount: "3瓣", unit: "瓣", pricePerUnit: 0.3 },
      { name: "姜末", amount: "适量", unit: "g", pricePerUnit: 0.2 },
      { name: "豆瓣酱", amount: "1勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "醋", amount: "2勺", unit: "勺", pricePerUnit: 0.1 },
      { name: "白糖", amount: "2勺", unit: "勺", pricePerUnit: 0.05 },
    ],
    steps: [
      "猪里脊切丝，加料酒、淀粉腌制",
      "木耳泡发、胡萝卜和青椒切丝",
      "调碗汁：醋、酱油、糖、淀粉、水",
      "热锅下油，滑散肉丝盛出",
      "爆香姜蒜和豆瓣酱",
      "下蔬菜丝翻炒，倒回肉丝，淋入碗汁"
    ],
  },
  {
    id: 4,
    name: "水煮牛肉",
    cuisine: "川菜",
    difficulty: "较难",
    suitablePeople: [3, 6],
    tags: ["重口", "辣", "下饭"],
    ingredients: [
      { name: "牛肉", amount: "300g", unit: "g", pricePerUnit: 0.05 },
      { name: "豆芽", amount: "200g", unit: "g", pricePerUnit: 0.01 },
      { name: "生菜", amount: "100g", unit: "g", pricePerUnit: 0.01 },
      { name: "豆瓣酱", amount: "2勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "干辣椒", amount: "10个", unit: "个", pricePerUnit: 0.05 },
      { name: "花椒", amount: "1勺", unit: "勺", pricePerUnit: 0.2 },
      { name: "蒜末", amount: "5瓣", unit: "瓣", pricePerUnit: 0.3 },
    ],
    steps: [
      "牛肉切薄片，加淀粉、料酒腌制",
      "豆芽和生菜焯水铺碗底",
      "热锅下油，炒豆瓣酱出红油",
      "加水煮开，下牛肉片滑熟",
      "连汤倒入蔬菜碗中",
      "撒干辣椒、花椒、蒜末，淋热油"
    ],
  },

  // ===== 粤菜 =====
  {
    id: 5,
    name: "白切鸡",
    cuisine: "粤菜",
    difficulty: "中等",
    suitablePeople: [3, 6],
    tags: ["清淡", "经典", "宴客"],
    ingredients: [
      { name: "三黄鸡", amount: "1只", unit: "只", pricePerUnit: 35 },
      { name: "姜", amount: "1块", unit: "块", pricePerUnit: 1 },
      { name: "葱", amount: "3根", unit: "根", pricePerUnit: 0.5 },
      { name: "香油", amount: "1勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
    ],
    steps: [
      "整鸡洗净，冷水下锅",
      "大火煮开后转小火煮20分钟",
      "关火焖10分钟",
      "捞出放入冰水中浸泡",
      "斩块装盘，蘸料随碟上桌"
    ],
  },
  {
    id: 6,
    name: "蒜蓉蒸虾",
    cuisine: "粤菜",
    difficulty: "简单",
    suitablePeople: [2, 4],
    tags: ["清淡", "海鲜", "宴客"],
    ingredients: [
      { name: "大虾", amount: "12只", unit: "只", pricePerUnit: 2.5 },
      { name: "蒜蓉", amount: "1整头", unit: "头", pricePerUnit: 1.5 },
      { name: "粉丝", amount: "1把", unit: "把", pricePerUnit: 1 },
      { name: "生抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "葱花", amount: "适量", unit: "g", pricePerUnit: 0.1 },
    ],
    steps: [
      "虾开背去虾线，粉丝泡软铺底",
      "蒜蓉用油小火炒至金黄",
      "将蒜蓉铺在虾上",
      "水开后上锅蒸6分钟",
      "出锅淋生抽、撒葱花"
    ],
  },
  {
    id: 7,
    name: "煲仔饭",
    cuisine: "粤菜",
    difficulty: "中等",
    suitablePeople: [1, 2],
    tags: ["一人食", "有锅巴", "宿舍可做"],
    ingredients: [
      { name: "大米", amount: "1杯", unit: "杯", pricePerUnit: 1 },
      { name: "腊肠", amount: "2根", unit: "根", pricePerUnit: 2 },
      { name: "鸡蛋", amount: "1个", unit: "个", pricePerUnit: 1 },
      { name: "小油菜", amount: "2棵", unit: "棵", pricePerUnit: 0.8 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "香油", amount: "1勺", unit: "勺", pricePerUnit: 0.5 },
    ],
    steps: [
      "大米提前浸泡30分钟",
      "砂锅刷油，倒入米和水",
      "大火煮开后转小火",
      "铺上腊肠片，打一个鸡蛋",
      "小火焖10分钟至锅巴形成",
      "焯水小油菜摆上，淋酱汁"
    ],
  },

  // ===== 湘菜 =====
  {
    id: 8,
    name: "辣椒炒肉",
    cuisine: "湘菜",
    difficulty: "简单",
    suitablePeople: [2, 4],
    tags: ["家常", "下饭", "辣"],
    ingredients: [
      { name: "五花肉", amount: "200g", unit: "g", pricePerUnit: 0.03 },
      { name: "青辣椒", amount: "5个", unit: "个", pricePerUnit: 0.5 },
      { name: "蒜末", amount: "3瓣", unit: "瓣", pricePerUnit: 0.3 },
      { name: "生抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "豆豉", amount: "1勺", unit: "勺", pricePerUnit: 0.5 },
    ],
    steps: [
      "五花肉切薄片，辣椒斜切",
      "热锅少油，煸出五花肉油脂",
      "加入豆豉和蒜末炒香",
      "下辣椒大火翻炒",
      "加生抽调味出锅"
    ],
  },
  {
    id: 9,
    name: "剁椒鱼头",
    cuisine: "湘菜",
    difficulty: "中等",
    suitablePeople: [3, 6],
    tags: ["宴客", "辣", "经典"],
    ingredients: [
      { name: "鱼头", amount: "1个", unit: "个", pricePerUnit: 20 },
      { name: "剁椒", amount: "3勺", unit: "勺", pricePerUnit: 1 },
      { name: "蒜末", amount: "5瓣", unit: "瓣", pricePerUnit: 0.3 },
      { name: "姜末", amount: "适量", unit: "g", pricePerUnit: 0.2 },
      { name: "蒸鱼豉油", amount: "2勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "葱花", amount: "适量", unit: "g", pricePerUnit: 0.1 },
    ],
    steps: [
      "鱼头洗净从中间劈开不切断",
      "抹上料酒和少许盐腌制15分钟",
      "铺上剁椒、姜蒜末",
      "水开后大火蒸12分钟",
      "出锅淋蒸鱼豉油，撒葱花，浇热油"
    ],
  },

  // ===== 家常菜 =====
  {
    id: 10,
    name: "番茄炒蛋",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 4],
    tags: ["新手友好", "下饭", "宿舍可做"],
    ingredients: [
      { name: "番茄", amount: "2个", unit: "个", pricePerUnit: 2 },
      { name: "鸡蛋", amount: "3个", unit: "个", pricePerUnit: 1 },
      { name: "白糖", amount: "1勺", unit: "勺", pricePerUnit: 0.05 },
      { name: "盐", amount: "适量", unit: "g", pricePerUnit: 0.01 },
      { name: "葱花", amount: "适量", unit: "g", pricePerUnit: 0.1 },
    ],
    steps: [
      "番茄切块，鸡蛋打散加少许盐",
      "热锅下油，倒入蛋液炒至凝固盛出",
      "另起锅炒番茄出汁",
      "加白糖调味",
      "倒回鸡蛋翻炒均匀，撒葱花"
    ],
  },
  {
    id: 11,
    name: "可乐鸡翅",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [2, 4],
    tags: ["甜口", "下饭", "新手友好"],
    ingredients: [
      { name: "鸡翅", amount: "10个", unit: "个", pricePerUnit: 1.5 },
      { name: "可乐", amount: "1罐", unit: "罐", pricePerUnit: 3 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "老抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "姜片", amount: "3片", unit: "片", pricePerUnit: 0.1 },
    ],
    steps: [
      "鸡翅划两刀便于入味",
      "冷水下锅焯水去血沫",
      "热锅少油，鸡翅煎至两面金黄",
      "加入姜片、生抽、老抽",
      "倒入可乐没过鸡翅",
      "大火煮开转小火收汁"
    ],
  },
  {
    id: 12,
    name: "红烧肉",
    cuisine: "家常菜",
    difficulty: "中等",
    suitablePeople: [3, 6],
    tags: ["硬菜", "下饭", "经典"],
    ingredients: [
      { name: "五花肉", amount: "500g", unit: "g", pricePerUnit: 0.03 },
      { name: "冰糖", amount: "30g", unit: "g", pricePerUnit: 0.02 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "老抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "料酒", amount: "2勺", unit: "勺", pricePerUnit: 0.2 },
      { name: "八角", amount: "2个", unit: "个", pricePerUnit: 0.2 },
      { name: "桂皮", amount: "1小块", unit: "块", pricePerUnit: 0.3 },
      { name: "姜片", amount: "3片", unit: "片", pricePerUnit: 0.1 },
    ],
    steps: [
      "五花肉切块，冷水下锅焯水",
      "热锅少油，加冰糖炒糖色",
      "下肉块翻炒上色",
      "加料酒、生抽、老抽",
      "加热水、八角、桂皮、姜片",
      "大火煮开转小火炖1小时，收汁"
    ],
  },
  {
    id: 13,
    name: "土豆炖排骨",
    cuisine: "家常菜",
    difficulty: "中等",
    suitablePeople: [3, 6],
    tags: ["硬菜", "下饭", "暖胃"],
    ingredients: [
      { name: "排骨", amount: "400g", unit: "g", pricePerUnit: 0.035 },
      { name: "土豆", amount: "2个", unit: "个", pricePerUnit: 1.5 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "老抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "料酒", amount: "2勺", unit: "勺", pricePerUnit: 0.2 },
      { name: "姜片", amount: "3片", unit: "片", pricePerUnit: 0.1 },
      { name: "八角", amount: "2个", unit: "个", pricePerUnit: 0.2 },
    ],
    steps: [
      "排骨冷水下锅焯水",
      "热锅下油，炒排骨至微黄",
      "加料酒、生抽、老抽翻炒",
      "加热水、姜片、八角",
      "大火煮开转小火炖40分钟",
      "加土豆块继续炖20分钟，收汁"
    ],
  },

  // ===== 早餐类 =====
  {
    id: 14,
    name: "鸡蛋灌饼",
    cuisine: "家常菜",
    difficulty: "中等",
    suitablePeople: [1, 2],
    tags: ["早餐", "宿舍可做", "快手"],
    ingredients: [
      { name: "面粉", amount: "200g", unit: "g", pricePerUnit: 0.005 },
      { name: "鸡蛋", amount: "2个", unit: "个", pricePerUnit: 1 },
      { name: "生菜", amount: "2片", unit: "片", pricePerUnit: 0.2 },
      { name: "甜面酱", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
    ],
    steps: [
      "面粉加水和成面团，醒20分钟",
      "擀成薄饼，刷油卷起再擀",
      "平底锅小火煎至起泡",
      "戳小口灌入蛋液",
      "翻面煎至金黄",
      "刷酱、放生菜卷起"
    ],
  },
  {
    id: 15,
    name: "小米粥",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 4],
    tags: ["早餐", "养胃", "宿舍可做"],
    ingredients: [
      { name: "小米", amount: "100g", unit: "g", pricePerUnit: 0.01 },
      { name: "红枣", amount: "5颗", unit: "颗", pricePerUnit: 0.3 },
      { name: "枸杞", amount: "少许", unit: "g", pricePerUnit: 0.5 },
    ],
    steps: [
      "小米淘洗2遍",
      "加水大火煮开",
      "转小火熬30分钟",
      "加入红枣和枸杞再煮5分钟"
    ],
  },
  {
    id: 16,
    name: "葱油拌面",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 2],
    tags: ["早餐", "快手", "宿舍可做"],
    ingredients: [
      { name: "面条", amount: "200g", unit: "g", pricePerUnit: 0.005 },
      { name: "小葱", amount: "5根", unit: "根", pricePerUnit: 0.3 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "老抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "白糖", amount: "1勺", unit: "勺", pricePerUnit: 0.05 },
    ],
    steps: [
      "小葱切段，准备葱白和葱绿",
      "热油小火炸至葱段焦黄",
      "碗中调汁：生抽、老抽、白糖",
      "将热葱油淋入酱汁中",
      "面条煮熟捞出，浇葱油酱汁拌匀"
    ],
  },
  {
    id: 17,
    name: "煎蛋三明治",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 2],
    tags: ["早餐", "快手", "宿舍可做"],
    ingredients: [
      { name: "吐司", amount: "2片", unit: "片", pricePerUnit: 0.8 },
      { name: "鸡蛋", amount: "1个", unit: "个", pricePerUnit: 1 },
      { name: "生菜", amount: "2片", unit: "片", pricePerUnit: 0.2 },
      { name: "番茄酱", amount: "1勺", unit: "勺", pricePerUnit: 0.2 },
    ],
    steps: [
      "平底锅煎蛋至两面金黄",
      "吐司稍微烤一下",
      "依次铺生菜、煎蛋",
      "挤番茄酱，盖另一片吐司"
    ],
  },

  // ===== 东北菜 =====
  {
    id: 18,
    name: "地三鲜",
    cuisine: "东北菜",
    difficulty: "中等",
    suitablePeople: [2, 4],
    tags: ["素菜", "下饭", "经典"],
    ingredients: [
      { name: "土豆", amount: "1个", unit: "个", pricePerUnit: 1.5 },
      { name: "茄子", amount: "1个", unit: "个", pricePerUnit: 2 },
      { name: "青椒", amount: "1个", unit: "个", pricePerUnit: 1.5 },
      { name: "蒜末", amount: "3瓣", unit: "瓣", pricePerUnit: 0.3 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "淀粉", amount: "1勺", unit: "勺", pricePerUnit: 0.1 },
    ],
    steps: [
      "土豆、茄子切滚刀块，青椒切块",
      "土豆块和茄子块分别炸至金黄",
      "锅留底油，爆香蒜末",
      "倒入炸好的蔬菜翻炒",
      "加生抽调味，勾芡出锅"
    ],
  },
  {
    id: 19,
    name: "锅包肉",
    cuisine: "东北菜",
    difficulty: "较难",
    suitablePeople: [3, 6],
    tags: ["酸甜", "硬菜", "经典"],
    ingredients: [
      { name: "猪里脊", amount: "300g", unit: "g", pricePerUnit: 0.03 },
      { name: "淀粉", amount: "50g", unit: "g", pricePerUnit: 0.01 },
      { name: "白醋", amount: "3勺", unit: "勺", pricePerUnit: 0.1 },
      { name: "白糖", amount: "3勺", unit: "勺", pricePerUnit: 0.05 },
      { name: "胡萝卜丝", amount: "适量", unit: "g", pricePerUnit: 0.5 },
      { name: "葱丝", amount: "适量", unit: "g", pricePerUnit: 0.2 },
    ],
    steps: [
      "里脊切厚片，加盐、料酒腌制",
      "淀粉加水调成糊，裹满肉片",
      "油温六成热下锅炸至定型捞出",
      "油温升高复炸至酥脆",
      "锅留底油，加白醋和白糖熬汁",
      "倒入肉片快速翻炒，撒葱丝出锅"
    ],
  },

  // ===== 汤类 =====
  {
    id: 20,
    name: "紫菜蛋花汤",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [2, 6],
    tags: ["汤", "快手", "宿舍可做"],
    ingredients: [
      { name: "紫菜", amount: "1小块", unit: "块", pricePerUnit: 1 },
      { name: "鸡蛋", amount: "1个", unit: "个", pricePerUnit: 1 },
      { name: "香油", amount: "几滴", unit: "滴", pricePerUnit: 0.1 },
      { name: "盐", amount: "适量", unit: "g", pricePerUnit: 0.01 },
    ],
    steps: [
      "紫菜撕碎放入碗中",
      "锅中水烧开",
      "倒入打散的蛋液，关火",
      "倒入紫菜碗中，加盐和香油"
    ],
  },
  {
    id: 21,
    name: "番茄蛋汤",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [2, 6],
    tags: ["汤", "快手", "宿舍可做"],
    ingredients: [
      { name: "番茄", amount: "1个", unit: "个", pricePerUnit: 2 },
      { name: "鸡蛋", amount: "2个", unit: "个", pricePerUnit: 1 },
      { name: "香油", amount: "几滴", unit: "滴", pricePerUnit: 0.1 },
      { name: "盐", amount: "适量", unit: "g", pricePerUnit: 0.01 },
    ],
    steps: [
      "番茄切块，鸡蛋打散",
      "热锅少油，炒番茄出汁",
      "加水煮开",
      "淋入蛋液，加盐和香油"
    ],
  },
  {
    id: 22,
    name: "排骨莲藕汤",
    cuisine: "家常菜",
    difficulty: "中等",
    suitablePeople: [3, 6],
    tags: ["汤", "暖胃", "宴客"],
    ingredients: [
      { name: "排骨", amount: "400g", unit: "g", pricePerUnit: 0.035 },
      { name: "莲藕", amount: "1节", unit: "节", pricePerUnit: 5 },
      { name: "姜片", amount: "3片", unit: "片", pricePerUnit: 0.1 },
      { name: "料酒", amount: "1勺", unit: "勺", pricePerUnit: 0.2 },
      { name: "盐", amount: "适量", unit: "g", pricePerUnit: 0.01 },
    ],
    steps: [
      "排骨焯水去血沫",
      "莲藕去皮切块",
      "砂锅加排骨、莲藕、姜片、料酒",
      "大火煮开转小火炖1.5小时",
      "加盐调味"
    ],
  },

  // ===== 凉菜类 =====
  {
    id: 23,
    name: "凉拌黄瓜",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 4],
    tags: ["凉菜", "快手", "宿舍可做"],
    ingredients: [
      { name: "黄瓜", amount: "2根", unit: "根", pricePerUnit: 1.5 },
      { name: "蒜末", amount: "3瓣", unit: "瓣", pricePerUnit: 0.3 },
      { name: "醋", amount: "2勺", unit: "勺", pricePerUnit: 0.1 },
      { name: "生抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "香油", amount: "1勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "辣椒油", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
    ],
    steps: [
      "黄瓜拍碎切段",
      "加蒜末、醋、生抽",
      "加香油和辣椒油",
      "拌匀即可"
    ],
  },
  {
    id: 24,
    name: "皮蛋豆腐",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [2, 4],
    tags: ["凉菜", "快手", "宴客"],
    ingredients: [
      { name: "内酯豆腐", amount: "1盒", unit: "盒", pricePerUnit: 2.5 },
      { name: "皮蛋", amount: "2个", unit: "个", pricePerUnit: 1.5 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "醋", amount: "1勺", unit: "勺", pricePerUnit: 0.1 },
      { name: "香油", amount: "1勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "葱花", amount: "适量", unit: "g", pricePerUnit: 0.1 },
    ],
    steps: [
      "豆腐倒扣在盘中",
      "皮蛋切瓣摆在豆腐上",
      "调汁：生抽、醋、香油",
      "淋在豆腐皮蛋上，撒葱花"
    ],
  },

  // ===== 宿舍简易 =====
  {
    id: 25,
    name: "泡面升级版",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 1],
    tags: ["宿舍可做", "快手", "一人食"],
    ingredients: [
      { name: "泡面", amount: "1包", unit: "包", pricePerUnit: 3 },
      { name: "鸡蛋", amount: "1个", unit: "个", pricePerUnit: 1 },
      { name: "火腿肠", amount: "1根", unit: "根", pricePerUnit: 2 },
      { name: "小油菜", amount: "2棵", unit: "棵", pricePerUnit: 0.8 },
    ],
    steps: [
      "锅中水烧开",
      "放入面饼煮2分钟",
      "加入调料包和火腿肠片",
      "打入鸡蛋，放入小油菜",
      "再煮1分钟即可"
    ],
  },
  {
    id: 26,
    name: "电饭煲焖饭",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 2],
    tags: ["宿舍可做", "懒人", "一锅出"],
    ingredients: [
      { name: "大米", amount: "1杯", unit: "杯", pricePerUnit: 1 },
      { name: "腊肠", amount: "1根", unit: "根", pricePerUnit: 2 },
      { name: "土豆", amount: "1个", unit: "个", pricePerUnit: 1.5 },
      { name: "胡萝卜", amount: "半根", unit: "根", pricePerUnit: 0.5 },
      { name: "生抽", amount: "2勺", unit: "勺", pricePerUnit: 0.3 },
    ],
    steps: [
      "大米洗净加水",
      "腊肠、土豆、胡萝卜切丁",
      "铺在米饭上",
      "加生抽调味",
      "按下煮饭键，焖熟拌匀即可"
    ],
  },
  {
    id: 27,
    name: "蒸蛋羹",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 2],
    tags: ["早餐", "养胃", "宿舍可做"],
    ingredients: [
      { name: "鸡蛋", amount: "2个", unit: "个", pricePerUnit: 1 },
      { name: "温水", amount: "适量", unit: "ml", pricePerUnit: 0 },
      { name: "生抽", amount: "1勺", unit: "勺", pricePerUnit: 0.3 },
      { name: "香油", amount: "几滴", unit: "滴", pricePerUnit: 0.1 },
    ],
    steps: [
      "鸡蛋打散，加入1.5倍温水",
      "过滤蛋液去除气泡",
      "盖上保鲜膜，扎几个小孔",
      "水开后中火蒸10分钟",
      "出锅淋生抽和香油"
    ],
  },
  {
    id: 28,
    name: "醋溜土豆丝",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [2, 4],
    tags: ["快手", "下饭", "宿舍可做"],
    ingredients: [
      { name: "土豆", amount: "2个", unit: "个", pricePerUnit: 1.5 },
      { name: "干辣椒", amount: "3个", unit: "个", pricePerUnit: 0.05 },
      { name: "醋", amount: "2勺", unit: "勺", pricePerUnit: 0.1 },
      { name: "盐", amount: "适量", unit: "g", pricePerUnit: 0.01 },
      { name: "葱花", amount: "适量", unit: "g", pricePerUnit: 0.1 },
    ],
    steps: [
      "土豆切细丝，泡水去淀粉",
      "热锅下油，爆香干辣椒",
      "下土豆丝大火快炒",
      "沿锅边淋醋",
      "加盐调味，撒葱花出锅"
    ],
  },
  {
    id: 29,
    name: "蛋炒饭",
    cuisine: "家常菜",
    difficulty: "简单",
    suitablePeople: [1, 2],
    tags: ["快手", "宿舍可做", "一人食"],
    ingredients: [
      { name: "剩米饭", amount: "1碗", unit: "碗", pricePerUnit: 1 },
      { name: "鸡蛋", amount: "2个", unit: "个", pricePerUnit: 1 },
      { name: "葱花", amount: "适量", unit: "g", pricePerUnit: 0.1 },
      { name: "盐", amount: "适量", unit: "g", pricePerUnit: 0.01 },
    ],
    steps: [
      "鸡蛋打散，米饭提前拨散",
      "热锅多油，倒入蛋液",
      "蛋液半凝固时倒入米饭",
      "大火快速翻炒，使米粒裹满蛋",
      "加盐调味，撒葱花出锅"
    ],
  },
  {
    id: 30,
    name: "糖醋里脊",
    cuisine: "家常菜",
    difficulty: "中等",
    suitablePeople: [2, 4],
    tags: ["酸甜", "下饭", "宴客"],
    ingredients: [
      { name: "猪里脊", amount: "250g", unit: "g", pricePerUnit: 0.03 },
      { name: "淀粉", amount: "50g", unit: "g", pricePerUnit: 0.01 },
      { name: "番茄酱", amount: "3勺", unit: "勺", pricePerUnit: 0.5 },
      { name: "白醋", amount: "2勺", unit: "勺", pricePerUnit: 0.1 },
      { name: "白糖", amount: "3勺", unit: "勺", pricePerUnit: 0.05 },
    ],
    steps: [
      "里脊切条，加盐、料酒腌制",
      "裹上淀粉糊",
      "油温六成热炸至金黄捞出",
      "复炸一次更酥脆",
      "锅留底油，加番茄酱、白醋、白糖熬汁",
      "倒入里脊快速翻匀"
    ],
  },
];

export const cuisineList = ["川菜", "粤菜", "湘菜", "东北菜", "家常菜"];

export const difficultyList = ["简单", "中等", "较难"];

export const tagList = [
  "家常", "下饭", "辣", "经典", "甜酸", "清淡", "海鲜", "宴客",
  "一人食", "宿舍可做", "快手", "新手友好", "暖胃", "早餐", "汤",
  "凉菜", "懒人", "硬菜", "养胃", "素菜", "酸甜", "重口",
];

export const ingredientCategories = {
  "肉类": ["猪肉末", "猪里脊", "五花肉", "排骨", "鸡翅", "鸡胸肉", "牛肉", "三黄鸡", "火腿肠", "腊肠"],
  "海鲜": ["大虾", "鱼头", "皮蛋"],
  "蛋奶": ["鸡蛋"],
  "蔬菜": ["嫩豆腐", "番茄", "土豆", "茄子", "青椒", "胡萝卜", "豆芽", "生菜", "小油菜", "黄瓜", "莲藕", "木耳", "内酯豆腐"],
  "主食": ["大米", "面条", "面粉", "泡面", "吐司", "粉丝", "小米"],
  "调料": [
    "豆瓣酱", "生抽", "老抽", "醋", "白糖", "冰糖", "盐",
    "料酒", "淀粉", "花椒粉", "花椒", "干辣椒", "八角", "桂皮",
    "蒜末", "姜末", "姜片", "葱花", "葱段", "葱", "香油",
    "辣椒油", "番茄酱", "甜面酱", "蒸鱼豉油", "豆豉", "剁椒",
    "枸杞", "红枣",
  ],
};
