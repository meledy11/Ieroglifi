// ============================================================
// БАЗА ИЕРОГЛИФОВ HSK 1 — Начальный уровень китайского языка
// 150 иероглифов · 14 категорий
// ============================================================

const HANZI_DATABASE = {
    // === 1. ОСНОВЫ (самые частые иероглифы) ===
    basics: {
        name: "🌱 Основы",
        description: "Самые частые иероглифы китайского языка",
        items: [
            { char: '的', pinyin: 'de', meaning: 'притяжательная частица', level: 1 },
            { char: '我', pinyin: 'wǒ', meaning: 'я, меня', level: 1 },
            { char: '你', pinyin: 'nǐ', meaning: 'ты, тебя', level: 1 },
            { char: '是', pinyin: 'shì', meaning: 'быть, являться', level: 1 },
            { char: '了', pinyin: 'le', meaning: 'частица завершённости', level: 1 },
            { char: '不', pinyin: 'bù', meaning: 'не, нет', level: 1 },
            { char: '在', pinyin: 'zài', meaning: 'находиться, в', level: 1 },
            { char: '他', pinyin: 'tā', meaning: 'он, его', level: 1 },
            { char: '这', pinyin: 'zhè', meaning: 'этот, это', level: 1 },
            { char: '中', pinyin: 'zhōng', meaning: 'середина, в', level: 1 },
            { char: '大', pinyin: 'dà', meaning: 'большой', level: 1 },
            { char: '来', pinyin: 'lái', meaning: 'приходить', level: 1 },
            { char: '上', pinyin: 'shàng', meaning: 'верх, на', level: 1 },
            { char: '个', pinyin: 'gè', meaning: 'счётное слово', level: 1 },
            { char: '到', pinyin: 'dào', meaning: 'достигать, до', level: 1 },
            { char: '说', pinyin: 'shuō', meaning: 'говорить', level: 1 },
            { char: '们', pinyin: 'men', meaning: 'суффикс мн. числа', level: 1 },
            { char: '为', pinyin: 'wèi', meaning: 'для, ради', level: 1 },
            { char: '子', pinyin: 'zi', meaning: 'суффикс, сын', level: 1 },
            { char: '和', pinyin: 'hé', meaning: 'и, с', level: 1 }
        ]
    },

    // === 2. ЧИСЛА И СЧЁТ ===
    numbers: {
        name: "🔢 Числа",
        description: "Цифры, счёт и количество",
        items: [
            { char: '一', pinyin: 'yī', meaning: 'один', level: 1 },
            { char: '二', pinyin: 'èr', meaning: 'два', level: 1 },
            { char: '三', pinyin: 'sān', meaning: 'три', level: 1 },
            { char: '四', pinyin: 'sì', meaning: 'четыре', level: 1 },
            { char: '五', pinyin: 'wǔ', meaning: 'пять', level: 1 },
            { char: '六', pinyin: 'liù', meaning: 'шесть', level: 1 },
            { char: '七', pinyin: 'qī', meaning: 'семь', level: 1 },
            { char: '八', pinyin: 'bā', meaning: 'восемь', level: 1 },
            { char: '九', pinyin: 'jiǔ', meaning: 'девять', level: 1 },
            { char: '十', pinyin: 'shí', meaning: 'десять', level: 1 },
            { char: '百', pinyin: 'bǎi', meaning: 'сто', level: 1 },
            { char: '千', pinyin: 'qiān', meaning: 'тысяча', level: 1 },
            { char: '两', pinyin: 'liǎng', meaning: 'два (с сч. словом)', level: 1 },
            { char: '零', pinyin: 'líng', meaning: 'ноль', level: 1 },
            { char: '几', pinyin: 'jǐ', meaning: 'сколько?', level: 1 },
            { char: '多', pinyin: 'duō', meaning: 'много', level: 1 },
            { char: '少', pinyin: 'shǎo', meaning: 'мало', level: 1 },
            { char: '半', pinyin: 'bàn', meaning: 'половина', level: 1 }
        ]
    },

    // === 3. ЛЮДИ И СЕМЬЯ ===
    family: {
        name: "👨‍👩‍👧 Семья",
        description: "Родственники и люди",
        items: [
            { char: '人', pinyin: 'rén', meaning: 'человек', level: 1 },
            { char: '家', pinyin: 'jiā', meaning: 'семья, дом', level: 1 },
            { char: '爸', pinyin: 'bà', meaning: 'папа', level: 1 },
            { char: '妈', pinyin: 'mā', meaning: 'мама', level: 1 },
            { char: '父', pinyin: 'fù', meaning: 'отец', level: 1 },
            { char: '母', pinyin: 'mǔ', meaning: 'мать', level: 1 },
            { char: '儿', pinyin: 'ér', meaning: 'сын, ребёнок', level: 1 },
            { char: '女', pinyin: 'nǚ', meaning: 'дочь, женщина', level: 1 },
            { char: '哥', pinyin: 'gē', meaning: 'старший брат', level: 1 },
            { char: '姐', pinyin: 'jiě', meaning: 'старшая сестра', level: 1 },
            { char: '弟', pinyin: 'dì', meaning: 'младший брат', level: 1 },
            { char: '妹', pinyin: 'mèi', meaning: 'младшая сестра', level: 1 },
            { char: '夫', pinyin: 'fū', meaning: 'муж', level: 1 },
            { char: '妻', pinyin: 'qī', meaning: 'жена', level: 1 },
            { char: '孩', pinyin: 'hái', meaning: 'ребёнок', level: 1 },
            { char: '她', pinyin: 'tā', meaning: 'она, её', level: 1 },
            { char: '友', pinyin: 'yǒu', meaning: 'друг', level: 1 }
        ]
    },

    // === 4. ВРЕМЯ ===
    time: {
        name: "🕐 Время",
        description: "Дни, часы, времена",
        items: [
            { char: '年', pinyin: 'nián', meaning: 'год', level: 1 },
            { char: '月', pinyin: 'yuè', meaning: 'месяц, луна', level: 1 },
            { char: '日', pinyin: 'rì', meaning: 'день, солнце', level: 1 },
            { char: '天', pinyin: 'tiān', meaning: 'день, небо', level: 1 },
            { char: '时', pinyin: 'shí', meaning: 'час, время', level: 1 },
            { char: '分', pinyin: 'fēn', meaning: 'минута', level: 1 },
            { char: '点', pinyin: 'diǎn', meaning: 'час (время)', level: 1 },
            { char: '星', pinyin: 'xīng', meaning: 'звезда', level: 1 },
            { char: '期', pinyin: 'qī', meaning: 'период', level: 1 },
            { char: '今', pinyin: 'jīn', meaning: 'сегодня, сейчас', level: 1 },
            { char: '明', pinyin: 'míng', meaning: 'завтра, светлый', level: 1 },
            { char: '昨', pinyin: 'zuó', meaning: 'вчера', level: 1 },
            { char: '午', pinyin: 'wǔ', meaning: 'полдень', level: 1 },
            { char: '早', pinyin: 'zǎo', meaning: 'рано, утро', level: 1 },
            { char: '晚', pinyin: 'wǎn', meaning: 'вечер, поздно', level: 1 },
            { char: '现', pinyin: 'xiàn', meaning: 'сейчас', level: 1 },
            { char: '候', pinyin: 'hòu', meaning: 'время, ждать', level: 1 },
            { char: '刻', pinyin: 'kè', meaning: 'четверть часа', level: 1 }
        ]
    },

    // === 5. МЕСТО И НАПРАВЛЕНИЕ ===
    place: {
        name: "🧭 Место",
        description: "Где? Куда? Откуда?",
        items: [
            { char: '下', pinyin: 'xià', meaning: 'низ, под', level: 1 },
            { char: '里', pinyin: 'lǐ', meaning: 'внутри', level: 1 },
            { char: '前', pinyin: 'qián', meaning: 'перед, передний', level: 1 },
            { char: '后', pinyin: 'hòu', meaning: 'после, задний', level: 1 },
            { char: '外', pinyin: 'wài', meaning: 'снаружи', level: 1 },
            { char: '面', pinyin: 'miàn', meaning: 'сторона, лицо', level: 1 },
            { char: '边', pinyin: 'biān', meaning: 'край, сторона', level: 1 },
            { char: '左', pinyin: 'zuǒ', meaning: 'левый', level: 1 },
            { char: '右', pinyin: 'yòu', meaning: 'правый', level: 1 },
            { char: '东', pinyin: 'dōng', meaning: 'восток', level: 1 },
            { char: '西', pinyin: 'xī', meaning: 'запад', level: 1 },
            { char: '南', pinyin: 'nán', meaning: 'юг', level: 1 },
            { char: '北', pinyin: 'běi', meaning: 'север', level: 1 },
            { char: '远', pinyin: 'yuǎn', meaning: 'далеко', level: 1 },
            { char: '近', pinyin: 'jìn', meaning: 'близко', level: 1 },
            { char: '旁', pinyin: 'páng', meaning: 'рядом', level: 1 },
            { char: '国', pinyin: 'guó', meaning: 'страна', level: 1 }
        ]
    },

    // === 6. ПРИРОДА ===
    nature: {
        name: "🌤️ Природа",
        description: "Погода и стихии",
        items: [
            { char: '气', pinyin: 'qì', meaning: 'воздух, погода', level: 1 },
            { char: '雨', pinyin: 'yǔ', meaning: 'дождь', level: 1 },
            { char: '雪', pinyin: 'xuě', meaning: 'снег', level: 1 },
            { char: '风', pinyin: 'fēng', meaning: 'ветер', level: 1 },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода', level: 1 },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь', level: 1 },
            { char: '山', pinyin: 'shān', meaning: 'гора', level: 1 },
            { char: '海', pinyin: 'hǎi', meaning: 'море', level: 1 },
            { char: '花', pinyin: 'huā', meaning: 'цветок', level: 1 },
            { char: '草', pinyin: 'cǎo', meaning: 'трава', level: 1 },
            { char: '树', pinyin: 'shù', meaning: 'дерево', level: 1 },
            { char: '木', pinyin: 'mù', meaning: 'дерево (материал)', level: 1 },
            { char: '阳', pinyin: 'yáng', meaning: 'солнце', level: 1 },
            { char: '光', pinyin: 'guāng', meaning: 'свет', level: 1 }
        ]
    },

    // === 7. ЕДА И НАПИТКИ ===
    food: {
        name: "🍜 Еда",
        description: "Всё, что мы едим и пьём",
        items: [
            { char: '吃', pinyin: 'chī', meaning: 'есть (кушать)', level: 1 },
            { char: '喝', pinyin: 'hē', meaning: 'пить', level: 1 },
            { char: '饭', pinyin: 'fàn', meaning: 'еда, рис', level: 1 },
            { char: '菜', pinyin: 'cài', meaning: 'блюдо, овощ', level: 1 },
            { char: '茶', pinyin: 'chá', meaning: 'чай', level: 1 },
            { char: '果', pinyin: 'guǒ', meaning: 'фрукт, плод', level: 1 },
            { char: '米', pinyin: 'mǐ', meaning: 'рис (зёрна)', level: 1 },
            { char: '面', pinyin: 'miàn', meaning: 'лапша, мука', level: 1 },
            { char: '酒', pinyin: 'jiǔ', meaning: 'алкоголь', level: 1 },
            { char: '奶', pinyin: 'nǎi', meaning: 'молоко', level: 1 },
            { char: '蛋', pinyin: 'dàn', meaning: 'яйцо', level: 1 },
            { char: '肉', pinyin: 'ròu', meaning: 'мясо', level: 1 },
            { char: '鱼', pinyin: 'yú', meaning: 'рыба', level: 1 },
            { char: '汤', pinyin: 'tāng', meaning: 'суп', level: 1 },
            { char: '糖', pinyin: 'táng', meaning: 'сахар, конфета', level: 1 }
        ]
    },

    // === 8. ДЕЙСТВИЯ (ГЛАГОЛЫ) ===
    verbs: {
        name: "🏃 Действия",
        description: "Что делать? Глаголы",
        items: [
            { char: '看', pinyin: 'kàn', meaning: 'смотреть', level: 1 },
            { char: '听', pinyin: 'tīng', meaning: 'слушать', level: 1 },
            { char: '读', pinyin: 'dú', meaning: 'читать', level: 1 },
            { char: '写', pinyin: 'xiě', meaning: 'писать', level: 1 },
            { char: '做', pinyin: 'zuò', meaning: 'делать', level: 1 },
            { char: '想', pinyin: 'xiǎng', meaning: 'думать, хотеть', level: 1 },
            { char: '要', pinyin: 'yào', meaning: 'хотеть, нужно', level: 1 },
            { char: '会', pinyin: 'huì', meaning: 'уметь, смогу', level: 1 },
            { char: '能', pinyin: 'néng', meaning: 'мочь, способен', level: 1 },
            { char: '可', pinyin: 'kě', meaning: 'можно', level: 1 },
            { char: '去', pinyin: 'qù', meaning: 'идти, ехать', level: 1 },
            { char: '回', pinyin: 'huí', meaning: 'возвращаться', level: 1 },
            { char: '住', pinyin: 'zhù', meaning: 'жить (где-то)', level: 1 },
            { char: '坐', pinyin: 'zuò', meaning: 'сидеть', level: 1 },
            { char: '走', pinyin: 'zǒu', meaning: 'идти пешком', level: 1 },
            { char: '跑', pinyin: 'pǎo', meaning: 'бежать', level: 1 },
            { char: '飞', pinyin: 'fēi', meaning: 'лететь', level: 1 },
            { char: '叫', pinyin: 'jiào', meaning: 'звать, кричать', level: 1 },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать', level: 1 },
            { char: '睡', pinyin: 'shuì', meaning: 'спать', level: 1 },
            { char: '买', pinyin: 'mǎi', meaning: 'покупать', level: 1 },
            { char: '卖', pinyin: 'mài', meaning: 'продавать', level: 1 },
            { char: '开', pinyin: 'kāi', meaning: 'открывать', level: 1 },
            { char: '关', pinyin: 'guān', meaning: 'закрывать', level: 1 },
            { char: '穿', pinyin: 'chuān', meaning: 'носить (одежду)', level: 1 },
            { char: '教', pinyin: 'jiào', meaning: 'учить (кого-то)', level: 1 },
            { char: '起', pinyin: 'qǐ', meaning: 'вставать, поднимать', level: 1 }
        ]
    },

    // === 9. УЧЁБА И РАБОТА ===
    study: {
        name: "📚 Учёба",
        description: "Школа, работа, предметы",
        items: [
            { char: '学', pinyin: 'xué', meaning: 'учиться', level: 1 },
            { char: '生', pinyin: 'shēng', meaning: 'ученик, жизнь', level: 1 },
            { char: '老', pinyin: 'lǎo', meaning: 'старый', level: 1 },
            { char: '师', pinyin: 'shī', meaning: 'учитель, мастер', level: 1 },
            { char: '校', pinyin: 'xiào', meaning: 'школа', level: 1 },
            { char: '班', pinyin: 'bān', meaning: 'класс (группа)', level: 1 },
            { char: '工', pinyin: 'gōng', meaning: 'работа', level: 1 },
            { char: '作', pinyin: 'zuò', meaning: 'делать, работа', level: 1 },
            { char: '医', pinyin: 'yī', meaning: 'медицина', level: 1 },
            { char: '院', pinyin: 'yuàn', meaning: 'учреждение, двор', level: 1 },
            { char: '店', pinyin: 'diàn', meaning: 'магазин', level: 1 },
            { char: '公', pinyin: 'gōng', meaning: 'общественный', level: 1 },
            { char: '司', pinyin: 'sī', meaning: 'компания', level: 1 },
            { char: '课', pinyin: 'kè', meaning: 'урок', level: 1 },
            { char: '习', pinyin: 'xí', meaning: 'практика, учиться', level: 1 }
        ]
    },

    // === 10. СВОЙСТВА (ПРИЛАГАТЕЛЬНЫЕ) ===
    adjectives: {
        name: "🎨 Свойства",
        description: "Какой? Прилагательные",
        items: [
            { char: '好', pinyin: 'hǎo', meaning: 'хороший', level: 1 },
            { char: '坏', pinyin: 'huài', meaning: 'плохой', level: 1 },
            { char: '高', pinyin: 'gāo', meaning: 'высокий', level: 1 },
            { char: '低', pinyin: 'dī', meaning: 'низкий', level: 1 },
            { char: '长', pinyin: 'cháng', meaning: 'длинный', level: 1 },
            { char: '短', pinyin: 'duǎn', meaning: 'короткий', level: 1 },
            { char: '新', pinyin: 'xīn', meaning: 'новый', level: 1 },
            { char: '旧', pinyin: 'jiù', meaning: 'старый (вещь)', level: 1 },
            { char: '冷', pinyin: 'lěng', meaning: 'холодный', level: 1 },
            { char: '热', pinyin: 'rè', meaning: 'горячий', level: 1 },
            { char: '快', pinyin: 'kuài', meaning: 'быстрый', level: 1 },
            { char: '慢', pinyin: 'màn', meaning: 'медленный', level: 1 },
            { char: '忙', pinyin: 'máng', meaning: 'занятой', level: 1 },
            { char: '累', pinyin: 'lèi', meaning: 'усталый', level: 1 },
            { char: '兴', pinyin: 'xìng', meaning: 'интерес, радость', level: 1 },
            { char: '漂', pinyin: 'piào', meaning: 'красивый (в слове)', level: 1 },
            { char: '亮', pinyin: 'liàng', meaning: 'яркий, светлый', level: 1 }
        ]
    },

    // === 11. ПРЕДМЕТЫ ===
    objects: {
        name: "🏠 Предметы",
        description: "Вещи вокруг нас",
        items: [
            { char: '书', pinyin: 'shū', meaning: 'книга', level: 1 },
            { char: '本', pinyin: 'běn', meaning: 'тетрадь', level: 1 },
            { char: '笔', pinyin: 'bǐ', meaning: 'ручка', level: 1 },
            { char: '纸', pinyin: 'zhǐ', meaning: 'бумага', level: 1 },
            { char: '桌', pinyin: 'zhuō', meaning: 'стол', level: 1 },
            { char: '椅', pinyin: 'yǐ', meaning: 'стул', level: 1 },
            { char: '门', pinyin: 'mén', meaning: 'дверь', level: 1 },
            { char: '窗', pinyin: 'chuāng', meaning: 'окно', level: 1 },
            { char: '车', pinyin: 'chē', meaning: 'машина', level: 1 },
            { char: '船', pinyin: 'chuán', meaning: 'лодка', level: 1 },
            { char: '机', pinyin: 'jī', meaning: 'машина, аппарат', level: 1 },
            { char: '话', pinyin: 'huà', meaning: 'речь, слова', level: 1 },
            { char: '名', pinyin: 'míng', meaning: 'имя', level: 1 },
            { char: '电', pinyin: 'diàn', meaning: 'электричество', level: 1 },
            { char: '视', pinyin: 'shì', meaning: 'смотреть (ТВ)', level: 1 },
            { char: '脑', pinyin: 'nǎo', meaning: 'мозг', level: 1 },
            { char: '衣', pinyin: 'yī', meaning: 'одежда', level: 1 },
            { char: '服', pinyin: 'fú', meaning: 'одежда, служить', level: 1 },
            { char: '鞋', pinyin: 'xié', meaning: 'обувь', level: 1 },
            { char: '帽', pinyin: 'mào', meaning: 'шапка', level: 1 },
            { char: '字', pinyin: 'zì', meaning: 'иероглиф, буква', level: 1 }
        ]
    },

    // === 12. ЖИВОТНЫЕ ===
    animals: {
        name: "🐾 Животные",
        description: "Представители фауны",
        items: [
            { char: '猫', pinyin: 'māo', meaning: 'кошка', level: 1 },
            { char: '狗', pinyin: 'gǒu', meaning: 'собака', level: 1 },
            { char: '鸟', pinyin: 'niǎo', meaning: 'птица', level: 1 },
            { char: '马', pinyin: 'mǎ', meaning: 'лошадь', level: 1 },
            { char: '牛', pinyin: 'niú', meaning: 'корова', level: 1 },
            { char: '羊', pinyin: 'yáng', meaning: 'овца', level: 1 },
            { char: '鸡', pinyin: 'jī', meaning: 'курица', level: 1 },
            { char: '鸭', pinyin: 'yā', meaning: 'утка', level: 1 },
            { char: '猪', pinyin: 'zhū', meaning: 'свинья', level: 1 },
            { char: '龙', pinyin: 'lóng', meaning: 'дракон', level: 1 },
            { char: '虫', pinyin: 'chóng', meaning: 'насекомое', level: 1 }
        ]
    },

    // === 13. ЦВЕТА ===
    colors: {
        name: "🎨 Цвета",
        description: "Краски мира",
        items: [
            { char: '红', pinyin: 'hóng', meaning: 'красный', level: 1 },
            { char: '黄', pinyin: 'huáng', meaning: 'жёлтый', level: 1 },
            { char: '蓝', pinyin: 'lán', meaning: 'синий', level: 1 },
            { char: '绿', pinyin: 'lǜ', meaning: 'зелёный', level: 1 },
            { char: '白', pinyin: 'bái', meaning: 'белый', level: 1 },
            { char: '黑', pinyin: 'hēi', meaning: 'чёрный', level: 1 }
        ]
    },

    // === 14. ТЕЛО ЧЕЛОВЕКА ===
    body: {
        name: "🧍 Тело",
        description: "Части тела",
        items: [
            { char: '身', pinyin: 'shēn', meaning: 'тело', level: 1 },
            { char: '体', pinyin: 'tǐ', meaning: 'тело, форма', level: 1 },
            { char: '头', pinyin: 'tóu', meaning: 'голова', level: 1 },
            { char: '手', pinyin: 'shǒu', meaning: 'рука', level: 1 },
            { char: '眼', pinyin: 'yǎn', meaning: 'глаз', level: 1 },
            { char: '口', pinyin: 'kǒu', meaning: 'рот', level: 1 },
            { char: '耳', pinyin: 'ěr', meaning: 'ухо', level: 1 },
            { char: '心', pinyin: 'xīn', meaning: 'сердце', level: 1 },
            { char: '脚', pinyin: 'jiǎo', meaning: 'нога, стопа', level: 1 },
            { char: '牙', pinyin: 'yá', meaning: 'зуб', level: 1 },
            { char: '发', pinyin: 'fà', meaning: 'волосы', level: 1 },
            { char: '鼻', pinyin: 'bí', meaning: 'нос', level: 1 }
        ]
    }
};

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ РАБОТЫ С БАЗОЙ
// ============================================================
const HanziDB = {
    // Получить все иероглифы из всех категорий
    getAll: function() {
        const all = [];
        for (const key in HANZI_DATABASE) {
            all.push(...HANZI_DATABASE[key].items);
        }
        return all;
    },

    // Получить иероглифы конкретной категории
    getCategory: function(categoryKey) {
        return HANZI_DATABASE[categoryKey]?.items || [];
    },

    // Получить список всех категорий
    getCategories: function() {
        return Object.keys(HANZI_DATABASE).map(key => ({
            key,
            name: HANZI_DATABASE[key].name,
            description: HANZI_DATABASE[key].description,
            count: HANZI_DATABASE[key].items.length
        }));
    },

    // Перемешать массив (алгоритм Фишера-Йетса)
    shuffle: function(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    // Получить случайный иероглиф из категории (без повтора)
    getRandomFromCategory: function(categoryKey, excludeChar = null) {
        const items = this.getCategory(categoryKey);
        const filtered = excludeChar ? items.filter(i => i.char !== excludeChar) : items;
        if (filtered.length === 0) return items[0];
        return filtered[Math.floor(Math.random() * filtered.length)];
    },

    // Поиск иероглифа по символу
    findByChar: function(char) {
        for (const key in HANZI_DATABASE) {
            const found = HANZI_DATABASE[key].items.find(i => i.char === char);
            if (found) return { ...found, category: key };
        }
        return null;
    },

    // Получить общую статистику
    getStats: function() {
        const categories = this.getCategories();
        const total = categories.reduce((sum, c) => sum + c.count, 0);
        return {
            totalChars: total,
            totalCategories: categories.length,
            categories
        };
    }
};

// Экспорт в глобальную область (для работы в браузере)
if (typeof window !== 'undefined') {
    window.HANZI_DATABASE = HANZI_DATABASE;
    window.HanziDB = HanziDB;
}

// Вывод статистики в консоль при загрузке
console.log(`📚 База HSK1 загружена: ${HanziDB.getStats().totalChars} иероглифов в ${HanziDB.getStats().totalCategories} категориях`);

