// ============================================================
// ПОЛНАЯ БАЗА ИЕРОГЛИФОВ · HSK 1-3 + тематические категории
// ============================================================

const HANZI_DATABASE = {

    hsk1_all: {
        name: "🥉 HSK 1 · Весь уровень",
        description: "Все 174 иероглифа начального уровня",
        group: "hsk",
        color: "#cd7f32",
        items: [
            { char: '的', pinyin: 'de', meaning: 'притяж. частица', examples: [{ word: '我的', pinyin: 'wǒ de', meaning: 'мой' }] },
            { char: '一', pinyin: 'yī', meaning: 'один', examples: [{ word: '一起', pinyin: 'yì qǐ', meaning: 'вместе' }] },
            { char: '是', pinyin: 'shì', meaning: 'быть', examples: [{ word: '不是', pinyin: 'bú shì', meaning: 'не является' }] },
            { char: '不', pinyin: 'bù', meaning: 'не', examples: [{ word: '不好', pinyin: 'bù hǎo', meaning: 'нехорошо' }] },
            { char: '了', pinyin: 'le', meaning: 'завершённость', examples: [{ word: '好了', pinyin: 'hǎo le', meaning: 'готово' }] },
            { char: '我', pinyin: 'wǒ', meaning: 'я', examples: [{ word: '我们', pinyin: 'wǒ men', meaning: 'мы' }] },
            { char: '在', pinyin: 'zài', meaning: 'находиться', examples: [{ word: '现在', pinyin: 'xiàn zài', meaning: 'сейчас' }] },
            { char: '人', pinyin: 'rén', meaning: 'человек', examples: [{ word: '中国人', pinyin: 'zhōng guó rén', meaning: 'китаец' }] },
            { char: '有', pinyin: 'yǒu', meaning: 'иметь', examples: [{ word: '没有', pinyin: 'méi yǒu', meaning: 'не иметь' }] },
            { char: '他', pinyin: 'tā', meaning: 'он', examples: [{ word: '他们', pinyin: 'tā men', meaning: 'они' }] },
            { char: '这', pinyin: 'zhè', meaning: 'этот', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '中', pinyin: 'zhōng', meaning: 'середина', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] },
            { char: '大', pinyin: 'dà', meaning: 'большой', examples: [{ word: '大家', pinyin: 'dà jiā', meaning: 'все' }] },
            { char: '来', pinyin: 'lái', meaning: 'приходить', examples: [{ word: '回来', pinyin: 'huí lái', meaning: 'возвращаться' }] },
            { char: '上', pinyin: 'shàng', meaning: 'верх', examples: [{ word: '上午', pinyin: 'shàng wǔ', meaning: 'утро' }] },
            { char: '个', pinyin: 'gè', meaning: 'сч. слово', examples: [{ word: '一个', pinyin: 'yí gè', meaning: 'один (шт.)' }] },
            { char: '到', pinyin: 'dào', meaning: 'достигать', examples: [{ word: '得到', pinyin: 'dé dào', meaning: 'получить' }] },
            { char: '说', pinyin: 'shuō', meaning: 'говорить', examples: [{ word: '听说', pinyin: 'tīng shuō', meaning: 'слышать' }] },
            { char: '们', pinyin: 'men', meaning: 'мн. число', examples: [{ word: '人们', pinyin: 'rén men', meaning: 'люди' }] },
            { char: '为', pinyin: 'wèi', meaning: 'для', examples: [{ word: '因为', pinyin: 'yīn wèi', meaning: 'потому что' }] },
            { char: '子', pinyin: 'zi', meaning: 'суффикс', examples: [{ word: '儿子', pinyin: 'ér zi', meaning: 'сын' }] },
            { char: '和', pinyin: 'hé', meaning: 'и', examples: [{ word: '和平', pinyin: 'hé píng', meaning: 'мир' }] },
            { char: '国', pinyin: 'guó', meaning: 'страна', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] },
            { char: '地', pinyin: 'dì', meaning: 'земля', examples: [{ word: '地方', pinyin: 'dì fang', meaning: 'место' }] },
            { char: '出', pinyin: 'chū', meaning: 'выходить', examples: [{ word: '出来', pinyin: 'chū lái', meaning: 'выходить' }] },
            { char: '下', pinyin: 'xià', meaning: 'низ', examples: [{ word: '下午', pinyin: 'xià wǔ', meaning: 'день' }] },
            { char: '那', pinyin: 'nà', meaning: 'тот', examples: [{ word: '那里', pinyin: 'nà lǐ', meaning: 'там' }] },
            { char: '要', pinyin: 'yào', meaning: 'хотеть', examples: [{ word: '不要', pinyin: 'bú yào', meaning: 'не надо' }] },
            { char: '就', pinyin: 'jiù', meaning: 'именно', examples: [{ word: '就是', pinyin: 'jiù shì', meaning: 'именно' }] },
            { char: '得', pinyin: 'de', meaning: 'получать', examples: [{ word: '觉得', pinyin: 'jué de', meaning: 'считать' }] },
            { char: '于', pinyin: 'yú', meaning: 'в, на', examples: [{ word: '关于', pinyin: 'guān yú', meaning: 'о, насчет' }] },
            { char: '时', pinyin: 'shí', meaning: 'время', examples: [{ word: '时间', pinyin: 'shí jiān', meaning: 'время' }] },
            { char: '以', pinyin: 'yǐ', meaning: 'чтобы', examples: [{ word: '所以', pinyin: 'suǒ yǐ', meaning: 'поэтому' }] },
            { char: '可', pinyin: 'kě', meaning: 'можно', examples: [{ word: '可以', pinyin: 'kě yǐ', meaning: 'можно' }] },
            { char: '也', pinyin: 'yě', meaning: 'тоже', examples: [{ word: '也是', pinyin: 'yě shì', meaning: 'тоже' }] },
            { char: '你', pinyin: 'nǐ', meaning: 'ты', examples: [{ word: '你好', pinyin: 'nǐ hǎo', meaning: 'здравствуйте' }] },
            { char: '对', pinyin: 'duì', meaning: 'правильно', examples: [{ word: '对不起', pinyin: 'duì bu qǐ', meaning: 'извините' }] },
            { char: '生', pinyin: 'shēng', meaning: 'рождаться', examples: [{ word: '学生', pinyin: 'xué sheng', meaning: 'ученик' }] },
            { char: '能', pinyin: 'néng', meaning: 'мочь', examples: [{ word: '不能', pinyin: 'bù néng', meaning: 'нельзя' }] },
            { char: '而', pinyin: 'ér', meaning: 'а, но', examples: [{ word: '而且', pinyin: 'ér qiě', meaning: 'и, к тому же' }] },
            { char: '过', pinyin: 'guò', meaning: 'проходить', examples: [{ word: '过去', pinyin: 'guò qù', meaning: 'прошлое' }] },
            { char: '自', pinyin: 'zì', meaning: 'сам', examples: [{ word: '自己', pinyin: 'zì jǐ', meaning: 'сам' }] },
            { char: '会', pinyin: 'huì', meaning: 'уметь', examples: [{ word: '不会', pinyin: 'bú huì', meaning: 'не уметь' }] },
            { char: '作', pinyin: 'zuò', meaning: 'делать', examples: [{ word: '工作', pinyin: 'gōng zuò', meaning: 'работа' }] },
            { char: '家', pinyin: 'jiā', meaning: 'семья', examples: [{ word: '回家', pinyin: 'huí jiā', meaning: 'идти домой' }] },
            { char: '如', pinyin: 'rú', meaning: 'как', examples: [{ word: '如果', pinyin: 'rú guǒ', meaning: 'если' }] },
            { char: '好', pinyin: 'hǎo', meaning: 'хороший', examples: [{ word: '很好', pinyin: 'hěn hǎo', meaning: 'очень хорошо' }] },
            { char: '学', pinyin: 'xué', meaning: 'учиться', examples: [{ word: '学习', pinyin: 'xué xí', meaning: 'учиться' }] },
            { char: '小', pinyin: 'xiǎo', meaning: 'маленький', examples: [{ word: '小孩', pinyin: 'xiǎo hái', meaning: 'ребёнок' }] },
            { char: '年', pinyin: 'nián', meaning: 'год', examples: [{ word: '今年', pinyin: 'jīn nián', meaning: 'этот год' }] },
            { char: '现', pinyin: 'xiàn', meaning: 'сейчас', examples: [{ word: '现在', pinyin: 'xiàn zài', meaning: 'сейчас' }] },
            { char: '发', pinyin: 'fā', meaning: 'отправлять', examples: [{ word: '发现', pinyin: 'fā xiàn', meaning: 'обнаружить' }] },
            { char: '当', pinyin: 'dāng', meaning: 'когда', examples: [{ word: '当时', pinyin: 'dāng shí', meaning: 'в то время' }] },
            { char: '面', pinyin: 'miàn', meaning: 'сторона', examples: [{ word: '里面', pinyin: 'lǐ miàn', meaning: 'внутри' }] },
            { char: '后', pinyin: 'hòu', meaning: 'после', examples: [{ word: '以后', pinyin: 'yǐ hòu', meaning: 'потом' }] },
            { char: '行', pinyin: 'xíng', meaning: 'идти', examples: [{ word: '不行', pinyin: 'bù xíng', meaning: 'нельзя' }] },
            { char: '所', pinyin: 'suǒ', meaning: 'место', examples: [{ word: '所以', pinyin: 'suǒ yǐ', meaning: 'поэтому' }] },
            { char: '然', pinyin: 'rán', meaning: 'так', examples: [{ word: '然后', pinyin: 'rán hòu', meaning: 'затем' }] },
            { char: '从', pinyin: 'cóng', meaning: 'от, из', examples: [{ word: '从来', pinyin: 'cóng lái', meaning: 'никогда' }] },
            { char: '事', pinyin: 'shì', meaning: 'дело', examples: [{ word: '事情', pinyin: 'shì qing', meaning: 'дело' }] },
            { char: '进', pinyin: 'jìn', meaning: 'входить', examples: [{ word: '进来', pinyin: 'jìn lái', meaning: 'входить' }] },
            { char: '成', pinyin: 'chéng', meaning: 'становиться', examples: [{ word: '成功', pinyin: 'chéng gōng', meaning: 'успех' }] },
            { char: '天', pinyin: 'tiān', meaning: 'день/небо', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '分', pinyin: 'fēn', meaning: 'минута', examples: [{ word: '十分', pinyin: 'shí fēn', meaning: 'десять минут' }] },
            { char: '动', pinyin: 'dòng', meaning: 'двигаться', examples: [{ word: '运动', pinyin: 'yùn dòng', meaning: 'спорт' }] },
            { char: '同', pinyin: 'tóng', meaning: 'одинаковый', examples: [{ word: '同学', pinyin: 'tóng xué', meaning: 'одноклассник' }] },
            { char: '工', pinyin: 'gōng', meaning: 'работа', examples: [{ word: '工人', pinyin: 'gōng rén', meaning: 'рабочий' }] },
            { char: '力', pinyin: 'lì', meaning: 'сила', examples: [{ word: '努力', pinyin: 'nǔ lì', meaning: 'стараться' }] },
            { char: '理', pinyin: 'lǐ', meaning: 'причина', examples: [{ word: '理解', pinyin: 'lǐ jiě', meaning: 'понимать' }] },
            { char: '实', pinyin: 'shí', meaning: 'реальный', examples: [{ word: '其实', pinyin: 'qí shí', meaning: 'на самом деле' }] },
            { char: '点', pinyin: 'diǎn', meaning: 'точка/час', examples: [{ word: '几点', pinyin: 'jǐ diǎn', meaning: 'который час' }] },
            { char: '法', pinyin: 'fǎ', meaning: 'метод', examples: [{ word: '办法', pinyin: 'bàn fǎ', meaning: 'способ' }] },
            { char: '明', pinyin: 'míng', meaning: 'ясный', examples: [{ word: '明天', pinyin: 'míng tiān', meaning: 'завтра' }] },
            { char: '社', pinyin: 'shè', meaning: 'общество', examples: [{ word: '社会', pinyin: 'shè huì', meaning: 'общество' }] },
            { char: '经', pinyin: 'jīng', meaning: 'проходить', examples: [{ word: '经常', pinyin: 'jīng cháng', meaning: 'часто' }] },
            { char: '部', pinyin: 'bù', meaning: 'часть', examples: [{ word: '部门', pinyin: 'bù mén', meaning: 'отдел' }] },
            { char: '之', pinyin: 'zhī', meaning: 'частица', examples: [{ word: '之前', pinyin: 'zhī qián', meaning: 'до' }] },
            { char: '前', pinyin: 'qián', meaning: 'перед', examples: [{ word: '以前', pinyin: 'yǐ qián', meaning: 'раньше' }] },
            { char: '开', pinyin: 'kāi', meaning: 'открывать', examples: [{ word: '开始', pinyin: 'kāi shǐ', meaning: 'начинать' }] },
            { char: '但', pinyin: 'dàn', meaning: 'но', examples: [{ word: '但是', pinyin: 'dàn shì', meaning: 'но' }] },
            { char: '因', pinyin: 'yīn', meaning: 'причина', examples: [{ word: '因为', pinyin: 'yīn wèi', meaning: 'потому что' }] },
            { char: '只', pinyin: 'zhǐ', meaning: 'только', examples: [{ word: '只有', pinyin: 'zhǐ yǒu', meaning: 'только' }] },
            { char: '想', pinyin: 'xiǎng', meaning: 'думать', examples: [{ word: '想法', pinyin: 'xiǎng fǎ', meaning: 'мысль' }] },
            { char: '日', pinyin: 'rì', meaning: 'день', examples: [{ word: '生日', pinyin: 'shēng rì', meaning: 'день рождения' }] },
            { char: '没', pinyin: 'méi', meaning: 'нет', examples: [{ word: '没有', pinyin: 'méi yǒu', meaning: 'не иметь' }] },
            { char: '更', pinyin: 'gèng', meaning: 'более', examples: [{ word: '更加', pinyin: 'gèng jiā', meaning: 'ещё более' }] },
            { char: '及', pinyin: 'jí', meaning: 'и', examples: [{ word: '以及', pinyin: 'yǐ jí', meaning: 'а также' }] },
            { char: '外', pinyin: 'wài', meaning: 'снаружи', examples: [{ word: '外国', pinyin: 'wài guó', meaning: 'иностранное государство' }] },
            { char: '看', pinyin: 'kàn', meaning: 'смотреть', examples: [{ word: '看书', pinyin: 'kàn shū', meaning: 'читать книгу' }] },
            { char: '等', pinyin: 'děng', meaning: 'ждать', examples: [{ word: '等等', pinyin: 'děng děng', meaning: 'и так далее' }] },
            { char: '体', pinyin: 'tǐ', meaning: 'тело', examples: [{ word: '身体', pinyin: 'shēn tǐ', meaning: 'здоровье' }] },
            { char: '机', pinyin: 'jī', meaning: 'машина', examples: [{ word: '手机', pinyin: 'shǒu jī', meaning: 'телефон' }] },
            { char: '用', pinyin: 'yòng', meaning: 'использовать', examples: [{ word: '有用', pinyin: 'yǒu yòng', meaning: 'полезный' }] },
            { char: '式', pinyin: 'shì', meaning: 'стиль', examples: [{ word: '方式', pinyin: 'fāng shì', meaning: 'способ' }] },
            { char: '样', pinyin: 'yàng', meaning: 'вид', examples: [{ word: '一样', pinyin: 'yí yàng', meaning: 'одинаковый' }] },
            { char: '度', pinyin: 'dù', meaning: 'степень', examples: [{ word: '温度', pinyin: 'wēn dù', meaning: 'температура' }] },
            { char: '质', pinyin: 'zhì', meaning: 'качество', examples: [{ word: '质量', pinyin: 'zhì liàng', meaning: 'качество' }] },
            { char: '建', pinyin: 'jiàn', meaning: 'строить', examples: [{ word: '建设', pinyin: 'jiàn shè', meaning: 'строительство' }] },
            { char: '别', pinyin: 'bié', meaning: 'другой', examples: [{ word: '别人', pinyin: 'bié rén', meaning: 'другие люди' }] },
            { char: '化', pinyin: 'huà', meaning: 'изменять', examples: [{ word: '变化', pinyin: 'biàn huà', meaning: 'изменение' }] },
            { char: '高', pinyin: 'gāo', meaning: 'высокий', examples: [{ word: '高兴', pinyin: 'gāo xìng', meaning: 'радостный' }] },
            { char: '已', pinyin: 'yǐ', meaning: 'уже', examples: [{ word: '已经', pinyin: 'yǐ jīng', meaning: 'уже' }] },
            { char: '与', pinyin: 'yǔ', meaning: 'и', examples: [{ word: '与其', pinyin: 'yǔ qí', meaning: 'вместе с' }] },
            { char: '其', pinyin: 'qí', meaning: 'его', examples: [{ word: '其他', pinyin: 'qí tā', meaning: 'другой' }] },
            { char: '正', pinyin: 'zhèng', meaning: 'правильный', examples: [{ word: '正在', pinyin: 'zhèng zài', meaning: 'в процессе' }] },
            { char: '最', pinyin: 'zuì', meaning: 'самый', examples: [{ word: '最好', pinyin: 'zuì hǎo', meaning: 'лучший' }] },
            { char: '重', pinyin: 'zhòng', meaning: 'тяжёлый', examples: [{ word: '重要', pinyin: 'zhòng yào', meaning: 'важный' }] },
            { char: '或', pinyin: 'huò', meaning: 'или', examples: [{ word: '或者', pinyin: 'huò zhě', meaning: 'или' }] },
            { char: '十', pinyin: 'shí', meaning: 'десять', examples: [{ word: '二十', pinyin: 'èr shí', meaning: 'двадцать' }] },
            { char: '月', pinyin: 'yuè', meaning: 'месяц', examples: [{ word: '一月', pinyin: 'yī yuè', meaning: 'январь' }] },
            { char: '将', pinyin: 'jiāng', meaning: 'будет', examples: [{ word: '将来', pinyin: 'jiāng lái', meaning: 'будущее' }] },
            { char: '无', pinyin: 'wú', meaning: 'нет', examples: [{ word: '无论', pinyin: 'wú lùn', meaning: 'независимо от' }] },
            { char: '被', pinyin: 'bèi', meaning: 'пассивный залог', examples: [{ word: '被动', pinyin: 'bèi dòng', meaning: 'пассивный' }] },
            { char: '由', pinyin: 'yóu', meaning: 'из', examples: [{ word: '由于', pinyin: 'yóu yú', meaning: 'из-за' }] },
            { char: '此', pinyin: 'cǐ', meaning: 'этот', examples: [{ word: '因此', pinyin: 'yīn cǐ', meaning: 'поэтому' }] },
            { char: '主', pinyin: 'zhǔ', meaning: 'главный', examples: [{ word: '主要', pinyin: 'zhǔ yào', meaning: 'главный' }] },
            { char: '立', pinyin: 'lì', meaning: 'стоять', examples: [{ word: '立即', pinyin: 'lì jí', meaning: 'немедленно' }] },
            { char: '名', pinyin: 'míng', meaning: 'имя', examples: [{ word: '名字', pinyin: 'míng zi', meaning: 'имя' }] },
            { char: '间', pinyin: 'jiān', meaning: 'между', examples: [{ word: '时间', pinyin: 'shí jiān', meaning: 'время' }] },
            { char: '新', pinyin: 'xīn', meaning: 'новый', examples: [{ word: '新闻', pinyin: 'xīn wén', meaning: 'новости' }] },
            { char: '长', pinyin: 'cháng', meaning: 'длинный', examples: [{ word: '长短', pinyin: 'cháng duǎn', meaning: 'длина' }] },
            { char: '两', pinyin: 'liǎng', meaning: 'два', examples: [{ word: '两个', pinyin: 'liǎng gè', meaning: 'два (шт.)' }] },
            { char: '回', pinyin: 'huí', meaning: 'возвращаться', examples: [{ word: '回来', pinyin: 'huí lái', meaning: 'возвращаться' }] },
            { char: '题', pinyin: 'tí', meaning: 'тема', examples: [{ word: '问题', pinyin: 'wèn tí', meaning: 'вопрос' }] },
            { char: '意', pinyin: 'yì', meaning: 'смысл', examples: [{ word: '意思', pinyin: 'yì si', meaning: 'значение' }] },
            { char: '气', pinyin: 'qì', meaning: 'воздух', examples: [{ word: '天气', pinyin: 'tiān qì', meaning: 'погода' }] },
            { char: '见', pinyin: 'jiàn', meaning: 'видеть', examples: [{ word: '看见', pinyin: 'kàn jiàn', meaning: 'увидеть' }] },
            { char: '第', pinyin: 'dì', meaning: 'порядковый', examples: [{ word: '第一', pinyin: 'dì yī', meaning: 'первый' }] },
            { char: '道', pinyin: 'dào', meaning: 'путь', examples: [{ word: '知道', pinyin: 'zhī dao', meaning: 'знать' }] },
            { char: '命', pinyin: 'mìng', meaning: 'жизнь', examples: [{ word: '生命', pinyin: 'shēng mìng', meaning: 'жизнь' }] },
            { char: '总', pinyin: 'zǒng', meaning: 'всего', examples: [{ word: '总是', pinyin: 'zǒng shì', meaning: 'всегда' }] },
            { char: '条', pinyin: 'tiáo', meaning: 'полоса', examples: [{ word: '条件', pinyin: 'tiáo jiàn', meaning: 'условие' }] },
            { char: '白', pinyin: 'bái', meaning: 'белый', examples: [{ word: '白色', pinyin: 'bái sè', meaning: 'белый цвет' }] },
            { char: '解', pinyin: 'jiě', meaning: 'решать', examples: [{ word: '解决', pinyin: 'jiě jué', meaning: 'решать' }] },
            { char: '次', pinyin: 'cì', meaning: 'раз', examples: [{ word: '一次', pinyin: 'yí cì', meaning: 'один раз' }] },
            { char: '原', pinyin: 'yuán', meaning: 'источник', examples: [{ word: '原因', pinyin: 'yuán yīn', meaning: 'причина' }] },
            { char: '去', pinyin: 'qù', meaning: 'идти', examples: [{ word: '去年', pinyin: 'qù nián', meaning: 'прошлый год' }] },
            { char: '且', pinyin: 'qiě', meaning: 'и', examples: [{ word: '而且', pinyin: 'ér qiě', meaning: 'и, к тому же' }] },
            { char: '走', pinyin: 'zǒu', meaning: 'идти', examples: [{ word: '走路', pinyin: 'zǒu lù', meaning: 'идти пешком' }] },
            { char: '放', pinyin: 'fàng', meaning: 'класть', examples: [{ word: '放心', pinyin: 'fàng xīn', meaning: 'не волноваться' }] },
            { char: '物', pinyin: 'wù', meaning: 'вещь', examples: [{ word: '动物', pinyin: 'dòng wù', meaning: 'животное' }] },
            { char: '格', pinyin: 'gé', meaning: 'решётка', examples: [{ word: '价格', pinyin: 'jià gé', meaning: 'цена' }] },
            { char: '男', pinyin: 'nán', meaning: 'мужчина', examples: [{ word: '男人', pinyin: 'nán rén', meaning: 'мужчина' }] },
            { char: '老', pinyin: 'lǎo', meaning: 'старый', examples: [{ word: '老师', pinyin: 'lǎo shī', meaning: 'учитель' }] },
            { char: '五', pinyin: 'wǔ', meaning: 'пять', examples: [{ word: '十五', pinyin: 'shí wǔ', meaning: 'пятнадцать' }] },
            { char: '百', pinyin: 'bǎi', meaning: 'сто', examples: [{ word: '一百', pinyin: 'yì bǎi', meaning: 'сто' }] },
            { char: '万', pinyin: 'wàn', meaning: 'десять тысяч', examples: [{ word: '千万', pinyin: 'qiān wàn', meaning: 'обязательно' }] },
            { char: '里', pinyin: 'lǐ', meaning: 'внутри', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '候', pinyin: 'hòu', meaning: 'время', examples: [{ word: '时候', pinyin: 'shí hou', meaning: 'время' }] },
            { char: '向', pinyin: 'xiàng', meaning: 'направление', examples: [{ word: '方向', pinyin: 'fāng xiàng', meaning: 'направление' }] },
            { char: '已', pinyin: 'yǐ', meaning: 'уже', examples: [{ word: '已经', pinyin: 'yǐ jīng', meaning: 'уже' }] },
            { char: '声', pinyin: 'shēng', meaning: 'звук', examples: [{ word: '声音', pinyin: 'shēng yīn', meaning: 'звук' }] },
            { char: '女', pinyin: 'nǚ', meaning: 'женщина', examples: [{ word: '女人', pinyin: 'nǚ rén', meaning: 'женщина' }] },
            { char: '死', pinyin: 'sǐ', meaning: 'умирать', examples: [{ word: '死亡', pinyin: 'sǐ wáng', meaning: 'смерть' }] },
            { char: '运', pinyin: 'yùn', meaning: 'удача', examples: [{ word: '运动', pinyin: 'yùn dòng', meaning: 'спорт' }] },
            { char: '真', pinyin: 'zhēn', meaning: 'правда', examples: [{ word: '真的', pinyin: 'zhēn de', meaning: 'правда' }] },
            { char: '认', pinyin: 'rèn', meaning: 'узнавать', examples: [{ word: '认识', pinyin: 'rèn shi', meaning: 'знать (кого-то)' }] },
            { char: '教', pinyin: 'jiào', meaning: 'учить', examples: [{ word: '教师', pinyin: 'jiào shī', meaning: 'учитель' }] },
            { char: '美', pinyin: 'měi', meaning: 'красивый', examples: [{ word: '美丽', pinyin: 'měi lì', meaning: 'красивый' }] },
            { char: '几', pinyin: 'jǐ', meaning: 'сколько', examples: [{ word: '几个', pinyin: 'jǐ gè', meaning: 'несколько' }] },
            { char: '收', pinyin: 'shōu', meaning: 'получать', examples: [{ word: '收到', pinyin: 'shōu dào', meaning: 'получить' }] },
            { char: '通', pinyin: 'tōng', meaning: 'проходить', examples: [{ word: '通过', pinyin: 'tōng guò', meaning: 'через' }] },
            { char: '入', pinyin: 'rù', meaning: 'входить', examples: [{ word: '进入', pinyin: 'jìn rù', meaning: 'входить' }] },
            { char: '么', pinyin: 'me', meaning: 'частица', examples: [{ word: '什么', pinyin: 'shén me', meaning: 'что' }] },
            { char: '知', pinyin: 'zhī', meaning: 'знать', examples: [{ word: '知道', pinyin: 'zhī dao', meaning: 'знать' }] },
            { char: '边', pinyin: 'biān', meaning: 'край', examples: [{ word: '旁边', pinyin: 'páng biān', meaning: 'рядом' }] },
            { char: '做', pinyin: 'zuò', meaning: 'делать', examples: [{ word: '做事', pinyin: 'zuò shì', meaning: 'делать дело' }] },
            { char: '便', pinyin: 'biàn', meaning: 'удобный', examples: [{ word: '方便', pinyin: 'fāng biàn', meaning: 'удобный' }] },
            { char: '再', pinyin: 'zài', meaning: 'снова', examples: [{ word: '再见', pinyin: 'zài jiàn', meaning: 'до свидания' }] },
            { char: '变', pinyin: 'biàn', meaning: 'менять', examples: [{ word: '变化', pinyin: 'biàn huà', meaning: 'изменение' }] },
            { char: '打', pinyin: 'dǎ', meaning: 'бить', examples: [{ word: '打电话', pinyin: 'dǎ diàn huà', meaning: 'звонить' }] },
            { char: '本', pinyin: 'běn', meaning: 'корень', examples: [{ word: '本来', pinyin: 'běn lái', meaning: 'изначально' }] },
            { char: '太', pinyin: 'tài', meaning: 'слишком', examples: [{ word: '太多', pinyin: 'tài duō', meaning: 'слишком много' }] },
            { char: '结', pinyin: 'jié', meaning: 'завязывать', examples: [{ word: '结果', pinyin: 'jié guǒ', meaning: 'результат' }] },
            { char: '今', pinyin: 'jīn', meaning: 'сегодня', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '给', pinyin: 'gěi', meaning: 'давать', examples: [{ word: '送给', pinyin: 'sòng gěi', meaning: 'подарить' }] },
            { char: '九', pinyin: 'jiǔ', meaning: 'девять', examples: [{ word: '十九', pinyin: 'shí jiǔ', meaning: 'девятнадцать' }] },
            { char: '少', pinyin: 'shǎo', meaning: 'мало', examples: [{ word: '多少', pinyin: 'duō shao', meaning: 'сколько' }] },
            { char: '目', pinyin: 'mù', meaning: 'глаз', examples: [{ word: '目的', pinyin: 'mù dì', meaning: 'цель' }] },
            { char: '比', pinyin: 'bǐ', meaning: 'сравнивать', examples: [{ word: '比较', pinyin: 'bǐ jiào', meaning: 'сравнивать' }] },
            { char: '先', pinyin: 'xiān', meaning: 'сначала', examples: [{ word: '先生', pinyin: 'xiān sheng', meaning: 'господин' }] },
            { char: '让', pinyin: 'ràng', meaning: 'позволять', examples: [{ word: '让开', pinyin: 'ràng kāi', meaning: 'уступить дорогу' }] },
            { char: '步', pinyin: 'bù', meaning: 'шаг', examples: [{ word: '进步', pinyin: 'jìn bù', meaning: 'прогресс' }] },
            { char: '二', pinyin: 'èr', meaning: 'два', examples: [{ word: '十二', pinyin: 'shí èr', meaning: 'двенадцать' }] },
            { char: '三', pinyin: 'sān', meaning: 'три', examples: [{ word: '十三', pinyin: 'shí sān', meaning: 'тринадцать' }] },
            { char: '四', pinyin: 'sì', meaning: 'четыре', examples: [{ word: '十四', pinyin: 'shí sì', meaning: 'четырнадцать' }] },
            { char: '六', pinyin: 'liù', meaning: 'шесть', examples: [{ word: '十六', pinyin: 'shí liù', meaning: 'шестнадцать' }] },
            { char: '七', pinyin: 'qī', meaning: 'семь', examples: [{ word: '十七', pinyin: 'shí qī', meaning: 'семнадцать' }] },
            { char: '八', pinyin: 'bā', meaning: 'восемь', examples: [{ word: '十八', pinyin: 'shí bā', meaning: 'восемнадцать' }] },
            { char: '零', pinyin: 'líng', meaning: 'ноль', examples: [{ word: '零钱', pinyin: 'líng qián', meaning: 'мелочь' }] },
            { char: '半', pinyin: 'bàn', meaning: 'половина', examples: [{ word: '一半', pinyin: 'yí bàn', meaning: 'половина' }] },
            { char: '爸', pinyin: 'bà', meaning: 'папа', examples: [{ word: '爸爸', pinyin: 'bà ba', meaning: 'папа' }] },
            { char: '妈', pinyin: 'mā', meaning: 'мама', examples: [{ word: '妈妈', pinyin: 'mā ma', meaning: 'мама' }] },
            { char: '儿', pinyin: 'ér', meaning: 'сын', examples: [{ word: '儿子', pinyin: 'ér zi', meaning: 'сын' }] },
            { char: '哥', pinyin: 'gē', meaning: 'брат (ст.)', examples: [{ word: '哥哥', pinyin: 'gē ge', meaning: 'старший брат' }] },
            { char: '姐', pinyin: 'jiě', meaning: 'сестра (ст.)', examples: [{ word: '姐姐', pinyin: 'jiě jie', meaning: 'старшая сестра' }] },
            { char: '弟', pinyin: 'dì', meaning: 'брат (мл.)', examples: [{ word: '弟弟', pinyin: 'dì di', meaning: 'младший брат' }] },
            { char: '妹', pinyin: 'mèi', meaning: 'сестра (мл.)', examples: [{ word: '妹妹', pinyin: 'mèi mei', meaning: 'младшая сестра' }] },
            { char: '孩', pinyin: 'hái', meaning: 'ребёнок', examples: [{ word: '孩子', pinyin: 'hái zi', meaning: 'ребёнок' }] },
            { char: '友', pinyin: 'yǒu', meaning: 'друг', examples: [{ word: '朋友', pinyin: 'péng you', meaning: 'друг' }] },
            { char: '星', pinyin: 'xīng', meaning: 'звезда', examples: [{ word: '星期', pinyin: 'xīng qī', meaning: 'неделя' }] },
            { char: '期', pinyin: 'qī', meaning: 'период', examples: [{ word: '星期', pinyin: 'xīng qī', meaning: 'неделя' }] },
            { char: '昨', pinyin: 'zuó', meaning: 'вчера', examples: [{ word: '昨天', pinyin: 'zuó tiān', meaning: 'вчера' }] },
            { char: '午', pinyin: 'wǔ', meaning: 'полдень', examples: [{ word: '中午', pinyin: 'zhōng wǔ', meaning: 'полдень' }] },
            { char: '早', pinyin: 'zǎo', meaning: 'утро', examples: [{ word: '早上', pinyin: 'zǎo shang', meaning: 'утром' }] },
            { char: '晚', pinyin: 'wǎn', meaning: 'вечер', examples: [{ word: '晚上', pinyin: 'wǎn shang', meaning: 'вечером' }] },
            { char: '远', pinyin: 'yuǎn', meaning: 'далеко', examples: [{ word: '远近', pinyin: 'yuǎn jìn', meaning: 'расстояние' }] },
            { char: '近', pinyin: 'jìn', meaning: 'близко', examples: [{ word: '附近', pinyin: 'fù jìn', meaning: 'поблизости' }] },
            { char: '雨', pinyin: 'yǔ', meaning: 'дождь', examples: [{ word: '下雨', pinyin: 'xià yǔ', meaning: 'идёт дождь' }] },
            { char: '雪', pinyin: 'xuě', meaning: 'снег', examples: [{ word: '下雪', pinyin: 'xià xuě', meaning: 'идёт снег' }] },
            { char: '风', pinyin: 'fēng', meaning: 'ветер', examples: [{ word: '刮风', pinyin: 'guā fēng', meaning: 'дует ветер' }] },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода', examples: [{ word: '水果', pinyin: 'shuǐ guǒ', meaning: 'фрукты' }, { word: '喝水', pinyin: 'hē shuǐ', meaning: 'пить воду' }] },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '山', pinyin: 'shān', meaning: 'гора', examples: [{ word: '雪山', pinyin: 'xuě shān', meaning: 'снежная гора' }] },
            { char: '海', pinyin: 'hǎi', meaning: 'море', examples: [{ word: '大海', pinyin: 'dà hǎi', meaning: 'море' }] },
            { char: '花', pinyin: 'huā', meaning: 'цветок', examples: [{ word: '花园', pinyin: 'huā yuán', meaning: 'сад' }] },
            { char: '草', pinyin: 'cǎo', meaning: 'трава', examples: [{ word: '草地', pinyin: 'cǎo dì', meaning: 'лужайка' }] },
            { char: '树', pinyin: 'shù', meaning: 'дерево', examples: [{ word: '树木', pinyin: 'shù mù', meaning: 'деревья' }] },
            { char: '木', pinyin: 'mù', meaning: 'древесина', examples: [{ word: '木头', pinyin: 'mù tou', meaning: 'дерево (материал)' }] },
            { char: '阳', pinyin: 'yáng', meaning: 'солнце', examples: [{ word: '太阳', pinyin: 'tài yáng', meaning: 'солнце' }] },
            { char: '光', pinyin: 'guāng', meaning: 'свет', examples: [{ word: '阳光', pinyin: 'yáng guāng', meaning: 'солнечный свет' }] },
            { char: '吃', pinyin: 'chī', meaning: 'есть', examples: [{ word: '吃饭', pinyin: 'chī fàn', meaning: 'обедать' }] },
            { char: '喝', pinyin: 'hē', meaning: 'пить', examples: [{ word: '喝茶', pinyin: 'hē chá', meaning: 'пить чай' }] },
            { char: '饭', pinyin: 'fàn', meaning: 'еда', examples: [{ word: '米饭', pinyin: 'mǐ fàn', meaning: 'варёный рис' }] },
            { char: '菜', pinyin: 'cài', meaning: 'блюдо', examples: [{ word: '点菜', pinyin: 'diǎn cài', meaning: 'заказывать блюда' }] },
            { char: '茶', pinyin: 'chá', meaning: 'чай', examples: [{ word: '绿茶', pinyin: 'lǜ chá', meaning: 'зелёный чай' }] },
            { char: '果', pinyin: 'guǒ', meaning: 'фрукт', examples: [{ word: '水果', pinyin: 'shuǐ guǒ', meaning: 'фрукты' }] },
            { char: '米', pinyin: 'mǐ', meaning: 'рис', examples: [{ word: '大米', pinyin: 'dà mǐ', meaning: 'рис' }] },
            { char: '酒', pinyin: 'jiǔ', meaning: 'алкоголь', examples: [{ word: '啤酒', pinyin: 'pí jiǔ', meaning: 'пиво' }] },
            { char: '奶', pinyin: 'nǎi', meaning: 'молоко', examples: [{ word: '牛奶', pinyin: 'niú nǎi', meaning: 'молоко' }] },
            { char: '蛋', pinyin: 'dàn', meaning: 'яйцо', examples: [{ word: '鸡蛋', pinyin: 'jī dàn', meaning: 'куриное яйцо' }] },
            { char: '肉', pinyin: 'ròu', meaning: 'мясо', examples: [{ word: '牛肉', pinyin: 'niú ròu', meaning: 'говядина' }] },
            { char: '鱼', pinyin: 'yú', meaning: 'рыба', examples: [{ word: '鱼肉', pinyin: 'yú ròu', meaning: 'рыбное мясо' }] },
            { char: '汤', pinyin: 'tāng', meaning: 'суп', examples: [{ word: '菜汤', pinyin: 'cài tāng', meaning: 'овощной суп' }] },
            { char: '糖', pinyin: 'táng', meaning: 'сахар', examples: [{ word: '糖果', pinyin: 'táng guǒ', meaning: 'конфеты' }] },
            { char: '听', pinyin: 'tīng', meaning: 'слушать', examples: [{ word: '听话', pinyin: 'tīng huà', meaning: 'слушаться' }] },
            { char: '读', pinyin: 'dú', meaning: 'читать', examples: [{ word: '读书', pinyin: 'dú shū', meaning: 'читать/учиться' }] },
            { char: '写', pinyin: 'xiě', meaning: 'писать', examples: [{ word: '写字', pinyin: 'xiě zì', meaning: 'писать иероглифы' }] },
            { char: '坐', pinyin: 'zuò', meaning: 'сидеть', examples: [{ word: '坐下', pinyin: 'zuò xià', meaning: 'садиться' }] },
            { char: '跑', pinyin: 'pǎo', meaning: 'бежать', examples: [{ word: '跑步', pinyin: 'pǎo bù', meaning: 'бегать' }] },
            { char: '飞', pinyin: 'fēi', meaning: 'лететь', examples: [{ word: '飞机', pinyin: 'fēi jī', meaning: 'самолёт' }] },
            { char: '叫', pinyin: 'jiào', meaning: 'звать', examples: [{ word: '叫做', pinyin: 'jiào zuò', meaning: 'называться' }] },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать', examples: [{ word: '问题', pinyin: 'wèn tí', meaning: 'вопрос' }] },
            { char: '睡', pinyin: 'shuì', meaning: 'спать', examples: [{ word: '睡觉', pinyin: 'shuì jiào', meaning: 'спать' }] },
            { char: '买', pinyin: 'mǎi', meaning: 'покупать', examples: [{ word: '买东西', pinyin: 'mǎi dōng xi', meaning: 'делать покупки' }] },
            { char: '卖', pinyin: 'mài', meaning: 'продавать', examples: [{ word: '买卖', pinyin: 'mǎi mài', meaning: 'торговля' }] },
            { char: '关', pinyin: 'guān', meaning: 'закрывать', examples: [{ word: '关门', pinyin: 'guān mén', meaning: 'закрывать дверь' }] },
            { char: '穿', pinyin: 'chuān', meaning: 'носить', examples: [{ word: '穿衣服', pinyin: 'chuān yī fu', meaning: 'одеваться' }] },
            { char: '起', pinyin: 'qǐ', meaning: 'вставать', examples: [{ word: '起床', pinyin: 'qǐ chuáng', meaning: 'вставать с постели' }] },
            { char: '校', pinyin: 'xiào', meaning: 'школа', examples: [{ word: '学校', pinyin: 'xué xiào', meaning: 'школа' }] },
            { char: '班', pinyin: 'bān', meaning: 'класс', examples: [{ word: '班级', pinyin: 'bān jí', meaning: 'класс' }] },
            { char: '医', pinyin: 'yī', meaning: 'врач', examples: [{ word: '医生', pinyin: 'yī shēng', meaning: 'врач' }] },
            { char: '院', pinyin: 'yuàn', meaning: 'больница', examples: [{ word: '医院', pinyin: 'yī yuàn', meaning: 'больница' }] },
            { char: '店', pinyin: 'diàn', meaning: 'магазин', examples: [{ word: '商店', pinyin: 'shāng diàn', meaning: 'магазин' }] },
            { char: '公', pinyin: 'gōng', meaning: 'общественный', examples: [{ word: '公园', pinyin: 'gōng yuán', meaning: 'парк' }] },
            { char: '司', pinyin: 'sī', meaning: 'компания', examples: [{ word: '公司', pinyin: 'gōng sī', meaning: 'компания' }] },
            { char: '课', pinyin: 'kè', meaning: 'урок', examples: [{ word: '上课', pinyin: 'shàng kè', meaning: 'посещать урок' }] },
            { char: '习', pinyin: 'xí', meaning: 'практика', examples: [{ word: '学习', pinyin: 'xué xí', meaning: 'учиться' }] },
            { char: '兴', pinyin: 'xìng', meaning: 'интерес', examples: [{ word: '高兴', pinyin: 'gāo xìng', meaning: 'радостный' }] },
            { char: '漂', pinyin: 'piào', meaning: 'красивый', examples: [{ word: '漂亮', pinyin: 'piào liang', meaning: 'красивый' }] },
            { char: '亮', pinyin: 'liàng', meaning: 'яркий', examples: [{ word: '漂亮', pinyin: 'piào liang', meaning: 'красивый' }] },
            { char: '忙', pinyin: 'máng', meaning: 'занятой', examples: [{ word: '很忙', pinyin: 'hěn máng', meaning: 'очень занят' }] },
            { char: '累', pinyin: 'lèi', meaning: 'усталый', examples: [{ word: '很累', pinyin: 'hěn lèi', meaning: 'очень устал' }] },
            { char: '冷', pinyin: 'lěng', meaning: 'холодный', examples: [{ word: '很冷', pinyin: 'hěn lěng', meaning: 'очень холодно' }] },
            { char: '热', pinyin: 'rè', meaning: 'горячий', examples: [{ word: '很热', pinyin: 'hěn rè', meaning: 'очень жарко' }] },
            { char: '快', pinyin: 'kuài', meaning: 'быстрый', examples: [{ word: '很快', pinyin: 'hěn kuài', meaning: 'очень быстро' }] },
            { char: '慢', pinyin: 'màn', meaning: 'медленный', examples: [{ word: '很慢', pinyin: 'hěn màn', meaning: 'очень медленно' }] },
            { char: '书', pinyin: 'shū', meaning: 'книга', examples: [{ word: '书店', pinyin: 'shū diàn', meaning: 'книжный магазин' }] },
            { char: '笔', pinyin: 'bǐ', meaning: 'ручка', examples: [{ word: '铅笔', pinyin: 'qiān bǐ', meaning: 'карандаш' }] },
            { char: '纸', pinyin: 'zhǐ', meaning: 'бумага', examples: [{ word: '报纸', pinyin: 'bào zhǐ', meaning: 'газета' }] },
            { char: '桌', pinyin: 'zhuō', meaning: 'стол', examples: [{ word: '桌子', pinyin: 'zhuō zi', meaning: 'стол' }] },
            { char: '椅', pinyin: 'yǐ', meaning: 'стул', examples: [{ word: '椅子', pinyin: 'yǐ zi', meaning: 'стул' }] },
            { char: '门', pinyin: 'mén', meaning: 'дверь', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] },
            { char: '窗', pinyin: 'chuāng', meaning: 'окно', examples: [{ word: '窗户', pinyin: 'chuāng hu', meaning: 'окно' }] },
            { char: '车', pinyin: 'chē', meaning: 'машина', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '船', pinyin: 'chuán', meaning: 'лодка', examples: [{ word: '小船', pinyin: 'xiǎo chuán', meaning: 'лодка' }] },
            { char: '话', pinyin: 'huà', meaning: 'речь', examples: [{ word: '说话', pinyin: 'shuō huà', meaning: 'разговаривать' }] },
            { char: '名', pinyin: 'míng', meaning: 'имя', examples: [{ word: '名字', pinyin: 'míng zi', meaning: 'имя' }] },
            { char: '电', pinyin: 'diàn', meaning: 'электричество', examples: [{ word: '电话', pinyin: 'diàn huà', meaning: 'телефон' }] },
            { char: '脑', pinyin: 'nǎo', meaning: 'мозг', examples: [{ word: '电脑', pinyin: 'diàn nǎo', meaning: 'компьютер' }] },
            { char: '视', pinyin: 'shì', meaning: 'видеть', examples: [{ word: '电视', pinyin: 'diàn shì', meaning: 'телевизор' }] },
            { char: '字', pinyin: 'zì', meaning: 'иероглиф', examples: [{ word: '汉字', pinyin: 'hàn zì', meaning: 'китайский иероглиф' }] },
            { char: '衣', pinyin: 'yī', meaning: 'одежда', examples: [{ word: '衣服', pinyin: 'yī fu', meaning: 'одежда' }] },
            { char: '服', pinyin: 'fú', meaning: 'одежда', examples: [{ word: '衣服', pinyin: 'yī fu', meaning: 'одежда' }] },
            { char: '鞋', pinyin: 'xié', meaning: 'обувь', examples: [{ word: '皮鞋', pinyin: 'pí xié', meaning: 'кожаная обувь' }] },
            { char: '猫', pinyin: 'māo', meaning: 'кошка', examples: [{ word: '小猫', pinyin: 'xiǎo māo', meaning: 'котёнок' }] },
            { char: '狗', pinyin: 'gǒu', meaning: 'собака', examples: [{ word: '小狗', pinyin: 'xiǎo gǒu', meaning: 'щенок' }] },
            { char: '鸟', pinyin: 'niǎo', meaning: 'птица', examples: [{ word: '小鸟', pinyin: 'xiǎo niǎo', meaning: 'птичка' }] },
            { char: '马', pinyin: 'mǎ', meaning: 'лошадь', examples: [{ word: '马上', pinyin: 'mǎ shàng', meaning: 'сейчас' }] },
            { char: '牛', pinyin: 'niú', meaning: 'корова', examples: [{ word: '牛奶', pinyin: 'niú nǎi', meaning: 'молоко' }] },
            { char: '羊', pinyin: 'yáng', meaning: 'овца', examples: [{ word: '羊肉', pinyin: 'yáng ròu', meaning: 'баранина' }] },
            { char: '鸡', pinyin: 'jī', meaning: 'курица', examples: [{ word: '鸡肉', pinyin: 'jī ròu', meaning: 'куриное мясо' }] },
            { char: '红', pinyin: 'hóng', meaning: 'красный', examples: [{ word: '红色', pinyin: 'hóng sè', meaning: 'красный цвет' }] },
            { char: '黄', pinyin: 'huáng', meaning: 'жёлтый', examples: [{ word: '黄色', pinyin: 'huáng sè', meaning: 'жёлтый цвет' }] },
            { char: '蓝', pinyin: 'lán', meaning: 'синий', examples: [{ word: '蓝色', pinyin: 'lán sè', meaning: 'синий цвет' }] },
            { char: '绿', pinyin: 'lǜ', meaning: 'зелёный', examples: [{ word: '绿色', pinyin: 'lǜ sè', meaning: 'зелёный цвет' }] },
            { char: '黑', pinyin: 'hēi', meaning: 'чёрный', examples: [{ word: '黑色', pinyin: 'hēi sè', meaning: 'чёрный цвет' }] },
            { char: '身', pinyin: 'shēn', meaning: 'тело', examples: [{ word: '身体', pinyin: 'shēn tǐ', meaning: 'здоровье' }] },
            { char: '头', pinyin: 'tóu', meaning: 'голова', examples: [{ word: '头发', pinyin: 'tóu fa', meaning: 'волосы' }] },
            { char: '手', pinyin: 'shǒu', meaning: 'рука', examples: [{ word: '手机', pinyin: 'shǒu jī', meaning: 'телефон' }] },
            { char: '眼', pinyin: 'yǎn', meaning: 'глаз', examples: [{ word: '眼睛', pinyin: 'yǎn jing', meaning: 'глаза' }] },
            { char: '口', pinyin: 'kǒu', meaning: 'рот', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] },
            { char: '耳', pinyin: 'ěr', meaning: 'ухо', examples: [{ word: '耳朵', pinyin: 'ěr duo', meaning: 'уши' }] },
            { char: '心', pinyin: 'xīn', meaning: 'сердце', examples: [{ word: '开心', pinyin: 'kāi xīn', meaning: 'радостный' }] },
            { char: '脚', pinyin: 'jiǎo', meaning: 'стопа', examples: [{ word: '脚步', pinyin: 'jiǎo bù', meaning: 'шаг' }] }
        ]
    },

    // ═══════════════════════════════════════════════════════════
    // 🥈 HSK 2 — УНИКАЛЬНЫЕ ИЕРОГЛИФЫ (без повторов из HSK 1)
    // ═══════════════════════════════════════════════════════════
    hsk2_all: {
        name: "🥈 HSK 2 · Весь уровень",
        description: "~150 уникальных иероглифов элементарного уровня",
        group: "hsk",
        color: "#a8a8a8",
        items: [
            { char: '吧', pinyin: 'ba', meaning: 'частица' },
            { char: '把', pinyin: 'bǎ', meaning: 'частица (конструкция)' },
            { char: '包', pinyin: 'bāo', meaning: 'сумка' },
            { char: '北', pinyin: 'běi', meaning: 'север' },
            { char: '病', pinyin: 'bìng', meaning: 'болезнь' },
            { char: '才', pinyin: 'cái', meaning: 'только что' },
            { char: '层', pinyin: 'céng', meaning: 'этаж' },
            { char: '差', pinyin: 'chà', meaning: 'плохой' },
            { char: '唱', pinyin: 'chàng', meaning: 'петь' },
            { char: '城', pinyin: 'chéng', meaning: 'город' },
            { char: '错', pinyin: 'cuò', meaning: 'ошибка' },
            { char: '懂', pinyin: 'dǒng', meaning: 'понимать' },
            { char: '多', pinyin: 'duō', meaning: 'много' },
            { char: '贵', pinyin: 'guì', meaning: 'дорогой' },
            { char: '还', pinyin: 'hái', meaning: 'ещё' },
            { char: '很', pinyin: 'hěn', meaning: 'очень' },
            { char: '坏', pinyin: 'huài', meaning: 'плохой' },
            { char: '欢', pinyin: 'huān', meaning: 'радостный' },
            { char: '觉', pinyin: 'jué', meaning: 'чувствовать' },
            { char: '考', pinyin: 'kǎo', meaning: 'экзамен' },
            { char: '块', pinyin: 'kuài', meaning: 'кусок/юань' },
            { char: '路', pinyin: 'lù', meaning: 'дорога' },
            { char: '旅', pinyin: 'lǚ', meaning: 'путешествие' },
            { char: '吗', pinyin: 'ma', meaning: 'вопросит. частица' },
            { char: '每', pinyin: 'měi', meaning: 'каждый' },
            { char: '拿', pinyin: 'ná', meaning: 'брать' },
            { char: '哪', pinyin: 'nǎ', meaning: 'какой' },
            { char: '南', pinyin: 'nán', meaning: 'юг' },
            { char: '难', pinyin: 'nán', meaning: 'трудный' },
            { char: '呢', pinyin: 'ne', meaning: 'частица' },
            { char: '您', pinyin: 'nín', meaning: 'Вы (вежл.)' },
            { char: '旁', pinyin: 'páng', meaning: 'рядом' },
            { char: '票', pinyin: 'piào', meaning: 'билет' },
            { char: '妻', pinyin: 'qī', meaning: 'жена' },
            { char: '钱', pinyin: 'qián', meaning: 'деньги' },
            { char: '晴', pinyin: 'qíng', meaning: 'ясная погода' },
            { char: '谁', pinyin: 'shéi', meaning: 'кто' },
            { char: '什', pinyin: 'shén', meaning: 'что (в 什么)' },
            { char: '试', pinyin: 'shì', meaning: 'пробовать' },
            { char: '岁', pinyin: 'suì', meaning: 'лет (возраст)' },
            { char: '她', pinyin: 'tā', meaning: 'она' },
            { char: '洗', pinyin: 'xǐ', meaning: 'мыть' },
            { char: '些', pinyin: 'xiē', meaning: 'немного' },
            { char: '谢', pinyin: 'xiè', meaning: 'благодарить' },
            { char: '休', pinyin: 'xiū', meaning: 'отдыхать' },
            { char: '颜', pinyin: 'yán', meaning: 'цвет' },
            { char: '药', pinyin: 'yào', meaning: 'лекарство' },
            { char: '阴', pinyin: 'yīn', meaning: 'пасмурный' },
            { char: '饮', pinyin: 'yǐn', meaning: 'пить' },
            { char: '英', pinyin: 'yīng', meaning: 'Англия' },
            { char: '元', pinyin: 'yuán', meaning: 'юань' },
            { char: '怎', pinyin: 'zěn', meaning: 'как (в 怎么)' },
            { char: '左', pinyin: 'zuǒ', meaning: 'левый' },
            { char: '右', pinyin: 'yòu', meaning: 'правый' },
            { char: '东', pinyin: 'dōng', meaning: 'восток' },
            { char: '西', pinyin: 'xī', meaning: 'запад' },
            { char: '鸭', pinyin: 'yā', meaning: 'утка' },
            { char: '猪', pinyin: 'zhū', meaning: 'свинья' },
            { char: '帽', pinyin: 'mào', meaning: 'шапка' },
            { char: '牙', pinyin: 'yá', meaning: 'зуб' },
            { char: '鼻', pinyin: 'bí', meaning: 'нос' },
            { char: '父', pinyin: 'fù', meaning: 'отец' },
            { char: '母', pinyin: 'mǔ', meaning: 'мать' },
            { char: '爷', pinyin: 'yé', meaning: 'дедушка' },
            { char: '夫', pinyin: 'fū', meaning: 'муж' },
            { char: '刻', pinyin: 'kè', meaning: 'четверть часа' },
            { char: '种', pinyin: 'zhǒng', meaning: 'вид/сорт' },
            { char: '周', pinyin: 'zhōu', meaning: 'неделя' },
            { char: '低', pinyin: 'dī', meaning: 'низкий' },
            { char: '短', pinyin: 'duǎn', meaning: 'короткий' },
            { char: '旧', pinyin: 'jiù', meaning: 'старый (вещь)' },
            { char: '帮', pinyin: 'bāng', meaning: 'помогать' },
            { char: '办', pinyin: 'bàn', meaning: 'делать' },
            { char: '介', pinyin: 'jiè', meaning: 'представлять' },
            { char: '绍', pinyin: 'shào', meaning: 'представлять' },
            { char: '简', pinyin: 'jiǎn', meaning: 'простой' },
            { char: '单', pinyin: 'dān', meaning: 'простой' },
            { char: '复', pinyin: 'fù', meaning: 'повторять' },
            { char: '杂', pinyin: 'zá', meaning: 'смешанный' },
            { char: '容', pinyin: 'róng', meaning: 'вмещать' },
            { char: '易', pinyin: 'yì', meaning: 'легкий' },
            { char: '困', pinyin: 'kùn', meaning: 'сонный' },
            { char: '清', pinyin: 'qīng', meaning: 'чистый' },
            { char: '楚', pinyin: 'chǔ', meaning: 'ясный' },
            { char: '感', pinyin: 'gǎn', meaning: 'чувство' },
            { char: '识', pinyin: 'shí', meaning: 'знание' },
            { char: '照', pinyin: 'zhào', meaning: 'освещать' },
            { char: '顾', pinyin: 'gù', meaning: 'смотреть' },
            { char: '保', pinyin: 'bǎo', meaning: 'защищать' },
            { char: '护', pinyin: 'hù', meaning: 'защищать' },
            { char: '迎', pinyin: 'yíng', meaning: 'встречать' },
            { char: '送', pinyin: 'sòng', meaning: 'дарить/провожать' },
            { char: '借', pinyin: 'jiè', meaning: 'одалживать' },
            { char: '挂', pinyin: 'guà', meaning: 'вешать' },
            { char: '搬', pinyin: 'bān', meaning: 'переносить' },
            { char: '寄', pinyin: 'jì', meaning: 'отправлять (почтой)' },
            { char: '换', pinyin: 'huàn', meaning: 'менять' },
            { char: '检', pinyin: 'jiǎn', meaning: 'проверять' },
            { char: '查', pinyin: 'chá', meaning: 'искать/проверять' },
            { char: '较', pinyin: 'jiào', meaning: 'сравнивать' },
            { char: '选', pinyin: 'xuǎn', meaning: 'выбирать' },
            { char: '择', pinyin: 'zé', meaning: 'выбирать' },
            { char: '决', pinyin: 'jué', meaning: 'решать' },
            { char: '定', pinyin: 'dìng', meaning: 'определять' },
            { char: '参', pinyin: 'cān', meaning: 'участвовать' },
            { char: '加', pinyin: 'jiā', meaning: 'добавлять' },
            { char: '安', pinyin: 'ān', meaning: 'спокойный' },
            { char: '排', pinyin: 'pái', meaning: 'располагать' },
            { char: '划', pinyin: 'huà', meaning: 'планировать' },
            { char: '准', pinyin: 'zhǔn', meaning: 'точный' },
            { char: '备', pinyin: 'bèi', meaning: 'готовить' },
            { char: '完', pinyin: 'wán', meaning: 'законченный' },
            { char: '束', pinyin: 'shù', meaning: 'связка/конец' },
            { char: '继', pinyin: 'jì', meaning: 'продолжать' },
            { char: '续', pinyin: 'xù', meaning: 'продолжать' },
            { char: '停', pinyin: 'tíng', meaning: 'останавливать' },
            { char: '止', pinyin: 'zhǐ', meaning: 'прекращать' },
            { char: '弃', pinyin: 'qì', meaning: 'бросать/оставлять' },
            { char: '坚', pinyin: 'jiān', meaning: 'твёрдый' },
            { char: '持', pinyin: 'chí', meaning: 'держать' },
            { char: '努', pinyin: 'nǔ', meaning: 'стараться' },
            { char: '练', pinyin: 'liàn', meaning: 'тренировать' },
            { char: '预', pinyin: 'yù', meaning: 'заранее' },
            { char: '毕', pinyin: 'bì', meaning: 'заканчивать' },
            { char: '业', pinyin: 'yè', meaning: 'профессия' },
            { char: '留', pinyin: 'liú', meaning: 'оставаться' },
            { char: '游', pinyin: 'yóu', meaning: 'плавать/гулять' },
            { char: '观', pinyin: 'guān', meaning: 'смотреть/наблюдать' },
            { char: '访', pinyin: 'fǎng', meaning: 'посещать' },
            { char: '邀', pinyin: 'yāo', meaning: 'приглашать' },
            { char: '请', pinyin: 'qǐng', meaning: 'просить/приглашать' },
            { char: '庆', pinyin: 'qìng', meaning: 'праздновать' },
            { char: '祝', pinyin: 'zhù', meaning: 'желать' },
            { char: '贺', pinyin: 'hè', meaning: 'поздравлять' },
            { char: '歉', pinyin: 'qiàn', meaning: 'извиняться' },
            { char: '谅', pinyin: 'liàng', meaning: 'прощать' },
            { char: '抱', pinyin: 'bào', meaning: 'обнимать' },
            { char: '怨', pinyin: 'yuàn', meaning: 'жаловаться' },
            { char: '批', pinyin: 'pī', meaning: 'критиковать' },
            { char: '评', pinyin: 'píng', meaning: 'оценивать' },
            { char: '表', pinyin: 'biǎo', meaning: 'показывать' },
            { char: '扬', pinyin: 'yáng', meaning: 'хвалить/поднимать' },
            { char: '鼓', pinyin: 'gǔ', meaning: 'барабан/поощрять' },
            { char: '励', pinyin: 'lì', meaning: 'поощрять' },
            { char: '议', pinyin: 'yì', meaning: 'предложение/обсуждать' },
            { char: '提', pinyin: 'tí', meaning: 'поднимать/предлагать' },
            { char: '醒', pinyin: 'xǐng', meaning: 'просыпаться/будить' },
            { char: '告', pinyin: 'gào', meaning: 'сообщать' },
            { char: '诉', pinyin: 'sù', meaning: 'рассказывать/жаловаться' },
            { char: '释', pinyin: 'shì', meaning: 'объяснять' },
            { char: '翻', pinyin: 'fān', meaning: 'переворачивать/переводить' },
            { char: '译', pinyin: 'yì', meaning: 'переводить' },
            { char: '描', pinyin: 'miáo', meaning: 'описывать/рисовать' },
            { char: '述', pinyin: 'shù', meaning: 'рассказывать/излагать' },
            { char: '讨', pinyin: 'tǎo', meaning: 'обсуждать' },
            { char: '论', pinyin: 'lùn', meaning: 'обсуждать/теория' },
            { char: '商', pinyin: 'shāng', meaning: 'торговать/советоваться' },
            { char: '量', pinyin: 'liàng', meaning: 'количество/измерять' }
        ]
    },



        // ═══════════════════════════════════════════════════════════
    // 🥇 HSK 3 — УНИКАЛЬНЫЕ ИЕРОГЛИФЫ (без повторов из HSK 1-2)
    // ═══════════════════════════════════════════════════════════
    hsk3_all: {
        name: "🥇 HSK 3 · Весь уровень",
        description: "~300 уникальных иероглифов среднего уровня",
        group: "hsk",
        color: "#ffd700",
        items: [
            { char: '啊', pinyin: 'a', meaning: 'ах (восклицание)' },
            { char: '哀', pinyin: 'āi', meaning: 'горе/печаль' },
            { char: '挨', pinyin: 'āi', meaning: 'терпеть/рядом' },
            { char: '癌', pinyin: 'ái', meaning: 'рак (болезнь)' },
            { char: '矮', pinyin: 'ǎi', meaning: 'низкий (рост)' },
            { char: '爱', pinyin: 'ài', meaning: 'любить' },
            { char: '碍', pinyin: 'ài', meaning: 'мешать' },
            { char: '岸', pinyin: 'àn', meaning: 'берег' },
            { char: '按', pinyin: 'àn', meaning: 'нажимать' },
            { char: '案', pinyin: 'àn', meaning: 'дело/стол' },
            { char: '昂', pinyin: 'áng', meaning: 'поднимать голову' },
            { char: '凹', pinyin: 'āo', meaning: 'вогнутый' },
            { char: '熬', pinyin: 'áo', meaning: 'варить долго' },
            { char: '傲', pinyin: 'ào', meaning: 'гордый' },
            { char: '奥', pinyin: 'ào', meaning: 'глубокий/таинственный' },
            { char: '坝', pinyin: 'bà', meaning: 'плотина' },
            { char: '罢', pinyin: 'bà', meaning: 'прекращать' },
            { char: '霸', pinyin: 'bà', meaning: 'тиран/гегемон' },
            { char: '拜', pinyin: 'bài', meaning: 'кланяться/посещать' },
            { char: '斑', pinyin: 'bān', meaning: 'пятно/полоса' },
            { char: '搬', pinyin: 'bān', meaning: 'переносить' },
            { char: '板', pinyin: 'bǎn', meaning: 'доска/пластина' },
            { char: '版', pinyin: 'bǎn', meaning: 'издание/версия' },
            { char: '扮', pinyin: 'bàn', meaning: 'играть роль/наряжаться' },
            { char: '伴', pinyin: 'bàn', meaning: 'спутник/компаньон' },
            { char: '绑', pinyin: 'bǎng', meaning: 'связывать' },
            { char: '榜', pinyin: 'bǎng', meaning: 'список/таблица' },
            { char: '膀', pinyin: 'bǎng', meaning: 'плечо/крыло' },
            { char: '棒', pinyin: 'bàng', meaning: 'палка/отличный' },
            { char: '胞', pinyin: 'bāo', meaning: 'клетка/соотечественник' },
            { char: '饱', pinyin: 'bǎo', meaning: 'сытый' },
            { char: '宝', pinyin: 'bǎo', meaning: 'сокровище' },
            { char: '抱', pinyin: 'bào', meaning: 'обнимать/держать' },
            { char: '暴', pinyin: 'bào', meaning: 'жестокий/внезапный' },
            { char: '爆', pinyin: 'bào', meaning: 'взрываться' },
            { char: '杯', pinyin: 'bēi', meaning: 'чашка/кубок' },
            { char: '悲', pinyin: 'bēi', meaning: 'печальный' },
            { char: '碑', pinyin: 'bēi', meaning: 'памятник/стела' },
            { char: '辈', pinyin: 'bèi', meaning: 'поколение' },
            { char: '奔', pinyin: 'bēn', meaning: 'бежать/стремиться' },
            { char: '崩', pinyin: 'bēng', meaning: 'рушиться/трескаться' },
            { char: '逼', pinyin: 'bī', meaning: 'принуждать/приближаться' },
            { char: '鼻', pinyin: 'bí', meaning: 'нос' },
            { char: '比', pinyin: 'bǐ', meaning: 'сравнивать' },
            { char: '彼', pinyin: 'bǐ', meaning: 'тот/другой' },
            { char: '笔', pinyin: 'bǐ', meaning: 'ручка/кисть' },
            { char: '币', pinyin: 'bì', meaning: 'валюта/монета' },
            { char: '必', pinyin: 'bì', meaning: 'обязательно' },
            { char: '闭', pinyin: 'bì', meaning: 'закрывать' },
            { char: '避', pinyin: 'bì', meaning: 'избегать' },
            { char: '壁', pinyin: 'bì', meaning: 'стена' },
            { char: '臂', pinyin: 'bì', meaning: 'рука (от плеча)' },
            { char: '边', pinyin: 'biān', meaning: 'край/сторона' },
            { char: '编', pinyin: 'biān', meaning: 'плести/редактировать' },
            { char: '鞭', pinyin: 'biān', meaning: 'кнут/плеть' },
            { char: '扁', pinyin: 'biǎn', meaning: 'плоский' },
            { char: '便', pinyin: 'biàn', meaning: 'удобный/затем' },
            { char: '遍', pinyin: 'biàn', meaning: 'повсюду/раз (сч. слово)' },
            { char: '标', pinyin: 'biāo', meaning: 'метка/знак' },
            { char: '膘', pinyin: 'biāo', meaning: 'жир (у животных)' },
            { char: '表', pinyin: 'biǎo', meaning: 'показывать/часы' },
            { char: '憋', pinyin: 'biē', meaning: 'сдерживать' },
            { char: '宾', pinyin: 'bīn', meaning: 'гость' },
            { char: '冰', pinyin: 'bīng', meaning: 'лёд' },
            { char: '饼', pinyin: 'bǐng', meaning: 'лепёшка/блин' },
            { char: '并', pinyin: 'bìng', meaning: 'и/одновременно' },
            { char: '病', pinyin: 'bìng', meaning: 'болезнь' },
            { char: '拨', pinyin: 'bō', meaning: 'отодвигать/набирать номер' },
            { char: '波', pinyin: 'bō', meaning: 'волна' },
            { char: '玻', pinyin: 'bō', meaning: 'стекло' },
            { char: '剥', pinyin: 'bō', meaning: 'очищать/сдирать' },
            { char: '脖', pinyin: 'bó', meaning: 'шея' },
            { char: '博', pinyin: 'bó', meaning: 'широкий/азартная игра' },
            { char: '搏', pinyin: 'bó', meaning: 'бороться/биться' },
            { char: '薄', pinyin: 'báo', meaning: 'тонкий' },
            { char: '补', pinyin: 'bǔ', meaning: 'латать/дополнять' },
            { char: '捕', pinyin: 'bǔ', meaning: 'ловить/арестовывать' },
            { char: '哺', pinyin: 'bǔ', meaning: 'кормить грудью' },
            { char: '猜', pinyin: 'cāi', meaning: 'угадывать' },
            { char: '裁', pinyin: 'cái', meaning: 'кроить/сокращать' },
            { char: '采', pinyin: 'cǎi', meaning: 'собирать/добывать' },
            { char: '彩', pinyin: 'cǎi', meaning: 'цветной/радужный' },
            { char: '踩', pinyin: 'cǎi', meaning: 'наступать/топтать' },
            { char: '参', pinyin: 'cān', meaning: 'участвовать/женьшень' },
            { char: '残', pinyin: 'cán', meaning: 'остаток/жестокий' },
            { char: '蚕', pinyin: 'cán', meaning: 'шелкопряд' },
            { char: '惨', pinyin: 'cǎn', meaning: 'трагический/жалкий' },
            { char: '灿', pinyin: 'càn', meaning: 'яркий/блестящий' },
            { char: '仓', pinyin: 'cāng', meaning: 'склад/амбар' },
            { char: '苍', pinyin: 'cāng', meaning: 'седой/зеленоватый' },
            { char: '舱', pinyin: 'cāng', meaning: 'каюта/отсек' },
            { char: '藏', pinyin: 'cáng', meaning: 'прятать/Тибет' },
            { char: '操', pinyin: 'cāo', meaning: 'управлять/гимнастика' },
            { char: '槽', pinyin: 'cáo', meaning: 'жёлоб/корыто' },
            { char: '草', pinyin: 'cǎo', meaning: 'трава/черновик' },
            { char: '册', pinyin: 'cè', meaning: 'том/книга' },
            { char: '测', pinyin: 'cè', meaning: 'измерять/тестировать' },
            { char: '策', pinyin: 'cè', meaning: 'стратегия/политика' },
            { char: '叉', pinyin: 'chā', meaning: 'вилка/крест' },
            { char: '插', pinyin: 'chā', meaning: 'втыкать/вставлять' },
            { char: '查', pinyin: 'chá', meaning: 'проверять/искать' },
            { char: '茶', pinyin: 'chá', meaning: 'чай' },
            { char: '岔', pinyin: 'chà', meaning: 'развилка/ответвление' },
            { char: '拆', pinyin: 'chāi', meaning: 'разбирать/сносить' },
            { char: '柴', pinyin: 'chái', meaning: 'дрова/хворост' },
            { char: '缠', pinyin: 'chán', meaning: 'обматывать/надоедать' },
            { char: '产', pinyin: 'chǎn', meaning: 'производить/роды' },
            { char: '铲', pinyin: 'chǎn', meaning: 'лопата/совок' },
            { char: '颤', pinyin: 'chàn', meaning: 'дрожать/трястись' },
            { char: '昌', pinyin: 'chāng', meaning: 'процветать' },
            { char: '尝', pinyin: 'cháng', meaning: 'пробовать на вкус' },
            { char: '偿', pinyin: 'cháng', meaning: 'возмещать/компенсировать' },
            { char: '厂', pinyin: 'chǎng', meaning: 'завод/фабрика' },
            { char: '场', pinyin: 'chǎng', meaning: 'площадь/поле' },
            { char: '敞', pinyin: 'chǎng', meaning: 'открытый/просторный' },
            { char: '畅', pinyin: 'chàng', meaning: 'свободный/беспрепятственный' },
            { char: '倡', pinyin: 'chàng', meaning: 'пропагандировать/инициировать' },
            { char: '抄', pinyin: 'chāo', meaning: 'переписывать/конфисковать' },
            { char: '超', pinyin: 'chāo', meaning: 'превышать/сверх-' },
            { char: '朝', pinyin: 'cháo', meaning: 'династия/утро' },
            { char: '潮', pinyin: 'cháo', meaning: 'прилив/мода' },
            { char: '吵', pinyin: 'chǎo', meaning: 'шуметь/ссориться' },
            { char: '炒', pinyin: 'chǎo', meaning: 'жарить/спекулировать' },
            { char: '车', pinyin: 'chē', meaning: 'машина/телега' },
            { char: '扯', pinyin: 'chě', meaning: 'тянуть/болтать' },
            { char: '彻', pinyin: 'chè', meaning: 'проникать/полностью' },
            { char: '沉', pinyin: 'chén', meaning: 'тонуть/тяжёлый' },
            { char: '陈', pinyin: 'chén', meaning: 'старый/выставлять' },
            { char: '晨', pinyin: 'chén', meaning: 'утро/рассвет' },
            { char: '称', pinyin: 'chēng', meaning: 'называть/весить' },
            { char: '撑', pinyin: 'chēng', meaning: 'подпирать/раскрывать зонт' },
            { char: '诚', pinyin: 'chéng', meaning: 'искренний/честный' },
            { char: '承', pinyin: 'chéng', meaning: 'нести/принимать' },
            { char: '乘', pinyin: 'chéng', meaning: 'ехать верхом/умножать' },
            { char: '惩', pinyin: 'chéng', meaning: 'наказывать' },
            { char: '澄', pinyin: 'chéng', meaning: 'прозрачный/очищать' },
            { char: '吃', pinyin: 'chī', meaning: 'есть/кушать' },
            { char: '池', pinyin: 'chí', meaning: 'пруд/бассейн' },
            { char: '迟', pinyin: 'chí', meaning: 'поздний/медленный' },
            { char: '尺', pinyin: 'chǐ', meaning: 'линейка/чи (мера длины)' },
            { char: '齿', pinyin: 'chǐ', meaning: 'зуб' },
            { char: '耻', pinyin: 'chǐ', meaning: 'стыд/позор' },
            { char: '翅', pinyin: 'chì', meaning: 'крыло/плавник' },
            { char: '充', pinyin: 'chōng', meaning: 'наполнять/достаточный' },
            { char: '冲', pinyin: 'chōng', meaning: 'промывать/стремиться' },
            { char: '虫', pinyin: 'chóng', meaning: 'насекомое/червь' },
            { char: '崇', pinyin: 'chóng', meaning: 'почитать/высокий' },
            { char: '抽', pinyin: 'chōu', meaning: 'вытаскивать/курить' },
            { char: '仇', pinyin: 'chóu', meaning: 'враг/ненависть' },
            { char: '绸', pinyin: 'chóu', meaning: 'шёлк' },
            { char: '丑', pinyin: 'chǒu', meaning: 'уродливый/второй знак зодиака' },
            { char: '臭', pinyin: 'chòu', meaning: 'вонючий' },
            { char: '初', pinyin: 'chū', meaning: 'начальный/первый' },
            { char: '除', pinyin: 'chú', meaning: 'удалять/кроме' },
            { char: '厨', pinyin: 'chú', meaning: 'кухня/повар' },
            { char: '础', pinyin: 'chǔ', meaning: 'основание/фундамент' },
            { char: '储', pinyin: 'chǔ', meaning: 'хранить/накоплять' },
            { char: '处', pinyin: 'chù', meaning: 'место/обрабатывать' },
            { char: '触', pinyin: 'chù', meaning: 'касаться/трогать' },
            { char: '揣', pinyin: 'chuāi', meaning: 'совать за пазуху/оценивать' },
            { char: '川', pinyin: 'chuān', meaning: 'река/равнина' },
            { char: '穿', pinyin: 'chuān', meaning: 'носить/пронизывать' },
            { char: '传', pinyin: 'chuán', meaning: 'передавать/распространять' },
            { char: '船', pinyin: 'chuán', meaning: 'лодка/корабль' },
            { char: '喘', pinyin: 'chuǎn', meaning: 'задыхаться/дышать тяжело' },
            { char: '串', pinyin: 'chuàn', meaning: 'нанизывать/серия' },
            { char: '窗', pinyin: 'chuāng', meaning: 'окно' },
            { char: '床', pinyin: 'chuáng', meaning: 'кровать' },
            { char: '闯', pinyin: 'chuǎng', meaning: 'вламываться/рисковать' },
            { char: '创', pinyin: 'chuàng', meaning: 'создавать/рана' },
            { char: '吹', pinyin: 'chuī', meaning: 'дуть/хвастаться' },
            { char: '垂', pinyin: 'chuí', meaning: 'свисать/опускать' },
            { char: '春', pinyin: 'chūn', meaning: 'весна' },
            { char: '纯', pinyin: 'chún', meaning: 'чистый/простой' },
            { char: '唇', pinyin: 'chún', meaning: 'губа' },
            { char: '醇', pinyin: 'chún', meaning: 'чистый спирт/насыщенный' },
            { char: '磁', pinyin: 'cí', meaning: 'магнит' },
            { char: '辞', pinyin: 'cí', meaning: 'увольняться/слова' },
            { char: '慈', pinyin: 'cí', meaning: 'милосердный/добрый' },
            { char: '瓷', pinyin: 'cí', meaning: 'фарфор' },
            { char: '此', pinyin: 'cǐ', meaning: 'этот/здесь' },
            { char: '刺', pinyin: 'cì', meaning: 'колоть/шип' },
            { char: '赐', pinyin: 'cì', meaning: 'даровать/награждать' },
            { char: '匆', pinyin: 'cōng', meaning: 'торопливый' },
            { char: '葱', pinyin: 'cōng', meaning: 'лук (зелёный)' },
            { char: '聪', pinyin: 'cōng', meaning: 'умный/слышать хорошо' },
            { char: '丛', pinyin: 'cóng', meaning: 'куст/скопление' },
            { char: '凑', pinyin: 'còu', meaning: 'собирать вместе/приближаться' },
            { char: '粗', pinyin: 'cū', meaning: 'грубый/толстый' },
            { char: '促', pinyin: 'cù', meaning: 'торопить/способствовать' },
            { char: '醋', pinyin: 'cù', meaning: 'уксус/ревность' },
            { char: '催', pinyin: 'cuī', meaning: 'торопить/подгонять' },
            { char: '脆', pinyin: 'cuì', meaning: 'хрупкий/хрустящий' },
            { char: '翠', pinyin: 'cuì', meaning: 'изумрудно-зелёный' },
            { char: '寸', pinyin: 'cùn', meaning: 'цунь (мера длины)' },
            { char: '搓', pinyin: 'cuō', meaning: 'тереть руками/скатывать' },
            { char: '措', pinyin: 'cuò', meaning: 'мера/предпринимать' },
            { char: '搭', pinyin: 'dā', meaning: 'строить/садиться на транспорт' },
            { char: '达', pinyin: 'dá', meaning: 'достигать/разумный' },
            { char: '答', pinyin: 'dá', meaning: 'отвечать' },
            { char: '呆', pinyin: 'dāi', meaning: 'глупый/оставаться' },
            { char: '代', pinyin: 'dài', meaning: 'поколение/заменять' },
            { char: '带', pinyin: 'dài', meaning: 'пояс/вести/брать с собой' },
            { char: '待', pinyin: 'dài', meaning: 'ждать/относиться к' },
            { char: '袋', pinyin: 'dài', meaning: 'мешок/карман' },
            { char: '丹', pinyin: 'dān', meaning: 'пилюля/красный' },
            { char: '担', pinyin: 'dān', meaning: 'нести на плече/беспокоиться' },
            { char: '耽', pinyin: 'dān', meaning: 'задерживать/откладывать' },
            { char: '胆', pinyin: 'dǎn', meaning: 'желчный пузырь/смелость' },
            { char: '淡', pinyin: 'dàn', meaning: 'пресный/слабый' },
            { char: '蛋', pinyin: 'dàn', meaning: 'яйцо' },
            { char: '挡', pinyin: 'dǎng', meaning: 'загораживать/блокировать' },
            { char: '党', pinyin: 'dǎng', meaning: 'партия' },
            { char: '档', pinyin: 'dàng', meaning: 'архив/класс/档期' },
            { char: '刀', pinyin: 'dāo', meaning: 'нож' },
            { char: '导', pinyin: 'dǎo', meaning: 'вести/направлять' },
            { char: '岛', pinyin: 'dǎo', meaning: 'остров' },
            { char: '倒', pinyin: 'dǎo', meaning: 'опрокидывать/наоборот' },
            { char: '盗', pinyin: 'dào', meaning: 'воровать/вор' },
            { char: '稻', pinyin: 'dào', meaning: 'рис (растение)' },
            { char: '德', pinyin: 'dé', meaning: 'добродетель/мораль' },
            { char: '登', pinyin: 'dēng', meaning: 'подниматься/регистрироваться' },
            { char: '凳', pinyin: 'dèng', meaning: 'табуретка/скамейка' },
            { char: '堤', pinyin: 'dī', meaning: 'дамба/насыпь' },
            { char: '敌', pinyin: 'dí', meaning: 'враг/противник' },
            { char: '笛', pinyin: 'dí', meaning: 'флейта/свисток' },
            { char: '抵', pinyin: 'dǐ', meaning: '抵抗/抵偿' },
            { char: '底', pinyin: 'dǐ', meaning: 'дно/основа' },
            { char: '递', pinyin: 'dì', meaning: 'передавать/доставлять' },
            { char: '典', pinyin: 'diǎn', meaning: 'канон/словарь/церемония' },
            { char: '垫', pinyin: 'diàn', meaning: 'подкладка/коврик' },
            { char: '殿', pinyin: 'diàn', meaning: 'дворец/зал' },
            { char: '叼', pinyin: 'diāo', meaning: 'держать в зубах' },
            { char: '雕', pinyin: 'diāo', meaning: 'вырезать/орёл' },
            { char: '吊', pinyin: 'diào', meaning: 'подвешивать/соболезновать' },
            { char: '调', pinyin: 'diào', meaning: 'мелодия/переводить' },
            { char: '掉', pinyin: 'diào', meaning: 'падать/терять' },
            { char: '爹', pinyin: 'diē', meaning: 'отец (разг.)' },
            { char: '叠', pinyin: 'dié', meaning: 'складывать/наслаивать' },
            { char: '丁', pinyin: 'dīng', meaning: 'четвёртый небесный ствол/кубик' },
            { char: '盯', pinyin: 'dīng', meaning: 'пристально смотреть' },
            { char: '叮', pinyin: 'dīng', meaning: 'кусать (о насекомых)/напоминать' },
            { char: '顶', pinyin: 'dǐng', meaning: 'вершина/поддерживать сверху' },
            { char: '鼎', pinyin: 'dǐng', meaning: 'треножник/великий' },
            { char: '丢', pinyin: 'diū', meaning: 'терять/бросать' },
            { char: '冬', pinyin: 'dōng', meaning: 'зима' },
            { char: '董', pinyin: 'dǒng', meaning: 'управлять/директор' },
            { char: '斗', pinyin: 'dǒu', meaning: 'ковш/бороться' },
            { char: '抖', pinyin: 'dǒu', meaning: 'трясти/дрожать' },
            { char: '陡', pinyin: 'dǒu', meaning: 'крутой (склон)' },
            { char: '豆', pinyin: 'dòu', meaning: 'боб/горох' },
            { char: '逗', pinyin: 'dòu', meaning: 'дразнить/забавлять' },
            { char: '都', pinyin: 'dōu', meaning: 'все/столица' },
            { char: '督', pinyin: 'dū', meaning: 'надзирать/контролировать' },
            { char: '毒', pinyin: 'dú', meaning: 'яд/отравлять' },
            { char: '独', pinyin: 'dú', meaning: 'одинокий/единственный' },
            { char: '堵', pinyin: 'dǔ', meaning: 'закупоривать/затор' },
            { char: '赌', pinyin: 'dǔ', meaning: 'азартная игра/ставить' },
            { char: '杜', pinyin: 'dù', meaning: 'груша/предотвращать' },
            { char: '肚', pinyin: 'dù', meaning: 'живот/желудок' },
            { char: '渡', pinyin: 'dù', meaning: 'переправляться через реку' },
            { char: '端', pinyin: 'duān', meaning: 'конец/держать ровно' },
            { char: '段', pinyin: 'duàn', meaning: 'отрезок/параграф' },
            { char: '断', pinyin: 'duàn', meaning: 'ломать/прерывать' },
            { char: '缎', pinyin: 'duàn', meaning: 'атлас/сатин' },
            { char: '堆', pinyin: 'duī', meaning: 'куча/нагромождение' },
            { char: '队', pinyin: 'duì', meaning: 'команда/очередь' },
            { char: '吨', pinyin: 'dūn', meaning: 'тонна' },
            { char: '蹲', pinyin: 'dūn', meaning: 'приседать на корточки' },
            { char: '顿', pinyin: 'dùn', meaning: 'пауза/удар/раз (приём пищи)' },
            { char: '夺', pinyin: 'duó', meaning: 'отнимать/захватывать' },
            { char: '朵', pinyin: 'duǒ', meaning: 'бутон/сч. слово для цветов' },
            { char: '躲', pinyin: 'duǒ', meaning: 'прятаться/уклоняться' }
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
            { char: '的', pinyin: 'de', meaning: 'притяж. частица', examples: [{ word: '我的', pinyin: 'wǒ de', meaning: 'мой' }] },
            { char: '我', pinyin: 'wǒ', meaning: 'я', examples: [{ word: '我们', pinyin: 'wǒ men', meaning: 'мы' }] },
            { char: '你', pinyin: 'nǐ', meaning: 'ты', examples: [{ word: '你好', pinyin: 'nǐ hǎo', meaning: 'здравствуйте' }] },
            { char: '是', pinyin: 'shì', meaning: 'быть', examples: [{ word: '不是', pinyin: 'bú shì', meaning: 'не является' }] },
            { char: '了', pinyin: 'le', meaning: 'завершённость', examples: [{ word: '好了', pinyin: 'hǎo le', meaning: 'готово' }] },
            { char: '不', pinyin: 'bù', meaning: 'не', examples: [{ word: '不好', pinyin: 'bù hǎo', meaning: 'нехорошо' }] },
            { char: '在', pinyin: 'zài', meaning: 'находиться', examples: [{ word: '现在', pinyin: 'xiàn zài', meaning: 'сейчас' }] },
            { char: '他', pinyin: 'tā', meaning: 'он', examples: [{ word: '他们', pinyin: 'tā men', meaning: 'они' }] },
            { char: '这', pinyin: 'zhè', meaning: 'этот', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '中', pinyin: 'zhōng', meaning: 'середина', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] },
            { char: '大', pinyin: 'dà', meaning: 'большой', examples: [{ word: '大家', pinyin: 'dà jiā', meaning: 'все' }] },
            { char: '来', pinyin: 'lái', meaning: 'приходить', examples: [{ word: '回来', pinyin: 'huí lái', meaning: 'возвращаться' }] },
            { char: '上', pinyin: 'shàng', meaning: 'верх', examples: [{ word: '上午', pinyin: 'shàng wǔ', meaning: 'утро' }] },
            { char: '个', pinyin: 'gè', meaning: 'сч. слово', examples: [{ word: '一个', pinyin: 'yí gè', meaning: 'один (шт.)' }] },
            { char: '到', pinyin: 'dào', meaning: 'достигать', examples: [{ word: '得到', pinyin: 'dé dào', meaning: 'получить' }] },
            { char: '说', pinyin: 'shuō', meaning: 'говорить', examples: [{ word: '说话', pinyin: 'shuō huà', meaning: 'разговаривать' }] },
            { char: '们', pinyin: 'men', meaning: 'мн. число', examples: [{ word: '我们', pinyin: 'wǒ men', meaning: 'мы' }] },
            { char: '为', pinyin: 'wèi', meaning: 'для', examples: [{ word: '因为', pinyin: 'yīn wèi', meaning: 'потому что' }] },
            { char: '子', pinyin: 'zi', meaning: 'суффикс', examples: [{ word: '儿子', pinyin: 'ér zi', meaning: 'сын' }] },
            { char: '和', pinyin: 'hé', meaning: 'и', examples: [{ word: '和平', pinyin: 'hé píng', meaning: 'мир' }] }
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
            { char: '四', pinyin: 'sì', meaning: 'четыре', examples: [{ word: '四季', pinyin: 'sì jì', meaning: 'четыре сезона' }] },
            { char: '五', pinyin: 'wǔ', meaning: 'пять', examples: [{ word: '十五', pinyin: 'shí wǔ', meaning: 'пятнадцать' }] },
            { char: '六', pinyin: 'liù', meaning: 'шесть', examples: [{ word: '六月', pinyin: 'liù yuè', meaning: 'июнь' }] },
            { char: '七', pinyin: 'qī', meaning: 'семь', examples: [{ word: '十七', pinyin: 'shí qī', meaning: 'семнадцать' }] },
            { char: '八', pinyin: 'bā', meaning: 'восемь', examples: [{ word: '八月', pinyin: 'bā yuè', meaning: 'август' }] },
            { char: '九', pinyin: 'jiǔ', meaning: 'девять', examples: [{ word: '九月', pinyin: 'jiǔ yuè', meaning: 'сентябрь' }] },
            { char: '十', pinyin: 'shí', meaning: 'десять', examples: [{ word: '二十', pinyin: 'èr shí', meaning: 'двадцать' }] },
            { char: '百', pinyin: 'bǎi', meaning: 'сто', examples: [{ word: '一百', pinyin: 'yì bǎi', meaning: 'сто' }] },
            { char: '千', pinyin: 'qiān', meaning: 'тысяча', examples: [{ word: '一千', pinyin: 'yì qiān', meaning: 'тысяча' }] },
            { char: '万', pinyin: 'wàn', meaning: 'десять тысяч', examples: [{ word: '千万', pinyin: 'qiān wàn', meaning: 'обязательно' }] },
            { char: '两', pinyin: 'liǎng', meaning: 'два (с сч.сл.)', examples: [{ word: '两个', pinyin: 'liǎng gè', meaning: 'два (шт.)' }] },
            { char: '零', pinyin: 'líng', meaning: 'ноль', examples: [{ word: '零钱', pinyin: 'líng qián', meaning: 'мелочь' }] },
            { char: '几', pinyin: 'jǐ', meaning: 'сколько?', examples: [{ word: '几个', pinyin: 'jǐ gè', meaning: 'несколько' }] },
            { char: '多', pinyin: 'duō', meaning: 'много', examples: [{ word: '多少', pinyin: 'duō shao', meaning: 'сколько' }] },
            { char: '少', pinyin: 'shǎo', meaning: 'мало', examples: [{ word: '多少', pinyin: 'duō shao', meaning: 'сколько' }] },
            { char: '半', pinyin: 'bàn', meaning: 'половина', examples: [{ word: '一半', pinyin: 'yí bàn', meaning: 'половина' }] }
        ]
    },

    family: {
        name: "👨‍👩‍👧 Семья",
        description: "Родственники и люди",
        group: "topic",
        items: [
            { char: '人', pinyin: 'rén', meaning: 'человек', examples: [{ word: '中国人', pinyin: 'zhōng guó rén', meaning: 'китаец' }] },
            { char: '家', pinyin: 'jiā', meaning: 'семья', examples: [{ word: '回家', pinyin: 'huí jiā', meaning: 'идти домой' }] },
            { char: '爸', pinyin: 'bà', meaning: 'папа', examples: [{ word: '爸爸', pinyin: 'bà ba', meaning: 'папа' }] },
            { char: '妈', pinyin: 'mā', meaning: 'мама', examples: [{ word: '妈妈', pinyin: 'mā ma', meaning: 'мама' }] },
            { char: '父', pinyin: 'fù', meaning: 'отец', examples: [{ word: '父亲', pinyin: 'fù qīn', meaning: 'отец' }] },
            { char: '母', pinyin: 'mǔ', meaning: 'мать', examples: [{ word: '母亲', pinyin: 'mǔ qīn', meaning: 'мать' }] },
            { char: '儿', pinyin: 'ér', meaning: 'сын', examples: [{ word: '儿子', pinyin: 'ér zi', meaning: 'сын' }] },
            { char: '女', pinyin: 'nǚ', meaning: 'дочь', examples: [{ word: '女儿', pinyin: 'nǚ ér', meaning: 'дочь' }] },
            { char: '哥', pinyin: 'gē', meaning: 'брат (ст.)', examples: [{ word: '哥哥', pinyin: 'gē ge', meaning: 'старший брат' }] },
            { char: '姐', pinyin: 'jiě', meaning: 'сестра (ст.)', examples: [{ word: '姐姐', pinyin: 'jiě jie', meaning: 'старшая сестра' }] },
            { char: '弟', pinyin: 'dì', meaning: 'брат (мл.)', examples: [{ word: '弟弟', pinyin: 'dì di', meaning: 'младший брат' }] },
            { char: '妹', pinyin: 'mèi', meaning: 'сестра (мл.)', examples: [{ word: '妹妹', pinyin: 'mèi mei', meaning: 'младшая сестра' }] },
            { char: '爷', pinyin: 'yé', meaning: 'дедушка', examples: [{ word: '爷爷', pinyin: 'yé ye', meaning: 'дедушка' }] },
            { char: '奶', pinyin: 'nǎi', meaning: 'бабушка', examples: [{ word: '奶奶', pinyin: 'nǎi nai', meaning: 'бабушка' }] },
            { char: '夫', pinyin: 'fū', meaning: 'муж', examples: [{ word: '丈夫', pinyin: 'zhàng fu', meaning: 'муж' }] },
            { char: '妻', pinyin: 'qī', meaning: 'жена', examples: [{ word: '妻子', pinyin: 'qī zi', meaning: 'жена' }] },
            { char: '孩', pinyin: 'hái', meaning: 'ребёнок', examples: [{ word: '孩子', pinyin: 'hái zi', meaning: 'ребёнок' }] },
            { char: '她', pinyin: 'tā', meaning: 'она', examples: [{ word: '她们', pinyin: 'tā men', meaning: 'они (ж.р.)' }] },
            { char: '友', pinyin: 'yǒu', meaning: 'друг', examples: [{ word: '朋友', pinyin: 'péng you', meaning: 'друг' }] }
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
            { char: '时', pinyin: 'shí', meaning: 'час', examples: [{ word: '时间', pinyin: 'shí jiān', meaning: 'время' }] },
            { char: '分', pinyin: 'fēn', meaning: 'минута', examples: [{ word: '十分', pinyin: 'shí fēn', meaning: 'десять минут' }] },
            { char: '点', pinyin: 'diǎn', meaning: 'час (время)', examples: [{ word: '几点', pinyin: 'jǐ diǎn', meaning: 'который час' }] },
            { char: '星', pinyin: 'xīng', meaning: 'звезда', examples: [{ word: '星期', pinyin: 'xīng qī', meaning: 'неделя' }] },
            { char: '期', pinyin: 'qī', meaning: 'период', examples: [{ word: '星期', pinyin: 'xīng qī', meaning: 'неделя' }] },
            { char: '今', pinyin: 'jīn', meaning: 'сегодня', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '明', pinyin: 'míng', meaning: 'завтра', examples: [{ word: '明天', pinyin: 'míng tiān', meaning: 'завтра' }] },
            { char: '昨', pinyin: 'zuó', meaning: 'вчера', examples: [{ word: '昨天', pinyin: 'zuó tiān', meaning: 'вчера' }] },
            { char: '午', pinyin: 'wǔ', meaning: 'полдень', examples: [{ word: '中午', pinyin: 'zhōng wǔ', meaning: 'полдень' }] },
            { char: '早', pinyin: 'zǎo', meaning: 'утро', examples: [{ word: '早上', pinyin: 'zǎo shang', meaning: 'утром' }] },
            { char: '晚', pinyin: 'wǎn', meaning: 'вечер', examples: [{ word: '晚上', pinyin: 'wǎn shang', meaning: 'вечером' }] },
            { char: '现', pinyin: 'xiàn', meaning: 'сейчас', examples: [{ word: '现在', pinyin: 'xiàn zài', meaning: 'сейчас' }] },
            { char: '候', pinyin: 'hòu', meaning: 'время', examples: [{ word: '时候', pinyin: 'shí hou', meaning: 'время' }] },
            { char: '刻', pinyin: 'kè', meaning: 'четверть часа', examples: [{ word: '一刻', pinyin: 'yí kè', meaning: 'четверть часа' }] }
        ]
    },

    place: {
        name: "🧭 Место",
        description: "Где? Куда? Откуда?",
        group: "topic",
        items: [
            { char: '下', pinyin: 'xià', meaning: 'низ', examples: [{ word: '下午', pinyin: 'xià wǔ', meaning: 'день' }] },
            { char: '里', pinyin: 'lǐ', meaning: 'внутри', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '前', pinyin: 'qián', meaning: 'перед', examples: [{ word: '以前', pinyin: 'yǐ qián', meaning: 'раньше' }] },
            { char: '后', pinyin: 'hòu', meaning: 'после', examples: [{ word: '以后', pinyin: 'yǐ hòu', meaning: 'потом' }] },
            { char: '外', pinyin: 'wài', meaning: 'снаружи', examples: [{ word: '外国', pinyin: 'wài guó', meaning: 'иностранное государство' }] },
            { char: '面', pinyin: 'miàn', meaning: 'сторона', examples: [{ word: '里面', pinyin: 'lǐ miàn', meaning: 'внутри' }] },
            { char: '边', pinyin: 'biān', meaning: 'край', examples: [{ word: '旁边', pinyin: 'páng biān', meaning: 'рядом' }] },
            { char: '左', pinyin: 'zuǒ', meaning: 'левый', examples: [{ word: '左边', pinyin: 'zuǒ biān', meaning: 'слева' }] },
            { char: '右', pinyin: 'yòu', meaning: 'правый', examples: [{ word: '右边', pinyin: 'yòu biān', meaning: 'справа' }] },
            { char: '东', pinyin: 'dōng', meaning: 'восток', examples: [{ word: '东方', pinyin: 'dōng fāng', meaning: 'восток' }] },
            { char: '西', pinyin: 'xī', meaning: 'запад', examples: [{ word: '西瓜', pinyin: 'xī guā', meaning: 'арбуз' }] },
            { char: '南', pinyin: 'nán', meaning: 'юг', examples: [{ word: '南方', pinyin: 'nán fāng', meaning: 'юг' }] },
            { char: '北', pinyin: 'běi', meaning: 'север', examples: [{ word: '北京', pinyin: 'běi jīng', meaning: 'Пекин' }] },
            { char: '远', pinyin: 'yuǎn', meaning: 'далеко', examples: [{ word: '远近', pinyin: 'yuǎn jìn', meaning: 'расстояние' }] },
            { char: '近', pinyin: 'jìn', meaning: 'близко', examples: [{ word: '附近', pinyin: 'fù jìn', meaning: 'поблизости' }] },
            { char: '旁', pinyin: 'páng', meaning: 'рядом', examples: [{ word: '旁边', pinyin: 'páng biān', meaning: 'рядом' }] },
            { char: '国', pinyin: 'guó', meaning: 'страна', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] }
        ]
    },

    nature: {
        name: "🌤️ Природа",
        description: "Погода и стихии",
        group: "topic",
        items: [
            { char: '气', pinyin: 'qì', meaning: 'воздух', examples: [{ word: '天气', pinyin: 'tiān qì', meaning: 'погода' }] },
            { char: '雨', pinyin: 'yǔ', meaning: 'дождь', examples: [{ word: '下雨', pinyin: 'xià yǔ', meaning: 'идёт дождь' }] },
            { char: '雪', pinyin: 'xuě', meaning: 'снег', examples: [{ word: '下雪', pinyin: 'xià xuě', meaning: 'идёт снег' }] },
            { char: '风', pinyin: 'fēng', meaning: 'ветер', examples: [{ word: '刮风', pinyin: 'guā fēng', meaning: 'дует ветер' }] },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода', examples: [{ word: '水果', pinyin: 'shuǐ guǒ', meaning: 'фрукты' }, { word: '喝水', pinyin: 'hē shuǐ', meaning: 'пить воду' }] },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '山', pinyin: 'shān', meaning: 'гора', examples: [{ word: '雪山', pinyin: 'xuě shān', meaning: 'снежная гора' }] },
            { char: '海', pinyin: 'hǎi', meaning: 'море', examples: [{ word: '大海', pinyin: 'dà hǎi', meaning: 'море' }] },
            { char: '花', pinyin: 'huā', meaning: 'цветок', examples: [{ word: '花园', pinyin: 'huā yuán', meaning: 'сад' }] },
            { char: '草', pinyin: 'cǎo', meaning: 'трава', examples: [{ word: '草地', pinyin: 'cǎo dì', meaning: 'лужайка' }] },
            { char: '树', pinyin: 'shù', meaning: 'дерево', examples: [{ word: '树木', pinyin: 'shù mù', meaning: 'деревья' }] },
            { char: '木', pinyin: 'mù', meaning: 'древесина', examples: [{ word: '木头', pinyin: 'mù tou', meaning: 'дерево (материал)' }] },
            { char: '阳', pinyin: 'yáng', meaning: 'солнце', examples: [{ word: '太阳', pinyin: 'tài yáng', meaning: 'солнце' }] },
            { char: '光', pinyin: 'guāng', meaning: 'свет', examples: [{ word: '阳光', pinyin: 'yáng guāng', meaning: 'солнечный свет' }] }
        ]
    },

    food: {
        name: "🍜 Еда",
        description: "Еда и напитки",
        group: "topic",
        items: [
            { char: '吃', pinyin: 'chī', meaning: 'есть', examples: [{ word: '吃饭', pinyin: 'chī fàn', meaning: 'обедать' }] },
            { char: '喝', pinyin: 'hē', meaning: 'пить', examples: [{ word: '喝茶', pinyin: 'hē chá', meaning: 'пить чай' }] },
            { char: '饭', pinyin: 'fàn', meaning: 'еда', examples: [{ word: '米饭', pinyin: 'mǐ fàn', meaning: 'варёный рис' }] },
            { char: '菜', pinyin: 'cài', meaning: 'блюдо', examples: [{ word: '点菜', pinyin: 'diǎn cài', meaning: 'заказывать блюда' }] },
            { char: '茶', pinyin: 'chá', meaning: 'чай', examples: [{ word: '绿茶', pinyin: 'lǜ chá', meaning: 'зелёный чай' }] },
            { char: '果', pinyin: 'guǒ', meaning: 'фрукт', examples: [{ word: '水果', pinyin: 'shuǐ guǒ', meaning: 'фрукты' }] },
            { char: '米', pinyin: 'mǐ', meaning: 'рис', examples: [{ word: '大米', pinyin: 'dà mǐ', meaning: 'рис' }] },
            { char: '面', pinyin: 'miàn', meaning: 'лапша', examples: [{ word: '面条', pinyin: 'miàn tiáo', meaning: 'лапша' }] },
            { char: '酒', pinyin: 'jiǔ', meaning: 'алкоголь', examples: [{ word: '啤酒', pinyin: 'pí jiǔ', meaning: 'пиво' }] },
            { char: '奶', pinyin: 'nǎi', meaning: 'молоко', examples: [{ word: '牛奶', pinyin: 'niú nǎi', meaning: 'молоко' }] },
            { char: '蛋', pinyin: 'dàn', meaning: 'яйцо', examples: [{ word: '鸡蛋', pinyin: 'jī dàn', meaning: 'куриное яйцо' }] },
            { char: '肉', pinyin: 'ròu', meaning: 'мясо', examples: [{ word: '牛肉', pinyin: 'niú ròu', meaning: 'говядина' }] },
            { char: '鱼', pinyin: 'yú', meaning: 'рыба', examples: [{ word: '鱼肉', pinyin: 'yú ròu', meaning: 'рыбное мясо' }] },
            { char: '汤', pinyin: 'tāng', meaning: 'суп', examples: [{ word: '菜汤', pinyin: 'cài tāng', meaning: 'овощной суп' }] },
            { char: '糖', pinyin: 'táng', meaning: 'сахар', examples: [{ word: '糖果', pinyin: 'táng guǒ', meaning: 'конфеты' }] }
        ]
    },

    verbs: {
        name: "🏃 Действия",
        description: "Глаголы",
        group: "topic",
        items: [
            { char: '看', pinyin: 'kàn', meaning: 'смотреть', examples: [{ word: '看书', pinyin: 'kàn shū', meaning: 'читать книгу' }] },
            { char: '听', pinyin: 'tīng', meaning: 'слушать', examples: [{ word: '听话', pinyin: 'tīng huà', meaning: 'слушаться' }] },
            { char: '读', pinyin: 'dú', meaning: 'читать', examples: [{ word: '读书', pinyin: 'dú shū', meaning: 'учиться' }] },
            { char: '写', pinyin: 'xiě', meaning: 'писать', examples: [{ word: '写字', pinyin: 'xiě zì', meaning: 'писать иероглифы' }] },
            { char: '做', pinyin: 'zuò', meaning: 'делать', examples: [{ word: '做事', pinyin: 'zuò shì', meaning: 'делать дело' }] },
            { char: '想', pinyin: 'xiǎng', meaning: 'думать', examples: [{ word: '想法', pinyin: 'xiǎng fǎ', meaning: 'мысль' }] },
            { char: '要', pinyin: 'yào', meaning: 'хотеть', examples: [{ word: '不要', pinyin: 'bú yào', meaning: 'не надо' }] },
            { char: '会', pinyin: 'huì', meaning: 'уметь', examples: [{ word: '不会', pinyin: 'bú huì', meaning: 'не уметь' }] },
            { char: '能', pinyin: 'néng', meaning: 'мочь', examples: [{ word: '不能', pinyin: 'bù néng', meaning: 'нельзя' }] },
            { char: '可', pinyin: 'kě', meaning: 'можно', examples: [{ word: '可以', pinyin: 'kě yǐ', meaning: 'можно' }] },
            { char: '去', pinyin: 'qù', meaning: 'идти', examples: [{ word: '去年', pinyin: 'qù nián', meaning: 'прошлый год' }] },
            { char: '回', pinyin: 'huí', meaning: 'возвращаться', examples: [{ word: '回家', pinyin: 'huí jiā', meaning: 'идти домой' }] },
            { char: '住', pinyin: 'zhù', meaning: 'жить', examples: [{ word: '住在', pinyin: 'zhù zài', meaning: 'жить в' }] },
            { char: '坐', pinyin: 'zuò', meaning: 'сидеть', examples: [{ word: '坐下', pinyin: 'zuò xià', meaning: 'садиться' }] },
            { char: '走', pinyin: 'zǒu', meaning: 'идти пешком', examples: [{ word: '走路', pinyin: 'zǒu lù', meaning: 'идти пешком' }] },
            { char: '跑', pinyin: 'pǎo', meaning: 'бежать', examples: [{ word: '跑步', pinyin: 'pǎo bù', meaning: 'бегать' }] },
            { char: '飞', pinyin: 'fēi', meaning: 'лететь', examples: [{ word: '飞机', pinyin: 'fēi jī', meaning: 'самолёт' }] },
            { char: '叫', pinyin: 'jiào', meaning: 'звать', examples: [{ word: '叫做', pinyin: 'jiào zuò', meaning: 'называться' }] },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать', examples: [{ word: '问题', pinyin: 'wèn tí', meaning: 'вопрос' }] },
            { char: '睡', pinyin: 'shuì', meaning: 'спать', examples: [{ word: '睡觉', pinyin: 'shuì jiào', meaning: 'спать' }] },
            { char: '买', pinyin: 'mǎi', meaning: 'покупать', examples: [{ word: '买东西', pinyin: 'mǎi dōng xi', meaning: 'делать покупки' }] },
            { char: '卖', pinyin: 'mài', meaning: 'продавать', examples: [{ word: '买卖', pinyin: 'mǎi mài', meaning: 'торговля' }] },
            { char: '开', pinyin: 'kāi', meaning: 'открывать', examples: [{ word: '开始', pinyin: 'kāi shǐ', meaning: 'начинать' }] },
            { char: '关', pinyin: 'guān', meaning: 'закрывать', examples: [{ word: '关门', pinyin: 'guān mén', meaning: 'закрывать дверь' }] },
            { char: '穿', pinyin: 'chuān', meaning: 'носить', examples: [{ word: '穿衣', pinyin: 'chuān yī', meaning: 'одеваться' }] },
            { char: '教', pinyin: 'jiào', meaning: 'учить', examples: [{ word: '教书', pinyin: 'jiāo shū', meaning: 'преподавать' }] },
            { char: '起', pinyin: 'qǐ', meaning: 'вставать', examples: [{ word: '起床', pinyin: 'qǐ chuáng', meaning: 'вставать с постели' }] }
        ]
    },

    study: {
        name: "📚 Учёба",
        description: "Школа и работа",
        group: "topic",
        items: [
            { char: '学', pinyin: 'xué', meaning: 'учиться', examples: [{ word: '学习', pinyin: 'xué xí', meaning: 'учиться' }] },
            { char: '生', pinyin: 'shēng', meaning: 'ученик', examples: [{ word: '学生', pinyin: 'xué sheng', meaning: 'ученик' }] },
            { char: '老', pinyin: 'lǎo', meaning: 'старый', examples: [{ word: '老师', pinyin: 'lǎo shī', meaning: 'учитель' }] },
            { char: '师', pinyin: 'shī', meaning: 'учитель', examples: [{ word: '老师', pinyin: 'lǎo shī', meaning: 'учитель' }] },
            { char: '校', pinyin: 'xiào', meaning: 'школа', examples: [{ word: '学校', pinyin: 'xué xiào', meaning: 'школа' }] },
            { char: '班', pinyin: 'bān', meaning: 'класс', examples: [{ word: '班级', pinyin: 'bān jí', meaning: 'класс' }] },
            { char: '工', pinyin: 'gōng', meaning: 'работа', examples: [{ word: '工人', pinyin: 'gōng rén', meaning: 'рабочий' }] },
            { char: '作', pinyin: 'zuò', meaning: 'делать', examples: [{ word: '工作', pinyin: 'gōng zuò', meaning: 'работа' }] },
            { char: '医', pinyin: 'yī', meaning: 'врач', examples: [{ word: '医生', pinyin: 'yī shēng', meaning: 'врач' }] },
            { char: '院', pinyin: 'yuàn', meaning: 'больница', examples: [{ word: '医院', pinyin: 'yī yuàn', meaning: 'больница' }] },
            { char: '店', pinyin: 'diàn', meaning: 'магазин', examples: [{ word: '商店', pinyin: 'shāng diàn', meaning: 'магазин' }] },
            { char: '公', pinyin: 'gōng', meaning: 'общественный', examples: [{ word: '公园', pinyin: 'gōng yuán', meaning: 'парк' }] },
            { char: '司', pinyin: 'sī', meaning: 'компания', examples: [{ word: '公司', pinyin: 'gōng sī', meaning: 'компания' }] },
            { char: '课', pinyin: 'kè', meaning: 'урок', examples: [{ word: '上课', pinyin: 'shàng kè', meaning: 'посещать урок' }] },
            { char: '习', pinyin: 'xí', meaning: 'практика', examples: [{ word: '学习', pinyin: 'xué xí', meaning: 'учиться' }] }
        ]
    },

    adjectives: {
        name: "🎨 Свойства",
        description: "Прилагательные",
        group: "topic",
        items: [
            { char: '好', pinyin: 'hǎo', meaning: 'хороший', examples: [{ word: '很好', pinyin: 'hěn hǎo', meaning: 'очень хорошо' }] },
            { char: '坏', pinyin: 'huài', meaning: 'плохой', examples: [{ word: '坏人', pinyin: 'huài rén', meaning: 'плохой человек' }] },
            { char: '高', pinyin: 'gāo', meaning: 'высокий', examples: [{ word: '高兴', pinyin: 'gāo xìng', meaning: 'радостный' }] },
            { char: '低', pinyin: 'dī', meaning: 'низкий', examples: [{ word: '高低', pinyin: 'gāo dī', meaning: 'высота' }] },
            { char: '长', pinyin: 'cháng', meaning: 'длинный', examples: [{ word: '长短', pinyin: 'cháng duǎn', meaning: 'длина' }] },
            { char: '短', pinyin: 'duǎn', meaning: 'короткий', examples: [{ word: '短裤', pinyin: 'duǎn kù', meaning: 'шорты' }] },
            { char: '新', pinyin: 'xīn', meaning: 'новый', examples: [{ word: '新闻', pinyin: 'xīn wén', meaning: 'новости' }] },
            { char: '旧', pinyin: 'jiù', meaning: 'старый (вещь)', examples: [{ word: '旧书', pinyin: 'jiù shū', meaning: 'старая книга' }] },
            { char: '冷', pinyin: 'lěng', meaning: 'холодный', examples: [{ word: '很冷', pinyin: 'hěn lěng', meaning: 'очень холодно' }] },
            { char: '热', pinyin: 'rè', meaning: 'горячий', examples: [{ word: '很热', pinyin: 'hěn rè', meaning: 'очень жарко' }] },
            { char: '快', pinyin: 'kuài', meaning: 'быстрый', examples: [{ word: '很快', pinyin: 'hěn kuài', meaning: 'очень быстро' }] },
            { char: '慢', pinyin: 'màn', meaning: 'медленный', examples: [{ word: '很慢', pinyin: 'hěn màn', meaning: 'очень медленно' }] },
            { char: '忙', pinyin: 'máng', meaning: 'занятой', examples: [{ word: '很忙', pinyin: 'hěn máng', meaning: 'очень занят' }] },
            { char: '累', pinyin: 'lèi', meaning: 'усталый', examples: [{ word: '很累', pinyin: 'hěn lèi', meaning: 'очень устал' }] },
            { char: '兴', pinyin: 'xìng', meaning: 'интерес', examples: [{ word: '高兴', pinyin: 'gāo xìng', meaning: 'радостный' }] },
            { char: '漂', pinyin: 'piào', meaning: 'красивый', examples: [{ word: '漂亮', pinyin: 'piào liang', meaning: 'красивый' }] },
            { char: '亮', pinyin: 'liàng', meaning: 'яркий', examples: [{ word: '漂亮', pinyin: 'piào liang', meaning: 'красивый' }] }
        ]
    },

    objects: {
        name: "🏠 Предметы",
        description: "Вещи вокруг нас",
        group: "topic",
        items: [
            { char: '书', pinyin: 'shū', meaning: 'книга', examples: [{ word: '书店', pinyin: 'shū diàn', meaning: 'книжный магазин' }] },
            { char: '本', pinyin: 'běn', meaning: 'тетрадь', examples: [{ word: '书本', pinyin: 'shū běn', meaning: 'книга' }] },
            { char: '笔', pinyin: 'bǐ', meaning: 'ручка', examples: [{ word: '铅笔', pinyin: 'qiān bǐ', meaning: 'карандаш' }] },
            { char: '纸', pinyin: 'zhǐ', meaning: 'бумага', examples: [{ word: '报纸', pinyin: 'bào zhǐ', meaning: 'газета' }] },
            { char: '桌', pinyin: 'zhuō', meaning: 'стол', examples: [{ word: '桌子', pinyin: 'zhuō zi', meaning: 'стол' }] },
            { char: '椅', pinyin: 'yǐ', meaning: 'стул', examples: [{ word: '椅子', pinyin: 'yǐ zi', meaning: 'стул' }] },
            { char: '门', pinyin: 'mén', meaning: 'дверь', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] },
            { char: '窗', pinyin: 'chuāng', meaning: 'окно', examples: [{ word: '窗户', pinyin: 'chuāng hu', meaning: 'окно' }] },
            { char: '车', pinyin: 'chē', meaning: 'машина', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '船', pinyin: 'chuán', meaning: 'лодка', examples: [{ word: '小船', pinyin: 'xiǎo chuán', meaning: 'лодка' }] },
            { char: '机', pinyin: 'jī', meaning: 'аппарат', examples: [{ word: '手机', pinyin: 'shǒu jī', meaning: 'телефон' }] },
            { char: '话', pinyin: 'huà', meaning: 'речь', examples: [{ word: '说话', pinyin: 'shuō huà', meaning: 'разговаривать' }] },
            { char: '名', pinyin: 'míng', meaning: 'имя', examples: [{ word: '名字', pinyin: 'míng zi', meaning: 'имя' }] },
            { char: '电', pinyin: 'diàn', meaning: 'электричество', examples: [{ word: '电话', pinyin: 'diàn huà', meaning: 'телефон' }] },
            { char: '视', pinyin: 'shì', meaning: 'видеть', examples: [{ word: '电视', pinyin: 'diàn shì', meaning: 'телевизор' }] },
            { char: '脑', pinyin: 'nǎo', meaning: 'мозг', examples: [{ word: '电脑', pinyin: 'diàn nǎo', meaning: 'компьютер' }] },
            { char: '衣', pinyin: 'yī', meaning: 'одежда', examples: [{ word: '衣服', pinyin: 'yī fu', meaning: 'одежда' }] },
            { char: '服', pinyin: 'fú', meaning: 'одежда', examples: [{ word: '衣服', pinyin: 'yī fu', meaning: 'одежда' }] },
            { char: '鞋', pinyin: 'xié', meaning: 'обувь', examples: [{ word: '皮鞋', pinyin: 'pí xié', meaning: 'кожаная обувь' }] },
            { char: '帽', pinyin: 'mào', meaning: 'шапка', examples: [{ word: '帽子', pinyin: 'mào zi', meaning: 'шапка' }] },
            { char: '字', pinyin: 'zì', meaning: 'иероглиф', examples: [{ word: '汉字', pinyin: 'hàn zì', meaning: 'китайский иероглиф' }] }
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
            { char: '马', pinyin: 'mǎ', meaning: 'лошадь', examples: [{ word: '马上', pinyin: 'mǎ shàng', meaning: 'сейчас' }] },
            { char: '牛', pinyin: 'niú', meaning: 'корова', examples: [{ word: '牛奶', pinyin: 'niú nǎi', meaning: 'молоко' }] },
            { char: '羊', pinyin: 'yáng', meaning: 'овца', examples: [{ word: '羊肉', pinyin: 'yáng ròu', meaning: 'баранина' }] },
            { char: '鸡', pinyin: 'jī', meaning: 'курица', examples: [{ word: '鸡肉', pinyin: 'jī ròu', meaning: 'куриное мясо' }] },
            { char: '鸭', pinyin: 'yā', meaning: 'утка', examples: [{ word: '鸭子', pinyin: 'yā zi', meaning: 'утка' }] },
            { char: '猪', pinyin: 'zhū', meaning: 'свинья', examples: [{ word: '猪肉', pinyin: 'zhū ròu', meaning: 'свинина' }] },
            { char: '龙', pinyin: 'lóng', meaning: 'дракон', examples: [{ word: '龙', pinyin: 'lóng', meaning: 'дракон' }] },
            { char: '虫', pinyin: 'chóng', meaning: 'насекомое', examples: [{ word: '虫子', pinyin: 'chóng zi', meaning: 'насекомое' }] }
        ]
    },

    colors: {
        name: "🎨 Цвета",
        description: "Краски мира",
        group: "topic",
        items: [
            { char: '红', pinyin: 'hóng', meaning: 'красный', examples: [{ word: '红色', pinyin: 'hóng sè', meaning: 'красный цвет' }] },
            { char: '黄', pinyin: 'huáng', meaning: 'жёлтый', examples: [{ word: '黄色', pinyin: 'huáng sè', meaning: 'жёлтый цвет' }] },
            { char: '蓝', pinyin: 'lán', meaning: 'синий', examples: [{ word: '蓝色', pinyin: 'lán sè', meaning: 'синий цвет' }] },
            { char: '绿', pinyin: 'lǜ', meaning: 'зелёный', examples: [{ word: '绿色', pinyin: 'lǜ sè', meaning: 'зелёный цвет' }] },
            { char: '白', pinyin: 'bái', meaning: 'белый', examples: [{ word: '白色', pinyin: 'bái sè', meaning: 'белый цвет' }] },
            { char: '黑', pinyin: 'hēi', meaning: 'чёрный', examples: [{ word: '黑色', pinyin: 'hēi sè', meaning: 'чёрный цвет' }] }
        ]
    },

    body: {
        name: "🧍 Тело",
        description: "Части тела",
        group: "topic",
        items: [
            { char: '身', pinyin: 'shēn', meaning: 'тело', examples: [{ word: '身体', pinyin: 'shēn tǐ', meaning: 'здоровье' }] },
            { char: '体', pinyin: 'tǐ', meaning: 'форма', examples: [{ word: '身体', pinyin: 'shēn tǐ', meaning: 'здоровье' }] },
            { char: '头', pinyin: 'tóu', meaning: 'голова', examples: [{ word: '头发', pinyin: 'tóu fa', meaning: 'волосы' }] },
            { char: '手', pinyin: 'shǒu', meaning: 'рука', examples: [{ word: '手机', pinyin: 'shǒu jī', meaning: 'телефон' }] },
            { char: '眼', pinyin: 'yǎn', meaning: 'глаз', examples: [{ word: '眼睛', pinyin: 'yǎn jing', meaning: 'глаза' }] },
            { char: '口', pinyin: 'kǒu', meaning: 'рот', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] },
            { char: '耳', pinyin: 'ěr', meaning: 'ухо', examples: [{ word: '耳朵', pinyin: 'ěr duo', meaning: 'уши' }] },
            { char: '心', pinyin: 'xīn', meaning: 'сердце', examples: [{ word: '开心', pinyin: 'kāi xīn', meaning: 'радостный' }] },
            { char: '脚', pinyin: 'jiǎo', meaning: 'стопа', examples: [{ word: '脚步', pinyin: 'jiǎo bù', meaning: 'шаг' }] },
            { char: '牙', pinyin: 'yá', meaning: 'зуб', examples: [{ word: '牙齿', pinyin: 'yá chǐ', meaning: 'зубы' }] },
            { char: '发', pinyin: 'fà', meaning: 'волосы', examples: [{ word: '头发', pinyin: 'tóu fa', meaning: 'волосы' }] },
            { char: '鼻', pinyin: 'bí', meaning: 'нос', examples: [{ word: '鼻子', pinyin: 'bí zi', meaning: 'нос' }] }
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
    
    // 🆕 УМНАЯ ФУНКЦИЯ: получить уникальные иероглифы категории
    // Автоматически убирает дубликаты из предыдущих уровней HSK
    getUniqueCategory: function(categoryKey) {
        const items = this.getCategory(categoryKey);
        
        // Если это не уровень HSK — возвращаем как есть
        if (categoryKey !== 'hsk2_all' && categoryKey !== 'hsk3_all') {
            return items;
        }
        
        // Собираем все иероглифы из предыдущих уровней
        const previousChars = new Set();
        
        if (categoryKey === 'hsk2_all') {
            // Для HSK 2 убираем всё из HSK 1
            const hsk1Items = this.getCategory('hsk1_all');
            hsk1Items.forEach(item => previousChars.add(item.char));
        } else if (categoryKey === 'hsk3_all') {
            // Для HSK 3 убираем всё из HSK 1 и HSK 2
            const hsk1Items = this.getCategory('hsk1_all');
            const hsk2Items = this.getCategory('hsk2_all');
            hsk1Items.forEach(item => previousChars.add(item.char));
            hsk2Items.forEach(item => previousChars.add(item.char));
        }
        
        // Фильтруем: оставляем только уникальные иероглифы
        const unique = items.filter(item => !previousChars.has(item.char));
        
        console.log(`🔍 ${categoryKey}: было ${items.length}, стало ${unique.length} (убрано ${items.length - unique.length} дубликатов)`);
        
        return unique;
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

