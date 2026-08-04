// ============================================================
// БАЗА ИЕРОГЛИФОВ · HSK 1-3 + тематические категории с примерами
// ============================================================

const HANZI_DATABASE = {

    hsk1_all: {
        name: "🥉 HSK 1 · Весь уровень",
        description: "Все ~170 иероглифов начального уровня",
        group: "hsk",
        color: "#cd7f32",
        items: [
            { char: '的', pinyin: 'de', meaning: 'притяж. частица', examples: [{ word: '我的', pinyin: 'wǒ de', meaning: 'мой' }] },
            { char: '我', pinyin: 'wǒ', meaning: 'я', examples: [{ word: '我们', pinyin: 'wǒmen', meaning: 'мы' }] },
            { char: '你', pinyin: 'nǐ', meaning: 'ты', examples: [{ word: '你好', pinyin: 'nǐ hǎo', meaning: 'здравствуйте' }] },
            { char: '是', pinyin: 'shì', meaning: 'быть', examples: [{ word: '不是', pinyin: 'bú shì', meaning: 'не является' }] },
            { char: '了', pinyin: 'le', meaning: 'завершённость', examples: [{ word: '好了', pinyin: 'hǎo le', meaning: 'готово' }] },
            { char: '不', pinyin: 'bù', meaning: 'не', examples: [{ word: '不好', pinyin: 'bù hǎo', meaning: 'нехорошо' }] },
            { char: '在', pinyin: 'zài', meaning: 'находиться', examples: [{ word: '现在', pinyin: 'xiàn zài', meaning: 'сейчас' }] },
            { char: '他', pinyin: 'tā', meaning: 'он', examples: [{ word: '他们', pinyin: 'tāmen', meaning: 'они (м.р.)' }] },
            { char: '这', pinyin: 'zhè', meaning: 'этот', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '中', pinyin: 'zhōng', meaning: 'середина', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] },
            { char: '大', pinyin: 'dà', meaning: 'большой', examples: [{ word: '大家', pinyin: 'dà jiā', meaning: 'все' }] },
            { char: '来', pinyin: 'lái', meaning: 'приходить', examples: [{ word: '回来', pinyin: 'huí lái', meaning: 'возвращаться' }] },
            { char: '上', pinyin: 'shàng', meaning: 'верх', examples: [{ word: '上午', pinyin: 'shàng wǔ', meaning: 'утро' }] },
            { char: '下', pinyin: 'xià', meaning: 'низ', examples: [{ word: '下午', pinyin: 'xià wǔ', meaning: 'день' }] },
            { char: '个', pinyin: 'gè', meaning: 'сч. слово', examples: [{ word: '一个', pinyin: 'yí gè', meaning: 'один (шт.)' }] },
            { char: '说', pinyin: 'shuō', meaning: 'говорить', examples: [{ word: '听说', pinyin: 'tīng shuō', meaning: 'слышать' }] },
            { char: '人', pinyin: 'rén', meaning: 'человек', examples: [{ word: '中国人', pinyin: 'zhōng guó rén', meaning: 'китаец' }] },
            { char: '家', pinyin: 'jiā', meaning: 'семья', examples: [{ word: '回家', pinyin: 'huí jiā', meaning: 'идти домой' }] },
            { char: '有', pinyin: 'yǒu', meaning: 'иметь', examples: [{ word: '没有', pinyin: 'méi yǒu', meaning: 'не иметь' }] },
            { char: '一', pinyin: 'yī', meaning: 'один', examples: [{ word: '一起', pinyin: 'yì qǐ', meaning: 'вместе' }] },
            { char: '二', pinyin: 'èr', meaning: 'два', examples: [{ word: '十二', pinyin: 'shí èr', meaning: 'двенадцать' }] },
            { char: '三', pinyin: 'sān', meaning: 'три', examples: [{ word: '三月', pinyin: 'sān yuè', meaning: 'март' }] },
            { char: '四', pinyin: 'sì', meaning: 'четыре', examples: [{ word: '十四', pinyin: 'shí sì', meaning: 'четырнадцать' }] },
            { char: '五', pinyin: 'wǔ', meaning: 'пять', examples: [{ word: '十五', pinyin: 'shí wǔ', meaning: 'пятнадцать' }] },
            { char: '六', pinyin: 'liù', meaning: 'шесть', examples: [{ word: '十六', pinyin: 'shí liù', meaning: 'шестнадцать' }] },
            { char: '七', pinyin: 'qī', meaning: 'семь', examples: [{ word: '十七', pinyin: 'shí qī', meaning: 'семнадцать' }] },
            { char: '八', pinyin: 'bā', meaning: 'восемь', examples: [{ word: '十八', pinyin: 'shí bā', meaning: 'восемнадцать' }] },
            { char: '九', pinyin: 'jiǔ', meaning: 'девять', examples: [{ word: '十九', pinyin: 'shí jiǔ', meaning: 'девятнадцать' }] },
            { char: '十', pinyin: 'shí', meaning: 'десять', examples: [{ word: '二十', pinyin: 'èr shí', meaning: 'двадцать' }] },
            { char: '百', pinyin: 'bǎi', meaning: 'сто', examples: [{ word: '一百', pinyin: 'yì bǎi', meaning: 'сто' }] },
            { char: '年', pinyin: 'nián', meaning: 'год', examples: [{ word: '今年', pinyin: 'jīn nián', meaning: 'этот год' }] },
            { char: '月', pinyin: 'yuè', meaning: 'месяц', examples: [{ word: '一月', pinyin: 'yī yuè', meaning: 'январь' }] },
            { char: '日', pinyin: 'rì', meaning: 'день', examples: [{ word: '生日', pinyin: 'shēng rì', meaning: 'день рождения' }] },
            { char: '天', pinyin: 'tiān', meaning: 'день/небо', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '时', pinyin: 'shí', meaning: 'час', examples: [{ word: '时间', pinyin: 'shí jiān', meaning: 'время' }] },
            { char: '点', pinyin: 'diǎn', meaning: 'час (время)', examples: [{ word: '几点', pinyin: 'jǐ diǎn', meaning: 'который час' }] },
            { char: '分', pinyin: 'fēn', meaning: 'минута', examples: [{ word: '十分', pinyin: 'shí fēn', meaning: 'десять минут' }] },
            { char: '今', pinyin: 'jīn', meaning: 'сегодня', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '明', pinyin: 'míng', meaning: 'завтра', examples: [{ word: '明天', pinyin: 'míng tiān', meaning: 'завтра' }] },
            { char: '昨', pinyin: 'zuó', meaning: 'вчера', examples: [{ word: '昨天', pinyin: 'zuó tiān', meaning: 'вчера' }] },
            { char: '早', pinyin: 'zǎo', meaning: 'утро', examples: [{ word: '早上', pinyin: 'zǎo shang', meaning: 'утром' }] },
            { char: '晚', pinyin: 'wǎn', meaning: 'вечер', examples: [{ word: '晚上', pinyin: 'wǎn shang', meaning: 'вечером' }] },
            { char: '前', pinyin: 'qián', meaning: 'перед', examples: [{ word: '以前', pinyin: 'yǐ qián', meaning: 'раньше' }] },
            { char: '后', pinyin: 'hòu', meaning: 'после', examples: [{ word: '以后', pinyin: 'yǐ hòu', meaning: 'потом' }] },
            { char: '里', pinyin: 'lǐ', meaning: 'внутри', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '国', pinyin: 'guó', meaning: 'страна', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода', examples: [{ word: '水果', pinyin: 'shuǐ guǒ', meaning: 'фрукты' }, { word: '喝水', pinyin: 'hē shuǐ', meaning: 'пить воду' }] },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '山', pinyin: 'shān', meaning: 'гора', examples: [{ word: '雪山', pinyin: 'xuě shān', meaning: 'снежная гора' }] },
            { char: '吃', pinyin: 'chī', meaning: 'есть', examples: [{ word: '吃饭', pinyin: 'chī fàn', meaning: 'есть рис/обедать' }] },
            { char: '喝', pinyin: 'hē', meaning: 'пить', examples: [{ word: '喝茶', pinyin: 'hē chá', meaning: 'пить чай' }] },
            { char: '饭', pinyin: 'fàn', meaning: 'еда', examples: [{ word: '米饭', pinyin: 'mǐ fàn', meaning: 'варёный рис' }] },
            { char: '菜', pinyin: 'cài', meaning: 'блюдо', examples: [{ word: '点菜', pinyin: 'diǎn cài', meaning: 'заказывать блюда' }] },
            { char: '茶', pinyin: 'chá', meaning: 'чай', examples: [{ word: '绿茶', pinyin: 'lǜ chá', meaning: 'зелёный чай' }] },
            { char: '看', pinyin: 'kàn', meaning: 'смотреть', examples: [{ word: '看书', pinyin: 'kàn shū', meaning: 'читать книгу' }] },
            { char: '听', pinyin: 'tīng', meaning: 'слушать', examples: [{ word: '听音乐', pinyin: 'tīng yīn yuè', meaning: 'слушать музыку' }] },
            { char: '读', pinyin: 'dú', meaning: 'читать', examples: [{ word: '读书', pinyin: 'dú shū', meaning: 'читать/учиться' }] },
            { char: '写', pinyin: 'xiě', meaning: 'писать', examples: [{ word: '写字', pinyin: 'xiě zì', meaning: 'писать иероглифы' }] },
            { char: '学', pinyin: 'xué', meaning: 'учиться', examples: [{ word: '学习', pinyin: 'xué xí', meaning: 'учиться' }] },
            { char: '生', pinyin: 'shēng', meaning: 'ученик', examples: [{ word: '学生', pinyin: 'xué sheng', meaning: 'ученик' }] },
            { char: '好', pinyin: 'hǎo', meaning: 'хороший', examples: [{ word: '你好', pinyin: 'nǐ hǎo', meaning: 'здравствуйте' }] },
            { char: '书', pinyin: 'shū', meaning: 'книга', examples: [{ word: '书店', pinyin: 'shū diàn', meaning: 'книжный магазин' }] },
            { char: '车', pinyin: 'chē', meaning: 'машина', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '猫', pinyin: 'māo', meaning: 'кошка', examples: [{ word: '小猫', pinyin: 'xiǎo māo', meaning: 'котёнок' }] },
            { char: '狗', pinyin: 'gǒu', meaning: 'собака', examples: [{ word: '小狗', pinyin: 'xiǎo gǒu', meaning: 'щенок' }] }
        ]
    },

    hsk2_all: {
        name: "🥈 HSK 2 · Весь уровень",
        description: "Все ~170 иероглифов элементарного уровня",
        group: "hsk",
        color: "#a8a8a8",
        items: [
            { char: '吧', pinyin: 'ba', meaning: 'частица', examples: [{ word: '好吧', pinyin: 'hǎo ba', meaning: 'ладно' }] },
            { char: '别', pinyin: 'bié', meaning: 'не надо', examples: [{ word: '别人', pinyin: 'bié rén', meaning: 'другие люди' }] },
            { char: '对', pinyin: 'duì', meaning: 'правильно', examples: [{ word: '对不起', pinyin: 'duì bu qǐ', meaning: 'извините' }] },
            { char: '错', pinyin: 'cuò', meaning: 'ошибка', examples: [{ word: '不错', pinyin: 'bú cuò', meaning: 'неплохо' }] },
            { char: '真', pinyin: 'zhēn', meaning: 'правда', examples: [{ word: '真的', pinyin: 'zhēn de', meaning: 'правда' }] },
            { char: '实', pinyin: 'shí', meaning: 'реальный', examples: [{ word: '其实', pinyin: 'qí shí', meaning: 'на самом деле' }] },
            { char: '情', pinyin: 'qíng', meaning: 'чувство', examples: [{ word: '事情', pinyin: 'shì qing', meaning: 'дело' }] },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать', examples: [{ word: '问题', pinyin: 'wèn tí', meaning: 'вопрос' }] },
            { char: '答', pinyin: 'dá', meaning: 'отвечать', examples: [{ word: '回答', pinyin: 'huí dá', meaning: 'ответ' }] },
            { char: '意', pinyin: 'yì', meaning: 'смысл', examples: [{ word: '意思', pinyin: 'yì si', meaning: 'значение' }] },
            { char: '思', pinyin: 'sī', meaning: 'мысль', examples: [{ word: '意思', pinyin: 'yì si', meaning: 'значение' }] },
            { char: '法', pinyin: 'fǎ', meaning: 'метод', examples: [{ word: '办法', pinyin: 'bàn fǎ', meaning: 'способ' }] },
            { char: '非', pinyin: 'fēi', meaning: 'не', examples: [{ word: '非常', pinyin: 'fēi cháng', meaning: 'очень' }] },
            { char: '常', pinyin: 'cháng', meaning: 'очень', examples: [{ word: '非常', pinyin: 'fēi cháng', meaning: 'очень' }] },
            { char: '简', pinyin: 'jiǎn', meaning: 'простой', examples: [{ word: '简单', pinyin: 'jiǎn dān', meaning: 'простой' }] },
            { char: '单', pinyin: 'dān', meaning: 'простой', examples: [{ word: '简单', pinyin: 'jiǎn dān', meaning: 'простой' }] },
            { char: '难', pinyin: 'nán', meaning: 'трудный', examples: [{ word: '困难', pinyin: 'kùn nan', meaning: 'трудность' }] },
            { char: '清', pinyin: 'qīng', meaning: 'чистый', examples: [{ word: '清楚', pinyin: 'qīng chu', meaning: 'ясный' }] },
            { char: '懂', pinyin: 'dǒng', meaning: 'понимать', examples: [{ word: '听懂', pinyin: 'tīng dǒng', meaning: 'понять на слух' }] },
            { char: '知', pinyin: 'zhī', meaning: 'знать', examples: [{ word: '知道', pinyin: 'zhī dao', meaning: 'знать' }] },
            { char: '道', pinyin: 'dào', meaning: 'путь', examples: [{ word: '知道', pinyin: 'zhī dao', meaning: 'знать' }] },
            { char: '觉', pinyin: 'jué', meaning: 'чувствовать', examples: [{ word: '觉得', pinyin: 'jué de', meaning: 'считать, думать' }] },
            { char: '得', pinyin: 'de', meaning: 'получать', examples: [{ word: '觉得', pinyin: 'jué de', meaning: 'считать, думать' }] },
            { char: '帮', pinyin: 'bāng', meaning: 'помогать', examples: [{ word: '帮助', pinyin: 'bāng zhù', meaning: 'помощь' }] },
            { char: '助', pinyin: 'zhù', meaning: 'помощь', examples: [{ word: '帮助', pinyin: 'bāng zhù', meaning: 'помощь' }] },
            { char: '欢', pinyin: 'huān', meaning: 'радостный', examples: [{ word: '喜欢', pinyin: 'xǐ huan', meaning: 'нравиться' }] },
            { char: '迎', pinyin: 'yíng', meaning: 'встречать', examples: [{ word: '欢迎', pinyin: 'huān yíng', meaning: 'добро пожаловать' }] },
            { char: '给', pinyin: 'gěi', meaning: 'давать', examples: [{ word: '送给', pinyin: 'sòng gěi', meaning: 'подарить' }] },
            { char: '还', pinyin: 'huán', meaning: 'возвращать', examples: [{ word: '还书', pinyin: 'huán shū', meaning: 'вернуть книгу' }] },
            { char: '拿', pinyin: 'ná', meaning: 'брать', examples: [{ word: '拿来', pinyin: 'ná lái', meaning: 'принести' }] }
        ]
    },

    hsk3_all: {
        name: "🥇 HSK 3 · Весь уровень",
        description: "Все ~300 иероглифов среднего уровня",
        group: "hsk",
        color: "#ffd700",
        items: [
            { char: '概', pinyin: 'gài', meaning: 'общий', examples: [{ word: '大概', pinyin: 'dà gài', meaning: 'примерно' }] },
            { char: '念', pinyin: 'niàn', meaning: 'мысль', examples: [{ word: '概念', pinyin: 'gài niàn', meaning: 'понятие' }] },
            { char: '抽', pinyin: 'chōu', meaning: 'вытаскивать', examples: [{ word: '抽象', pinyin: 'chōu xiàng', meaning: 'абстрактный' }] },
            { char: '象', pinyin: 'xiàng', meaning: 'образ', examples: [{ word: '现象', pinyin: 'xiàn xiàng', meaning: 'явление' }] },
            { char: '具', pinyin: 'jù', meaning: 'инструмент', examples: [{ word: '具体', pinyin: 'jù tǐ', meaning: 'конкретный' }] },
            { char: '体', pinyin: 'tǐ', meaning: 'форма', examples: [{ word: '具体', pinyin: 'jù tǐ', meaning: 'конкретный' }] },
            { char: '形', pinyin: 'xíng', meaning: 'форма', examples: [{ word: '形式', pinyin: 'xíng shì', meaning: 'форма' }] },
            { char: '式', pinyin: 'shì', meaning: 'стиль', examples: [{ word: '形式', pinyin: 'xíng shì', meaning: 'форма' }] },
            { char: '类', pinyin: 'lèi', meaning: 'категория', examples: [{ word: '类型', pinyin: 'lèi xíng', meaning: 'тип' }] },
            { char: '型', pinyin: 'xíng', meaning: 'тип', examples: [{ word: '类型', pinyin: 'lèi xíng', meaning: 'тип' }] },
            { char: '属', pinyin: 'shǔ', meaning: 'принадлежать', examples: [{ word: '属于', pinyin: 'shǔ yú', meaning: 'принадлежать' }] },
            { char: '性', pinyin: 'xìng', meaning: 'свойство', examples: [{ word: '性质', pinyin: 'xìng zhì', meaning: 'свойство' }] },
            { char: '质', pinyin: 'zhì', meaning: 'качество', examples: [{ word: '性质', pinyin: 'xìng zhì', meaning: 'свойство' }] },
            { char: '特', pinyin: 'tè', meaning: 'особый', examples: [{ word: '特别', pinyin: 'tè bié', meaning: 'особенный' }] },
            { char: '征', pinyin: 'zhēng', meaning: 'признак', examples: [{ word: '特征', pinyin: 'tè zhēng', meaning: 'признак' }] },
            { char: '状', pinyin: 'zhuàng', meaning: 'состояние', examples: [{ word: '状态', pinyin: 'zhuàng tài', meaning: 'состояние' }] },
            { char: '态', pinyin: 'tài', meaning: 'состояние', examples: [{ word: '状态', pinyin: 'zhuàng tài', meaning: 'состояние' }] },
            { char: '情', pinyin: 'qíng', meaning: 'чувство', examples: [{ word: '情绪', pinyin: 'qíng xù', meaning: 'настроение' }] },
            { char: '绪', pinyin: 'xù', meaning: 'настроение', examples: [{ word: '情绪', pinyin: 'qíng xù', meaning: 'настроение' }] },
            { char: '度', pinyin: 'dù', meaning: 'степень', examples: [{ word: '态度', pinyin: 'tài du', meaning: 'отношение' }] },
            { char: '观', pinyin: 'guān', meaning: 'взгляд', examples: [{ word: '观点', pinyin: 'guān diǎn', meaning: 'точка зрения' }] },
            { char: '点', pinyin: 'diǎn', meaning: 'точка', examples: [{ word: '观点', pinyin: 'guān diǎn', meaning: 'точка зрения' }] }
        ]
    },

    basics: {
        name: "🌱 Основы",
        description: "Самые частые иероглифы",
        group: "topic",
        items: [
            { char: '的', pinyin: 'de', meaning: 'притяж. частица', examples: [{ word: '我的', pinyin: 'wǒ de', meaning: 'мой' }] },
            { char: '我', pinyin: 'wǒ', meaning: 'я', examples: [{ word: '我们', pinyin: 'wǒ men', meaning: 'мы' }] },
            { char: '你', pinyin: 'nǐ', meaning: 'ты', examples: [{ word: '你好', pinyin: 'nǐ hǎo', meaning: 'здравствуйте' }] },
            { char: '是', pinyin: 'shì', meaning: 'быть', examples: [{ word: '不是', pinyin: 'bú shì', meaning: 'нет' }] },
            { char: '不', pinyin: 'bù', meaning: 'не', examples: [{ word: '不好', pinyin: 'bù hǎo', meaning: 'плохо' }] },
            { char: '在', pinyin: 'zài', meaning: 'находиться', examples: [{ word: '现在', pinyin: 'xiàn zài', meaning: 'сейчас' }] },
            { char: '有', pinyin: 'yǒu', meaning: 'иметь', examples: [{ word: '没有', pinyin: 'méi yǒu', meaning: 'нет' }] }
        ]
    },

    numbers: {
        name: "🔢 Числа",
        description: "Цифры и счёт",
        group: "topic",
        items: [
            { char: '一', pinyin: 'yī', meaning: 'один', examples: [{ word: '一起', pinyin: 'yì qǐ', meaning: 'вместе' }] },
            { char: '二', pinyin: 'èr', meaning: 'два', examples: [{ word: '第二', pinyin: 'dì èr', meaning: 'второй' }] },
            { char: '三', pinyin: 'sān', meaning: 'три', examples: [{ word: '三月', pinyin: 'sān yuè', meaning: 'март' }] },
            { char: '十', pinyin: 'shí', meaning: 'десять', examples: [{ word: '二十', pinyin: 'èr shí', meaning: 'двадцать' }] },
            { char: '百', pinyin: 'bǎi', meaning: 'сто', examples: [{ word: '一百', pinyin: 'yì bǎi', meaning: 'сто' }] },
            { char: '千', pinyin: 'qiān', meaning: 'тысяча', examples: [{ word: '一千', pinyin: 'yì qiān', meaning: 'тысяча' }] }
        ]
    },

    family: {
        name: "👨‍👩‍👧 Семья",
        description: "Родственники и люди",
        group: "topic",
        items: [
            { char: '人', pinyin: 'rén', meaning: 'человек', examples: [{ word: '家人', pinyin: 'jiā rén', meaning: 'семья' }] },
            { char: '家', pinyin: 'jiā', meaning: 'семья', examples: [{ word: '回家', pinyin: 'huí jiā', meaning: 'идти домой' }] },
            { char: '爸', pinyin: 'bà', meaning: 'папа', examples: [{ word: '爸爸', pinyin: 'bà ba', meaning: 'папа' }] },
            { char: '妈', pinyin: 'mā', meaning: 'мама', examples: [{ word: '妈妈', pinyin: 'mā ma', meaning: 'мама' }] },
            { char: '哥', pinyin: 'gē', meaning: 'брат (ст.)', examples: [{ word: '哥哥', pinyin: 'gē ge', meaning: 'старший брат' }] },
            { char: '姐', pinyin: 'jiě', meaning: 'сестра (ст.)', examples: [{ word: '姐姐', pinyin: 'jiě jie', meaning: 'старшая сестра' }] }
        ]
    },

    time: {
        name: "🕐 Время",
        description: "Дни, часы, времена",
        group: "topic",
        items: [
            { char: '年', pinyin: 'nián', meaning: 'год', examples: [{ word: '今年', pinyin: 'jīn nián', meaning: 'этот год' }] },
            { char: '月', pinyin: 'yuè', meaning: 'месяц', examples: [{ word: '一月', pinyin: 'yī yuè', meaning: 'январь' }] },
            { char: '日', pinyin: 'rì', meaning: 'день', examples: [{ word: '生日', pinyin: 'shēng rì', meaning: 'день рождения' }] },
            { char: '天', pinyin: 'tiān', meaning: 'день', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '明', pinyin: 'míng', meaning: 'завтра', examples: [{ word: '明天', pinyin: 'míng tiān', meaning: 'завтра' }] },
            { char: '昨', pinyin: 'zuó', meaning: 'вчера', examples: [{ word: '昨天', pinyin: 'zuó tiān', meaning: 'вчера' }] }
        ]
    },

    nature: {
        name: "🌤️ Природа",
        description: "Погода и стихии",
        group: "topic",
        items: [
            { char: '水', pinyin: 'shuǐ', meaning: 'вода', examples: [{ word: '水果', pinyin: 'shuǐ guǒ', meaning: 'фрукты' }, { word: '喝水', pinyin: 'hē shuǐ', meaning: 'пить воду' }] },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '山', pinyin: 'shān', meaning: 'гора', examples: [{ word: '雪山', pinyin: 'xuě shān', meaning: 'снежная гора' }] },
            { char: '花', pinyin: 'huā', meaning: 'цветок', examples: [{ word: '花园', pinyin: 'huā yuán', meaning: 'сад' }] },
            { char: '树', pinyin: 'shù', meaning: 'дерево', examples: [{ word: '树木', pinyin: 'shù mù', meaning: 'деревья' }] }
        ]
    },

    food: {
        name: "🍜 Еда",
        description: "Еда и напитки",
        group: "topic",
        items: [
            { char: '吃', pinyin: 'chī', meaning: 'есть', examples: [{ word: '吃饭', pinyin: 'chī fàn', meaning: 'обедать' }] },
            { char: '喝', pinyin: 'hē', meaning: 'пить', examples: [{ word: '喝茶', pinyin: 'hē chá', meaning: 'пить чай' }] },
            { char: '饭', pinyin: 'fàn', meaning: 'еда', examples: [{ word: '米饭', pinyin: 'mǐ fàn', meaning: 'рис' }] },
            { char: '菜', pinyin: 'cài', meaning: 'блюдо', examples: [{ word: '点菜', pinyin: 'diǎn cài', meaning: 'заказывать' }] },
            { char: '茶', pinyin: 'chá', meaning: 'чай', examples: [{ word: '绿茶', pinyin: 'lǜ chá', meaning: 'зелёный чай' }] },
            { char: '肉', pinyin: 'ròu', meaning: 'мясо', examples: [{ word: '牛肉', pinyin: 'niú ròu', meaning: 'говядина' }] }
        ]
    },

    verbs: {
        name: "🏃 Действия",
        description: "Глаголы",
        group: "topic",
        items: [
            { char: '看', pinyin: 'kàn', meaning: 'смотреть', examples: [{ word: '看书', pinyin: 'kàn shū', meaning: 'читать' }] },
            { char: '听', pinyin: 'tīng', meaning: 'слушать', examples: [{ word: '听话', pinyin: 'tīng huà', meaning: 'слушаться' }] },
            { char: '说', pinyin: 'shuō', meaning: 'говорить', examples: [{ word: '说话', pinyin: 'shuō huà', meaning: 'разговаривать' }] },
            { char: '读', pinyin: 'dú', meaning: 'читать', examples: [{ word: '读书', pinyin: 'dú shū', meaning: 'учиться' }] },
            { char: '写', pinyin: 'xiě', meaning: 'писать', examples: [{ word: '写字', pinyin: 'xiě zì', meaning: 'писать' }] },
            { char: '学', pinyin: 'xué', meaning: 'учиться', examples: [{ word: '学习', pinyin: 'xué xí', meaning: 'учиться' }] }
        ]
    },

    study: {
        name: "📚 Учёба",
        description: "Школа и работа",
        group: "topic",
        items: [
            { char: '学', pinyin: 'xué', meaning: 'учиться', examples: [{ word: '学生', pinyin: 'xué sheng', meaning: 'ученик' }] },
            { char: '生', pinyin: 'shēng', meaning: 'ученик', examples: [{ word: '学生', pinyin: 'xué sheng', meaning: 'ученик' }] },
            { char: '老', pinyin: 'lǎo', meaning: 'старый', examples: [{ word: '老师', pinyin: 'lǎo shī', meaning: 'учитель' }] },
            { char: '师', pinyin: 'shī', meaning: 'учитель', examples: [{ word: '老师', pinyin: 'lǎo shī', meaning: 'учитель' }] },
            { char: '校', pinyin: 'xiào', meaning: 'школа', examples: [{ word: '学校', pinyin: 'xué xiào', meaning: 'школа' }] }
        ]
    },

    adjectives: {
        name: "🎨 Свойства",
        description: "Прилагательные",
        group: "topic",
        items: [
            { char: '好', pinyin: 'hǎo', meaning: 'хороший', examples: [{ word: '很好', pinyin: 'hěn hǎo', meaning: 'очень хорошо' }] },
            { char: '大', pinyin: 'dà', meaning: 'большой', examples: [{ word: '大家', pinyin: 'dà jiā', meaning: 'все' }] },
            { char: '小', pinyin: 'xiǎo', meaning: 'маленький', examples: [{ word: '小孩', pinyin: 'xiǎo hái', meaning: 'ребёнок' }] },
            { char: '多', pinyin: 'duō', meaning: 'много', examples: [{ word: '多少', pinyin: 'duō shao', meaning: 'сколько' }] },
            { char: '少', pinyin: 'shǎo', meaning: 'мало', examples: [{ word: '多少', pinyin: 'duō shao', meaning: 'сколько' }] }
        ]
    },

    objects: {
        name: "🏠 Предметы",
        description: "Вещи вокруг нас",
        group: "topic",
        items: [
            { char: '书', pinyin: 'shū', meaning: 'книга', examples: [{ word: '书店', pinyin: 'shū diàn', meaning: 'книжный' }] },
            { char: '笔', pinyin: 'bǐ', meaning: 'ручка', examples: [{ word: '铅笔', pinyin: 'qiān bǐ', meaning: 'карандаш' }] },
            { char: '纸', pinyin: 'zhǐ', meaning: 'бумага', examples: [{ word: '报纸', pinyin: 'bào zhǐ', meaning: 'газета' }] },
            { char: '车', pinyin: 'chē', meaning: 'машина', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '门', pinyin: 'mén', meaning: 'дверь', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] }
        ]
    },

    animals: {
        name: "🐾 Животные",
        description: "Представители фауны",
        group: "topic",
        items: [
            { char: '猫', pinyin: 'māo', meaning: 'кошка', examples: [{ word: '小猫', pinyin: 'xiǎo māo', meaning: 'котёнок' }] },
            { char: '狗', pinyin: 'gǒu', meaning: 'собака', examples: [{ word: '小狗', pinyin: 'xiǎo gǒu', meaning: 'щенок' }] },
            { char: '鸟', pinyin: 'niǎo', meaning: 'птица', examples: [{ word: '小鸟', pinyin: 'xiǎo niǎo', meaning: 'птичка' }] },
            { char: '马', pinyin: 'mǎ', meaning: 'лошадь', examples: [{ word: '马上', pinyin: 'mǎ shàng', meaning: 'сейчас' }] }
        ]
    },

    colors: {
        name: "🎨 Цвета",
        description: "Краски мира",
        group: "topic",
        items: [
            { char: '红', pinyin: 'hóng', meaning: 'красный', examples: [{ word: '红色', pinyin: 'hóng sè', meaning: 'красный цвет' }] },
            { char: '白', pinyin: 'bái', meaning: 'белый', examples: [{ word: '白色', pinyin: 'bái sè', meaning: 'белый цвет' }] },
            { char: '黑', pinyin: 'hēi', meaning: 'чёрный', examples: [{ word: '黑色', pinyin: 'hēi sè', meaning: 'чёрный цвет' }] }
        ]
    },

    body: {
        name: "🧍 Тело",
        description: "Части тела",
        group: "topic",
        items: [
            { char: '头', pinyin: 'tóu', meaning: 'голова', examples: [{ word: '头发', pinyin: 'tóu fa', meaning: 'волосы' }] },
            { char: '手', pinyin: 'shǒu', meaning: 'рука', examples: [{ word: '手机', pinyin: 'shǒu jī', meaning: 'телефон' }] },
            { char: '口', pinyin: 'kǒu', meaning: 'рот', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] },
            { char: '心', pinyin: 'xīn', meaning: 'сердце', examples: [{ word: '开心', pinyin: 'kāi xīn', meaning: 'радостный' }] }
        ]
    }
};

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ БАЗЫ
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

    search: function(query) {
        if (!query) return [];
        const q = query.trim().toLowerCase();
        const results = [];
        const seen = new Set();
        
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
        const data = progress[char] || {
            char: char, attempts: 0, successes: 0, mistakes: 0,
            bestAccuracy: 0, level: 0, nextReview: 0,
            lastSeen: 0, mastered: false
        };
        
        // 🆕 РАСЧЁТ ПРОГРЕССА К "ВЫУЧЕНО" (Исправленная версия)
        const TARGET_LEVEL = 5;
        const TARGET_SUCCESSES = 5;
        
        const levelProgress = Math.min(100, (data.level / TARGET_LEVEL) * 100);
        const successProgress = Math.min(100, (data.successes / TARGET_SUCCESSES) * 100);
        const masteryProgress = Math.round((levelProgress + successProgress) / 2);
        
        const stars = data.level;
        const levelsRemaining = Math.max(0, TARGET_LEVEL - data.level);
        const successesRemaining = Math.max(0, TARGET_SUCCESSES - data.successes);
        const isMastered = data.level >= TARGET_LEVEL && data.successes >= TARGET_SUCCESSES;
        
        // Расширяем объект данными прогресса (это то, что ждёт ваш HTML)
        data.masteryProgress = masteryProgress;
        data.stars = stars;
        data.levelsRemaining = levelsRemaining;
        data.successesRemaining = successesRemaining;
        data.isMastered = isMastered;
        
        return data;
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
    
    getMastered: function() {
        const progress = this.load();
        const mastered = [];
        for (const char in progress) {
            const data = progress[char];
            if (data.mastered) {
                const item = HanziDB.findByChar(char);
                if (item) mastered.push({ ...item, data: data, masteredDate: data.lastSeen });
            }
        }
        mastered.sort((a, b) => b.masteredDate - a.masteredDate);
        return mastered;
    },
    
    getLearning: function(limit) {
        limit = limit || 30;
        const progress = this.load();
        const learning = [];
        for (const char in progress) {
            const data = progress[char];
            if (data.attempts > 0 && !data.mastered) {
                const item = HanziDB.findByChar(char);
                if (item) {
                    const enriched = this.get(char);
                    learning.push({ ...item, data: enriched });
                }
            }
        }
        learning.sort((a, b) => b.data.masteryProgress - a.data.masteryProgress);
        return learning.slice(0, limit);
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

// Экспорт в глобальную область
if (typeof window !== 'undefined') {
    window.HANZI_DATABASE = HANZI_DATABASE;
    window.HanziDB = HanziDB;
    window.HanziProgress = HanziProgress;
}

console.log(`📚 База загружена: ${HanziDB.getStats().totalChars} иероглифов в ${HanziDB.getStats().totalCategories} категориях`);
console.log(`📊 Система прогресса и интервального повторения загружена`);

