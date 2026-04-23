
const IMAGE_LIST = [
    // ========== 原神类 ==========
    
    // 萤的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008653.webp", tags: ["萤", "休闲装", "原神"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000008415.webp", tags: ["萤", "内衣", "猫耳", "猫娘", "泳衣", "原神"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000008461.webp", tags: ["内衣", "泳装", "萤", "原神"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008572.webp", tags: ["内衣", "泳装", "萤", "原神"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008584.webp", tags: ["萤", "泳装", "原神"] },
    
    // 八重神子的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000008662.jpg", tags: ["八重神子", "神子", "大奶子", "原神"] },
    
    // 芙宁娜的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000008648.webp", tags: ["芙宁娜", "连体衣", "原神"] },
    
    // 妮露的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008617.webp", tags: ["妮露", "泳装", "原神"] },
    
    // 神里绫华的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008651.webp", tags: ["神里绫华", "泳衣", "原神"] },
    
    // 茜特菈莉的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008395.webp", tags: ["茜特菈莉", "兔女郎", "原神", "连体衣"] },
    
    // 心海的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008656.webp", tags: ["心海", "内衣", "原神"] },
    
    
    // ========== 蔚蓝档案类 ==========
    
    // 小春的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg2.jpg", tags: ["小春", "色色", "蔚蓝档案"] },
    
    // 玛丽的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg4.jpg", tags: ["玛丽", "泳衣", "连体衣", "蔚蓝档案"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg8.jpg", tags: ["玛丽", "猫娘", "内衣", "蔚蓝档案"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000012007.jpg", tags: ["伊落玛丽", "玛丽", "猫娘", "蔚蓝档案"] },
    
    // 清澄晶的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg6.jpg", tags: ["清澄晶", "猫娘", "比基尼", "蔚蓝档案"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg9.jpg", tags: ["清澄晶", "大奶子", "创可贴", "蔚蓝档案"] },
    
    // 早濑优香的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg7.jpg", tags: ["早濑优香", "猫娘", "比基尼", "蔚蓝档案"] },
    
    // 各务千寻的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg10.jpg!h.webp", tags: ["各务千寻", "比基尼", "连体衣", "蔚蓝档案"] },
    
    // 杏山和纱的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg11.jpg!h.webp", tags: ["杏山和纱", "猫娘", "比基尼", "蔚蓝档案"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg26.png", tags: ["杏山和纱", "杏山カズサ", "比基尼", "泳衣", "蔚蓝档案"] },
    
    // 砂狼白子的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg13.png", tags: ["砂狼白子", "砂狼シロコ", "同人", "蔚蓝档案"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000008633.webp", tags: ["砂狼白子", "白子", "蔚蓝档案"] },
    
    // 水羽三森的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg14.png", tags: ["三森", "水羽三森", "水羽ミモリ", "泳衣", "星空", "幻想", "蔚蓝档案"] },
    
    // 狐坂若藻的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg15.jpg", tags: ["狐坂若藻", "水若藻", "泳装", "夏日", "狐坂ワカモ", "蔚蓝档案"] },
    
    // 小鸟游星野的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg25.png", tags: ["小鸟游星野", "星野", "可爱", "和服", "蔚蓝档案"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000012783.jpg", tags: ["小鸟游星野", "星野", "比基尼", "蔚蓝档案"] },
    
    // 调月莉音的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg27.jpg", tags: ["调月莉音", "调月リオ", "色色", "蔚蓝档案"] },
    
    // 圆堂志美子的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203857.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203850.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203846.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203842.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203836.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203833.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203831.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203609.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137166340_20251106_203607.jpg", tags: ["圆堂志美子", "连体衣", "蔚蓝档案"] },
    
    // 一之赖明日奈的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137166538_20251106_203558.png", tags: ["一之赖明日奈", "比基尼", "蔚蓝档案"] },
    
    // 空崎日奈的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000012771.jpg", tags: ["空崎日奈", "日奈", "黑丝", "比基尼", "蔚蓝档案"] },
    
    // 天雨亚子的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000008624.webp", tags: ["天雨亚子", "天雨アコ", "黄昏", "蔚蓝档案"] },
    
    // 浦和花子的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000012003.jpg", tags: ["浦和花子", "花子", "蔚蓝档案"] },
    
    
    // ========== 崩坏类 ==========
    
    // 流萤的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000008583.jpg", tags: ["流萤", "内衣", "崩坏"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000008472.webp", tags: ["流萤", "萤", "崩坏"] },
    
    // 风堇的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000008360.webp", tags: ["风堇", "雅辛忒丝", "崩坏"] },
    
    
    // ========== 初音未来类 ==========
    
    // Miku的图片
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000024131.jpg", tags: ["初音未来", "Miku", "比基尼"] },
    
    
    // ========== 通用/角色类 ==========
    
    // Fuwawa Abyssgard的图片
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg5.jpg", tags: ["Fuwawa Abyssgard", "猫娘", "内衣"] },
    
    // 杏山和纱（已在上方蔚蓝档案类）
    
    
    // ========== 其他/杂项类 ==========
    
    // 魅魔类的图片
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg16.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/illust_110008348_20251106_020847.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg18.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/bg19.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg20.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg21.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg22.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg23.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/bg24.jpg", tags: ["魅魔", "内衣", "色色"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg28.jpg", tags: ["魅魔", "魅魔纹", "色色"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000008528.webp", tags: ["魅魔", "连体衣", "色色"] },
    
    // 奶牛装
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg12.png", tags: ["奶牛装", "黑丝", "色色"] },
    
    // 兔女郎
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137129222_20251106_204458.png", tags: ["兔女郎", "黑丝", "色色", "大奶子"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137129222_20251106_204456.png", tags: ["兔女郎", "黑丝", "色色", "大奶子"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137159291_20251106_204102.jpg", tags: ["兔女郎", "少女", "大奶子"] },
    
    // 女仆装
    { url: "https://dl.img.timecdn.cn/2025/11/06/illust_137165419_20251106_204434.jpg", tags: ["女仆装", "内衣", "色色"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/illust_137150529_20251106_204355.png", tags: ["猫娘", "女仆装", "色色"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/illust_137150529_20251106_204350.png", tags: ["猫娘", "女仆装", "色色"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/illust_137150529_20251106_204348.png", tags: ["猫娘", "女仆装", "色色"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/illust_137150529_20251106_204346.png", tags: ["猫娘", "女仆装", "色色"] },
    
    // 连体衣
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137127321_20251106_204511.png", tags: ["连体衣", "白色连体衣", "色色"] },
    
    // 绘画类
    { url: "https://dl3.img.timecdn.cn/2025/11/06/bg3.jpg", tags: ["绘画", "内衣"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/illust_137166669_20251106_203550.jpg", tags: ["绘画", "比基尼", "可爱"] },
    
    // 害羞少女
    { url: "https://dl2.img.timecdn.cn/2025/11/06/illust_137158820_20251106_204109.jpg", tags: ["害羞", "少女", "蔚蓝档案"] },
    
    
    // ========== 腹肌类 ==========
    { url: "腹肌1", tags: ["腹肌"] },
    { url: "腹肌2", tags: ["腹肌"] },
    { url: "腹肌3", tags: ["腹肌"] },
    { url: "腹肌4", tags: ["腹肌"] },
    
    
    // ========== 福瑞类 ==========
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000012580.jpg", tags: ["福瑞", "连体衣", "可爱"] },
    
    
    // ========== 杂项类 ==========
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000010798.jpg", tags: ["二次元", "现实", "白丝"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000010801.jpg", tags: ["二次元", "大奶子", "裹着浴巾"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000008458.webp", tags: ["泳衣", "猫爪", "可爱"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000008400.webp", tags: ["二次元", "风景", "比基尼", "海边"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000008539.webp", tags: ["二次元", "连体衣", "大奶子"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000008626.webp", tags: ["二次元", "少女", "连体衣"] },
    { url: "https://dl.img.timecdn.cn/2025/11/06/1000012871.jpg", tags: ["二次元", "宅女", "比基尼"] },
    { url: "https://dl3.img.timecdn.cn/2025/11/06/1000012776.jpg", tags: ["二次元", "比基尼", "可爱"] },
    { url: "https://dl2.img.timecdn.cn/2025/11/06/1000012835.jpg", tags: ["色色", "连体衣", "横屏"] },
];

// 纯URL数组（供其他地方使用）
const IMAGE_LIST_RAW = IMAGE_LIST.map(item => item.url);

// 控制台输出统计信息
console.log(`✅ 图片库加载完成：共 ${IMAGE_LIST.length} 张图片`);
console.log(`📋 分类：原神类、蔚蓝档案类、崩坏类、初音未来类、腹肌类、福瑞类等`);