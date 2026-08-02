// ============================================================
// БАЗА ИЕРОГЛИФОВ · HSK 1-3 + тематические категории
// ============================================================

const HANZI_DATABASE = {

    // ═══════════════════════════════════════════════════════════
    // 🎯 КРУПНЫЕ УРОВНИ HSK
    // ═══════════════════════════════════════════════════════════

    hsk1_all: {
        name: "🥉 HSK 1 · Весь уровень",
        description: "Все ~170 иероглифов начального уровня",
        group: "hsk",
        color: "#cd7f32",
        items: [
            { char: '的', pinyin: 'de', meaning: 'притяж. частица' },
            { char: '我', pinyin: 'wǒ', meaning: 'я' },
            { char: '你', pinyin: 'nǐ', meaning: 'ты' },
            { char: '是', pinyin: 'shì', meaning: 'быть' },
            { char: '了', pinyin: 'le', meaning: 'завершённость' },
            { char: '不', pinyin: 'bù', meaning: 'не' },
            { char: '在', pinyin: 'zài', meaning: 'находиться' },
            { char: '他', pinyin: 'tā', meaning: 'он' },
            { char: '她', pinyin: 'tā', meaning: 'она' },
            { char: '这', pinyin: 'zhè', meaning: 'этот' },
            { char: '那', pinyin: 'nà', meaning: 'тот' },
            { char: '中', pinyin: 'zhōng', meaning: 'середина' },
            { char: '大', pinyin: 'dà', meaning: 'большой' },
            { char: '小', pinyin: 'xiǎo', meaning: 'маленький' },
            { char: '来', pinyin: 'lái', meaning: 'приходить' },
            { char: '上', pinyin: 'shàng', meaning: 'верх' },
            { char: '下', pinyin: 'xià', meaning: 'низ' },
            { char: '个', pinyin: 'gè', meaning: 'сч. слово' },
            { char: '到', pinyin: 'dào', meaning: 'достигать' },
            { char: '说', pinyin: 'shuō', meaning: 'говорить' },
            { char: '们', pinyin: 'men', meaning: 'мн. число' },
            { char: '为', pinyin: 'wèi', meaning: 'для' },
            { char: '子', pinyin: 'zi', meaning: 'суффикс' },
            { char: '和', pinyin: 'hé', meaning: 'и' },
            { char: '人', pinyin: 'rén', meaning: 'человек' },
            { char: '家', pinyin: 'jiā', meaning: 'семья' },
            { char: '有', pinyin: 'yǒu', meaning: 'иметь' },
            { char: '一', pinyin: 'yī', meaning: 'один' },
            { char: '二', pinyin: 'èr', meaning: 'два' },
            { char: '三', pinyin: 'sān', meaning: 'три' },
            { char: '四', pinyin: 'sì', meaning: 'четыре' },
            { char: '五', pinyin: 'wǔ', meaning: 'пять' },
            { char: '六', pinyin: 'liù', meaning: 'шесть' },
            { char: '七', pinyin: 'qī', meaning: 'семь' },
            { char: '八', pinyin: 'bā', meaning: 'восемь' },
            { char: '九', pinyin: 'jiǔ', meaning: 'девять' },
            { char: '十', pinyin: 'shí', meaning: 'десять' },
            { char: '百', pinyin: 'bǎi', meaning: 'сто' },
            { char: '千', pinyin: 'qiān', meaning: 'тысяча' },
            { char: '两', pinyin: 'liǎng', meaning: 'два (с сч.сл.)' },
            { char: '零', pinyin: 'líng', meaning: 'ноль' },
            { char: '几', pinyin: 'jǐ', meaning: 'сколько?' },
            { char: '多', pinyin: 'duō', meaning: 'много' },
            { char: '少', pinyin: 'shǎo', meaning: 'мало' },
            { char: '半', pinyin: 'bàn', meaning: 'половина' },
            { char: '爸', pinyin: 'bà', meaning: 'папа' },
            { char: '妈', pinyin: 'mā', meaning: 'мама' },
            { char: '儿', pinyin: 'ér', meaning: 'сын' },
            { char: '女', pinyin: 'nǚ', meaning: 'дочь' },
            { char: '哥', pinyin: 'gē', meaning: 'брат (ст.)' },
            { char: '姐', pinyin: 'jiě', meaning: 'сестра (ст.)' },
            { char: '弟', pinyin: 'dì', meaning: 'брат (мл.)' },
            { char: '妹', pinyin: 'mèi', meaning: 'сестра (мл.)' },
            { char: '孩', pinyin: 'hái', meaning: 'ребёнок' },
            { char: '友', pinyin: 'yǒu', meaning: 'друг' },
            { char: '年', pinyin: 'nián', meaning: 'год' },
            { char: '月', pinyin: 'yuè', meaning: 'месяц' },
            { char: '日', pinyin: 'rì', meaning: 'день' },
            { char: '天', pinyin: 'tiān', meaning: 'день/небо' },
            { char: '时', pinyin: 'shí', meaning: 'час' },
            { char: '分', pinyin: 'fēn', meaning: 'минута' },
            { char: '点', pinyin: 'diǎn', meaning: 'час (время)' },
            { char: '星', pinyin: 'xīng', meaning: 'звезда' },
            { char: '期', pinyin: 'qī', meaning: 'период' },
            { char: '今', pinyin: 'jīn', meaning: 'сегодня' },
            { char: '明', pinyin: 'míng', meaning: 'завтра' },
            { char: '昨', pinyin: 'zuó', meaning: 'вчера' },
            { char: '午', pinyin: 'wǔ', meaning: 'полдень' },
            { char: '早', pinyin: 'zǎo', meaning: 'утро' },
            { char: '晚', pinyin: 'wǎn', meaning: 'вечер' },
            { char: '现', pinyin: 'xiàn', meaning: 'сейчас' },
            { char: '候', pinyin: 'hòu', meaning: 'время' },
            { char: '前', pinyin: 'qián', meaning: 'перед' },
            { char: '后', pinyin: 'hòu', meaning: 'после' },
            { char: '外', pinyin: 'wài', meaning: 'снаружи' },
            { char: '里', pinyin: 'lǐ', meaning: 'внутри' },
            { char: '面', pinyin: 'miàn', meaning: 'сторона' },
            { char: '边', pinyin: 'biān', meaning: 'край' },
            { char: '左', pinyin: 'zuǒ', meaning: 'левый' },
            { char: '右', pinyin: 'yòu', meaning: 'правый' },
            { char: '东', pinyin: 'dōng', meaning: 'восток' },
            { char: '西', pinyin: 'xī', meaning: 'запад' },
            { char: '南', pinyin: 'nán', meaning: 'юг' },
            { char: '北', pinyin: 'běi', meaning: 'север' },
            { char: '远', pinyin: 'yuǎn', meaning: 'далеко' },
            { char: '近', pinyin: 'jìn', meaning: 'близко' },
            { char: '国', pinyin: 'guó', meaning: 'страна' },
            { char: '气', pinyin: 'qì', meaning: 'воздух' },
            { char: '雨', pinyin: 'yǔ', meaning: 'дождь' },
            { char: '雪', pinyin: 'xuě', meaning: 'снег' },
            { char: '风', pinyin: 'fēng', meaning: 'ветер' },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода' },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь' },
            { char: '山', pinyin: 'shān', meaning: 'гора' },
            { char: '海', pinyin: 'hǎi', meaning: 'море' },
            { char: '花', pinyin: 'huā', meaning: 'цветок' },
            { char: '草', pinyin: 'cǎo', meaning: 'трава' },
            { char: '树', pinyin: 'shù', meaning: 'дерево' },
            { char: '木', pinyin: 'mù', meaning: 'древесина' },
            { char: '阳', pinyin: 'yáng', meaning: 'солнце' },
            { char: '光', pinyin: 'guāng', meaning: 'свет' },
            { char: '吃', pinyin: 'chī', meaning: 'есть' },
            { char: '喝', pinyin: 'hē', meaning: 'пить' },
            { char: '饭', pinyin: 'fàn', meaning: 'еда' },
            { char: '菜', pinyin: 'cài', meaning: 'блюдо' },
            { char: '茶', pinyin: 'chá', meaning: 'чай' },
            { char: '果', pinyin: 'guǒ', meaning: 'фрукт' },
            { char: '米', pinyin: 'mǐ', meaning: 'рис' },
            { char: '酒', pinyin: 'jiǔ', meaning: 'алкоголь' },
            { char: '奶', pinyin: 'nǎi', meaning: 'молоко' },
            { char: '蛋', pinyin: 'dàn', meaning: 'яйцо' },
            { char: '肉', pinyin: 'ròu', meaning: 'мясо' },
            { char: '鱼', pinyin: 'yú', meaning: 'рыба' },
            { char: '汤', pinyin: 'tāng', meaning: 'суп' },
            { char: '糖', pinyin: 'táng', meaning: 'сахар' },
            { char: '看', pinyin: 'kàn', meaning: 'смотреть' },
            { char: '听', pinyin: 'tīng', meaning: 'слушать' },
            { char: '读', pinyin: 'dú', meaning: 'читать' },
            { char: '写', pinyin: 'xiě', meaning: 'писать' },
            { char: '做', pinyin: 'zuò', meaning: 'делать' },
            { char: '想', pinyin: 'xiǎng', meaning: 'думать' },
            { char: '要', pinyin: 'yào', meaning: 'хотеть' },
            { char: '会', pinyin: 'huì', meaning: 'уметь' },
            { char: '能', pinyin: 'néng', meaning: 'мочь' },
            { char: '可', pinyin: 'kě', meaning: 'можно' },
            { char: '去', pinyin: 'qù', meaning: 'идти' },
            { char: '回', pinyin: 'huí', meaning: 'возвращаться' },
            { char: '住', pinyin: 'zhù', meaning: 'жить' },
            { char: '坐', pinyin: 'zuò', meaning: 'сидеть' },
            { char: '走', pinyin: 'zǒu', meaning: 'идти пешком' },
            { char: '跑', pinyin: 'pǎo', meaning: 'бежать' },
            { char: '飞', pinyin: 'fēi', meaning: 'лететь' },
            { char: '叫', pinyin: 'jiào', meaning: 'звать' },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать' },
            { char: '睡', pinyin: 'shuì', meaning: 'спать' },
            { char: '买', pinyin: 'mǎi', meaning: 'покупать' },
            { char: '卖', pinyin: 'mài', meaning: 'продавать' },
            { char: '开', pinyin: 'kāi', meaning: 'открывать' },
            { char: '关', pinyin: 'guān', meaning: 'закрывать' },
            { char: '穿', pinyin: 'chuān', meaning: 'носить' },
            { char: '教', pinyin: 'jiào', meaning: 'учить' },
            { char: '起', pinyin: 'qǐ', meaning: 'вставать' },
            { char: '学', pinyin: 'xué', meaning: 'учиться' },
            { char: '生', pinyin: 'shēng', meaning: 'ученик' },
            { char: '老', pinyin: 'lǎo', meaning: 'старый' },
            { char: '师', pinyin: 'shī', meaning: 'учитель' },
            { char: '校', pinyin: 'xiào', meaning: 'школа' },
            { char: '班', pinyin: 'bān', meaning: 'класс' },
            { char: '工', pinyin: 'gōng', meaning: 'работа' },
            { char: '作', pinyin: 'zuò', meaning: 'делать' },
            { char: '医', pinyin: 'yī', meaning: 'врач' },
            { char: '院', pinyin: 'yuàn', meaning: 'больница' },
            { char: '店', pinyin: 'diàn', meaning: 'магазин' },
            { char: '公', pinyin: 'gōng', meaning: 'общественный' },
            { char: '司', pinyin: 'sī', meaning: 'компания' },
            { char: '课', pinyin: 'kè', meaning: 'урок' },
            { char: '习', pinyin: 'xí', meaning: 'практика' },
            { char: '好', pinyin: 'hǎo', meaning: 'хороший' },
            { char: '高', pinyin: 'gāo', meaning: 'высокий' },
            { char: '兴', pinyin: 'xìng', meaning: 'интерес' },
            { char: '漂', pinyin: 'piào', meaning: 'красивый' },
            { char: '亮', pinyin: 'liàng', meaning: 'яркий' },
            { char: '忙', pinyin: 'máng', meaning: 'занятой' },
            { char: '累', pinyin: 'lèi', meaning: 'усталый' },
            { char: '冷', pinyin: 'lěng', meaning: 'холодный' },
            { char: '热', pinyin: 'rè', meaning: 'горячий' },
            { char: '快', pinyin: 'kuài', meaning: 'быстрый' },
            { char: '慢', pinyin: 'màn', meaning: 'медленный' },
            { char: '新', pinyin: 'xīn', meaning: 'новый' },
            { char: '书', pinyin: 'shū', meaning: 'книга' },
            { char: '本', pinyin: 'běn', meaning: 'тетрадь' },
            { char: '笔', pinyin: 'bǐ', meaning: 'ручка' },
            { char: '纸', pinyin: 'zhǐ', meaning: 'бумага' },
            { char: '桌', pinyin: 'zhuō', meaning: 'стол' },
            { char: '椅', pinyin: 'yǐ', meaning: 'стул' },
            { char: '门', pinyin: 'mén', meaning: 'дверь' },
            { char: '窗', pinyin: 'chuāng', meaning: 'окно' },
            { char: '车', pinyin: 'chē', meaning: 'машина' },
            { char: '船', pinyin: 'chuán', meaning: 'лодка' },
            { char: '机', pinyin: 'jī', meaning: 'аппарат' },
            { char: '话', pinyin: 'huà', meaning: 'речь' },
            { char: '名', pinyin: 'míng', meaning: 'имя' },
            { char: '电', pinyin: 'diàn', meaning: 'электричество' },
            { char: '脑', pinyin: 'nǎo', meaning: 'мозг' },
            { char: '视', pinyin: 'shì', meaning: 'видеть' },
            { char: '字', pinyin: 'zì', meaning: 'иероглиф' },
            { char: '衣', pinyin: 'yī', meaning: 'одежда' },
            { char: '服', pinyin: 'fú', meaning: 'одежда' },
            { char: '鞋', pinyin: 'xié', meaning: 'обувь' },
            { char: '猫', pinyin: 'māo', meaning: 'кошка' },
            { char: '狗', pinyin: 'gǒu', meaning: 'собака' },
            { char: '鸟', pinyin: 'niǎo', meaning: 'птица' },
            { char: '马', pinyin: 'mǎ', meaning: 'лошадь' },
            { char: '牛', pinyin: 'niú', meaning: 'корова' },
            { char: '羊', pinyin: 'yáng', meaning: 'овца' },
            { char: '鸡', pinyin: 'jī', meaning: 'курица' },
            { char: '红', pinyin: 'hóng', meaning: 'красный' },
            { char: '黄', pinyin: 'huáng', meaning: 'жёлтый' },
            { char: '蓝', pinyin: 'lán', meaning: 'синий' },
            { char: '绿', pinyin: 'lǜ', meaning: 'зелёный' },
            { char: '白', pinyin: 'bái', meaning: 'белый' },
            { char: '黑', pinyin: 'hēi', meaning: 'чёрный' },
            { char: '身', pinyin: 'shēn', meaning: 'тело' },
            { char: '体', pinyin: 'tǐ', meaning: 'форма' },
            { char: '头', pinyin: 'tóu', meaning: 'голова' },
            { char: '手', pinyin: 'shǒu', meaning: 'рука' },
            { char: '眼', pinyin: 'yǎn', meaning: 'глаз' },
            { char: '口', pinyin: 'kǒu', meaning: 'рот' },
            { char: '耳', pinyin: 'ěr', meaning: 'ухо' },
            { char: '心', pinyin: 'xīn', meaning: 'сердце' },
            { char: '脚', pinyin: 'jiǎo', meaning: 'стопа' }
        ]
    },

    hsk2_all: {
        name: "🥈 HSK 2 · Весь уровень",
        description: "Все ~170 иероглифов элементарного уровня",
        group: "hsk",
        color: "#a8a8a8",
        items: [
            { char: '吧', pinyin: 'ba', meaning: 'частица' },
            { char: '别', pinyin: 'bié', meaning: 'не надо' },
            { char: '对', pinyin: 'duì', meaning: 'правильно' },
            { char: '错', pinyin: 'cuò', meaning: 'ошибка' },
            { char: '真', pinyin: 'zhēn', meaning: 'правда' },
            { char: '实', pinyin: 'shí', meaning: 'реальный' },
            { char: '情', pinyin: 'qíng', meaning: 'чувство' },
            { char: '况', pinyin: 'kuàng', meaning: 'ситуация' },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать' },
            { char: '题', pinyin: 'tí', meaning: 'задача' },
            { char: '答', pinyin: 'dá', meaning: 'отвечать' },
            { char: '案', pinyin: 'àn', meaning: 'решение' },
            { char: '意', pinyin: 'yì', meaning: 'смысл' },
            { char: '思', pinyin: 'sī', meaning: 'мысль' },
            { char: '办', pinyin: 'bàn', meaning: 'делать' },
            { char: '法', pinyin: 'fǎ', meaning: 'метод' },
            { char: '方', pinyin: 'fāng', meaning: 'направление' },
            { char: '关', pinyin: 'guān', meaning: 'связь' },
            { char: '系', pinyin: 'xì', meaning: 'система' },
            { char: '影', pinyin: 'yǐng', meaning: 'тень' },
            { char: '响', pinyin: 'xiǎng', meaning: 'звучать' },
            { char: '效', pinyin: 'xiào', meaning: 'эффект' },
            { char: '结', pinyin: 'jié', meaning: 'завязывать' },
            { char: '果', pinyin: 'guǒ', meaning: 'результат' },
            { char: '原', pinyin: 'yuán', meaning: 'источник' },
            { char: '因', pinyin: 'yīn', meaning: 'причина' },
            { char: '理', pinyin: 'lǐ', meaning: 'причина' },
            { char: '由', pinyin: 'yóu', meaning: 'из' },
            { char: '例', pinyin: 'lì', meaning: 'пример' },
            { char: '如', pinyin: 'rú', meaning: 'если' },
            { char: '比', pinyin: 'bǐ', meaning: 'сравнивать' },
            { char: '特', pinyin: 'tè', meaning: 'особый' },
            { char: '别', pinyin: 'bié', meaning: 'особенно' },
            { char: '非', pinyin: 'fēi', meaning: 'не' },
            { char: '常', pinyin: 'cháng', meaning: 'очень' },
            { char: '一', pinyin: 'yī', meaning: 'один' },
            { char: '般', pinyin: 'bān', meaning: 'обычный' },
            { char: '普', pinyin: 'pǔ', meaning: 'общий' },
            { char: '通', pinyin: 'tōng', meaning: 'проходить' },
            { char: '正', pinyin: 'zhèng', meaning: 'правильный' },
            { char: '简', pinyin: 'jiǎn', meaning: 'простой' },
            { char: '单', pinyin: 'dān', meaning: 'простой' },
            { char: '复', pinyin: 'fù', meaning: 'повторять' },
            { char: '杂', pinyin: 'zá', meaning: 'смешанный' },
            { char: '容', pinyin: 'róng', meaning: 'вмещать' },
            { char: '易', pinyin: 'yì', meaning: 'легкий' },
            { char: '困', pinyin: 'kùn', meaning: 'спать' },
            { char: '难', pinyin: 'nán', meaning: 'трудный' },
            { char: '清', pinyin: 'qīng', meaning: 'чистый' },
            { char: '楚', pinyin: 'chǔ', meaning: 'ясный' },
            { char: '懂', pinyin: 'dǒng', meaning: 'понимать' },
            { char: '解', pinyin: 'jiě', meaning: 'решать' },
            { char: '知', pinyin: 'zhī', meaning: 'знать' },
            { char: '道', pinyin: 'dào', meaning: 'путь' },
            { char: '觉', pinyin: 'jué', meaning: 'чувствовать' },
            { char: '得', pinyin: 'de', meaning: 'получать' },
            { char: '感', pinyin: 'gǎn', meaning: 'чувство' },
            { char: '认', pinyin: 'rèn', meaning: 'узнавать' },
            { char: '识', pinyin: 'shí', meaning: 'знание' },
            { char: '了', pinyin: 'liǎo', meaning: 'понимать' },
            { char: '发', pinyin: 'fā', meaning: 'посылать' },
            { char: '现', pinyin: 'xiàn', meaning: 'появляться' },
            { char: '帮', pinyin: 'bāng', meaning: 'помогать' },
            { char: '助', pinyin: 'zhù', meaning: 'помощь' },
            { char: '照', pinyin: 'zhào', meaning: 'освещать' },
            { char: '顾', pinyin: 'gù', meaning: 'смотреть' },
            { char: '保', pinyin: 'bǎo', meaning: 'защищать' },
            { char: '护', pinyin: 'hù', meaning: 'защищать' },
            { char: '欢', pinyin: 'huān', meaning: 'радостный' },
            { char: '迎', pinyin: 'yíng', meaning: 'встречать' },
            { char: '送', pinyin: 'sòng', meaning: 'дарить' },
            { char: '给', pinyin: 'gěi', meaning: 'давать' },
            { char: '借', pinyin: 'jiè', meaning: 'одалживать' },
            { char: '还', pinyin: 'huán', meaning: 'возвращать' },
            { char: '拿', pinyin: 'ná', meaning: 'брать' },
            { char: '放', pinyin: 'fàng', meaning: 'класть' },
            { char: '挂', pinyin: 'guà', meaning: 'вешать' },
            { char: '搬', pinyin: 'bān', meaning: 'переносить' },
            { char: '寄', pinyin: 'jì', meaning: 'отправлять' },
            { char: '洗', pinyin: 'xǐ', meaning: 'мыть' },
            { char: '换', pinyin: 'huàn', meaning: 'менять' },
            { char: '试', pinyin: 'shì', meaning: 'пробовать' },
            { char: '检', pinyin: 'jiǎn', meaning: 'проверять' },
            { char: '查', pinyin: 'chá', meaning: 'искать' },
            { char: '较', pinyin: 'jiào', meaning: 'сравнивать' },
            { char: '选', pinyin: 'xuǎn', meaning: 'выбирать' },
            { char: '择', pinyin: 'zé', meaning: 'выбирать' },
            { char: '决', pinyin: 'jué', meaning: 'решать' },
            { char: '定', pinyin: 'dìng', meaning: 'определять' },
            { char: '同', pinyin: 'tóng', meaning: 'одинаковый' },
            { char: '意', pinyin: 'yì', meaning: 'согласие' },
            { char: '参', pinyin: 'cān', meaning: 'участвовать' },
            { char: '加', pinyin: 'jiā', meaning: 'добавлять' },
            { char: '安', pinyin: 'ān', meaning: 'спокойный' },
            { char: '排', pinyin: 'pái', meaning: 'располагать' },
            { char: '计', pinyin: 'jì', meaning: 'считать' },
            { char: '划', pinyin: 'huà', meaning: 'планировать' },
            { char: '准', pinyin: 'zhǔn', meaning: 'точный' },
            { char: '备', pinyin: 'bèi', meaning: 'готовить' },
            { char: '完', pinyin: 'wán', meaning: 'законченный' },
            { char: '成', pinyin: 'chéng', meaning: 'становиться' },
            { char: '束', pinyin: 'shù', meaning: 'связка' },
            { char: '继', pinyin: 'jì', meaning: 'продолжать' },
            { char: '续', pinyin: 'xù', meaning: 'продолжать' },
            { char: '停', pinyin: 'tíng', meaning: 'останавливать' },
            { char: '止', pinyin: 'zhǐ', meaning: 'прекращать' },
            { char: '放', pinyin: 'fàng', meaning: 'отпускать' },
            { char: '弃', pinyin: 'qì', meaning: 'бросать' },
            { char: '坚', pinyin: 'jiān', meaning: 'твёрдый' },
            { char: '持', pinyin: 'chí', meaning: 'держать' },
            { char: '努', pinyin: 'nǔ', meaning: 'стараться' },
            { char: '力', pinyin: 'lì', meaning: 'сила' },
            { char: '练', pinyin: 'liàn', meaning: 'тренировать' },
            { char: '复', pinyin: 'fù', meaning: 'повторять' },
            { char: '预', pinyin: 'yù', meaning: 'заранее' },
            { char: '考', pinyin: 'kǎo', meaning: 'экзамен' },
            { char: '试', pinyin: 'shì', meaning: 'пробовать' },
            { char: '及', pinyin: 'jí', meaning: 'и' },
            { char: '格', pinyin: 'gé', meaning: 'стандарт' },
            { char: '毕', pinyin: 'bì', meaning: 'заканчивать' },
            { char: '业', pinyin: 'yè', meaning: 'профессия' },
            { char: '留', pinyin: 'liú', meaning: 'оставаться' },
            { char: '旅', pinyin: 'lǚ', meaning: 'путешествие' },
            { char: '游', pinyin: 'yóu', meaning: 'плавать' },
            { char: '参', pinyin: 'cān', meaning: 'посещать' },
            { char: '观', pinyin: 'guān', meaning: 'смотреть' },
            { char: '访', pinyin: 'fǎng', meaning: 'посещать' },
            { char: '邀', pinyin: 'yāo', meaning: 'приглашать' },
            { char: '请', pinyin: 'qǐng', meaning: 'просить' },
            { char: '庆', pinyin: 'qìng', meaning: 'праздновать' },
            { char: '祝', pinyin: 'zhù', meaning: 'желать' },
            { char: '贺', pinyin: 'hè', meaning: 'поздравлять' },
            { char: '歉', pinyin: 'qiàn', meaning: 'извиняться' },
            { char: '谅', pinyin: 'liàng', meaning: 'прощать' },
            { char: '原', pinyin: 'yuán', meaning: 'прощать' },
            { char: '谢', pinyin: 'xiè', meaning: 'благодарить' },
            { char: '抱', pinyin: 'bào', meaning: 'обнимать' },
            { char: '怨', pinyin: 'yuàn', meaning: 'жаловаться' },
            { char: '批', pinyin: 'pī', meaning: 'критиковать' },
            { char: '评', pinyin: 'píng', meaning: 'оценивать' },
            { char: '表', pinyin: 'biǎo', meaning: 'показывать' },
            { char: '扬', pinyin: 'yáng', meaning: 'хвалить' },
            { char: '鼓', pinyin: 'gǔ', meaning: 'барабан' },
            { char: '励', pinyin: 'lì', meaning: 'поощрять' },
            { char: '建', pinyin: 'jiàn', meaning: 'строить' },
            { char: '议', pinyin: 'yì', meaning: 'предложение' },
            { char: '提', pinyin: 'tí', meaning: 'поднимать' },
            { char: '醒', pinyin: 'xǐng', meaning: 'будить' },
            { char: '通', pinyin: 'tōng', meaning: 'сообщать' },
            { char: '知', pinyin: 'zhī', meaning: 'уведомлять' },
            { char: '告', pinyin: 'gào', meaning: 'сообщать' },
            { char: '诉', pinyin: 'sù', meaning: 'рассказывать' },
            { char: '解', pinyin: 'jiě', meaning: 'объяснять' },
            { char: '释', pinyin: 'shì', meaning: 'объяснять' },
            { char: '翻', pinyin: 'fān', meaning: 'переворачивать' },
            { char: '译', pinyin: 'yì', meaning: 'переводить' },
            { char: '介', pinyin: 'jiè', meaning: 'представлять' },
            { char: '绍', pinyin: 'shào', meaning: 'представлять' },
            { char: '描', pinyin: 'miáo', meaning: 'описывать' },
            { char: '述', pinyin: 'shù', meaning: 'рассказывать' },
            { char: '讨', pinyin: 'tǎo', meaning: 'обсуждать' },
            { char: '论', pinyin: 'lùn', meaning: 'обсуждать' },
            { char: '商', pinyin: 'shāng', meaning: 'торговать' },
            { char: '量', pinyin: 'liàng', meaning: 'измерять' }
        ]
    },

    hsk3_all: {
        name: "🥇 HSK 3 · Весь уровень",
        description: "Все ~300 иероглифов среднего уровня",
        group: "hsk",
        color: "#ffd700",
        items: [
            { char: '概', pinyin: 'gài', meaning: 'общий' },
            { char: '念', pinyin: 'niàn', meaning: 'мысль' },
            { char: '抽', pinyin: 'chōu', meaning: 'вытаскивать' },
            { char: '象', pinyin: 'xiàng', meaning: 'образ' },
            { char: '具', pinyin: 'jù', meaning: 'инструмент' },
            { char: '体', pinyin: 'tǐ', meaning: 'форма' },
            { char: '形', pinyin: 'xíng', meaning: 'форма' },
            { char: '式', pinyin: 'shì', meaning: 'стиль' },
            { char: '类', pinyin: 'lèi', meaning: 'категория' },
            { char: '型', pinyin: 'xíng', meaning: 'тип' },
            { char: '属', pinyin: 'shǔ', meaning: 'принадлежать' },
            { char: '性', pinyin: 'xìng', meaning: 'свойство' },
            { char: '质', pinyin: 'zhì', meaning: 'качество' },
            { char: '特', pinyin: 'tè', meaning: 'особый' },
            { char: '征', pinyin: 'zhēng', meaning: 'признак' },
            { char: '状', pinyin: 'zhuàng', meaning: 'состояние' },
            { char: '态', pinyin: 'tài', meaning: 'состояние' },
            { char: '情', pinyin: 'qíng', meaning: 'чувство' },
            { char: '绪', pinyin: 'xù', meaning: 'настроение' },
            { char: '态', pinyin: 'tài', meaning: 'отношение' },
            { char: '度', pinyin: 'dù', meaning: 'степень' },
            { char: '观', pinyin: 'guān', meaning: 'взгляд' },
            { char: '点', pinyin: 'diǎn', meaning: 'точка' },
            { char: '角', pinyin: 'jiǎo', meaning: 'угол' },
            { char: '方', pinyin: 'fāng', meaning: 'направление' },
            { char: '向', pinyin: 'xiàng', meaning: 'направление' },
            { char: '层', pinyin: 'céng', meaning: 'слой' },
            { char: '次', pinyin: 'cì', meaning: 'раз' },
            { char: '序', pinyin: 'xù', meaning: 'порядок' },
            { char: '列', pinyin: 'liè', meaning: 'ряд' },
            { char: '系', pinyin: 'xì', meaning: 'система' },
            { char: '统', pinyin: 'tǒng', meaning: 'система' },
            { char: '机', pinyin: 'jī', meaning: 'машина' },
            { char: '构', pinyin: 'gòu', meaning: 'структура' },
            { char: '组', pinyin: 'zǔ', meaning: 'группа' },
            { char: '织', pinyin: 'zhī', meaning: 'ткать' },
            { char: '部', pinyin: 'bù', meaning: 'часть' },
            { char: '门', pinyin: 'mén', meaning: 'отдел' },
            { char: '处', pinyin: 'chù', meaning: 'место' },
            { char: '所', pinyin: 'suǒ', meaning: 'место' },
            { char: '位', pinyin: 'wèi', meaning: 'позиция' },
            { char: '置', pinyin: 'zhì', meaning: 'размещать' },
            { char: '区', pinyin: 'qū', meaning: 'район' },
            { char: '域', pinyin: 'yù', meaning: 'область' },
            { char: '范', pinyin: 'fàn', meaning: 'образец' },
            { char: '围', pinyin: 'wéi', meaning: 'окружать' },
            { char: '界', pinyin: 'jiè', meaning: 'граница' },
            { char: '范', pinyin: 'fàn', meaning: 'границы' },
            { char: '规', pinyin: 'guī', meaning: 'правило' },
            { char: '律', pinyin: 'lǜ', meaning: 'закон' },
            { char: '原', pinyin: 'yuán', meaning: 'принцип' },
            { char: '则', pinyin: 'zé', meaning: 'правило' },
            { char: '标', pinyin: 'biāo', meaning: 'метка' },
            { char: '准', pinyin: 'zhǔn', meaning: 'стандарт' },
            { char: '尺', pinyin: 'chǐ', meaning: 'линейка' },
            { char: '寸', pinyin: 'cùn', meaning: 'дюйм' },
            { char: '斤', pinyin: 'jīn', meaning: 'цзинь' },
            { char: '克', pinyin: 'kè', meaning: 'грамм' },
            { char: '吨', pinyin: 'dūn', meaning: 'тонна' },
            { char: '米', pinyin: 'mǐ', meaning: 'метр' },
            { char: '厘', pinyin: 'lí', meaning: 'сантиметр' },
            { char: '毫', pinyin: 'háo', meaning: 'миллиметр' },
            { char: '秒', pinyin: 'miǎo', meaning: 'секунда' },
            { char: '周', pinyin: 'zhōu', meaning: 'неделя' },
            { char: '季', pinyin: 'jì', meaning: 'сезон' },
            { char: '代', pinyin: 'dài', meaning: 'поколение' },
            { char: '纪', pinyin: 'jì', meaning: 'эра' },
            { char: '纪', pinyin: 'jì', meaning: 'век' },
            { char: '初', pinyin: 'chū', meaning: 'начало' },
            { char: '末', pinyin: 'mò', meaning: 'конец' },
            { char: '终', pinyin: 'zhōng', meaning: 'финал' },
            { char: '始', pinyin: 'shǐ', meaning: 'начинать' },
            { char: '基', pinyin: 'jī', meaning: 'база' },
            { char: '础', pinyin: 'chǔ', meaning: 'основание' },
            { char: '根', pinyin: 'gēn', meaning: 'корень' },
            { char: '本', pinyin: 'běn', meaning: 'основа' },
            { char: '核', pinyin: 'hé', meaning: 'ядро' },
            { char: '心', pinyin: 'xīn', meaning: 'центр' },
            { char: '重', pinyin: 'zhòng', meaning: 'важный' },
            { char: '要', pinyin: 'yào', meaning: 'важный' },
            { char: '主', pinyin: 'zhǔ', meaning: 'главный' },
            { char: '次', pinyin: 'cì', meaning: 'второстепенный' },
            { char: '附', pinyin: 'fù', meaning: 'прилагать' },
            { char: '属', pinyin: 'shǔ', meaning: 'подчинённый' },
            { char: '依', pinyin: 'yī', meaning: 'полагаться' },
            { char: '靠', pinyin: 'kào', meaning: 'опираться' },
            { char: '赖', pinyin: 'lài', meaning: 'зависеть' },
            { char: '独', pinyin: 'dú', meaning: 'одинокий' },
            { char: '立', pinyin: 'lì', meaning: 'стоять' },
            { char: '自', pinyin: 'zì', meaning: 'сам' },
            { char: '由', pinyin: 'yóu', meaning: 'свобода' },
            { char: '权', pinyin: 'quán', meaning: 'право' },
            { char: '利', pinyin: 'lì', meaning: 'выгода' },
            { char: '益', pinyin: 'yì', meaning: 'польза' },
            { char: '好', pinyin: 'hǎo', meaning: 'хорошо' },
            { char: '处', pinyin: 'chù', meaning: 'место' },
            { char: '优', pinyin: 'yōu', meaning: 'превосходный' },
            { char: '势', pinyin: 'shì', meaning: 'сила' },
            { char: '劣', pinyin: 'liè', meaning: 'низкий' },
            { char: '弱', pinyin: 'ruò', meaning: 'слабый' },
            { char: '强', pinyin: 'qiáng', meaning: 'сильный' },
            { char: '壮', pinyin: 'zhuàng', meaning: 'крепкий' },
            { char: '健', pinyin: 'jiàn', meaning: 'здоровый' },
            { char: '康', pinyin: 'kāng', meaning: 'здоровье' },
            { char: '病', pinyin: 'bìng', meaning: 'болезнь' },
            { char: '疾', pinyin: 'jí', meaning: 'болезнь' },
            { char: '症', pinyin: 'zhèng', meaning: 'симптом' },
            { char: '状', pinyin: 'zhuàng', meaning: 'состояние' },
            { char: '医', pinyin: 'yī', meaning: 'медицина' },
            { char: '疗', pinyin: 'liáo', meaning: 'лечить' },
            { char: '治', pinyin: 'zhì', meaning: 'управлять' },
            { char: '药', pinyin: 'yào', meaning: 'лекарство' },
            { char: '剂', pinyin: 'jì', meaning: 'доза' },
            { char: '针', pinyin: 'zhēn', meaning: 'игла' },
            { char: '灸', pinyin: 'jiǔ', meaning: 'прижигание' },
            { char: '手', pinyin: 'shǒu', meaning: 'рука' },
            { char: '术', pinyin: 'shù', meaning: 'техника' },
            { char: '康', pinyin: 'kāng', meaning: 'здоровье' },
            { char: '复', pinyin: 'fù', meaning: 'восстановление' },
            { char: '预', pinyin: 'yù', meaning: 'предотвращать' },
            { char: '防', pinyin: 'fáng', meaning: 'защищать' },
            { char: '疫', pinyin: 'yì', meaning: 'эпидемия' },
            { char: '苗', pinyin: 'miáo', meaning: 'росток' },
            { char: '接', pinyin: 'jiē', meaning: 'принимать' },
            { char: '种', pinyin: 'zhòng', meaning: 'сажать' },
            { char: '免', pinyin: 'miǎn', meaning: 'избегать' },
            { char: '疫', pinyin: 'yì', meaning: 'иммунитет' },
            { char: '环', pinyin: 'huán', meaning: 'кольцо' },
            { char: '境', pinyin: 'jìng', meaning: 'территория' },
            { char: '污', pinyin: 'wū', meaning: 'грязный' },
            { char: '染', pinyin: 'rǎn', meaning: 'загрязнять' },
            { char: '保', pinyin: 'bǎo', meaning: 'защищать' },
            { char: '护', pinyin: 'hù', meaning: 'защищать' },
            { char: '生', pinyin: 'shēng', meaning: 'жизнь' },
            { char: '态', pinyin: 'tài', meaning: 'состояние' },
            { char: '平', pinyin: 'píng', meaning: 'мирный' },
            { char: '衡', pinyin: 'héng', meaning: 'баланс' },
            { char: '资', pinyin: 'zī', meaning: 'ресурс' },
            { char: '源', pinyin: 'yuán', meaning: 'источник' },
            { char: '能', pinyin: 'néng', meaning: 'энергия' },
            { char: '节', pinyin: 'jié', meaning: 'экономить' },
            { char: '约', pinyin: 'yuē', meaning: 'договор' },
            { char: '浪', pinyin: 'làng', meaning: 'волна' },
            { char: '费', pinyin: 'fèi', meaning: 'тратить' },
            { char: '消', pinyin: 'xiāo', meaning: 'исчезать' },
            { char: '耗', pinyin: 'hào', meaning: 'расход' },
            { char: '利', pinyin: 'lì', meaning: 'выгода' },
            { char: '用', pinyin: 'yòng', meaning: 'использовать' },
            { char: '效', pinyin: 'xiào', meaning: 'эффективность' },
            { char: '率', pinyin: 'lǜ', meaning: 'коэффициент' },
            { char: '质', pinyin: 'zhì', meaning: 'качество' },
            { char: '数', pinyin: 'shù', meaning: 'число' },
            { char: '据', pinyin: 'jù', meaning: 'данные' },
            { char: '统', pinyin: 'tǒng', meaning: 'обобщать' },
            { char: '计', pinyin: 'jì', meaning: 'подсчитывать' },
            { char: '分', pinyin: 'fēn', meaning: 'анализировать' },
            { char: '析', pinyin: 'xī', meaning: 'разбирать' },
            { char: '总', pinyin: 'zǒng', meaning: 'общий' },
            { char: '结', pinyin: 'jié', meaning: 'заключать' },
            { char: '归', pinyin: 'guī', meaning: 'возвращаться' },
            { char: '纳', pinyin: 'nà', meaning: 'принимать' },
            { char: '概', pinyin: 'gài', meaning: 'обобщать' },
            { char: '括', pinyin: 'kuò', meaning: 'включать' },
            { char: '综', pinyin: 'zōng', meaning: 'комплексный' },
            { char: '合', pinyin: 'hé', meaning: 'объединять' },
            { char: '整', pinyin: 'zhěng', meaning: 'целый' },
            { char: '齐', pinyin: 'qí', meaning: 'равный' },
            { char: '均', pinyin: 'jūn', meaning: 'равномерный' },
            { char: '匀', pinyin: 'yún', meaning: 'равный' },
            { char: '称', pinyin: 'chēng', meaning: 'называть' },
            { char: '号', pinyin: 'hào', meaning: 'номер' },
            { char: '码', pinyin: 'mǎ', meaning: 'код' },
            { char: '符', pinyin: 'fú', meaning: 'символ' },
            { char: '标', pinyin: 'biāo', meaning: 'знак' },
            { char: '志', pinyin: 'zhì', meaning: 'знак' },
            { char: '记', pinyin: 'jì', meaning: 'записывать' },
            { char: '录', pinyin: 'lù', meaning: 'записывать' },
            { char: '档', pinyin: 'dàng', meaning: 'документ' },
            { char: '案', pinyin: 'àn', meaning: 'дело' },
            { char: '卷', pinyin: 'juàn', meaning: 'рулон' },
            { char: '宗', pinyin: 'zōng', meaning: 'предок' },
            { char: '旨', pinyin: 'zhǐ', meaning: 'указ' },
            { char: '命', pinyin: 'mìng', meaning: 'жизнь' },
            { char: '令', pinyin: 'lìng', meaning: 'приказ' },
            { char: '指', pinyin: 'zhǐ', meaning: 'указывать' },
            { char: '示', pinyin: 'shì', meaning: 'показывать' },
            { char: '范', pinyin: 'fàn', meaning: 'образец' },
            { char: '围', pinyin: 'wéi', meaning: 'окружать' },
            { char: '约', pinyin: 'yuē', meaning: 'примерно' },
            { char: '束', pinyin: 'shù', meaning: 'ограничивать' },
            { char: '限', pinyin: 'xiàn', meaning: 'ограничение' },
            { char: '制', pinyin: 'zhì', meaning: 'контролировать' },
            { char: '控', pinyin: 'kòng', meaning: 'контроль' },
            { char: '支', pinyin: 'zhī', meaning: 'поддерживать' },
            { char: '配', pinyin: 'pèi', meaning: 'сопоставлять' },
            { char: '调', pinyin: 'diào', meaning: 'регулировать' },
            { char: '节', pinyin: 'jié', meaning: 'регулировать' },
            { char: '协', pinyin: 'xié', meaning: 'сотрудничать' },
            { char: '商', pinyin: 'shāng', meaning: 'консультироваться' },
            { char: '谈', pinyin: 'tán', meaning: 'беседовать' },
            { char: '判', pinyin: 'pàn', meaning: 'судить' },
            { char: '竞', pinyin: 'jìng', meaning: 'соревноваться' },
            { char: '争', pinyin: 'zhēng', meaning: 'бороться' },
            { char: '胜', pinyin: 'shèng', meaning: 'побеждать' },
            { char: '负', pinyin: 'fù', meaning: 'проигрывать' },
            { char: '赢', pinyin: 'yíng', meaning: 'выигрывать' },
            { char: '输', pinyin: 'shū', meaning: 'проигрывать' },
            { char: '功', pinyin: 'gōng', meaning: 'успех' },
            { char: '败', pinyin: 'bài', meaning: 'неудача' },
            { char: '进', pinyin: 'jìn', meaning: 'продвигаться' },
            { char: '步', pinyin: 'bù', meaning: 'шаг' },
            { char: '提', pinyin: 'tí', meaning: 'повышать' },
            { char: '降', pinyin: 'jiàng', meaning: 'опускать' },
            { char: '低', pinyin: 'dī', meaning: 'низкий' },
            { char: '增', pinyin: 'zēng', meaning: 'увеличивать' },
            { char: '减', pinyin: 'jiǎn', meaning: 'уменьшать' },
            { char: '扩', pinyin: 'kuò', meaning: 'расширять' },
            { char: '缩', pinyin: 'suō', meaning: 'сжимать' },
            { char: '展', pinyin: 'zhǎn', meaning: 'развивать' },
            { char: '创', pinyin: 'chuàng', meaning: 'создавать' },
            { char: '造', pinyin: 'zào', meaning: 'создавать' },
            { char: '发', pinyin: 'fā', meaning: 'развивать' },
            { char: '明', pinyin: 'míng', meaning: 'изобретать' },
            { char: '研', pinyin: 'yán', meaning: 'исследовать' },
            { char: '究', pinyin: 'jiū', meaning: 'изучать' },
            { char: '调', pinyin: 'diào', meaning: 'расследовать' },
            { char: '查', pinyin: 'chá', meaning: 'расследовать' }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // 📚 ТЕМТИЧЕСКИЕ КАТЕГОРИИ
    // ═══════════════════════════════════════════════════════════

    basics: {
        name: "🌱 Основы",
        description: "Самые частые иероглифы",
        group: "topic",
        items: [
            { char: '的', pinyin: 'de', meaning: 'притяж. частица' },
            { char: '我', pinyin: 'wǒ', meaning: 'я' },
            { char: '你', pinyin: 'nǐ', meaning: 'ты' },
            { char: '是', pinyin: 'shì', meaning: 'быть' },
            { char: '了', pinyin: 'le', meaning: 'завершённость' },
            { char: '不', pinyin: 'bù', meaning: 'не' },
            { char: '在', pinyin: 'zài', meaning: 'находиться' },
            { char: '他', pinyin: 'tā', meaning: 'он' },
            { char: '这', pinyin: 'zhè', meaning: 'этот' },
            { char: '中', pinyin: 'zhōng', meaning: 'середина' },
            { char: '大', pinyin: 'dà', meaning: 'большой' },
            { char: '来', pinyin: 'lái', meaning: 'приходить' },
            { char: '上', pinyin: 'shàng', meaning: 'верх' },
            { char: '个', pinyin: 'gè', meaning: 'сч. слово' },
            { char: '到', pinyin: 'dào', meaning: 'достигать' },
            { char: '说', pinyin: 'shuō', meaning: 'говорить' },
            { char: '们', pinyin: 'men', meaning: 'мн. число' },
            { char: '为', pinyin: 'wèi', meaning: 'для' },
            { char: '子', pinyin: 'zi', meaning: 'суффикс' },
            { char: '和', pinyin: 'hé', meaning: 'и' }
        ]
    },

    numbers: {
        name: "🔢 Числа",
        description: "Цифры и счёт",
        group: "topic",
        items: [
            { char: '一', pinyin: 'yī', meaning: 'один' },
            { char: '二', pinyin: 'èr', meaning: 'два' },
            { char: '三', pinyin: 'sān', meaning: 'три' },
            { char: '四', pinyin: 'sì', meaning: 'четыре' },
            { char: '五', pinyin: 'wǔ', meaning: 'пять' },
            { char: '六', pinyin: 'liù', meaning: 'шесть' },
            { char: '七', pinyin: 'qī', meaning: 'семь' },
            { char: '八', pinyin: 'bā', meaning: 'восемь' },
            { char: '九', pinyin: 'jiǔ', meaning: 'девять' },
            { char: '十', pinyin: 'shí', meaning: 'десять' },
            { char: '百', pinyin: 'bǎi', meaning: 'сто' },
            { char: '千', pinyin: 'qiān', meaning: 'тысяча' },
            { char: '两', pinyin: 'liǎng', meaning: 'два (с сч.сл.)' },
            { char: '零', pinyin: 'líng', meaning: 'ноль' },
            { char: '几', pinyin: 'jǐ', meaning: 'сколько?' },
            { char: '多', pinyin: 'duō', meaning: 'много' },
            { char: '少', pinyin: 'shǎo', meaning: 'мало' },
            { char: '半', pinyin: 'bàn', meaning: 'половина' }
        ]
    },

    family: {
        name: "👨‍👩‍👧 Семья",
        description: "Родственники и люди",
        group: "topic",
        items: [
            { char: '人', pinyin: 'rén', meaning: 'человек' },
            { char: '家', pinyin: 'jiā', meaning: 'семья' },
            { char: '爸', pinyin: 'bà', meaning: 'папа' },
            { char: '妈', pinyin: 'mā', meaning: 'мама' },
            { char: '父', pinyin: 'fù', meaning: 'отец' },
            { char: '母', pinyin: 'mǔ', meaning: 'мать' },
            { char: '儿', pinyin: 'ér', meaning: 'сын' },
            { char: '女', pinyin: 'nǚ', meaning: 'дочь' },
            { char: '哥', pinyin: 'gē', meaning: 'брат (ст.)' },
            { char: '姐', pinyin: 'jiě', meaning: 'сестра (ст.)' },
            { char: '弟', pinyin: 'dì', meaning: 'брат (мл.)' },
            { char: '妹', pinyin: 'mèi', meaning: 'сестра (мл.)' },
            { char: '夫', pinyin: 'fū', meaning: 'муж' },
            { char: '妻', pinyin: 'qī', meaning: 'жена' },
            { char: '孩', pinyin: 'hái', meaning: 'ребёнок' },
            { char: '她', pinyin: 'tā', meaning: 'она' },
            { char: '友', pinyin: 'yǒu', meaning: 'друг' }
        ]
    },

    time: {
        name: "🕐 Время",
        description: "Дни, часы, времена",
        group: "topic",
        items: [
            { char: '年', pinyin: 'nián', meaning: 'год' },
            { char: '月', pinyin: 'yuè', meaning: 'месяц' },
            { char: '日', pinyin: 'rì', meaning: 'день' },
            { char: '天', pinyin: 'tiān', meaning: 'день' },
            { char: '时', pinyin: 'shí', meaning: 'час' },
            { char: '分', pinyin: 'fēn', meaning: 'минута' },
            { char: '点', pinyin: 'diǎn', meaning: 'час (время)' },
            { char: '星', pinyin: 'xīng', meaning: 'звезда' },
            { char: '期', pinyin: 'qī', meaning: 'период' },
            { char: '今', pinyin: 'jīn', meaning: 'сегодня' },
            { char: '明', pinyin: 'míng', meaning: 'завтра' },
            { char: '昨', pinyin: 'zuó', meaning: 'вчера' },
            { char: '午', pinyin: 'wǔ', meaning: 'полдень' },
            { char: '早', pinyin: 'zǎo', meaning: 'утро' },
            { char: '晚', pinyin: 'wǎn', meaning: 'вечер' },
            { char: '现', pinyin: 'xiàn', meaning: 'сейчас' },
            { char: '候', pinyin: 'hòu', meaning: 'время' },
            { char: '刻', pinyin: 'kè', meaning: 'четверть часа' }
        ]
    },

    place: {
        name: "🧭 Место",
        description: "Где? Куда? Откуда?",
        group: "topic",
        items: [
            { char: '下', pinyin: 'xià', meaning: 'низ' },
            { char: '里', pinyin: 'lǐ', meaning: 'внутри' },
            { char: '前', pinyin: 'qián', meaning: 'перед' },
            { char: '后', pinyin: 'hòu', meaning: 'после' },
            { char: '外', pinyin: 'wài', meaning: 'снаружи' },
            { char: '面', pinyin: 'miàn', meaning: 'сторона' },
            { char: '边', pinyin: 'biān', meaning: 'край' },
            { char: '左', pinyin: 'zuǒ', meaning: 'левый' },
            { char: '右', pinyin: 'yòu', meaning: 'правый' },
            { char: '东', pinyin: 'dōng', meaning: 'восток' },
            { char: '西', pinyin: 'xī', meaning: 'запад' },
            { char: '南', pinyin: 'nán', meaning: 'юг' },
            { char: '北', pinyin: 'běi', meaning: 'север' },
            { char: '远', pinyin: 'yuǎn', meaning: 'далеко' },
            { char: '近', pinyin: 'jìn', meaning: 'близко' },
            { char: '旁', pinyin: 'páng', meaning: 'рядом' },
            { char: '国', pinyin: 'guó', meaning: 'страна' }
        ]
    },

    nature: {
        name: "🌤️ Природа",
        description: "Погода и стихии",
        group: "topic",
        items: [
            { char: '气', pinyin: 'qì', meaning: 'воздух' },
            { char: '雨', pinyin: 'yǔ', meaning: 'дождь' },
            { char: '雪', pinyin: 'xuě', meaning: 'снег' },
            { char: '风', pinyin: 'fēng', meaning: 'ветер' },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода' },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь' },
            { char: '山', pinyin: 'shān', meaning: 'гора' },
            { char: '海', pinyin: 'hǎi', meaning: 'море' },
            { char: '花', pinyin: 'huā', meaning: 'цветок' },
            { char: '草', pinyin: 'cǎo', meaning: 'трава' },
            { char: '树', pinyin: 'shù', meaning: 'дерево' },
            { char: '木', pinyin: 'mù', meaning: 'древесина' },
            { char: '阳', pinyin: 'yáng', meaning: 'солнце' },
            { char: '光', pinyin: 'guāng', meaning: 'свет' }
        ]
    },

    food: {
        name: "🍜 Еда",
        description: "Еда и напитки",
        group: "topic",
        items: [
            { char: '吃', pinyin: 'chī', meaning: 'есть' },
            { char: '喝', pinyin: 'hē', meaning: 'пить' },
            { char: '饭', pinyin: 'fàn', meaning: 'еда' },
            { char: '菜', pinyin: 'cài', meaning: 'блюдо' },
            { char: '茶', pinyin: 'chá', meaning: 'чай' },
            { char: '果', pinyin: 'guǒ', meaning: 'фрукт' },
            { char: '米', pinyin: 'mǐ', meaning: 'рис' },
            { char: '面', pinyin: 'miàn', meaning: 'лапша' },
            { char: '酒', pinyin: 'jiǔ', meaning: 'алкоголь' },
            { char: '奶', pinyin: 'nǎi', meaning: 'молоко' },
            { char: '蛋', pinyin: 'dàn', meaning: 'яйцо' },
            { char: '肉', pinyin: 'ròu', meaning: 'мясо' },
            { char: '鱼', pinyin: 'yú', meaning: 'рыба' },
            { char: '汤', pinyin: 'tāng', meaning: 'суп' },
            { char: '糖', pinyin: 'táng', meaning: 'сахар' }
        ]
    },

    verbs: {
        name: "🏃 Действия",
        description: "Глаголы",
        group: "topic",
        items: [
            { char: '看', pinyin: 'kàn', meaning: 'смотреть' },
            { char: '听', pinyin: 'tīng', meaning: 'слушать' },
            { char: '读', pinyin: 'dú', meaning: 'читать' },
            { char: '写', pinyin: 'xiě', meaning: 'писать' },
            { char: '做', pinyin: 'zuò', meaning: 'делать' },
            { char: '想', pinyin: 'xiǎng', meaning: 'думать' },
            { char: '要', pinyin: 'yào', meaning: 'хотеть' },
            { char: '会', pinyin: 'huì', meaning: 'уметь' },
            { char: '能', pinyin: 'néng', meaning: 'мочь' },
            { char: '可', pinyin: 'kě', meaning: 'можно' },
            { char: '去', pinyin: 'qù', meaning: 'идти' },
            { char: '回', pinyin: 'huí', meaning: 'возвращаться' },
            { char: '住', pinyin: 'zhù', meaning: 'жить' },
            { char: '坐', pinyin: 'zuò', meaning: 'сидеть' },
            { char: '走', pinyin: 'zǒu', meaning: 'идти пешком' },
            { char: '跑', pinyin: 'pǎo', meaning: 'бежать' },
            { char: '飞', pinyin: 'fēi', meaning: 'лететь' },
            { char: '叫', pinyin: 'jiào', meaning: 'звать' },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать' },
            { char: '睡', pinyin: 'shuì', meaning: 'спать' },
            { char: '买', pinyin: 'mǎi', meaning: 'покупать' },
            { char: '卖', pinyin: 'mài', meaning: 'продавать' },
            { char: '开', pinyin: 'kāi', meaning: 'открывать' },
            { char: '关', pinyin: 'guān', meaning: 'закрывать' },
            { char: '穿', pinyin: 'chuān', meaning: 'носить' },
            { char: '教', pinyin: 'jiào', meaning: 'учить' },
            { char: '起', pinyin: 'qǐ', meaning: 'вставать' }
        ]
    },

    study: {
        name: "📚 Учёба",
        description: "Школа и работа",
        group: "topic",
        items: [
            { char: '学', pinyin: 'xué', meaning: 'учиться' },
            { char: '生', pinyin: 'shēng', meaning: 'ученик' },
            { char: '老', pinyin: 'lǎo', meaning: 'старый' },
            { char: '师', pinyin: 'shī', meaning: 'учитель' },
            { char: '校', pinyin: 'xiào', meaning: 'школа' },
            { char: '班', pinyin: 'bān', meaning: 'класс' },
            { char: '工', pinyin: 'gōng', meaning: 'работа' },
            { char: '作', pinyin: 'zuò', meaning: 'делать' },
            { char: '医', pinyin: 'yī', meaning: 'врач' },
            { char: '院', pinyin: 'yuàn', meaning: 'больница' },
            { char: '店', pinyin: 'diàn', meaning: 'магазин' },
            { char: '公', pinyin: 'gōng', meaning: 'общественный' },
            { char: '司', pinyin: 'sī', meaning: 'компания' },
            { char: '课', pinyin: 'kè', meaning: 'урок' },
            { char: '习', pinyin: 'xí', meaning: 'практика' }
        ]
    },

    adjectives: {
        name: "🎨 Свойства",
        description: "Прилагательные",
        group: "topic",
        items: [
            { char: '好', pinyin: 'hǎo', meaning: 'хороший' },
            { char: '坏', pinyin: 'huài', meaning: 'плохой' },
            { char: '高', pinyin: 'gāo', meaning: 'высокий' },
            { char: '低', pinyin: 'dī', meaning: 'низкий' },
            { char: '长', pinyin: 'cháng', meaning: 'длинный' },
            { char: '短', pinyin: 'duǎn', meaning: 'короткий' },
            { char: '新', pinyin: 'xīn', meaning: 'новый' },
            { char: '旧', pinyin: 'jiù', meaning: 'старый (вещь)' },
            { char: '冷', pinyin: 'lěng', meaning: 'холодный' },
            { char: '热', pinyin: 'rè', meaning: 'горячий' },
            { char: '快', pinyin: 'kuài', meaning: 'быстрый' },
            { char: '慢', pinyin: 'màn', meaning: 'медленный' },
            { char: '忙', pinyin: 'máng', meaning: 'занятой' },
            { char: '累', pinyin: 'lèi', meaning: 'усталый' },
            { char: '兴', pinyin: 'xìng', meaning: 'интерес' },
            { char: '漂', pinyin: 'piào', meaning: 'красивый' },
            { char: '亮', pinyin: 'liàng', meaning: 'яркий' }
        ]
    },

    objects: {
        name: "🏠 Предметы",
        description: "Вещи вокруг нас",
        group: "topic",
        items: [
            { char: '书', pinyin: 'shū', meaning: 'книга' },
            { char: '本', pinyin: 'běn', meaning: 'тетрадь' },
            { char: '笔', pinyin: 'bǐ', meaning: 'ручка' },
            { char: '纸', pinyin: 'zhǐ', meaning: 'бумага' },
            { char: '桌', pinyin: 'zhuō', meaning: 'стол' },
            { char: '椅', pinyin: 'yǐ', meaning: 'стул' },
            { char: '门', pinyin: 'mén', meaning: 'дверь' },
            { char: '窗', pinyin: 'chuāng', meaning: 'окно' },
            { char: '车', pinyin: 'chē', meaning: 'машина' },
            { char: '船', pinyin: 'chuán', meaning: 'лодка' },
            { char: '机', pinyin: 'jī', meaning: 'аппарат' },
            { char: '话', pinyin: 'huà', meaning: 'речь' },
            { char: '名', pinyin: 'míng', meaning: 'имя' },
            { char: '电', pinyin: 'diàn', meaning: 'электричество' },
            { char: '视', pinyin: 'shì', meaning: 'видеть' },
            { char: '脑', pinyin: 'nǎo', meaning: 'мозг' },
            { char: '衣', pinyin: 'yī', meaning: 'одежда' },
            { char: '服', pinyin: 'fú', meaning: 'одежда' },
            { char: '鞋', pinyin: 'xié', meaning: 'обувь' },
            { char: '帽', pinyin: 'mào', meaning: 'шапка' },
            { char: '字', pinyin: 'zì', meaning: 'иероглиф' }
        ]
    },

    animals: {
        name: "🐾 Животные",
        description: "Представители фауны",
        group: "topic",
        items: [
            { char: '猫', pinyin: 'māo', meaning: 'кошка' },
            { char: '狗', pinyin: 'gǒu', meaning: 'собака' },
            { char: '鸟', pinyin: 'niǎo', meaning: 'птица' },
            { char: '马', pinyin: 'mǎ', meaning: 'лошадь' },
            { char: '牛', pinyin: 'niú', meaning: 'корова' },
            { char: '羊', pinyin: 'yáng', meaning: 'овца' },
            { char: '鸡', pinyin: 'jī', meaning: 'курица' },
            { char: '鸭', pinyin: 'yā', meaning: 'утка' },
            { char: '猪', pinyin: 'zhū', meaning: 'свинья' },
            { char: '龙', pinyin: 'lóng', meaning: 'дракон' },
            { char: '虫', pinyin: 'chóng', meaning: 'насекомое' }
        ]
    },

    colors: {
        name: "🎨 Цвета",
        description: "Краски мира",
        group: "topic",
        items: [
            { char: '红', pinyin: 'hóng', meaning: 'красный' },
            { char: '黄', pinyin: 'huáng', meaning: 'жёлтый' },
            { char: '蓝', pinyin: 'lán', meaning: 'синий' },
            { char: '绿', pinyin: 'lǜ', meaning: 'зелёный' },
            { char: '白', pinyin: 'bái', meaning: 'белый' },
            { char: '黑', pinyin: 'hēi', meaning: 'чёрный' }
        ]
    },

    body: {
        name: "🧍 Тело",
        description: "Части тела",
        group: "topic",
        items: [
            { char: '身', pinyin: 'shēn', meaning: 'тело' },
            { char: '体', pinyin: 'tǐ', meaning: 'форма' },
            { char: '头', pinyin: 'tóu', meaning: 'голова' },
            { char: '手', pinyin: 'shǒu', meaning: 'рука' },
            { char: '眼', pinyin: 'yǎn', meaning: 'глаз' },
            { char: '口', pinyin: 'kǒu', meaning: 'рот' },
            { char: '耳', pinyin: 'ěr', meaning: 'ухо' },
            { char: '心', pinyin: 'xīn', meaning: 'сердце' },
            { char: '脚', pinyin: 'jiǎo', meaning: 'стопа' },
            { char: '牙', pinyin: 'yá', meaning: 'зуб' },
            { char: '发', pinyin: 'fà', meaning: 'волосы' },
            { char: '鼻', pinyin: 'bí', meaning: 'нос' }
        ]
    }
};

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================
const HanziDB = {
    getAll: function() {
        const all = [];
        for (const key in HANZI_DATABASE) {
            all.push(...HANZI_DATABASE[key].items);
        }
        return all;
    },
    
    getCategory: function(categoryKey) {
        return HANZI_DATABASE[categoryKey]?.items || [];
    },
    
    getCategories: function() {
        return Object.keys(HANZI_DATABASE).map(key => ({
            key,
            name: HANZI_DATABASE[key].name,
            description: HANZI_DATABASE[key].description,
            group: HANZI_DATABASE[key].group || 'topic',
            color: HANZI_DATABASE[key].color,
            count: HANZI_DATABASE[key].items.length
        }));
    },
    
    getCategoriesByGroup: function() {
        const groups = { hsk: [], topic: [] };
        for (const key in HANZI_DATABASE) {
            const cat = HANZI_DATABASE[key];
            const group = cat.group || 'topic';
            groups[group].push({
                key,
                name: cat.name,
                description: cat.description,
                color: cat.color,
                count: cat.items.length
            });
        }
        return groups;
    },

    // 🔍 ПОИСК (добавлено)
    search: function(query) {
        if (!query) return [];
        const q = query.trim().toLowerCase();
        const results = [];
        const seen = new Set(); // для удаления дубликатов
        
        for (const catKey in HANZI_DATABASE) {
            const cat = HANZI_DATABASE[catKey];
            cat.items.forEach(item => {
                const uid = item.char + '|' + item.pinyin;
                if (seen.has(uid)) return;
                
                const matchesChar = item.char.includes(q);
                const matchesPinyin = item.pinyin.toLowerCase().includes(q);
                const matchesMeaning = item.meaning.toLowerCase().includes(q);
                
                if (matchesChar || matchesPinyin || matchesMeaning) {
                    let priority = 0;
                    if (item.char === q) priority = 3;
                    else if (matchesChar) priority = 2;
                    else if (item.pinyin.toLowerCase() === q) priority = 2;
                    else if (matchesPinyin) priority = 1;
                    
                    results.push({ ...item, category: catKey, priority });
                    seen.add(uid);
                }
            });
        }
        
        // Сортировка: по приоритету, затем по алфавиту пиньиня
        results.sort((a, b) => {
            if (b.priority !== a.priority) return b.priority - a.priority;
            return a.pinyin.localeCompare(b.pinyin);
        });
        
        return results;
    },

    shuffle: function(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    
    getRandomFromCategory: function(categoryKey, excludeChar = null) {
        const items = this.getCategory(categoryKey);
        const filtered = excludeChar ? items.filter(i => i.char !== excludeChar) : items;
        if (filtered.length === 0) return items[0];
        return filtered[Math.floor(Math.random() * filtered.length)];
    },
    
    findByChar: function(char) {
        for (const key in HANZI_DATABASE) {
            const found = HANZI_DATABASE[key].items.find(i => i.char === char);
            if (found) return { ...found, category: key };
        }
        return null;
    },
    
    getStats: function() {
        const categories = this.getCategories();
        const total = categories.reduce((sum, c) => sum + c.count, 0);
        const hsk = categories.filter(c => c.group === 'hsk').reduce((s, c) => s + c.count, 0);
        const topic = categories.filter(c => c.group === 'topic').reduce((s, c) => s + c.count, 0);
        return { 
            totalChars: total, 
            totalCategories: categories.length, 
            hskChars: hsk, 
            topicChars: topic, 
            categories 
        };
    }
};

// Экспорт в глобальную область
if (typeof window !== 'undefined') {
    window.HANZI_DATABASE = HANZI_DATABASE;
    window.HanziDB = HanziDB;
}

console.log(`📚 База загружена: ${HanziDB.getStats().totalChars} иероглифов в ${HanziDB.getStats().totalCategories} категориях`);
// ============================================================
// 📊 СИСТЕМА ПРОГРЕССА И ИНТЕРВАЛЬНОГО ПОВТОРЕНИЯ
// ============================================================
const HanziProgress = {
    STORAGE_KEY: 'hanzi_progress_v1',
    STREAK_KEY: 'hanzi_streak_v1',
    
    load: function() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch(e) { return {}; }
    },
    
    save: function(progress) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
    },
    
    get: function(char) {
        const progress = this.load();
        return progress[char] || {
            char: char, attempts: 0, successes: 0, mistakes: 0,
            bestAccuracy: 0, level: 0, nextReview: 0,
            lastSeen: 0, mastered: false
        };
    },
    
    recordSuccess: function(char, accuracy) {
        const progress = this.load();
        const data = this.get(char);
        data.attempts++;
        data.successes++;
        data.lastSeen = Date.now();
        if (accuracy > data.bestAccuracy) data.bestAccuracy = accuracy;
        if (accuracy >= 90) data.level = Math.min(5, data.level + 1);
        
        const intervals = [0, 24*3600*1000, 3*24*3600*1000, 7*24*3600*1000, 14*24*3600*1000, 30*24*3600*1000];
        data.nextReview = Date.now() + intervals[data.level];
        
        if (data.level >= 5 && data.successes >= 5) data.mastered = true;
        
        progress[char] = data;
        this.save(progress);
        this.updateStreak();
        return data;
    },
    
    recordMistake: function(char, mistakesCount) {
        const progress = this.load();
        const data = this.get(char);
        data.attempts++;
        data.mistakes += mistakesCount;
        data.lastSeen = Date.now();
        data.level = Math.max(0, data.level - 2);
        data.nextReview = Date.now();
        
        progress[char] = data;
        this.save(progress);
        return data;
    },
    
    getDueForReview: function(categoryKey) {
        const progress = this.load();
        const now = Date.now();
        const due = [];
        const items = categoryKey ? HanziDB.getCategory(categoryKey) : HanziDB.getAll();
        
        items.forEach(item => {
            const data = progress[item.char];
            if (!data) {
                due.push({ ...item, priority: 1, status: 'new' });
            } else if (data.nextReview <= now && !data.mastered) {
                const urgency = (now - data.nextReview) / (24 * 3600 * 1000);
                due.push({ ...item, priority: 2 + urgency, status: 'due', progress: data });
            }
        });
        due.sort((a, b) => b.priority - a.priority);
        return due;
    },
    
    getWeakSpots: function(limit) {
        limit = limit || 20;
        const progress = this.load();
        const weak = [];
        for (const char in progress) {
            const data = progress[char];
            if (data.attempts >= 2 && !data.mastered) {
                const accuracy = data.successes / data.attempts;
                if (accuracy < 0.8) {
                    const item = HanziDB.findByChar(char);
                    if (item) weak.push({ ...item, accuracy: accuracy, data: data });
                }
            }
        }
        weak.sort((a, b) => a.accuracy - b.accuracy);
        return weak.slice(0, limit);
    },
    
    getStats: function() {
        const progress = this.load();
        const chars = Object.values(progress);
        const totalAttempts = chars.reduce((s, c) => s + c.attempts, 0);
        const totalSuccesses = chars.reduce((s, c) => s + c.successes, 0);
        const mastered = chars.filter(c => c.mastered).length;
        const streak = this.getStreak();
        const dueCount = this.getDueForReview().filter(i => i.status === 'due').length;
        
        return {
            totalAttempts: totalAttempts,
            totalSuccesses: totalSuccesses,
            accuracy: totalAttempts > 0 ? Math.round((totalSuccesses / totalAttempts) * 100) : 0,
            mastered: mastered,
            streak: streak.current,
            bestStreak: streak.best,
            dueCount: dueCount
        };
    },
    
    getStreak: function() {
        try {
            const data = localStorage.getItem(this.STREAK_KEY);
            return data ? JSON.parse(data) : { current: 0, best: 0, lastDate: null };
        } catch(e) { return { current: 0, best: 0, lastDate: null }; }
    },
    
    updateStreak: function() {
        const streak = this.getStreak();
        const today = new Date().toDateString();
        if (streak.lastDate === today) return;
        
        const yesterday = new Date(Date.now() - 24 * 3600 * 1000).toDateString();
        if (streak.lastDate === yesterday) {
            streak.current++;
        } else if (!streak.lastDate) {
            streak.current = 1;
        } else {
            streak.current = 1;
        }
        streak.lastDate = today;
        if (streak.current > streak.best) streak.best = streak.current;
        localStorage.setItem(this.STREAK_KEY, JSON.stringify(streak));
    },
    
    reset: function() {
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.STREAK_KEY);
    }
};

// Экспорт HanziProgress в глобальную область
if (typeof window !== 'undefined') {
    window.HanziProgress = HanziProgress;
}

console.log(`📊 Система прогресса и интервального повторения загружена`);



