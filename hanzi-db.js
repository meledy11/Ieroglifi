// База данных иероглифов для каллиграфического тренажёра
// Каждая категория содержит иероглифы с пиньинем, переводом и уровнем сложности

const HANZI_DATABASE = {
    // === БАЗОВЫЕ ИЕРОГЛИФЫ (HSK 1) ===
    basic: {
        name: "🌱 Основы",
        description: "Самые простые и важные иероглифы",
        items: [
            { char: '一', pinyin: 'yī', meaning: 'один', level: 1 },
            { char: '二', pinyin: 'èr', meaning: 'два', level: 1 },
            { char: '三', pinyin: 'sān', meaning: 'три', level: 1 },
            { char: '人', pinyin: 'rén', meaning: 'человек', level: 1 },
            { char: '大', pinyin: 'dà', meaning: 'большой', level: 1 },
            { char: '小', pinyin: 'xiǎo', meaning: 'маленький', level: 1 },
            { char: '上', pinyin: 'shàng', meaning: 'верх', level: 1 },
            { char: '下', pinyin: 'xià', meaning: 'низ', level: 1 },
            { char: '中', pinyin: 'zhōng', meaning: 'середина', level: 1 },
            { char: '天', pinyin: 'tiān', meaning: 'небо', level: 1 },
            { char: '地', pinyin: 'dì', meaning: 'земля', level: 1 },
            { char: '日', pinyin: 'rì', meaning: 'солнце/день', level: 1 },
            { char: '月', pinyin: 'yuè', meaning: 'луна/месяц', level: 1 },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода', level: 1 },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь', level: 1 },
            { char: '山', pinyin: 'shān', meaning: 'гора', level: 1 },
            { char: '木', pinyin: 'mù', meaning: 'дерево', level: 1 },
            { char: '口', pinyin: 'kǒu', meaning: 'рот', level: 1 },
            { char: '手', pinyin: 'shǒu', meaning: 'рука', level: 1 },
            { char: '心', pinyin: 'xīn', meaning: 'сердце', level: 1 }
        ]
    },

    // === ПРИРОДА ===
    nature: {
        name: "🌿 Природа",
        description: "Явления природы и стихии",
        items: [
            { char: '風', pinyin: 'fēng', meaning: 'ветер', level: 2 },
            { char: '雲', pinyin: 'yún', meaning: 'облако', level: 2 },
            { char: '雨', pinyin: 'yǔ', meaning: 'дождь', level: 2 },
            { char: '雪', pinyin: 'xuě', meaning: 'снег', level: 2 },
            { char: '花', pinyin: 'huā', meaning: 'цветок', level: 2 },
            { char: '草', pinyin: 'cǎo', meaning: 'трава', level: 2 },
            { char: '林', pinyin: 'lín', meaning: 'лес', level: 2 },
            { char: '森', pinyin: 'sēn', meaning: 'чаща', level: 2 },
            { char: '海', pinyin: 'hǎi', meaning: 'море', level: 2 },
            { char: '河', pinyin: 'hé', meaning: 'река', level: 2 },
            { char: '星', pinyin: 'xīng', meaning: 'звезда', level: 2 },
            { char: '光', pinyin: 'guāng', meaning: 'свет', level: 2 }
        ]
    },

    // === ЖИВОТНЫЕ ===
    animals: {
        name: "🐉 Животные",
        description: "Представители фауны",
        items: [
            { char: '馬', pinyin: 'mǎ', meaning: 'лошадь', level: 2 },
            { char: '牛', pinyin: 'niú', meaning: 'корова', level: 2 },
            { char: '羊', pinyin: 'yáng', meaning: 'овца', level: 2 },
            { char: '犬', pinyin: 'quǎn', meaning: 'собака', level: 2 },
            { char: '鳥', pinyin: 'niǎo', meaning: 'птица', level: 2 },
            { char: '魚', pinyin: 'yú', meaning: 'рыба', level: 2 },
            { char: '龍', pinyin: 'lóng', meaning: 'дракон', level: 3 },
            { char: '虎', pinyin: 'hǔ', meaning: 'тигр', level: 3 },
            { char: '鶴', pinyin: 'hè', meaning: 'журавль', level: 3 },
            { char: '鳳', pinyin: 'fèng', meaning: 'феникс', level: 3 }
        ]
    },

    // === ЧУВСТВА И КАЧЕСТВА ===
    feelings: {
        name: "💭 Чувства",
        description: "Эмоции и качества характера",
        items: [
            { char: '愛', pinyin: 'ài', meaning: 'любовь', level: 2 },
            { char: '夢', pinyin: 'mèng', meaning: 'мечта', level: 2 },
            { char: '樂', pinyin: 'lè', meaning: 'радость', level: 2 },
            { char: '美', pinyin: 'měi', meaning: 'красота', level: 2 },
            { char: '和', pinyin: 'hé', meaning: 'гармония', level: 2 },
            { char: '信', pinyin: 'xìn', meaning: 'доверие', level: 2 },
            { char: '道', pinyin: 'dào', meaning: 'путь', level: 3 },
            { char: '禪', pinyin: 'chán', meaning: 'дзен', level: 3 },
            { char: '福', pinyin: 'fú', meaning: 'счастье', level: 3 },
            { char: '壽', pinyin: 'shòu', meaning: 'долголетие', level: 3 }
        ]
    },

    // === СЛОЖНЫЕ (Каллиграфические шедевры) ===
    master: {
        name: "🏯 Мастерство",
        description: "Сложные иероглифы для профи",
        items: [
            { char: '永', pinyin: 'yǒng', meaning: 'вечный', level: 4 },
            { char: '龍', pinyin: 'lóng', meaning: 'дракон', level: 4 },
            { char: '鳳', pinyin: 'fèng', meaning: 'феникс', level: 4 },
            { char: '靈', pinyin: 'líng', meaning: 'дух', level: 5 },
            { char: '寶', pinyin: 'bǎo', meaning: 'сокровище', level: 5 },
            { char: '壽', pinyin: 'shòu', meaning: 'долголетие', level: 5 }
        ]
    }
};

// Вспомогательные функции для работы с базой
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
    }
};

// Экспорт в глобальную область (для работы в браузере)
if (typeof window !== 'undefined') {
    window.HANZI_DATABASE = HANZI_DATABASE;
    window.HanziDB = HanziDB;
}

