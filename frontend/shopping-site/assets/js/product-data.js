/*
  product-data.js
  说明：产品数据（演示用）。
  - 数据量较大：用于支撑多页面展示、搜索、分类筛选、购物车结算等功能
*/

export const CATEGORIES = [
  { key: 'digital', name: '数码' },
  { key: 'home', name: '家居' },
  { key: 'beauty', name: '美妆' },
  { key: 'sports', name: '运动' },
  { key: 'food', name: '食品' },
  { key: 'fashion', name: '服饰' },
  { key: 'baby', name: '母婴' },
  { key: 'office', name: '办公' },
];

export const PRODUCTS = [
  {
    id: 'p0001',
    name: '极光键鼠套装 Pro 7',
    category: '数码',
    price: 365,
    rating: 4.2,
    tags: ['高清', '长续航', '蓝牙'],
    desc: '数码热卖款，高清·长续航·蓝牙，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0002',
    name: '智能台灯 Plus 1',
    category: '家居',
    price: 208,
    rating: 4.4,
    tags: ['易清洁', '舒适', '可水洗'],
    desc: '家居热卖款，易清洁·舒适·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0003',
    name: '水光精华 Pro 2',
    category: '美妆',
    price: 200,
    rating: 4.5,
    tags: ['清爽', '温和', '保湿'],
    desc: '美妆热卖款，清爽·温和·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0004',
    name: '智能跳绳 Neo 1',
    category: '运动',
    price: 246,
    rating: 4.6,
    tags: ['轻量', '防滑', '可机洗'],
    desc: '运动热卖款，轻量·防滑·可机洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0005',
    name: '代餐奶昔 Pro 5',
    category: '食品',
    price: 136,
    rating: 4.3,
    tags: ['低糖', '低脂', '无添加'],
    desc: '食品热卖款，低糖·低脂·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0006',
    name: '通勤衬衫 Neo 3',
    category: '服饰',
    price: 155,
    rating: 4.6,
    tags: ['轻便', '百搭', '透气'],
    desc: '服饰热卖款，轻便·百搭·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0007',
    name: '婴儿湿巾 Plus 2',
    category: '母婴',
    price: 193,
    rating: 4.2,
    tags: ['无香精', '安全材质', '好清洗'],
    desc: '母婴热卖款，无香精·安全材质·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0008',
    name: '中性笔套装 Air 8',
    category: '办公',
    price: 131,
    rating: 4.4,
    tags: ['高效率', '桌面友好', '便携'],
    desc: '办公热卖款，高效率·桌面友好·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0009',
    name: '游戏手柄 Max 9',
    category: '数码',
    price: 325,
    rating: 4.8,
    tags: ['快充', 'Type-C', '降噪'],
    desc: '数码热卖款，快充·Type-C·降噪，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0010',
    name: '软绒地毯 Lite 2',
    category: '家居',
    price: 210,
    rating: 4.5,
    tags: ['高颜值', '耐用', '舒适'],
    desc: '家居热卖款，高颜值·耐用·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0011',
    name: '防晒霜 Lite 2',
    category: '美妆',
    price: 201,
    rating: 4.6,
    tags: ['修护', '敏感肌可用', '清爽'],
    desc: '美妆热卖款，修护·敏感肌可用·清爽，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0012',
    name: '训练短裤 Air 8',
    category: '运动',
    price: 116,
    rating: 4.8,
    tags: ['透气', '耐磨', '轻量'],
    desc: '运动热卖款，透气·耐磨·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0013',
    name: '冻干咖啡 Neo 5',
    category: '食品',
    price: 194,
    rating: 4.6,
    tags: ['饱腹感', '原味', '无添加'],
    desc: '食品热卖款，饱腹感·原味·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0014',
    name: '轻羽绒背心 Air 6',
    category: '服饰',
    price: 134,
    rating: 4.9,
    tags: ['透气', '百搭', '舒适'],
    desc: '服饰热卖款，透气·百搭·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0015',
    name: '益智积木 Lite 4',
    category: '母婴',
    price: 122,
    rating: 4.3,
    tags: ['无香精', '安全材质', '好清洗'],
    desc: '母婴热卖款，无香精·安全材质·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0016',
    name: '人体工学靠垫 Lite 3',
    category: '办公',
    price: 153,
    rating: 4.5,
    tags: ['静音', '高效率', '护腰'],
    desc: '办公热卖款，静音·高效率·护腰，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0017',
    name: '游戏手柄 Max 7',
    category: '数码',
    price: 290,
    rating: 4.7,
    tags: ['Type-C', '低延迟', '快充'],
    desc: '数码热卖款，Type-C·低延迟·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0018',
    name: '北欧香薰机 Pro 3',
    category: '家居',
    price: 138,
    rating: 4.7,
    tags: ['易清洁', '舒适', '耐用'],
    desc: '家居热卖款，易清洁·舒适·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0019',
    name: '氨基酸洁面 Max 1',
    category: '美妆',
    price: 96,
    rating: 4.5,
    tags: ['修护', '清爽', '敏感肌可用'],
    desc: '美妆热卖款，修护·清爽·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0020',
    name: '瑜伽垫 Neo 9',
    category: '运动',
    price: 257,
    rating: 4.7,
    tags: ['可机洗', '轻量', '耐磨'],
    desc: '运动热卖款，可机洗·轻量·耐磨，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0021',
    name: '高蛋白燕麦 Plus 7',
    category: '食品',
    price: 130,
    rating: 4.5,
    tags: ['低糖', '原味', '低脂'],
    desc: '食品热卖款，低糖·原味·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0022',
    name: '廓形卫衣 Pro 2',
    category: '服饰',
    price: 182,
    rating: 4.5,
    tags: ['舒适', '透气', '轻便'],
    desc: '服饰热卖款，舒适·透气·轻便，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0023',
    name: '婴儿湿巾 Lite 3',
    category: '母婴',
    price: 186,
    rating: 4.3,
    tags: ['无酒精', '好清洗', '亲肤'],
    desc: '母婴热卖款，无酒精·好清洗·亲肤，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0024',
    name: '降噪耳塞 Pro 7',
    category: '办公',
    price: 77,
    rating: 4.6,
    tags: ['静音', '耐用', '桌面友好'],
    desc: '办公热卖款，静音·耐用·桌面友好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0025',
    name: 'Mini 投影仪 Lite 2',
    category: '数码',
    price: 323,
    rating: 4.9,
    tags: ['Type-C', '高清', '快充'],
    desc: '数码热卖款，Type-C·高清·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0026',
    name: '智能台灯 Lite 3',
    category: '家居',
    price: 105,
    rating: 4.7,
    tags: ['无异味', '高颜值', '舒适'],
    desc: '家居热卖款，无异味·高颜值·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0027',
    name: '香氛喷雾 Pro 9',
    category: '美妆',
    price: 64,
    rating: 4.3,
    tags: ['清爽', '修护', '保湿'],
    desc: '美妆热卖款，清爽·修护·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0028',
    name: '智能跳绳 Plus 1',
    category: '运动',
    price: 234,
    rating: 4.4,
    tags: ['可机洗', '轻量', '透气'],
    desc: '运动热卖款，可机洗·轻量·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0029',
    name: '代餐奶昔 Max 3',
    category: '食品',
    price: 120,
    rating: 4.7,
    tags: ['低脂', '饱腹感', '无添加'],
    desc: '食品热卖款，低脂·饱腹感·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0030',
    name: '轻羽绒背心 Pro 4',
    category: '服饰',
    price: 190,
    rating: 4.8,
    tags: ['轻便', '百搭', '易打理'],
    desc: '服饰热卖款，轻便·百搭·易打理，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0031',
    name: '宝宝浴盆 Air 6',
    category: '母婴',
    price: 56,
    rating: 4.9,
    tags: ['无酒精', '安全材质', '圆润不伤手'],
    desc: '母婴热卖款，无酒精·安全材质·圆润不伤手，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0032',
    name: '记事本 Neo 6',
    category: '办公',
    price: 153,
    rating: 4.8,
    tags: ['桌面友好', '静音', '耐用'],
    desc: '办公热卖款，桌面友好·静音·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0033',
    name: 'Aurora 无线耳机 Pro 2',
    category: '数码',
    price: 257,
    rating: 4.5,
    tags: ['降噪', '低延迟', 'Type-C'],
    desc: '数码热卖款，降噪·低延迟·Type-C，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0034',
    name: '软绒地毯 Plus 1',
    category: '家居',
    price: 201,
    rating: 4.8,
    tags: ['高颜值', '易清洁', '可水洗'],
    desc: '家居热卖款，高颜值·易清洁·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0035',
    name: '防晒霜 Neo 4',
    category: '美妆',
    price: 181,
    rating: 4.8,
    tags: ['持妆', '修护', '温和'],
    desc: '美妆热卖款，持妆·修护·温和，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0036',
    name: '智能跳绳 Air 8',
    category: '运动',
    price: 201,
    rating: 4.7,
    tags: ['轻量', '防滑', '高回弹'],
    desc: '运动热卖款，轻量·防滑·高回弹，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0037',
    name: '低糖能量棒 Lite 3',
    category: '食品',
    price: 180,
    rating: 4.8,
    tags: ['饱腹感', '高蛋白', '原味'],
    desc: '食品热卖款，饱腹感·高蛋白·原味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0038',
    name: '轻羽绒背心 Max 3',
    category: '服饰',
    price: 269,
    rating: 4.6,
    tags: ['舒适', '轻便', '易打理'],
    desc: '服饰热卖款，舒适·轻便·易打理，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0039',
    name: '宝宝浴盆 Neo 3',
    category: '母婴',
    price: 160,
    rating: 4.9,
    tags: ['无香精', '圆润不伤手', '亲肤'],
    desc: '母婴热卖款，无香精·圆润不伤手·亲肤，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0040',
    name: '中性笔套装 Pro 5',
    category: '办公',
    price: 167,
    rating: 4.4,
    tags: ['耐用', '静音', '桌面友好'],
    desc: '办公热卖款，耐用·静音·桌面友好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0041',
    name: '游戏手柄 Air 3',
    category: '数码',
    price: 214,
    rating: 4.8,
    tags: ['降噪', 'Type-C', '长续航'],
    desc: '数码热卖款，降噪·Type-C·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0042',
    name: '软绒地毯 Air 9',
    category: '家居',
    price: 112,
    rating: 4.6,
    tags: ['可水洗', '无异味', '易清洁'],
    desc: '家居热卖款，可水洗·无异味·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0043',
    name: '防晒霜 Pro 1',
    category: '美妆',
    price: 97,
    rating: 4.3,
    tags: ['持妆', '清爽', '温和'],
    desc: '美妆热卖款，持妆·清爽·温和，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0044',
    name: '训练短裤 Lite 6',
    category: '运动',
    price: 273,
    rating: 4.6,
    tags: ['高回弹', '耐磨', '轻量'],
    desc: '运动热卖款，高回弹·耐磨·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0045',
    name: '代餐奶昔 Lite 4',
    category: '食品',
    price: 77,
    rating: 4.4,
    tags: ['低糖', '低脂', '原味'],
    desc: '食品热卖款，低糖·低脂·原味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0046',
    name: '通勤衬衫 Lite 2',
    category: '服饰',
    price: 242,
    rating: 4.4,
    tags: ['易打理', '轻便', '百搭'],
    desc: '服饰热卖款，易打理·轻便·百搭，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0047',
    name: '婴儿推车挂袋 Max 8',
    category: '母婴',
    price: 179,
    rating: 4.6,
    tags: ['安全材质', '好清洗', '无香精'],
    desc: '母婴热卖款，安全材质·好清洗·无香精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0048',
    name: '便携扩展坞 Plus 5',
    category: '办公',
    price: 182,
    rating: 4.8,
    tags: ['高效率', '护腰', '桌面友好'],
    desc: '办公热卖款，高效率·护腰·桌面友好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0049',
    name: 'Mini 投影仪 Lite 7',
    category: '数码',
    price: 312,
    rating: 4.4,
    tags: ['快充', '低延迟', 'Type-C'],
    desc: '数码热卖款，快充·低延迟·Type-C，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0050',
    name: '北欧香薰机 Pro 5',
    category: '家居',
    price: 110,
    rating: 4.8,
    tags: ['耐用', '高颜值', '无异味'],
    desc: '家居热卖款，耐用·高颜值·无异味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0051',
    name: '氨基酸洁面 Pro 8',
    category: '美妆',
    price: 115,
    rating: 4.7,
    tags: ['温和', '持妆', '清爽'],
    desc: '美妆热卖款，温和·持妆·清爽，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0052',
    name: '瑜伽垫 Neo 4',
    category: '运动',
    price: 140,
    rating: 4.7,
    tags: ['高回弹', '耐磨', '透气'],
    desc: '运动热卖款，高回弹·耐磨·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0053',
    name: '气泡水 Pro 6',
    category: '食品',
    price: 110,
    rating: 4.3,
    tags: ['无添加', '低糖', '饱腹感'],
    desc: '食品热卖款，无添加·低糖·饱腹感，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0054',
    name: '通勤衬衫 Air 8',
    category: '服饰',
    price: 309,
    rating: 4.2,
    tags: ['透气', '易打理', '轻便'],
    desc: '服饰热卖款，透气·易打理·轻便，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0055',
    name: '宝宝浴盆 Lite 2',
    category: '母婴',
    price: 107,
    rating: 4.9,
    tags: ['亲肤', '圆润不伤手', '无酒精'],
    desc: '母婴热卖款，亲肤·圆润不伤手·无酒精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0056',
    name: '中性笔套装 Lite 3',
    category: '办公',
    price: 108,
    rating: 4.7,
    tags: ['护腰', '静音', '桌面友好'],
    desc: '办公热卖款，护腰·静音·桌面友好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0057',
    name: '星云智能手表 Plus 9',
    category: '数码',
    price: 345,
    rating: 4.5,
    tags: ['降噪', '蓝牙', '高清'],
    desc: '数码热卖款，降噪·蓝牙·高清，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0058',
    name: '北欧香薰机 Neo 3',
    category: '家居',
    price: 187,
    rating: 4.8,
    tags: ['高颜值', '易清洁', '可水洗'],
    desc: '家居热卖款，高颜值·易清洁·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0059',
    name: '氨基酸洁面 Lite 4',
    category: '美妆',
    price: 76,
    rating: 4.4,
    tags: ['温和', '持妆', '敏感肌可用'],
    desc: '美妆热卖款，温和·持妆·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0060',
    name: '筋膜枪 Plus 7',
    category: '运动',
    price: 167,
    rating: 4.6,
    tags: ['轻量', '高回弹', '防滑'],
    desc: '运动热卖款，轻量·高回弹·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0061',
    name: '冻干咖啡 Pro 5',
    category: '食品',
    price: 41,
    rating: 4.3,
    tags: ['无添加', '饱腹感', '高蛋白'],
    desc: '食品热卖款，无添加·饱腹感·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0062',
    name: '针织开衫 Air 9',
    category: '服饰',
    price: 301,
    rating: 4.3,
    tags: ['透气', '舒适', '轻便'],
    desc: '服饰热卖款，透气·舒适·轻便，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0063',
    name: '婴儿湿巾 Lite 1',
    category: '母婴',
    price: 178,
    rating: 4.6,
    tags: ['无香精', '好清洗', '安全材质'],
    desc: '母婴热卖款，无香精·好清洗·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0064',
    name: '记事本 Air 2',
    category: '办公',
    price: 207,
    rating: 4.8,
    tags: ['护腰', '桌面友好', '耐用'],
    desc: '办公热卖款，护腰·桌面友好·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0065',
    name: '游戏手柄 Max 4',
    category: '数码',
    price: 257,
    rating: 4.4,
    tags: ['高清', '快充', '低延迟'],
    desc: '数码热卖款，高清·快充·低延迟，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0066',
    name: '收纳盒 Max 1',
    category: '家居',
    price: 112,
    rating: 4.2,
    tags: ['无异味', '高颜值', '舒适'],
    desc: '家居热卖款，无异味·高颜值·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0067',
    name: '丝绒口红 Lite 2',
    category: '美妆',
    price: 229,
    rating: 4.8,
    tags: ['清爽', '修护', '保湿'],
    desc: '美妆热卖款，清爽·修护·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0068',
    name: '智能跳绳 Max 1',
    category: '运动',
    price: 216,
    rating: 4.3,
    tags: ['透气', '耐磨', '轻量'],
    desc: '运动热卖款，透气·耐磨·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0069',
    name: '坚果礼盒 Max 6',
    category: '食品',
    price: 169,
    rating: 4.4,
    tags: ['低糖', '无添加', '高蛋白'],
    desc: '食品热卖款，低糖·无添加·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0070',
    name: '针织开衫 Pro 1',
    category: '服饰',
    price: 214,
    rating: 4.5,
    tags: ['版型好', '透气', '百搭'],
    desc: '服饰热卖款，版型好·透气·百搭，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0071',
    name: '安抚奶嘴 Plus 1',
    category: '母婴',
    price: 72,
    rating: 4.4,
    tags: ['亲肤', '无香精', '安全材质'],
    desc: '母婴热卖款，亲肤·无香精·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0072',
    name: '桌面整理架 Lite 7',
    category: '办公',
    price: 44,
    rating: 4.4,
    tags: ['桌面友好', '高效率', '便携'],
    desc: '办公热卖款，桌面友好·高效率·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0073',
    name: '游戏手柄 Plus 3',
    category: '数码',
    price: 367,
    rating: 4.8,
    tags: ['高清', '长续航', 'Type-C'],
    desc: '数码热卖款，高清·长续航·Type-C，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0074',
    name: '智能台灯 Neo 8',
    category: '家居',
    price: 117,
    rating: 4.4,
    tags: ['可水洗', '耐用', '易清洁'],
    desc: '家居热卖款，可水洗·耐用·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0075',
    name: '香氛喷雾 Plus 7',
    category: '美妆',
    price: 238,
    rating: 4.8,
    tags: ['保湿', '清爽', '温和'],
    desc: '美妆热卖款，保湿·清爽·温和，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0076',
    name: '智能跳绳 Plus 4',
    category: '运动',
    price: 120,
    rating: 4.2,
    tags: ['防滑', '透气', '轻量'],
    desc: '运动热卖款，防滑·透气·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0077',
    name: '气泡水 Air 9',
    category: '食品',
    price: 41,
    rating: 4.6,
    tags: ['饱腹感', '低脂', '高蛋白'],
    desc: '食品热卖款，饱腹感·低脂·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0078',
    name: '休闲长裤 Max 1',
    category: '服饰',
    price: 245,
    rating: 4.8,
    tags: ['轻便', '易打理', '舒适'],
    desc: '服饰热卖款，轻便·易打理·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0079',
    name: '婴儿推车挂袋 Plus 2',
    category: '母婴',
    price: 170,
    rating: 4.4,
    tags: ['亲肤', '无酒精', '无香精'],
    desc: '母婴热卖款，亲肤·无酒精·无香精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0080',
    name: '便携扩展坞 Pro 4',
    category: '办公',
    price: 205,
    rating: 4.9,
    tags: ['护腰', '桌面友好', '便携'],
    desc: '办公热卖款，护腰·桌面友好·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0081',
    name: 'Mini 投影仪 Neo 5',
    category: '数码',
    price: 210,
    rating: 4.6,
    tags: ['快充', '低延迟', '蓝牙'],
    desc: '数码热卖款，快充·低延迟·蓝牙，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0082',
    name: '软绒地毯 Pro 6',
    category: '家居',
    price: 144,
    rating: 4.7,
    tags: ['无异味', '高颜值', '耐用'],
    desc: '家居热卖款，无异味·高颜值·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0083',
    name: '水光精华 Air 1',
    category: '美妆',
    price: 183,
    rating: 4.4,
    tags: ['敏感肌可用', '温和', '保湿'],
    desc: '美妆热卖款，敏感肌可用·温和·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0084',
    name: '智能跳绳 Air 5',
    category: '运动',
    price: 231,
    rating: 4.4,
    tags: ['耐磨', '可机洗', '轻量'],
    desc: '运动热卖款，耐磨·可机洗·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0085',
    name: '代餐奶昔 Pro 5',
    category: '食品',
    price: 50,
    rating: 4.9,
    tags: ['低糖', '无添加', '原味'],
    desc: '食品热卖款，低糖·无添加·原味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0086',
    name: '廓形卫衣 Plus 8',
    category: '服饰',
    price: 197,
    rating: 4.5,
    tags: ['百搭', '舒适', '易打理'],
    desc: '服饰热卖款，百搭·舒适·易打理，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0087',
    name: '安抚奶嘴 Neo 9',
    category: '母婴',
    price: 116,
    rating: 4.9,
    tags: ['无香精', '好清洗', '无酒精'],
    desc: '母婴热卖款，无香精·好清洗·无酒精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0088',
    name: '降噪耳塞 Neo 6',
    category: '办公',
    price: 98,
    rating: 4.5,
    tags: ['护腰', '桌面友好', '便携'],
    desc: '办公热卖款，护腰·桌面友好·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0089',
    name: '星云智能手表 Lite 8',
    category: '数码',
    price: 373,
    rating: 4.5,
    tags: ['降噪', '快充', '低延迟'],
    desc: '数码热卖款，降噪·快充·低延迟，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0090',
    name: '收纳盒 Max 7',
    category: '家居',
    price: 159,
    rating: 4.3,
    tags: ['高颜值', '易清洁', '无异味'],
    desc: '家居热卖款，高颜值·易清洁·无异味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0091',
    name: '氨基酸洁面 Air 2',
    category: '美妆',
    price: 109,
    rating: 4.7,
    tags: ['敏感肌可用', '修护', '清爽'],
    desc: '美妆热卖款，敏感肌可用·修护·清爽，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0092',
    name: '筋膜枪 Lite 7',
    category: '运动',
    price: 198,
    rating: 4.9,
    tags: ['高回弹', '轻量', '透气'],
    desc: '运动热卖款，高回弹·轻量·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0093',
    name: '气泡水 Max 1',
    category: '食品',
    price: 100,
    rating: 4.3,
    tags: ['饱腹感', '无添加', '高蛋白'],
    desc: '食品热卖款，饱腹感·无添加·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0094',
    name: '城市夹克 Max 7',
    category: '服饰',
    price: 259,
    rating: 4.4,
    tags: ['透气', '版型好', '舒适'],
    desc: '服饰热卖款，透气·版型好·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0095',
    name: '婴儿推车挂袋 Air 9',
    category: '母婴',
    price: 189,
    rating: 4.3,
    tags: ['亲肤', '圆润不伤手', '安全材质'],
    desc: '母婴热卖款，亲肤·圆润不伤手·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0096',
    name: '人体工学靠垫 Plus 3',
    category: '办公',
    price: 203,
    rating: 4.8,
    tags: ['护腰', '便携', '高效率'],
    desc: '办公热卖款，护腰·便携·高效率，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0097',
    name: '星云智能手表 Air 7',
    category: '数码',
    price: 286,
    rating: 4.4,
    tags: ['降噪', '快充', '高清'],
    desc: '数码热卖款，降噪·快充·高清，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0098',
    name: '收纳盒 Neo 4',
    category: '家居',
    price: 156,
    rating: 4.5,
    tags: ['无异味', '舒适', '易清洁'],
    desc: '家居热卖款，无异味·舒适·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0099',
    name: '丝绒口红 Neo 3',
    category: '美妆',
    price: 78,
    rating: 4.3,
    tags: ['持妆', '清爽', '保湿'],
    desc: '美妆热卖款，持妆·清爽·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0100',
    name: '运动水杯 Max 8',
    category: '运动',
    price: 208,
    rating: 4.3,
    tags: ['防滑', '可机洗', '轻量'],
    desc: '运动热卖款，防滑·可机洗·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0101',
    name: '低糖能量棒 Max 9',
    category: '食品',
    price: 52,
    rating: 4.4,
    tags: ['无添加', '饱腹感', '高蛋白'],
    desc: '食品热卖款，无添加·饱腹感·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0102',
    name: '廓形卫衣 Neo 7',
    category: '服饰',
    price: 227,
    rating: 4.5,
    tags: ['易打理', '百搭', '版型好'],
    desc: '服饰热卖款，易打理·百搭·版型好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0103',
    name: '学饮杯 Max 1',
    category: '母婴',
    price: 176,
    rating: 4.4,
    tags: ['无酒精', '无香精', '好清洗'],
    desc: '母婴热卖款，无酒精·无香精·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0104',
    name: '降噪耳塞 Max 4',
    category: '办公',
    price: 137,
    rating: 4.5,
    tags: ['护腰', '桌面友好', '静音'],
    desc: '办公热卖款，护腰·桌面友好·静音，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0105',
    name: 'Aurora 无线耳机 Pro 1',
    category: '数码',
    price: 307,
    rating: 4.7,
    tags: ['高清', 'Type-C', '长续航'],
    desc: '数码热卖款，高清·Type-C·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0106',
    name: '收纳盒 Lite 2',
    category: '家居',
    price: 179,
    rating: 4.9,
    tags: ['可水洗', '舒适', '无异味'],
    desc: '家居热卖款，可水洗·舒适·无异味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0107',
    name: '丝绒口红 Lite 4',
    category: '美妆',
    price: 98,
    rating: 4.3,
    tags: ['敏感肌可用', '温和', '持妆'],
    desc: '美妆热卖款，敏感肌可用·温和·持妆，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0108',
    name: '轻量跑鞋 Plus 1',
    category: '运动',
    price: 99,
    rating: 4.7,
    tags: ['防滑', '高回弹', '轻量'],
    desc: '运动热卖款，防滑·高回弹·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0109',
    name: '高蛋白燕麦 Neo 5',
    category: '食品',
    price: 61,
    rating: 4.6,
    tags: ['低脂', '原味', '低糖'],
    desc: '食品热卖款，低脂·原味·低糖，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0110',
    name: '廓形卫衣 Lite 5',
    category: '服饰',
    price: 263,
    rating: 4.9,
    tags: ['百搭', '版型好', '透气'],
    desc: '服饰热卖款，百搭·版型好·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0111',
    name: '安抚奶嘴 Plus 1',
    category: '母婴',
    price: 51,
    rating: 4.6,
    tags: ['安全材质', '无酒精', '好清洗'],
    desc: '母婴热卖款，安全材质·无酒精·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0112',
    name: '便携扩展坞 Pro 8',
    category: '办公',
    price: 173,
    rating: 4.4,
    tags: ['高效率', '便携', '护腰'],
    desc: '办公热卖款，高效率·便携·护腰，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0113',
    name: '便携充电宝 Neo 5',
    category: '数码',
    price: 213,
    rating: 4.2,
    tags: ['Type-C', '快充', '高清'],
    desc: '数码热卖款，Type-C·快充·高清，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0114',
    name: '北欧香薰机 Max 4',
    category: '家居',
    price: 249,
    rating: 4.5,
    tags: ['高颜值', '耐用', '舒适'],
    desc: '家居热卖款，高颜值·耐用·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0115',
    name: '水光精华 Neo 6',
    category: '美妆',
    price: 166,
    rating: 4.5,
    tags: ['持妆', '保湿', '温和'],
    desc: '美妆热卖款，持妆·保湿·温和，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0116',
    name: '筋膜枪 Neo 9',
    category: '运动',
    price: 116,
    rating: 4.3,
    tags: ['防滑', '透气', '可机洗'],
    desc: '运动热卖款，防滑·透气·可机洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0117',
    name: '低糖能量棒 Air 4',
    category: '食品',
    price: 96,
    rating: 4.7,
    tags: ['无添加', '低糖', '原味'],
    desc: '食品热卖款，无添加·低糖·原味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0118',
    name: '通勤衬衫 Pro 4',
    category: '服饰',
    price: 253,
    rating: 4.5,
    tags: ['轻便', '舒适', '百搭'],
    desc: '服饰热卖款，轻便·舒适·百搭，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0119',
    name: '益智积木 Lite 4',
    category: '母婴',
    price: 55,
    rating: 4.9,
    tags: ['无香精', '安全材质', '亲肤'],
    desc: '母婴热卖款，无香精·安全材质·亲肤，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0120',
    name: '便携扩展坞 Lite 3',
    category: '办公',
    price: 139,
    rating: 4.5,
    tags: ['桌面友好', '静音', '便携'],
    desc: '办公热卖款，桌面友好·静音·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0121',
    name: 'Aurora 无线耳机 Pro 6',
    category: '数码',
    price: 247,
    rating: 4.3,
    tags: ['长续航', '快充', 'Type-C'],
    desc: '数码热卖款，长续航·快充·Type-C，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0122',
    name: '北欧香薰机 Max 7',
    category: '家居',
    price: 174,
    rating: 4.9,
    tags: ['舒适', '耐用', '易清洁'],
    desc: '家居热卖款，舒适·耐用·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0123',
    name: '水光精华 Lite 5',
    category: '美妆',
    price: 79,
    rating: 4.4,
    tags: ['温和', '清爽', '保湿'],
    desc: '美妆热卖款，温和·清爽·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0124',
    name: '运动水杯 Max 5',
    category: '运动',
    price: 209,
    rating: 4.3,
    tags: ['可机洗', '耐磨', '防滑'],
    desc: '运动热卖款，可机洗·耐磨·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0125',
    name: '坚果礼盒 Plus 8',
    category: '食品',
    price: 78,
    rating: 4.4,
    tags: ['饱腹感', '原味', '低糖'],
    desc: '食品热卖款，饱腹感·原味·低糖，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0126',
    name: '轻羽绒背心 Air 4',
    category: '服饰',
    price: 289,
    rating: 4.7,
    tags: ['舒适', '版型好', '轻便'],
    desc: '服饰热卖款，舒适·版型好·轻便，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0127',
    name: '益智积木 Lite 1',
    category: '母婴',
    price: 114,
    rating: 4.3,
    tags: ['亲肤', '好清洗', '无酒精'],
    desc: '母婴热卖款，亲肤·好清洗·无酒精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0128',
    name: '中性笔套装 Max 6',
    category: '办公',
    price: 196,
    rating: 4.2,
    tags: ['桌面友好', '静音', '耐用'],
    desc: '办公热卖款，桌面友好·静音·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0129',
    name: '极光键鼠套装 Lite 2',
    category: '数码',
    price: 205,
    rating: 4.8,
    tags: ['蓝牙', 'Type-C', '快充'],
    desc: '数码热卖款，蓝牙·Type-C·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0130',
    name: '收纳盒 Max 7',
    category: '家居',
    price: 205,
    rating: 4.3,
    tags: ['舒适', '耐用', '易清洁'],
    desc: '家居热卖款，舒适·耐用·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0131',
    name: '香氛喷雾 Max 3',
    category: '美妆',
    price: 214,
    rating: 4.4,
    tags: ['修护', '持妆', '敏感肌可用'],
    desc: '美妆热卖款，修护·持妆·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0132',
    name: '训练短裤 Lite 9',
    category: '运动',
    price: 149,
    rating: 4.5,
    tags: ['防滑', '可机洗', '耐磨'],
    desc: '运动热卖款，防滑·可机洗·耐磨，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0133',
    name: '冻干咖啡 Neo 1',
    category: '食品',
    price: 152,
    rating: 4.6,
    tags: ['无添加', '高蛋白', '原味'],
    desc: '食品热卖款，无添加·高蛋白·原味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0134',
    name: '廓形卫衣 Lite 5',
    category: '服饰',
    price: 288,
    rating: 4.3,
    tags: ['舒适', '版型好', '易打理'],
    desc: '服饰热卖款，舒适·版型好·易打理，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0135',
    name: '婴儿推车挂袋 Air 3',
    category: '母婴',
    price: 108,
    rating: 4.3,
    tags: ['安全材质', '好清洗', '无香精'],
    desc: '母婴热卖款，安全材质·好清洗·无香精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0136',
    name: '便携扩展坞 Plus 2',
    category: '办公',
    price: 114,
    rating: 4.4,
    tags: ['耐用', '静音', '桌面友好'],
    desc: '办公热卖款，耐用·静音·桌面友好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0137',
    name: '极光键鼠套装 Neo 5',
    category: '数码',
    price: 249,
    rating: 4.5,
    tags: ['低延迟', '高清', '快充'],
    desc: '数码热卖款，低延迟·高清·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0138',
    name: '极简床品套装 Max 4',
    category: '家居',
    price: 162,
    rating: 4.2,
    tags: ['高颜值', '耐用', '可水洗'],
    desc: '家居热卖款，高颜值·耐用·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0139',
    name: '香氛喷雾 Lite 8',
    category: '美妆',
    price: 68,
    rating: 4.3,
    tags: ['持妆', '保湿', '敏感肌可用'],
    desc: '美妆热卖款，持妆·保湿·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0140',
    name: '筋膜枪 Lite 5',
    category: '运动',
    price: 158,
    rating: 4.3,
    tags: ['防滑', '高回弹', '可机洗'],
    desc: '运动热卖款，防滑·高回弹·可机洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0141',
    name: '冻干咖啡 Max 9',
    category: '食品',
    price: 74,
    rating: 4.5,
    tags: ['无添加', '低糖', '低脂'],
    desc: '食品热卖款，无添加·低糖·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0142',
    name: '轻羽绒背心 Plus 6',
    category: '服饰',
    price: 184,
    rating: 4.2,
    tags: ['透气', '百搭', '舒适'],
    desc: '服饰热卖款，透气·百搭·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0143',
    name: '安抚奶嘴 Max 1',
    category: '母婴',
    price: 202,
    rating: 4.7,
    tags: ['无香精', '亲肤', '无酒精'],
    desc: '母婴热卖款，无香精·亲肤·无酒精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0144',
    name: '人体工学靠垫 Neo 6',
    category: '办公',
    price: 86,
    rating: 4.6,
    tags: ['便携', '高效率', '桌面友好'],
    desc: '办公热卖款，便携·高效率·桌面友好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0145',
    name: 'Mini 投影仪 Plus 8',
    category: '数码',
    price: 215,
    rating: 4.5,
    tags: ['高清', 'Type-C', '长续航'],
    desc: '数码热卖款，高清·Type-C·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0146',
    name: '极简床品套装 Neo 9',
    category: '家居',
    price: 102,
    rating: 4.7,
    tags: ['舒适', '高颜值', '无异味'],
    desc: '家居热卖款，舒适·高颜值·无异味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0147',
    name: '氨基酸洁面 Neo 5',
    category: '美妆',
    price: 165,
    rating: 4.9,
    tags: ['修护', '清爽', '敏感肌可用'],
    desc: '美妆热卖款，修护·清爽·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0148',
    name: '运动水杯 Air 1',
    category: '运动',
    price: 192,
    rating: 4.7,
    tags: ['耐磨', '可机洗', '防滑'],
    desc: '运动热卖款，耐磨·可机洗·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0149',
    name: '冻干咖啡 Air 3',
    category: '食品',
    price: 137,
    rating: 4.3,
    tags: ['低糖', '原味', '无添加'],
    desc: '食品热卖款，低糖·原味·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0150',
    name: '休闲长裤 Pro 3',
    category: '服饰',
    price: 132,
    rating: 4.2,
    tags: ['百搭', '版型好', '舒适'],
    desc: '服饰热卖款，百搭·版型好·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0151',
    name: '宝宝浴盆 Plus 6',
    category: '母婴',
    price: 178,
    rating: 4.3,
    tags: ['无酒精', '圆润不伤手', '无香精'],
    desc: '母婴热卖款，无酒精·圆润不伤手·无香精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0152',
    name: '桌面整理架 Pro 2',
    category: '办公',
    price: 66,
    rating: 4.5,
    tags: ['高效率', '静音', '桌面友好'],
    desc: '办公热卖款，高效率·静音·桌面友好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0153',
    name: 'Aurora 无线耳机 Air 6',
    category: '数码',
    price: 212,
    rating: 4.6,
    tags: ['快充', 'Type-C', '蓝牙'],
    desc: '数码热卖款，快充·Type-C·蓝牙，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0154',
    name: '厨房刀具套装 Plus 3',
    category: '家居',
    price: 242,
    rating: 4.8,
    tags: ['耐用', '可水洗', '舒适'],
    desc: '家居热卖款，耐用·可水洗·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0155',
    name: '修护面膜 Pro 8',
    category: '美妆',
    price: 105,
    rating: 4.6,
    tags: ['温和', '持妆', '保湿'],
    desc: '美妆热卖款，温和·持妆·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0156',
    name: '运动水杯 Max 2',
    category: '运动',
    price: 137,
    rating: 4.4,
    tags: ['可机洗', '防滑', '轻量'],
    desc: '运动热卖款，可机洗·防滑·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0157',
    name: '代餐奶昔 Neo 1',
    category: '食品',
    price: 199,
    rating: 4.8,
    tags: ['低糖', '原味', '低脂'],
    desc: '食品热卖款，低糖·原味·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0158',
    name: '通勤衬衫 Neo 5',
    category: '服饰',
    price: 295,
    rating: 4.5,
    tags: ['易打理', '百搭', '版型好'],
    desc: '服饰热卖款，易打理·百搭·版型好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0159',
    name: '益智积木 Neo 6',
    category: '母婴',
    price: 163,
    rating: 4.6,
    tags: ['无香精', '亲肤', '好清洗'],
    desc: '母婴热卖款，无香精·亲肤·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0160',
    name: '桌面整理架 Air 8',
    category: '办公',
    price: 99,
    rating: 4.5,
    tags: ['耐用', '护腰', '高效率'],
    desc: '办公热卖款，耐用·护腰·高效率，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0161',
    name: 'Mini 投影仪 Air 2',
    category: '数码',
    price: 216,
    rating: 4.3,
    tags: ['Type-C', '降噪', '蓝牙'],
    desc: '数码热卖款，Type-C·降噪·蓝牙，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0162',
    name: '收纳盒 Plus 9',
    category: '家居',
    price: 247,
    rating: 4.2,
    tags: ['无异味', '耐用', '易清洁'],
    desc: '家居热卖款，无异味·耐用·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0163',
    name: '香氛喷雾 Max 9',
    category: '美妆',
    price: 79,
    rating: 4.2,
    tags: ['清爽', '持妆', '保湿'],
    desc: '美妆热卖款，清爽·持妆·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0164',
    name: '轻量跑鞋 Lite 2',
    category: '运动',
    price: 148,
    rating: 4.3,
    tags: ['耐磨', '透气', '防滑'],
    desc: '运动热卖款，耐磨·透气·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0165',
    name: '高蛋白燕麦 Neo 4',
    category: '食品',
    price: 45,
    rating: 4.8,
    tags: ['低脂', '无添加', '高蛋白'],
    desc: '食品热卖款，低脂·无添加·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0166',
    name: '针织开衫 Plus 5',
    category: '服饰',
    price: 245,
    rating: 4.3,
    tags: ['易打理', '版型好', '百搭'],
    desc: '服饰热卖款，易打理·版型好·百搭，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0167',
    name: '宝宝浴盆 Max 9',
    category: '母婴',
    price: 109,
    rating: 4.4,
    tags: ['亲肤', '无香精', '好清洗'],
    desc: '母婴热卖款，亲肤·无香精·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0168',
    name: '人体工学靠垫 Pro 5',
    category: '办公',
    price: 212,
    rating: 4.4,
    tags: ['护腰', '高效率', '静音'],
    desc: '办公热卖款，护腰·高效率·静音，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0169',
    name: 'Aurora 无线耳机 Plus 1',
    category: '数码',
    price: 361,
    rating: 4.8,
    tags: ['高清', 'Type-C', '长续航'],
    desc: '数码热卖款，高清·Type-C·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0170',
    name: '软绒地毯 Plus 2',
    category: '家居',
    price: 143,
    rating: 4.9,
    tags: ['无异味', '舒适', '高颜值'],
    desc: '家居热卖款，无异味·舒适·高颜值，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0171',
    name: '氨基酸洁面 Air 6',
    category: '美妆',
    price: 206,
    rating: 4.3,
    tags: ['修护', '温和', '持妆'],
    desc: '美妆热卖款，修护·温和·持妆，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0172',
    name: '瑜伽垫 Pro 1',
    category: '运动',
    price: 174,
    rating: 4.8,
    tags: ['透气', '可机洗', '高回弹'],
    desc: '运动热卖款，透气·可机洗·高回弹，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0173',
    name: '高蛋白燕麦 Lite 1',
    category: '食品',
    price: 85,
    rating: 4.3,
    tags: ['低脂', '原味', '饱腹感'],
    desc: '食品热卖款，低脂·原味·饱腹感，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0174',
    name: '通勤衬衫 Max 1',
    category: '服饰',
    price: 162,
    rating: 4.5,
    tags: ['易打理', '舒适', '轻便'],
    desc: '服饰热卖款，易打理·舒适·轻便，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0175',
    name: '婴儿湿巾 Lite 6',
    category: '母婴',
    price: 126,
    rating: 4.3,
    tags: ['无酒精', '好清洗', '无香精'],
    desc: '母婴热卖款，无酒精·好清洗·无香精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0176',
    name: '人体工学靠垫 Plus 5',
    category: '办公',
    price: 189,
    rating: 4.3,
    tags: ['静音', '耐用', '护腰'],
    desc: '办公热卖款，静音·耐用·护腰，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0177',
    name: '星云智能手表 Pro 1',
    category: '数码',
    price: 261,
    rating: 4.7,
    tags: ['Type-C', '蓝牙', '快充'],
    desc: '数码热卖款，Type-C·蓝牙·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0178',
    name: '厨房刀具套装 Pro 5',
    category: '家居',
    price: 181,
    rating: 4.8,
    tags: ['易清洁', '无异味', '高颜值'],
    desc: '家居热卖款，易清洁·无异味·高颜值，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0179',
    name: '修护面膜 Neo 8',
    category: '美妆',
    price: 213,
    rating: 4.9,
    tags: ['敏感肌可用', '持妆', '保湿'],
    desc: '美妆热卖款，敏感肌可用·持妆·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0180',
    name: '瑜伽垫 Lite 1',
    category: '运动',
    price: 114,
    rating: 4.6,
    tags: ['耐磨', '防滑', '高回弹'],
    desc: '运动热卖款，耐磨·防滑·高回弹，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0181',
    name: '低糖能量棒 Lite 2',
    category: '食品',
    price: 32,
    rating: 4.6,
    tags: ['饱腹感', '高蛋白', '低脂'],
    desc: '食品热卖款，饱腹感·高蛋白·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0182',
    name: '休闲长裤 Pro 9',
    category: '服饰',
    price: 284,
    rating: 4.6,
    tags: ['轻便', '版型好', '百搭'],
    desc: '服饰热卖款，轻便·版型好·百搭，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0183',
    name: '宝宝浴盆 Max 2',
    category: '母婴',
    price: 125,
    rating: 4.6,
    tags: ['圆润不伤手', '安全材质', '亲肤'],
    desc: '母婴热卖款，圆润不伤手·安全材质·亲肤，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0184',
    name: '人体工学靠垫 Air 8',
    category: '办公',
    price: 59,
    rating: 4.7,
    tags: ['护腰', '高效率', '耐用'],
    desc: '办公热卖款，护腰·高效率·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0185',
    name: 'Aurora 无线耳机 Max 4',
    category: '数码',
    price: 363,
    rating: 4.2,
    tags: ['降噪', '快充', '高清'],
    desc: '数码热卖款，降噪·快充·高清，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0186',
    name: '厨房刀具套装 Lite 5',
    category: '家居',
    price: 241,
    rating: 4.6,
    tags: ['舒适', '可水洗', '高颜值'],
    desc: '家居热卖款，舒适·可水洗·高颜值，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0187',
    name: '氨基酸洁面 Neo 4',
    category: '美妆',
    price: 80,
    rating: 4.8,
    tags: ['温和', '保湿', '修护'],
    desc: '美妆热卖款，温和·保湿·修护，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0188',
    name: '瑜伽垫 Neo 4',
    category: '运动',
    price: 139,
    rating: 4.7,
    tags: ['透气', '防滑', '耐磨'],
    desc: '运动热卖款，透气·防滑·耐磨，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0189',
    name: '坚果礼盒 Plus 4',
    category: '食品',
    price: 126,
    rating: 4.8,
    tags: ['饱腹感', '低脂', '原味'],
    desc: '食品热卖款，饱腹感·低脂·原味，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0190',
    name: '休闲长裤 Plus 1',
    category: '服饰',
    price: 135,
    rating: 4.5,
    tags: ['轻便', '百搭', '透气'],
    desc: '服饰热卖款，轻便·百搭·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0191',
    name: '安抚奶嘴 Air 2',
    category: '母婴',
    price: 193,
    rating: 4.8,
    tags: ['无香精', '亲肤', '好清洗'],
    desc: '母婴热卖款，无香精·亲肤·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0192',
    name: '降噪耳塞 Lite 3',
    category: '办公',
    price: 127,
    rating: 4.9,
    tags: ['桌面友好', '便携', '耐用'],
    desc: '办公热卖款，桌面友好·便携·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0193',
    name: 'Aurora 无线耳机 Pro 1',
    category: '数码',
    price: 377,
    rating: 4.2,
    tags: ['蓝牙', '高清', '长续航'],
    desc: '数码热卖款，蓝牙·高清·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0194',
    name: '智能台灯 Pro 9',
    category: '家居',
    price: 249,
    rating: 4.2,
    tags: ['无异味', '舒适', '易清洁'],
    desc: '家居热卖款，无异味·舒适·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0195',
    name: '丝绒口红 Pro 4',
    category: '美妆',
    price: 87,
    rating: 4.2,
    tags: ['敏感肌可用', '温和', '修护'],
    desc: '美妆热卖款，敏感肌可用·温和·修护，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0196',
    name: '运动水杯 Lite 3',
    category: '运动',
    price: 124,
    rating: 4.8,
    tags: ['可机洗', '防滑', '透气'],
    desc: '运动热卖款，可机洗·防滑·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0197',
    name: '坚果礼盒 Max 7',
    category: '食品',
    price: 95,
    rating: 4.2,
    tags: ['无添加', '饱腹感', '低糖'],
    desc: '食品热卖款，无添加·饱腹感·低糖，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0198',
    name: '轻羽绒背心 Max 6',
    category: '服饰',
    price: 283,
    rating: 4.6,
    tags: ['透气', '易打理', '舒适'],
    desc: '服饰热卖款，透气·易打理·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0199',
    name: '益智积木 Lite 7',
    category: '母婴',
    price: 181,
    rating: 4.7,
    tags: ['无酒精', '安全材质', '亲肤'],
    desc: '母婴热卖款，无酒精·安全材质·亲肤，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0200',
    name: '桌面整理架 Plus 4',
    category: '办公',
    price: 62,
    rating: 4.6,
    tags: ['静音', '高效率', '护腰'],
    desc: '办公热卖款，静音·高效率·护腰，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0201',
    name: 'Aurora 无线耳机 Plus 4',
    category: '数码',
    price: 272,
    rating: 4.7,
    tags: ['蓝牙', '高清', '降噪'],
    desc: '数码热卖款，蓝牙·高清·降噪，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0202',
    name: '收纳盒 Lite 8',
    category: '家居',
    price: 256,
    rating: 4.8,
    tags: ['耐用', '舒适', '高颜值'],
    desc: '家居热卖款，耐用·舒适·高颜值，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0203',
    name: '修护面膜 Max 3',
    category: '美妆',
    price: 131,
    rating: 4.8,
    tags: ['敏感肌可用', '保湿', '持妆'],
    desc: '美妆热卖款，敏感肌可用·保湿·持妆，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0204',
    name: '瑜伽垫 Lite 2',
    category: '运动',
    price: 224,
    rating: 4.8,
    tags: ['可机洗', '高回弹', '轻量'],
    desc: '运动热卖款，可机洗·高回弹·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0205',
    name: '高蛋白燕麦 Max 6',
    category: '食品',
    price: 53,
    rating: 4.5,
    tags: ['原味', '低糖', '饱腹感'],
    desc: '食品热卖款，原味·低糖·饱腹感，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0206',
    name: '轻羽绒背心 Lite 6',
    category: '服饰',
    price: 181,
    rating: 4.4,
    tags: ['版型好', '易打理', '百搭'],
    desc: '服饰热卖款，版型好·易打理·百搭，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0207',
    name: '益智积木 Neo 4',
    category: '母婴',
    price: 166,
    rating: 4.3,
    tags: ['好清洗', '圆润不伤手', '亲肤'],
    desc: '母婴热卖款，好清洗·圆润不伤手·亲肤，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0208',
    name: '中性笔套装 Plus 6',
    category: '办公',
    price: 172,
    rating: 4.3,
    tags: ['护腰', '耐用', '静音'],
    desc: '办公热卖款，护腰·耐用·静音，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0209',
    name: '星云智能手表 Air 8',
    category: '数码',
    price: 375,
    rating: 4.7,
    tags: ['长续航', '低延迟', '快充'],
    desc: '数码热卖款，长续航·低延迟·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0210',
    name: '智能台灯 Air 4',
    category: '家居',
    price: 208,
    rating: 4.3,
    tags: ['高颜值', '可水洗', '耐用'],
    desc: '家居热卖款，高颜值·可水洗·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0211',
    name: '香氛喷雾 Pro 4',
    category: '美妆',
    price: 142,
    rating: 4.6,
    tags: ['修护', '保湿', '清爽'],
    desc: '美妆热卖款，修护·保湿·清爽，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0212',
    name: '筋膜枪 Pro 5',
    category: '运动',
    price: 125,
    rating: 4.3,
    tags: ['可机洗', '轻量', '防滑'],
    desc: '运动热卖款，可机洗·轻量·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0213',
    name: '气泡水 Pro 3',
    category: '食品',
    price: 106,
    rating: 4.7,
    tags: ['原味', '无添加', '高蛋白'],
    desc: '食品热卖款，原味·无添加·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0214',
    name: '廓形卫衣 Neo 2',
    category: '服饰',
    price: 200,
    rating: 4.3,
    tags: ['版型好', '轻便', '舒适'],
    desc: '服饰热卖款，版型好·轻便·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0215',
    name: '婴儿湿巾 Air 7',
    category: '母婴',
    price: 226,
    rating: 4.4,
    tags: ['圆润不伤手', '无酒精', '安全材质'],
    desc: '母婴热卖款，圆润不伤手·无酒精·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0216',
    name: '降噪耳塞 Pro 5',
    category: '办公',
    price: 193,
    rating: 4.7,
    tags: ['便携', '高效率', '护腰'],
    desc: '办公热卖款，便携·高效率·护腰，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0217',
    name: '便携充电宝 Plus 7',
    category: '数码',
    price: 257,
    rating: 4.7,
    tags: ['快充', '高清', '长续航'],
    desc: '数码热卖款，快充·高清·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0218',
    name: '极简床品套装 Neo 3',
    category: '家居',
    price: 243,
    rating: 4.3,
    tags: ['舒适', '高颜值', '可水洗'],
    desc: '家居热卖款，舒适·高颜值·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0219',
    name: '香氛喷雾 Neo 2',
    category: '美妆',
    price: 166,
    rating: 4.4,
    tags: ['持妆', '保湿', '修护'],
    desc: '美妆热卖款，持妆·保湿·修护，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0220',
    name: '运动水杯 Air 8',
    category: '运动',
    price: 104,
    rating: 4.6,
    tags: ['耐磨', '高回弹', '防滑'],
    desc: '运动热卖款，耐磨·高回弹·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0221',
    name: '高蛋白燕麦 Max 1',
    category: '食品',
    price: 128,
    rating: 4.8,
    tags: ['低糖', '饱腹感', '无添加'],
    desc: '食品热卖款，低糖·饱腹感·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0222',
    name: '通勤衬衫 Pro 3',
    category: '服饰',
    price: 180,
    rating: 4.6,
    tags: ['舒适', '易打理', '版型好'],
    desc: '服饰热卖款，舒适·易打理·版型好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0223',
    name: '宝宝浴盆 Pro 8',
    category: '母婴',
    price: 180,
    rating: 4.2,
    tags: ['无酒精', '好清洗', '圆润不伤手'],
    desc: '母婴热卖款，无酒精·好清洗·圆润不伤手，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0224',
    name: '人体工学靠垫 Neo 8',
    category: '办公',
    price: 92,
    rating: 4.9,
    tags: ['高效率', '护腰', '便携'],
    desc: '办公热卖款，高效率·护腰·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0225',
    name: '便携充电宝 Plus 6',
    category: '数码',
    price: 362,
    rating: 4.2,
    tags: ['降噪', 'Type-C', '快充'],
    desc: '数码热卖款，降噪·Type-C·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0226',
    name: '北欧香薰机 Lite 2',
    category: '家居',
    price: 186,
    rating: 4.8,
    tags: ['无异味', '高颜值', '可水洗'],
    desc: '家居热卖款，无异味·高颜值·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0227',
    name: '水光精华 Pro 5',
    category: '美妆',
    price: 161,
    rating: 4.9,
    tags: ['清爽', '保湿', '持妆'],
    desc: '美妆热卖款，清爽·保湿·持妆，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0228',
    name: '运动水杯 Pro 3',
    category: '运动',
    price: 132,
    rating: 4.9,
    tags: ['轻量', '防滑', '耐磨'],
    desc: '运动热卖款，轻量·防滑·耐磨，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0229',
    name: '高蛋白燕麦 Plus 4',
    category: '食品',
    price: 66,
    rating: 4.4,
    tags: ['饱腹感', '原味', '低脂'],
    desc: '食品热卖款，饱腹感·原味·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0230',
    name: '针织开衫 Plus 3',
    category: '服饰',
    price: 249,
    rating: 4.4,
    tags: ['百搭', '透气', '版型好'],
    desc: '服饰热卖款，百搭·透气·版型好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0231',
    name: '婴儿推车挂袋 Max 7',
    category: '母婴',
    price: 222,
    rating: 4.3,
    tags: ['亲肤', '无酒精', '好清洗'],
    desc: '母婴热卖款，亲肤·无酒精·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0232',
    name: '记事本 Neo 5',
    category: '办公',
    price: 121,
    rating: 4.5,
    tags: ['护腰', '耐用', '便携'],
    desc: '办公热卖款，护腰·耐用·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0233',
    name: '便携充电宝 Max 3',
    category: '数码',
    price: 276,
    rating: 4.8,
    tags: ['蓝牙', '高清', '长续航'],
    desc: '数码热卖款，蓝牙·高清·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0234',
    name: '智能台灯 Pro 9',
    category: '家居',
    price: 167,
    rating: 4.6,
    tags: ['易清洁', '无异味', '耐用'],
    desc: '家居热卖款，易清洁·无异味·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0235',
    name: '水光精华 Neo 5',
    category: '美妆',
    price: 123,
    rating: 4.6,
    tags: ['清爽', '保湿', '敏感肌可用'],
    desc: '美妆热卖款，清爽·保湿·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0236',
    name: '瑜伽垫 Air 6',
    category: '运动',
    price: 138,
    rating: 4.3,
    tags: ['耐磨', '高回弹', '防滑'],
    desc: '运动热卖款，耐磨·高回弹·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0237',
    name: '代餐奶昔 Neo 2',
    category: '食品',
    price: 200,
    rating: 4.8,
    tags: ['低脂', '无添加', '高蛋白'],
    desc: '食品热卖款，低脂·无添加·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0238',
    name: '休闲长裤 Neo 4',
    category: '服饰',
    price: 264,
    rating: 4.3,
    tags: ['版型好', '舒适', '易打理'],
    desc: '服饰热卖款，版型好·舒适·易打理，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0239',
    name: '学饮杯 Air 4',
    category: '母婴',
    price: 84,
    rating: 4.5,
    tags: ['好清洗', '亲肤', '安全材质'],
    desc: '母婴热卖款，好清洗·亲肤·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0240',
    name: '人体工学靠垫 Pro 8',
    category: '办公',
    price: 102,
    rating: 4.5,
    tags: ['耐用', '桌面友好', '便携'],
    desc: '办公热卖款，耐用·桌面友好·便携，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0241',
    name: '星云智能手表 Max 8',
    category: '数码',
    price: 377,
    rating: 4.6,
    tags: ['快充', '降噪', 'Type-C'],
    desc: '数码热卖款，快充·降噪·Type-C，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0242',
    name: '智能台灯 Air 7',
    category: '家居',
    price: 252,
    rating: 4.3,
    tags: ['无异味', '高颜值', '易清洁'],
    desc: '家居热卖款，无异味·高颜值·易清洁，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0243',
    name: '水光精华 Plus 1',
    category: '美妆',
    price: 233,
    rating: 4.7,
    tags: ['修护', '温和', '持妆'],
    desc: '美妆热卖款，修护·温和·持妆，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0244',
    name: '运动水杯 Pro 1',
    category: '运动',
    price: 153,
    rating: 4.7,
    tags: ['可机洗', '防滑', '透气'],
    desc: '运动热卖款，可机洗·防滑·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0245',
    name: '冻干咖啡 Neo 6',
    category: '食品',
    price: 116,
    rating: 4.5,
    tags: ['低脂', '饱腹感', '高蛋白'],
    desc: '食品热卖款，低脂·饱腹感·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0246',
    name: '针织开衫 Air 6',
    category: '服饰',
    price: 237,
    rating: 4.4,
    tags: ['舒适', '透气', '易打理'],
    desc: '服饰热卖款，舒适·透气·易打理，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0247',
    name: '学饮杯 Air 7',
    category: '母婴',
    price: 134,
    rating: 4.6,
    tags: ['无酒精', '好清洗', '圆润不伤手'],
    desc: '母婴热卖款，无酒精·好清洗·圆润不伤手，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0248',
    name: '记事本 Neo 8',
    category: '办公',
    price: 69,
    rating: 4.4,
    tags: ['静音', '桌面友好', '高效率'],
    desc: '办公热卖款，静音·桌面友好·高效率，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0249',
    name: '游戏手柄 Neo 2',
    category: '数码',
    price: 209,
    rating: 4.5,
    tags: ['长续航', 'Type-C', '高清'],
    desc: '数码热卖款，长续航·Type-C·高清，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0250',
    name: '软绒地毯 Lite 7',
    category: '家居',
    price: 155,
    rating: 4.3,
    tags: ['易清洁', '耐用', '舒适'],
    desc: '家居热卖款，易清洁·耐用·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0251',
    name: '修护面膜 Neo 1',
    category: '美妆',
    price: 187,
    rating: 4.8,
    tags: ['清爽', '持妆', '保湿'],
    desc: '美妆热卖款，清爽·持妆·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0252',
    name: '智能跳绳 Neo 2',
    category: '运动',
    price: 153,
    rating: 4.2,
    tags: ['可机洗', '耐磨', '防滑'],
    desc: '运动热卖款，可机洗·耐磨·防滑，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0253',
    name: '冻干咖啡 Neo 3',
    category: '食品',
    price: 38,
    rating: 4.5,
    tags: ['低糖', '饱腹感', '无添加'],
    desc: '食品热卖款，低糖·饱腹感·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0254',
    name: '城市夹克 Max 9',
    category: '服饰',
    price: 195,
    rating: 4.8,
    tags: ['百搭', '版型好', '舒适'],
    desc: '服饰热卖款，百搭·版型好·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0255',
    name: '学饮杯 Lite 7',
    category: '母婴',
    price: 193,
    rating: 4.6,
    tags: ['亲肤', '安全材质', '圆润不伤手'],
    desc: '母婴热卖款，亲肤·安全材质·圆润不伤手，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0256',
    name: '降噪耳塞 Air 7',
    category: '办公',
    price: 153,
    rating: 4.2,
    tags: ['桌面友好', '护腰', '高效率'],
    desc: '办公热卖款，桌面友好·护腰·高效率，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0257',
    name: 'Mini 投影仪 Air 9',
    category: '数码',
    price: 225,
    rating: 4.3,
    tags: ['Type-C', '低延迟', '快充'],
    desc: '数码热卖款，Type-C·低延迟·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0258',
    name: '厨房刀具套装 Lite 7',
    category: '家居',
    price: 80,
    rating: 4.2,
    tags: ['无异味', '易清洁', '可水洗'],
    desc: '家居热卖款，无异味·易清洁·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0259',
    name: '丝绒口红 Lite 3',
    category: '美妆',
    price: 179,
    rating: 4.2,
    tags: ['敏感肌可用', '清爽', '保湿'],
    desc: '美妆热卖款，敏感肌可用·清爽·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0260',
    name: '运动水杯 Neo 3',
    category: '运动',
    price: 111,
    rating: 4.5,
    tags: ['可机洗', '防滑', '轻量'],
    desc: '运动热卖款，可机洗·防滑·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0261',
    name: '坚果礼盒 Neo 9',
    category: '食品',
    price: 156,
    rating: 4.5,
    tags: ['无添加', '低糖', '低脂'],
    desc: '食品热卖款，无添加·低糖·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0262',
    name: '廓形卫衣 Lite 1',
    category: '服饰',
    price: 295,
    rating: 4.7,
    tags: ['易打理', '舒适', '版型好'],
    desc: '服饰热卖款，易打理·舒适·版型好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0263',
    name: '学饮杯 Max 3',
    category: '母婴',
    price: 173,
    rating: 4.6,
    tags: ['无酒精', '圆润不伤手', '安全材质'],
    desc: '母婴热卖款，无酒精·圆润不伤手·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0264',
    name: '人体工学靠垫 Neo 3',
    category: '办公',
    price: 76,
    rating: 4.9,
    tags: ['便携', '静音', '高效率'],
    desc: '办公热卖款，便携·静音·高效率，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0265',
    name: '便携充电宝 Air 8',
    category: '数码',
    price: 297,
    rating: 4.7,
    tags: ['Type-C', '降噪', '长续航'],
    desc: '数码热卖款，Type-C·降噪·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0266',
    name: '智能台灯 Max 5',
    category: '家居',
    price: 94,
    rating: 4.6,
    tags: ['无异味', '可水洗', '高颜值'],
    desc: '家居热卖款，无异味·可水洗·高颜值，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0267',
    name: '修护面膜 Neo 1',
    category: '美妆',
    price: 97,
    rating: 4.6,
    tags: ['修护', '清爽', '持妆'],
    desc: '美妆热卖款，修护·清爽·持妆，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0268',
    name: '瑜伽垫 Air 7',
    category: '运动',
    price: 274,
    rating: 4.5,
    tags: ['防滑', '耐磨', '透气'],
    desc: '运动热卖款，防滑·耐磨·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0269',
    name: '高蛋白燕麦 Lite 6',
    category: '食品',
    price: 96,
    rating: 4.4,
    tags: ['高蛋白', '低脂', '低糖'],
    desc: '食品热卖款，高蛋白·低脂·低糖，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0270',
    name: '针织开衫 Pro 3',
    category: '服饰',
    price: 199,
    rating: 4.9,
    tags: ['易打理', '版型好', '透气'],
    desc: '服饰热卖款，易打理·版型好·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0271',
    name: '宝宝浴盆 Lite 9',
    category: '母婴',
    price: 190,
    rating: 4.5,
    tags: ['安全材质', '无香精', '好清洗'],
    desc: '母婴热卖款，安全材质·无香精·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0272',
    name: '中性笔套装 Plus 1',
    category: '办公',
    price: 212,
    rating: 4.5,
    tags: ['桌面友好', '高效率', '静音'],
    desc: '办公热卖款，桌面友好·高效率·静音，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0273',
    name: '游戏手柄 Lite 7',
    category: '数码',
    price: 316,
    rating: 4.6,
    tags: ['长续航', '降噪', '蓝牙'],
    desc: '数码热卖款，长续航·降噪·蓝牙，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0274',
    name: '极简床品套装 Air 9',
    category: '家居',
    price: 145,
    rating: 4.8,
    tags: ['可水洗', '高颜值', '舒适'],
    desc: '家居热卖款，可水洗·高颜值·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0275',
    name: '修护面膜 Plus 4',
    category: '美妆',
    price: 107,
    rating: 4.3,
    tags: ['温和', '保湿', '修护'],
    desc: '美妆热卖款，温和·保湿·修护，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0276',
    name: '筋膜枪 Plus 6',
    category: '运动',
    price: 202,
    rating: 4.7,
    tags: ['防滑', '可机洗', '轻量'],
    desc: '运动热卖款，防滑·可机洗·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0277',
    name: '气泡水 Max 2',
    category: '食品',
    price: 124,
    rating: 4.6,
    tags: ['低糖', '高蛋白', '无添加'],
    desc: '食品热卖款，低糖·高蛋白·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0278',
    name: '通勤衬衫 Lite 6',
    category: '服饰',
    price: 200,
    rating: 4.6,
    tags: ['舒适', '轻便', '易打理'],
    desc: '服饰热卖款，舒适·轻便·易打理，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0279',
    name: '安抚奶嘴 Plus 8',
    category: '母婴',
    price: 199,
    rating: 4.6,
    tags: ['无酒精', '圆润不伤手', '安全材质'],
    desc: '母婴热卖款，无酒精·圆润不伤手·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0280',
    name: '降噪耳塞 Air 3',
    category: '办公',
    price: 104,
    rating: 4.8,
    tags: ['静音', '高效率', '耐用'],
    desc: '办公热卖款，静音·高效率·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0281',
    name: 'Mini 投影仪 Lite 1',
    category: '数码',
    price: 212,
    rating: 4.2,
    tags: ['降噪', '快充', 'Type-C'],
    desc: '数码热卖款，降噪·快充·Type-C，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0282',
    name: '收纳盒 Lite 7',
    category: '家居',
    price: 109,
    rating: 4.7,
    tags: ['易清洁', '高颜值', '可水洗'],
    desc: '家居热卖款，易清洁·高颜值·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0283',
    name: '修护面膜 Pro 2',
    category: '美妆',
    price: 230,
    rating: 4.6,
    tags: ['保湿', '持妆', '敏感肌可用'],
    desc: '美妆热卖款，保湿·持妆·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0284',
    name: '筋膜枪 Pro 4',
    category: '运动',
    price: 143,
    rating: 4.2,
    tags: ['透气', '可机洗', '轻量'],
    desc: '运动热卖款，透气·可机洗·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0285',
    name: '代餐奶昔 Lite 1',
    category: '食品',
    price: 95,
    rating: 4.8,
    tags: ['饱腹感', '原味', '低糖'],
    desc: '食品热卖款，饱腹感·原味·低糖，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0286',
    name: '廓形卫衣 Pro 6',
    category: '服饰',
    price: 130,
    rating: 4.9,
    tags: ['轻便', '透气', '版型好'],
    desc: '服饰热卖款，轻便·透气·版型好，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0287',
    name: '婴儿推车挂袋 Lite 8',
    category: '母婴',
    price: 131,
    rating: 4.5,
    tags: ['安全材质', '亲肤', '无酒精'],
    desc: '母婴热卖款，安全材质·亲肤·无酒精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0288',
    name: '人体工学靠垫 Air 3',
    category: '办公',
    price: 151,
    rating: 4.4,
    tags: ['高效率', '便携', '护腰'],
    desc: '办公热卖款，高效率·便携·护腰，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0289',
    name: '便携充电宝 Pro 1',
    category: '数码',
    price: 239,
    rating: 4.8,
    tags: ['低延迟', '蓝牙', '长续航'],
    desc: '数码热卖款，低延迟·蓝牙·长续航，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0290',
    name: '智能台灯 Neo 3',
    category: '家居',
    price: 193,
    rating: 4.9,
    tags: ['舒适', '易清洁', '可水洗'],
    desc: '家居热卖款，舒适·易清洁·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0291',
    name: '防晒霜 Max 6',
    category: '美妆',
    price: 118,
    rating: 4.5,
    tags: ['敏感肌可用', '修护', '保湿'],
    desc: '美妆热卖款，敏感肌可用·修护·保湿，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0292',
    name: '筋膜枪 Pro 1',
    category: '运动',
    price: 145,
    rating: 4.7,
    tags: ['高回弹', '防滑', '耐磨'],
    desc: '运动热卖款，高回弹·防滑·耐磨，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0293',
    name: '低糖能量棒 Max 7',
    category: '食品',
    price: 134,
    rating: 4.4,
    tags: ['低糖', '无添加', '低脂'],
    desc: '食品热卖款，低糖·无添加·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0294',
    name: '针织开衫 Pro 5',
    category: '服饰',
    price: 254,
    rating: 4.3,
    tags: ['版型好', '轻便', '舒适'],
    desc: '服饰热卖款，版型好·轻便·舒适，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0295',
    name: '安抚奶嘴 Plus 1',
    category: '母婴',
    price: 210,
    rating: 4.8,
    tags: ['圆润不伤手', '无香精', '安全材质'],
    desc: '母婴热卖款，圆润不伤手·无香精·安全材质，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0296',
    name: '中性笔套装 Lite 5',
    category: '办公',
    price: 90,
    rating: 4.9,
    tags: ['护腰', '静音', '高效率'],
    desc: '办公热卖款，护腰·静音·高效率，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0297',
    name: '星云智能手表 Lite 7',
    category: '数码',
    price: 273,
    rating: 4.5,
    tags: ['低延迟', '蓝牙', '降噪'],
    desc: '数码热卖款，低延迟·蓝牙·降噪，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0298',
    name: '极简床品套装 Neo 1',
    category: '家居',
    price: 192,
    rating: 4.8,
    tags: ['高颜值', '可水洗', '耐用'],
    desc: '家居热卖款，高颜值·可水洗·耐用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0299',
    name: '防晒霜 Lite 9',
    category: '美妆',
    price: 132,
    rating: 4.3,
    tags: ['持妆', '温和', '敏感肌可用'],
    desc: '美妆热卖款，持妆·温和·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0300',
    name: '瑜伽垫 Max 3',
    category: '运动',
    price: 134,
    rating: 4.8,
    tags: ['高回弹', '防滑', '可机洗'],
    desc: '运动热卖款，高回弹·防滑·可机洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0301',
    name: '低糖能量棒 Plus 2',
    category: '食品',
    price: 51,
    rating: 4.8,
    tags: ['饱腹感', '原味', '无添加'],
    desc: '食品热卖款，饱腹感·原味·无添加，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0302',
    name: '城市夹克 Pro 3',
    category: '服饰',
    price: 285,
    rating: 4.7,
    tags: ['轻便', '百搭', '透气'],
    desc: '服饰热卖款，轻便·百搭·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0303',
    name: '安抚奶嘴 Lite 2',
    category: '母婴',
    price: 226,
    rating: 4.7,
    tags: ['安全材质', '亲肤', '无酒精'],
    desc: '母婴热卖款，安全材质·亲肤·无酒精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0304',
    name: '中性笔套装 Max 8',
    category: '办公',
    price: 62,
    rating: 4.2,
    tags: ['护腰', '高效率', '静音'],
    desc: '办公热卖款，护腰·高效率·静音，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0305',
    name: '星云智能手表 Pro 6',
    category: '数码',
    price: 208,
    rating: 4.3,
    tags: ['降噪', '长续航', '快充'],
    desc: '数码热卖款，降噪·长续航·快充，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0306',
    name: '北欧香薰机 Max 9',
    category: '家居',
    price: 193,
    rating: 4.9,
    tags: ['易清洁', '无异味', '高颜值'],
    desc: '家居热卖款，易清洁·无异味·高颜值，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0307',
    name: '香氛喷雾 Pro 6',
    category: '美妆',
    price: 156,
    rating: 4.6,
    tags: ['温和', '修护', '敏感肌可用'],
    desc: '美妆热卖款，温和·修护·敏感肌可用，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0308',
    name: '智能跳绳 Air 8',
    category: '运动',
    price: 230,
    rating: 4.2,
    tags: ['高回弹', '防滑', '轻量'],
    desc: '运动热卖款，高回弹·防滑·轻量，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0309',
    name: '低糖能量棒 Lite 4',
    category: '食品',
    price: 187,
    rating: 4.3,
    tags: ['低糖', '无添加', '低脂'],
    desc: '食品热卖款，低糖·无添加·低脂，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0310',
    name: '通勤衬衫 Lite 1',
    category: '服饰',
    price: 153,
    rating: 4.8,
    tags: ['轻便', '百搭', '透气'],
    desc: '服饰热卖款，轻便·百搭·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0311',
    name: '婴儿湿巾 Plus 8',
    category: '母婴',
    price: 182,
    rating: 4.4,
    tags: ['安全材质', '亲肤', '无酒精'],
    desc: '母婴热卖款，安全材质·亲肤·无酒精，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0312',
    name: '降噪耳塞 Neo 3',
    category: '办公',
    price: 50,
    rating: 4.4,
    tags: ['护腰', '桌面友好', '静音'],
    desc: '办公热卖款，护腰·桌面友好·静音，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0313',
    name: 'Aurora 无线耳机 Lite 2',
    category: '数码',
    price: 302,
    rating: 4.8,
    tags: ['长续航', '高清', '低延迟'],
    desc: '数码热卖款，长续航·高清·低延迟，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0314',
    name: '极简床品套装 Pro 8',
    category: '家居',
    price: 180,
    rating: 4.3,
    tags: ['易清洁', '舒适', '可水洗'],
    desc: '家居热卖款，易清洁·舒适·可水洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0315',
    name: '修护面膜 Plus 9',
    category: '美妆',
    price: 68,
    rating: 4.5,
    tags: ['温和', '修护', '清爽'],
    desc: '美妆热卖款，温和·修护·清爽，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0316',
    name: '运动水杯 Pro 6',
    category: '运动',
    price: 210,
    rating: 4.8,
    tags: ['高回弹', '透气', '耐磨'],
    desc: '运动热卖款，高回弹·透气·耐磨，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0317',
    name: '代餐奶昔 Lite 6',
    category: '食品',
    price: 161,
    rating: 4.3,
    tags: ['饱腹感', '无添加', '高蛋白'],
    desc: '食品热卖款，饱腹感·无添加·高蛋白，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0318',
    name: '休闲长裤 Neo 1',
    category: '服饰',
    price: 222,
    rating: 4.3,
    tags: ['百搭', '舒适', '透气'],
    desc: '服饰热卖款，百搭·舒适·透气，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0319',
    name: '益智积木 Pro 9',
    category: '母婴',
    price: 220,
    rating: 4.2,
    tags: ['无香精', '安全材质', '好清洗'],
    desc: '母婴热卖款，无香精·安全材质·好清洗，适合日常与送礼（演示数据）。'
  },
  {
    id: 'p0320',
    name: '人体工学靠垫 Neo 1',
    category: '办公',
    price: 49,
    rating: 4.2,
    tags: ['桌面友好', '耐用', '静音'],
    desc: '办公热卖款，桌面友好·耐用·静音，适合日常与送礼（演示数据）。'
  },
];

export function productById(id) {
  const pid = String(id || '');
  return PRODUCTS.find((p) => p.id === pid) || null;
}

export function searchProducts(query) {
  const q = String(query || '').trim().toLowerCase();
  if (!q) return PRODUCTS.slice();
  return PRODUCTS.filter((p) => {
    const hay = [p.id, p.name, p.category, ...(p.tags || []), p.desc].join(" ").toLowerCase();
    return hay.includes(q);
  });
}
