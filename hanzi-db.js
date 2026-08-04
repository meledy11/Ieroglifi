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

        hsk2_all: {
        name: "🥈 HSK 2 · Весь уровень",
        description: "Все 177 иероглифов элементарного уровня",
        group: "hsk",
        color: "#a8a8a8",
        items: [
            { char: '吧', pinyin: 'ba', meaning: 'частица', examples: [{ word: '好吧', pinyin: 'hǎo ba', meaning: 'ладно' }] },
            { char: '把', pinyin: 'bǎ', meaning: 'частица (конструкция)', examples: [{ word: '把门关上', pinyin: 'bǎ mén guān shang', meaning: 'закрой дверь' }] },
            { char: '白', pinyin: 'bái', meaning: 'белый', examples: [{ word: '白色', pinyin: 'bái sè', meaning: 'белый цвет' }] },
            { char: '百', pinyin: 'bǎi', meaning: 'сто', examples: [{ word: '一百', pinyin: 'yì bǎi', meaning: 'сто' }] },
            { char: '班', pinyin: 'bān', meaning: 'класс', examples: [{ word: '班级', pinyin: 'bān jí', meaning: 'класс' }] },
            { char: '半', pinyin: 'bàn', meaning: 'половина', examples: [{ word: '一半', pinyin: 'yí bàn', meaning: 'половина' }] },
            { char: '办', pinyin: 'bàn', meaning: 'делать', examples: [{ word: '办法', pinyin: 'bàn fǎ', meaning: 'способ' }] },
            { char: '帮', pinyin: 'bāng', meaning: 'помогать', examples: [{ word: '帮助', pinyin: 'bāng zhù', meaning: 'помощь' }] },
            { char: '包', pinyin: 'bāo', meaning: 'сумка', examples: [{ word: '书包', pinyin: 'shū bāo', meaning: 'школьная сумка' }] },
            { char: '北', pinyin: 'běi', meaning: 'север', examples: [{ word: '北京', pinyin: 'běi jīng', meaning: 'Пекин' }] },
            { char: '本', pinyin: 'běn', meaning: 'том (сч. слово)', examples: [{ word: '书本', pinyin: 'shū běn', meaning: 'книга' }] },
            { char: '比', pinyin: 'bǐ', meaning: 'сравнивать', examples: [{ word: '比较', pinyin: 'bǐ jiào', meaning: 'сравнивать' }] },
            { char: '别', pinyin: 'bié', meaning: 'не надо', examples: [{ word: '别人', pinyin: 'bié rén', meaning: 'другие люди' }] },
            { char: '病', pinyin: 'bìng', meaning: 'болезнь', examples: [{ word: '生病', pinyin: 'shēng bìng', meaning: 'заболеть' }] },
            { char: '不', pinyin: 'bù', meaning: 'не', examples: [{ word: '不好', pinyin: 'bù hǎo', meaning: 'нехорошо' }] },
            { char: '才', pinyin: 'cái', meaning: 'только что', examples: [{ word: '刚才', pinyin: 'gāng cái', meaning: 'только что' }] },
            { char: '草', pinyin: 'cǎo', meaning: 'трава', examples: [{ word: '草地', pinyin: 'cǎo dì', meaning: 'лужайка' }] },
            { char: '层', pinyin: 'céng', meaning: 'этаж', examples: [{ word: '一层', pinyin: 'yì céng', meaning: 'первый этаж' }] },
            { char: '茶', pinyin: 'chá', meaning: 'чай', examples: [{ word: '绿茶', pinyin: 'lǜ chá', meaning: 'зелёный чай' }] },
            { char: '差', pinyin: 'chà', meaning: 'плохой', examples: [{ word: '差不多', pinyin: 'chà bu duō', meaning: 'почти' }] },
            { char: '长', pinyin: 'cháng', meaning: 'длинный', examples: [{ word: '长短', pinyin: 'cháng duǎn', meaning: 'длина' }] },
            { char: '唱', pinyin: 'chàng', meaning: 'петь', examples: [{ word: '唱歌', pinyin: 'chàng gē', meaning: 'петь' }] },
            { char: '车', pinyin: 'chē', meaning: 'машина', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '城', pinyin: 'chéng', meaning: 'город', examples: [{ word: '城市', pinyin: 'chéng shì', meaning: 'город' }] },
            { char: '吃', pinyin: 'chī', meaning: 'есть', examples: [{ word: '吃饭', pinyin: 'chī fàn', meaning: 'обедать' }] },
            { char: '出', pinyin: 'chū', meaning: 'выходить', examples: [{ word: '出来', pinyin: 'chū lái', meaning: 'выходить' }] },
            { char: '穿', pinyin: 'chuān', meaning: 'носить', examples: [{ word: '穿衣', pinyin: 'chuān yī', meaning: 'одеваться' }] },
            { char: '次', pinyin: 'cì', meaning: 'раз', examples: [{ word: '一次', pinyin: 'yí cì', meaning: 'один раз' }] },
            { char: '从', pinyin: 'cóng', meaning: 'от, из', examples: [{ word: '从来', pinyin: 'cóng lái', meaning: 'никогда' }] },
            { char: '错', pinyin: 'cuò', meaning: 'ошибка', examples: [{ word: '不错', pinyin: 'bú cuò', meaning: 'неплохо' }] },
            { char: '打', pinyin: 'dǎ', meaning: 'бить', examples: [{ word: '打电话', pinyin: 'dǎ diàn huà', meaning: 'звонить' }] },
            { char: '的', pinyin: 'de', meaning: 'притяж. частица', examples: [{ word: '我的', pinyin: 'wǒ de', meaning: 'мой' }] },
            { char: '等', pinyin: 'děng', meaning: 'ждать', examples: [{ word: '等等', pinyin: 'děng děng', meaning: 'и так далее' }] },
            { char: '弟', pinyin: 'dì', meaning: 'младший брат', examples: [{ word: '弟弟', pinyin: 'dì di', meaning: 'младший брат' }] },
            { char: '第', pinyin: 'dì', meaning: 'порядковый', examples: [{ word: '第一', pinyin: 'dì yī', meaning: 'первый' }] },
            { char: '懂', pinyin: 'dǒng', meaning: 'понимать', examples: [{ word: '听懂', pinyin: 'tīng dǒng', meaning: 'понять на слух' }] },
            { char: '对', pinyin: 'duì', meaning: 'правильно', examples: [{ word: '对不起', pinyin: 'duì bu qǐ', meaning: 'извините' }] },
            { char: '多', pinyin: 'duō', meaning: 'много', examples: [{ word: '多少', pinyin: 'duō shao', meaning: 'сколько' }] },
            { char: '儿', pinyin: 'ér', meaning: 'сын', examples: [{ word: '儿子', pinyin: 'ér zi', meaning: 'сын' }] },
            { char: '二', pinyin: 'èr', meaning: 'два', examples: [{ word: '十二', pinyin: 'shí èr', meaning: 'двенадцать' }] },
            { char: '发', pinyin: 'fā', meaning: 'отправлять', examples: [{ word: '发现', pinyin: 'fā xiàn', meaning: 'обнаружить' }] },
            { char: '饭', pinyin: 'fàn', meaning: 'еда', examples: [{ word: '米饭', pinyin: 'mǐ fàn', meaning: 'варёный рис' }] },
            { char: '放', pinyin: 'fàng', meaning: 'класть', examples: [{ word: '放心', pinyin: 'fàng xīn', meaning: 'не волноваться' }] },
            { char: '分', pinyin: 'fēn', meaning: 'минута', examples: [{ word: '十分', pinyin: 'shí fēn', meaning: 'десять минут' }] },
            { char: '高', pinyin: 'gāo', meaning: 'высокий', examples: [{ word: '高兴', pinyin: 'gāo xìng', meaning: 'радостный' }] },
            { char: '哥', pinyin: 'gē', meaning: 'старший брат', examples: [{ word: '哥哥', pinyin: 'gē ge', meaning: 'старший брат' }] },
            { char: '个', pinyin: 'gè', meaning: 'сч. слово', examples: [{ word: '一个', pinyin: 'yí gè', meaning: 'один (шт.)' }] },
            { char: '给', pinyin: 'gěi', meaning: 'давать', examples: [{ word: '送给', pinyin: 'sòng gěi', meaning: 'подарить' }] },
            { char: '公', pinyin: 'gōng', meaning: 'общественный', examples: [{ word: '公园', pinyin: 'gōng yuán', meaning: 'парк' }] },
            { char: '狗', pinyin: 'gǒu', meaning: 'собака', examples: [{ word: '小狗', pinyin: 'xiǎo gǒu', meaning: 'щенок' }] },
            { char: '贵', pinyin: 'guì', meaning: 'дорогой', examples: [{ word: '很贵', pinyin: 'hěn guì', meaning: 'очень дорого' }] },
            { char: '国', pinyin: 'guó', meaning: 'страна', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] },
            { char: '过', pinyin: 'guò', meaning: 'проходить', examples: [{ word: '过去', pinyin: 'guò qù', meaning: 'прошлое' }] },
            { char: '还', pinyin: 'hái', meaning: 'ещё', examples: [{ word: '还有', pinyin: 'hái yǒu', meaning: 'ещё есть' }] },
            { char: '孩', pinyin: 'hái', meaning: 'ребёнок', examples: [{ word: '孩子', pinyin: 'hái zi', meaning: 'ребёнок' }] },
            { char: '海', pinyin: 'hǎi', meaning: 'море', examples: [{ word: '大海', pinyin: 'dà hǎi', meaning: 'море' }] },
            { char: '好', pinyin: 'hǎo', meaning: 'хороший', examples: [{ word: '很好', pinyin: 'hěn hǎo', meaning: 'очень хорошо' }] },
            { char: '号', pinyin: 'hào', meaning: 'номер', examples: [{ word: '号码', pinyin: 'hào mǎ', meaning: 'номер' }] },
            { char: '喝', pinyin: 'hē', meaning: 'пить', examples: [{ word: '喝水', pinyin: 'hē shuǐ', meaning: 'пить воду' }] },
            { char: '和', pinyin: 'hé', meaning: 'и', examples: [{ word: '和平', pinyin: 'hé píng', meaning: 'мир' }] },
            { char: '很', pinyin: 'hěn', meaning: 'очень', examples: [{ word: '很好', pinyin: 'hěn hǎo', meaning: 'очень хорошо' }] },
            { char: '黑', pinyin: 'hēi', meaning: 'чёрный', examples: [{ word: '黑色', pinyin: 'hēi sè', meaning: 'чёрный цвет' }] },
            { char: '红', pinyin: 'hóng', meaning: 'красный', examples: [{ word: '红色', pinyin: 'hóng sè', meaning: 'красный цвет' }] },
            { char: '后', pinyin: 'hòu', meaning: 'после', examples: [{ word: '以后', pinyin: 'yǐ hòu', meaning: 'потом' }] },
            { char: '花', pinyin: 'huā', meaning: 'цветок', examples: [{ word: '花园', pinyin: 'huā yuán', meaning: 'сад' }] },
            { char: '话', pinyin: 'huà', meaning: 'речь', examples: [{ word: '说话', pinyin: 'shuō huà', meaning: 'разговаривать' }] },
            { char: '坏', pinyin: 'huài', meaning: 'плохой', examples: [{ word: '坏人', pinyin: 'huài rén', meaning: 'плохой человек' }] },
            { char: '欢', pinyin: 'huān', meaning: 'радостный', examples: [{ word: '喜欢', pinyin: 'xǐ huan', meaning: 'нравиться' }] },
            { char: '黄', pinyin: 'huáng', meaning: 'жёлтый', examples: [{ word: '黄色', pinyin: 'huáng sè', meaning: 'жёлтый цвет' }] },
            { char: '回', pinyin: 'huí', meaning: 'возвращаться', examples: [{ word: '回家', pinyin: 'huí jiā', meaning: 'идти домой' }] },
            { char: '会', pinyin: 'huì', meaning: 'уметь', examples: [{ word: '不会', pinyin: 'bú huì', meaning: 'не уметь' }] },
            { char: '火', pinyin: 'huǒ', meaning: 'огонь', examples: [{ word: '火车', pinyin: 'huǒ chē', meaning: 'поезд' }] },
            { char: '机', pinyin: 'jī', meaning: 'машина', examples: [{ word: '手机', pinyin: 'shǒu jī', meaning: 'телефон' }] },
            { char: '鸡', pinyin: 'jī', meaning: 'курица', examples: [{ word: '鸡肉', pinyin: 'jī ròu', meaning: 'куриное мясо' }] },
            { char: '家', pinyin: 'jiā', meaning: 'семья', examples: [{ word: '回家', pinyin: 'huí jiā', meaning: 'идти домой' }] },
            { char: '间', pinyin: 'jiān', meaning: 'между', examples: [{ word: '时间', pinyin: 'shí jiān', meaning: 'время' }] },
            { char: '见', pinyin: 'jiàn', meaning: 'видеть', examples: [{ word: '看见', pinyin: 'kàn jiàn', meaning: 'увидеть' }] },
            { char: '教', pinyin: 'jiào', meaning: 'учить', examples: [{ word: '教师', pinyin: 'jiào shī', meaning: 'учитель' }] },
            { char: '姐', pinyin: 'jiě', meaning: 'старшая сестра', examples: [{ word: '姐姐', pinyin: 'jiě jie', meaning: 'старшая сестра' }] },
            { char: '介', pinyin: 'jiè', meaning: 'представлять', examples: [{ word: '介绍', pinyin: 'jiè shào', meaning: 'представлять' }] },
            { char: '今', pinyin: 'jīn', meaning: 'сегодня', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '进', pinyin: 'jìn', meaning: 'входить', examples: [{ word: '进来', pinyin: 'jìn lái', meaning: 'входить' }] },
            { char: '近', pinyin: 'jìn', meaning: 'близко', examples: [{ word: '附近', pinyin: 'fù jìn', meaning: 'поблизости' }] },
            { char: '就', pinyin: 'jiù', meaning: 'именно', examples: [{ word: '就是', pinyin: 'jiù shì', meaning: 'именно' }] },
            { char: '觉', pinyin: 'jué', meaning: 'чувствовать', examples: [{ word: '觉得', pinyin: 'jué de', meaning: 'считать' }] },
            { char: '开', pinyin: 'kāi', meaning: 'открывать', examples: [{ word: '开始', pinyin: 'kāi shǐ', meaning: 'начинать' }] },
            { char: '看', pinyin: 'kàn', meaning: 'смотреть', examples: [{ word: '看书', pinyin: 'kàn shū', meaning: 'читать книгу' }] },
            { char: '考', pinyin: 'kǎo', meaning: 'экзамен', examples: [{ word: '考试', pinyin: 'kǎo shì', meaning: 'экзамен' }] },
            { char: '可', pinyin: 'kě', meaning: 'можно', examples: [{ word: '可以', pinyin: 'kě yǐ', meaning: 'можно' }] },
            { char: '课', pinyin: 'kè', meaning: 'урок', examples: [{ word: '上课', pinyin: 'shàng kè', meaning: 'посещать урок' }] },
            { char: '口', pinyin: 'kǒu', meaning: 'рот', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] },
            { char: '块', pinyin: 'kuài', meaning: 'кусок', examples: [{ word: '一块', pinyin: 'yí kuài', meaning: 'один кусок' }] },
            { char: '快', pinyin: 'kuài', meaning: 'быстрый', examples: [{ word: '很快', pinyin: 'hěn kuài', meaning: 'очень быстро' }] },
            { char: '来', pinyin: 'lái', meaning: 'приходить', examples: [{ word: '回来', pinyin: 'huí lái', meaning: 'возвращаться' }] },
            { char: '蓝', pinyin: 'lán', meaning: 'синий', examples: [{ word: '蓝色', pinyin: 'lán sè', meaning: 'синий цвет' }] },
            { char: '老', pinyin: 'lǎo', meaning: 'старый', examples: [{ word: '老师', pinyin: 'lǎo shī', meaning: 'учитель' }] },
            { char: '了', pinyin: 'le', meaning: 'завершённость', examples: [{ word: '好了', pinyin: 'hǎo le', meaning: 'готово' }] },
            { char: '冷', pinyin: 'lěng', meaning: 'холодный', examples: [{ word: '很冷', pinyin: 'hěn lěng', meaning: 'очень холодно' }] },
            { char: '里', pinyin: 'lǐ', meaning: 'внутри', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '两', pinyin: 'liǎng', meaning: 'два', examples: [{ word: '两个', pinyin: 'liǎng gè', meaning: 'два (шт.)' }] },
            { char: '零', pinyin: 'líng', meaning: 'ноль', examples: [{ word: '零钱', pinyin: 'líng qián', meaning: 'мелочь' }] },
            { char: '路', pinyin: 'lù', meaning: 'дорога', examples: [{ word: '马路', pinyin: 'mǎ lù', meaning: 'улица' }] },
            { char: '旅', pinyin: 'lǚ', meaning: 'путешествие', examples: [{ word: '旅游', pinyin: 'lǚ yóu', meaning: 'путешествие' }] },
            { char: '绿', pinyin: 'lǜ', meaning: 'зелёный', examples: [{ word: '绿色', pinyin: 'lǜ sè', meaning: 'зелёный цвет' }] },
            { char: '妈', pinyin: 'mā', meaning: 'мама', examples: [{ word: '妈妈', pinyin: 'mā ma', meaning: 'мама' }] },
            { char: '吗', pinyin: 'ma', meaning: 'вопросит. частица', examples: [{ word: '好吗', pinyin: 'hǎo ma', meaning: 'хорошо?' }] },
            { char: '买', pinyin: 'mǎi', meaning: 'покупать', examples: [{ word: '买东西', pinyin: 'mǎi dōng xi', meaning: 'делать покупки' }] },
            { char: '卖', pinyin: 'mài', meaning: 'продавать', examples: [{ word: '买卖', pinyin: 'mǎi mài', meaning: 'торговля' }] },
            { char: '慢', pinyin: 'màn', meaning: 'медленный', examples: [{ word: '很慢', pinyin: 'hěn màn', meaning: 'очень медленно' }] },
            { char: '忙', pinyin: 'máng', meaning: 'занятой', examples: [{ word: '很忙', pinyin: 'hěn máng', meaning: 'очень занят' }] },
            { char: '猫', pinyin: 'māo', meaning: 'кошка', examples: [{ word: '小猫', pinyin: 'xiǎo māo', meaning: 'котёнок' }] },
            { char: '没', pinyin: 'méi', meaning: 'нет', examples: [{ word: '没有', pinyin: 'méi yǒu', meaning: 'не иметь' }] },
            { char: '每', pinyin: 'měi', meaning: 'каждый', examples: [{ word: '每天', pinyin: 'měi tiān', meaning: 'каждый день' }] },
            { char: '妹', pinyin: 'mèi', meaning: 'младшая сестра', examples: [{ word: '妹妹', pinyin: 'mèi mei', meaning: 'младшая сестра' }] },
            { char: '门', pinyin: 'mén', meaning: 'дверь', examples: [{ word: '门口', pinyin: 'mén kǒu', meaning: 'у двери' }] },
            { char: '米', pinyin: 'mǐ', meaning: 'рис', examples: [{ word: '大米', pinyin: 'dà mǐ', meaning: 'рис' }] },
            { char: '名', pinyin: 'míng', meaning: 'имя', examples: [{ word: '名字', pinyin: 'míng zi', meaning: 'имя' }] },
            { char: '明', pinyin: 'míng', meaning: 'ясный', examples: [{ word: '明天', pinyin: 'míng tiān', meaning: 'завтра' }] },
            { char: '拿', pinyin: 'ná', meaning: 'брать', examples: [{ word: '拿来', pinyin: 'ná lái', meaning: 'принести' }] },
            { char: '哪', pinyin: 'nǎ', meaning: 'какой', examples: [{ word: '哪里', pinyin: 'nǎ lǐ', meaning: 'где' }] },
            { char: '那', pinyin: 'nà', meaning: 'тот', examples: [{ word: '那里', pinyin: 'nà lǐ', meaning: 'там' }] },
            { char: '奶', pinyin: 'nǎi', meaning: 'молоко', examples: [{ word: '牛奶', pinyin: 'niú nǎi', meaning: 'молоко' }] },
            { char: '南', pinyin: 'nán', meaning: 'юг', examples: [{ word: '南方', pinyin: 'nán fāng', meaning: 'юг' }] },
            { char: '难', pinyin: 'nán', meaning: 'трудный', examples: [{ word: '困难', pinyin: 'kùn nan', meaning: 'трудность' }] },
            { char: '呢', pinyin: 'ne', meaning: 'частица', examples: [{ word: '你呢', pinyin: 'nǐ ne', meaning: 'а ты?' }] },
            { char: '能', pinyin: 'néng', meaning: 'мочь', examples: [{ word: '不能', pinyin: 'bù néng', meaning: 'нельзя' }] },
            { char: '你', pinyin: 'nǐ', meaning: 'ты', examples: [{ word: '你好', pinyin: 'nǐ hǎo', meaning: 'здравствуйте' }] },
            { char: '年', pinyin: 'nián', meaning: 'год', examples: [{ word: '今年', pinyin: 'jīn nián', meaning: 'этот год' }] },
            { char: '牛', pinyin: 'niú', meaning: 'корова', examples: [{ word: '牛奶', pinyin: 'niú nǎi', meaning: 'молоко' }] },
            { char: '女', pinyin: 'nǚ', meaning: 'женщина', examples: [{ word: '女人', pinyin: 'nǚ rén', meaning: 'женщина' }] },
            { char: '旁', pinyin: 'páng', meaning: 'рядом', examples: [{ word: '旁边', pinyin: 'páng biān', meaning: 'рядом' }] },
            { char: '跑', pinyin: 'pǎo', meaning: 'бежать', examples: [{ word: '跑步', pinyin: 'pǎo bù', meaning: 'бегать' }] },
            { char: '票', pinyin: 'piào', meaning: 'билет', examples: [{ word: '车票', pinyin: 'chē piào', meaning: 'билет на транспорт' }] },
            { char: '起', pinyin: 'qǐ', meaning: 'вставать', examples: [{ word: '起床', pinyin: 'qǐ chuáng', meaning: 'вставать с постели' }] },
            { char: '千', pinyin: 'qiān', meaning: 'тысяча', examples: [{ word: '一千', pinyin: 'yì qiān', meaning: 'тысяча' }] },
            { char: '前', pinyin: 'qián', meaning: 'перед', examples: [{ word: '以前', pinyin: 'yǐ qián', meaning: 'раньше' }] },
            { char: '钱', pinyin: 'qián', meaning: 'деньги', examples: [{ word: '有钱', pinyin: 'yǒu qián', meaning: 'богатый' }] },
            { char: '晴', pinyin: 'qíng', meaning: 'ясная погода', examples: [{ word: '晴天', pinyin: 'qíng tiān', meaning: 'ясный день' }] },
            { char: '去', pinyin: 'qù', meaning: 'идти', examples: [{ word: '去年', pinyin: 'qù nián', meaning: 'прошлый год' }] },
            { char: '热', pinyin: 'rè', meaning: 'горячий', examples: [{ word: '很热', pinyin: 'hěn rè', meaning: 'очень жарко' }] },
            { char: '人', pinyin: 'rén', meaning: 'человек', examples: [{ word: '中国人', pinyin: 'zhōng guó rén', meaning: 'китаец' }] },
            { char: '认', pinyin: 'rèn', meaning: 'узнавать', examples: [{ word: '认识', pinyin: 'rèn shi', meaning: 'знать (кого-то)' }] },
            { char: '日', pinyin: 'rì', meaning: 'день', examples: [{ word: '生日', pinyin: 'shēng rì', meaning: 'день рождения' }] },
            { char: '三', pinyin: 'sān', meaning: 'три', examples: [{ word: '十三', pinyin: 'shí sān', meaning: 'тринадцать' }] },
            { char: '山', pinyin: 'shān', meaning: 'гора', examples: [{ word: '雪山', pinyin: 'xuě shān', meaning: 'снежная гора' }] },
            { char: '上', pinyin: 'shàng', meaning: 'верх', examples: [{ word: '上午', pinyin: 'shàng wǔ', meaning: 'утро' }] },
            { char: '少', pinyin: 'shǎo', meaning: 'мало', examples: [{ word: '多少', pinyin: 'duō shao', meaning: 'сколько' }] },
            { char: '谁', pinyin: 'shéi', meaning: 'кто', examples: [{ word: '谁的', pinyin: 'shéi de', meaning: 'чей' }] },
            { char: '身', pinyin: 'shēn', meaning: 'тело', examples: [{ word: '身体', pinyin: 'shēn tǐ', meaning: 'здоровье' }] },
            { char: '生', pinyin: 'shēng', meaning: 'рождаться', examples: [{ word: '学生', pinyin: 'xué sheng', meaning: 'ученик' }] },
            { char: '十', pinyin: 'shí', meaning: 'десять', examples: [{ word: '二十', pinyin: 'èr shí', meaning: 'двадцать' }] },
            { char: '什', pinyin: 'shén', meaning: 'что', examples: [{ word: '什么', pinyin: 'shén me', meaning: 'что' }] },
            { char: '时', pinyin: 'shí', meaning: 'время', examples: [{ word: '时间', pinyin: 'shí jiān', meaning: 'время' }] },
            { char: '事', pinyin: 'shì', meaning: 'дело', examples: [{ word: '事情', pinyin: 'shì qing', meaning: 'дело' }] },
            { char: '试', pinyin: 'shì', meaning: 'пробовать', examples: [{ word: '考试', pinyin: 'kǎo shì', meaning: 'экзамен' }] },
            { char: '手', pinyin: 'shǒu', meaning: 'рука', examples: [{ word: '手机', pinyin: 'shǒu jī', meaning: 'телефон' }] },
            { char: '书', pinyin: 'shū', meaning: 'книга', examples: [{ word: '书店', pinyin: 'shū diàn', meaning: 'книжный магазин' }] },
            { char: '水', pinyin: 'shuǐ', meaning: 'вода', examples: [{ word: '水果', pinyin: 'shuǐ guǒ', meaning: 'фрукты' }] },
            { char: '睡', pinyin: 'shuì', meaning: 'спать', examples: [{ word: '睡觉', pinyin: 'shuì jiào', meaning: 'спать' }] },
            { char: '说', pinyin: 'shuō', meaning: 'говорить', examples: [{ word: '说话', pinyin: 'shuō huà', meaning: 'разговаривать' }] },
            { char: '四', pinyin: 'sì', meaning: 'четыре', examples: [{ word: '十四', pinyin: 'shí sì', meaning: 'четырнадцать' }] },
            { char: '岁', pinyin: 'suì', meaning: 'лет (возраст)', examples: [{ word: '几岁', pinyin: 'jǐ suì', meaning: 'сколько лет' }] },
            { char: '他', pinyin: 'tā', meaning: 'он', examples: [{ word: '他们', pinyin: 'tā men', meaning: 'они' }] },
            { char: '她', pinyin: 'tā', meaning: 'она', examples: [{ word: '她们', pinyin: 'tā men', meaning: 'они (ж.р.)' }] },
            { char: '太', pinyin: 'tài', meaning: 'слишком', examples: [{ word: '太多', pinyin: 'tài duō', meaning: 'слишком много' }] },
            { char: '天', pinyin: 'tiān', meaning: 'день', examples: [{ word: '今天', pinyin: 'jīn tiān', meaning: 'сегодня' }] },
            { char: '听', pinyin: 'tīng', meaning: 'слушать', examples: [{ word: '听话', pinyin: 'tīng huà', meaning: 'слушаться' }] },
            { char: '同', pinyin: 'tóng', meaning: 'одинаковый', examples: [{ word: '同学', pinyin: 'tóng xué', meaning: 'одноклассник' }] },
            { char: '万', pinyin: 'wàn', meaning: 'десять тысяч', examples: [{ word: '千万', pinyin: 'qiān wàn', meaning: 'обязательно' }] },
            { char: '为', pinyin: 'wèi', meaning: 'для', examples: [{ word: '因为', pinyin: 'yīn wèi', meaning: 'потому что' }] },
            { char: '问', pinyin: 'wèn', meaning: 'спрашивать', examples: [{ word: '问题', pinyin: 'wèn tí', meaning: 'вопрос' }] },
            { char: '我', pinyin: 'wǒ', meaning: 'я', examples: [{ word: '我们', pinyin: 'wǒ men', meaning: 'мы' }] },
            { char: '五', pinyin: 'wǔ', meaning: 'пять', examples: [{ word: '十五', pinyin: 'shí wǔ', meaning: 'пятнадцать' }] },
            { char: '午', pinyin: 'wǔ', meaning: 'полдень', examples: [{ word: '中午', pinyin: 'zhōng wǔ', meaning: 'полдень' }] },
            { char: '西', pinyin: 'xī', meaning: 'запад', examples: [{ word: '西瓜', pinyin: 'xī guā', meaning: 'арбуз' }] },
            { char: '洗', pinyin: 'xǐ', meaning: 'мыть', examples: [{ word: '洗手', pinyin: 'xǐ shǒu', meaning: 'мыть руки' }] },
            { char: '下', pinyin: 'xià', meaning: 'низ', examples: [{ word: '下午', pinyin: 'xià wǔ', meaning: 'день' }] },
            { char: '先', pinyin: 'xiān', meaning: 'сначала', examples: [{ word: '先生', pinyin: 'xiān sheng', meaning: 'господин' }] },
            { char: '现', pinyin: 'xiàn', meaning: 'сейчас', examples: [{ word: '现在', pinyin: 'xiàn zài', meaning: 'сейчас' }] },
            { char: '想', pinyin: 'xiǎng', meaning: 'думать', examples: [{ word: '想法', pinyin: 'xiǎng fǎ', meaning: 'мысль' }] },
            { char: '小', pinyin: 'xiǎo', meaning: 'маленький', examples: [{ word: '小孩', pinyin: 'xiǎo hái', meaning: 'ребёнок' }] },
            { char: '些', pinyin: 'xiē', meaning: 'немного', examples: [{ word: '一些', pinyin: 'yì xiē', meaning: 'немного' }] },
            { char: '写', pinyin: 'xiě', meaning: 'писать', examples: [{ word: '写字', pinyin: 'xiě zì', meaning: 'писать иероглифы' }] },
            { char: '谢', pinyin: 'xiè', meaning: 'благодарить', examples: [{ word: '谢谢', pinyin: 'xiè xie', meaning: 'спасибо' }] },
            { char: '星', pinyin: 'xīng', meaning: 'звезда', examples: [{ word: '星期', pinyin: 'xīng qī', meaning: 'неделя' }] },
            { char: '行', pinyin: 'xíng', meaning: 'идти', examples: [{ word: '不行', pinyin: 'bù xíng', meaning: 'нельзя' }] },
            { char: '休', pinyin: 'xiū', meaning: 'отдыхать', examples: [{ word: '休息', pinyin: 'xiū xi', meaning: 'отдых' }] },
            { char: '雪', pinyin: 'xuě', meaning: 'снег', examples: [{ word: '下雪', pinyin: 'xià xuě', meaning: 'идёт снег' }] },
            { char: '颜', pinyin: 'yán', meaning: 'цвет', examples: [{ word: '颜色', pinyin: 'yán sè', meaning: 'цвет' }] },
            { char: '眼', pinyin: 'yǎn', meaning: 'глаз', examples: [{ word: '眼睛', pinyin: 'yǎn jing', meaning: 'глаза' }] },
            { char: '羊', pinyin: 'yáng', meaning: 'овца', examples: [{ word: '羊肉', pinyin: 'yáng ròu', meaning: 'баранина' }] },
            { char: '药', pinyin: 'yào', meaning: 'лекарство', examples: [{ word: '吃药', pinyin: 'chī yào', meaning: 'принимать лекарство' }] },
            { char: '要', pinyin: 'yào', meaning: 'хотеть', examples: [{ word: '不要', pinyin: 'bú yào', meaning: 'не надо' }] },
            { char: '也', pinyin: 'yě', meaning: 'тоже', examples: [{ word: '也是', pinyin: 'yě shì', meaning: 'тоже' }] },
            { char: '一', pinyin: 'yī', meaning: 'один', examples: [{ word: '一起', pinyin: 'yì qǐ', meaning: 'вместе' }] },
            { char: '衣', pinyin: 'yī', meaning: 'одежда', examples: [{ word: '衣服', pinyin: 'yī fu', meaning: 'одежда' }] },
            { char: '医', pinyin: 'yī', meaning: 'врач', examples: [{ word: '医生', pinyin: 'yī shēng', meaning: 'врач' }] },
            { char: '椅', pinyin: 'yǐ', meaning: 'стул', examples: [{ word: '椅子', pinyin: 'yǐ zi', meaning: 'стул' }] },
            { char: '意', pinyin: 'yì', meaning: 'смысл', examples: [{ word: '意思', pinyin: 'yì si', meaning: 'значение' }] },
            { char: '因', pinyin: 'yīn', meaning: 'причина', examples: [{ word: '因为', pinyin: 'yīn wèi', meaning: 'потому что' }] },
            { char: '阴', pinyin: 'yīn', meaning: 'пасмурный', examples: [{ word: '阴天', pinyin: 'yīn tiān', meaning: 'пасмурный день' }] },
            { char: '饮', pinyin: 'yǐn', meaning: 'пить', examples: [{ word: '饮料', pinyin: 'yǐn liào', meaning: 'напиток' }] },
            { char: '英', pinyin: 'yīng', meaning: 'Англия', examples: [{ word: '英语', pinyin: 'yīng yǔ', meaning: 'английский язык' }] },
            { char: '鱼', pinyin: 'yú', meaning: 'рыба', examples: [{ word: '鱼肉', pinyin: 'yú ròu', meaning: 'рыбное мясо' }] },
            { char: '雨', pinyin: 'yǔ', meaning: 'дождь', examples: [{ word: '下雨', pinyin: 'xià yǔ', meaning: 'идёт дождь' }] },
            { char: '元', pinyin: 'yuán', meaning: 'юань', examples: [{ word: '一元', pinyin: 'yì yuán', meaning: 'один юань' }] },
            { char: '远', pinyin: 'yuǎn', meaning: 'далеко', examples: [{ word: '远近', pinyin: 'yuǎn jìn', meaning: 'расстояние' }] },
            { char: '月', pinyin: 'yuè', meaning: 'месяц', examples: [{ word: '一月', pinyin: 'yī yuè', meaning: 'январь' }] },
            { char: '再', pinyin: 'zài', meaning: 'снова', examples: [{ word: '再见', pinyin: 'zài jiàn', meaning: 'до свидания' }] },
            { char: '早', pinyin: 'zǎo', meaning: 'утро', examples: [{ word: '早上', pinyin: 'zǎo shang', meaning: 'утром' }] },
            { char: '怎', pinyin: 'zěn', meaning: 'как', examples: [{ word: '怎么', pinyin: 'zěn me', meaning: 'как' }] },
            { char: '这', pinyin: 'zhè', meaning: 'этот', examples: [{ word: '这里', pinyin: 'zhè lǐ', meaning: 'здесь' }] },
            { char: '真', pinyin: 'zhēn', meaning: 'правда', examples: [{ word: '真的', pinyin: 'zhēn de', meaning: 'правда' }] },
            { char: '正', pinyin: 'zhèng', meaning: 'правильный', examples: [{ word: '正在', pinyin: 'zhèng zài', meaning: 'в процессе' }] },
            { char: '中', pinyin: 'zhōng', meaning: 'середина', examples: [{ word: '中国', pinyin: 'zhōng guó', meaning: 'Китай' }] },
            { char: '种', pinyin: 'zhǒng', meaning: 'вид', examples: [{ word: '种类', pinyin: 'zhǒng lèi', meaning: 'вид' }] },
            { char: '周', pinyin: 'zhōu', meaning: 'неделя', examples: [{ word: '周末', pinyin: 'zhōu mò', meaning: 'выходные' }] },
            { char: '主', pinyin: 'zhǔ', meaning: 'главный', examples: [{ word: '主要', pinyin: 'zhǔ yào', meaning: 'главный' }] },
            { char: '住', pinyin: 'zhù', meaning: 'жить', examples: [{ word: '住在', pinyin: 'zhù zài', meaning: 'жить в' }] },
            { char: '桌', pinyin: 'zhuō', meaning: 'стол', examples: [{ word: '桌子', pinyin: 'zhuō zi', meaning: 'стол' }] },
            { char: '字', pinyin: 'zì', meaning: 'иероглиф', examples: [{ word: '汉字', pinyin: 'hàn zì', meaning: 'китайский иероглиф' }] },
            { char: '走', pinyin: 'zǒu', meaning: 'идти', examples: [{ word: '走路', pinyin: 'zǒu lù', meaning: 'идти пешком' }] },
            { char: '最', pinyin: 'zuì', meaning: 'самый', examples: [{ word: '最好', pinyin: 'zuì hǎo', meaning: 'лучший' }] },
            { char: '左', pinyin: 'zuǒ', meaning: 'левый', examples: [{ word: '左边', pinyin: 'zuǒ biān', meaning: 'слева' }] },
            { char: '坐', pinyin: 'zuò', meaning: 'сидеть', examples: [{ word: '坐下', pinyin: 'zuò xià', meaning: 'садиться' }] },
            { char: '做', pinyin: 'zuò', meaning: 'делать', examples: [{ word: '做事', pinyin: 'zuò shì', meaning: 'делать дело' }] }
        ]
    },

    hsk3_all: {
        name: "🥇 HSK 3 · Весь уровень",
        description: "Все 300 иероглифов среднего уровня",
        group: "hsk",
        color: "#ffd700",
        items: [
            { char: '啊', pinyin: 'a', meaning: 'восклицание', examples: [{ word: '好啊', pinyin: 'hǎo a', meaning: 'хорошо!' }] },
            { char: '矮', pinyin: 'ǎi', meaning: 'низкий (рост)', examples: [{ word: '矮小', pinyin: 'ǎi xiǎo', meaning: 'низкорослый' }] },
            { char: '爱', pinyin: 'ài', meaning: 'любить', examples: [{ word: '爱情', pinyin: 'ài qíng', meaning: 'любовь' }] },
            { char: '安', pinyin: 'ān', meaning: 'спокойный', examples: [{ word: '安全', pinyin: 'ān quán', meaning: 'безопасность' }] },
            { char: '安排', pinyin: 'ān pái', meaning: 'планировать' },
            { char: '暗', pinyin: 'àn', meaning: 'тёмный', examples: [{ word: '黑暗', pinyin: 'hēi àn', meaning: 'тьма' }] },
            { char: '把', pinyin: 'bǎ', meaning: 'частица (конструкция)' },
            { char: '搬', pinyin: 'bān', meaning: 'переносить', examples: [{ word: '搬家', pinyin: 'bān jiā', meaning: 'переезжать' }] },
            { char: '班', pinyin: 'bān', meaning: 'класс' },
            { char: '半', pinyin: 'bàn', meaning: 'половина' },
            { char: '办', pinyin: 'bàn', meaning: 'делать' },
            { char: '饱', pinyin: 'bǎo', meaning: 'сытый', examples: [{ word: '吃饱', pinyin: 'chī bǎo', meaning: 'наесться' }] },
            { char: '北', pinyin: 'běi', meaning: 'север' },
            { char: '比较', pinyin: 'bǐ jiào', meaning: 'сравнивать' },
            { char: '比赛', pinyin: 'bǐ sài', meaning: 'соревнование' },
            { char: '笔记本', pinyin: 'bǐ jì běn', meaning: 'ноутбук' },
            { char: '必须', pinyin: 'bì xū', meaning: 'обязательно' },
            { char: '变化', pinyin: 'biàn huà', meaning: 'изменение' },
            { char: '别人', pinyin: 'bié rén', meaning: 'другие люди' },
            { char: '冰箱', pinyin: 'bīng xiāng', meaning: 'холодильник' },
            { char: '不但', pinyin: 'bú dàn', meaning: 'не только' },
            { char: '而且', pinyin: 'ér qiě', meaning: 'но и' },
            { char: '菜单', pinyin: 'cài dān', meaning: 'меню' },
            { char: '参加', pinyin: 'cān jiā', meaning: 'участвовать' },
            { char: '草', pinyin: 'cǎo', meaning: 'трава' },
            { char: '层', pinyin: 'céng', meaning: 'этаж' },
            { char: '差', pinyin: 'chà', meaning: 'плохой' },
            { char: '超市', pinyin: 'chāo shì', meaning: 'супермаркет' },
            { char: '衬衫', pinyin: 'chèn shān', meaning: 'рубашка' },
            { char: '成绩', pinyin: 'chéng jì', meaning: 'результат' },
            { char: '城市', pinyin: 'chéng shì', meaning: 'город' },
            { char: '迟到', pinyin: 'chí dào', meaning: 'опаздывать' },
            { char: '除了', pinyin: 'chú le', meaning: 'кроме' },
            { char: '厨房', pinyin: 'chú fáng', meaning: 'кухня' },
            { char: '春', pinyin: 'chūn', meaning: 'весна', examples: [{ word: '春天', pinyin: 'chūn tiān', meaning: 'весна' }] },
            { char: '词典', pinyin: 'cí diǎn', meaning: 'словарь' },
            { char: '聪明', pinyin: 'cōng míng', meaning: 'умный' },
            { char: '打扫', pinyin: 'dǎ sǎo', meaning: 'убирать' },
            { char: '打算', pinyin: 'dǎ suàn', meaning: 'планировать' },
            { char: '带', pinyin: 'dài', meaning: 'нести', examples: [{ word: '带来', pinyin: 'dài lái', meaning: 'принести' }] },
            { char: '担心', pinyin: 'dān xīn', meaning: 'беспокоиться' },
            { char: '蛋糕', pinyin: 'dàn gāo', meaning: 'торт' },
            { char: '当然', pinyin: 'dāng rán', meaning: 'конечно' },
            { char: '地', pinyin: 'de', meaning: 'суффикс наречия' },
            { char: '灯', pinyin: 'dēng', meaning: 'лампа', examples: [{ word: '电灯', pinyin: 'diàn dēng', meaning: 'электрическая лампа' }] },
            { char: '地方', pinyin: 'dì fang', meaning: 'место' },
            { char: '地铁', pinyin: 'dì tiě', meaning: 'метро' },
            { char: '地图', pinyin: 'dì tú', meaning: 'карта' },
            { char: '电梯', pinyin: 'diàn tī', meaning: 'лифт' },
            { char: '电子邮件', pinyin: 'diàn zǐ yóu jiàn', meaning: 'email' },
            { char: '东', pinyin: 'dōng', meaning: 'восток' },
            { char: '冬', pinyin: 'dōng', meaning: 'зима', examples: [{ word: '冬天', pinyin: 'dōng tiān', meaning: 'зима' }] },
            { char: '动物', pinyin: 'dòng wù', meaning: 'животное' },
            { char: '短', pinyin: 'duǎn', meaning: 'короткий', examples: [{ word: '短裤', pinyin: 'duǎn kù', meaning: 'шорты' }] },
            { char: '段', pinyin: 'duàn', meaning: 'отрезок', examples: [{ word: '一段', pinyin: 'yí duàn', meaning: 'отрезок' }] },
            { char: '锻炼', pinyin: 'duàn liàn', meaning: 'тренироваться' },
            { char: '多么', pinyin: 'duō me', meaning: 'как (восклицание)' },
            { char: '饿', pinyin: 'è', meaning: 'голодный', examples: [{ word: '饿了', pinyin: 'è le', meaning: 'проголодался' }] },
            { char: '耳朵', pinyin: 'ěr duo', meaning: 'ухо' },
            { char: '发', pinyin: 'fā', meaning: 'отправлять' },
            { char: '发烧', pinyin: 'fā shāo', meaning: 'температура (жар)' },
            { char: '发现', pinyin: 'fā xiàn', meaning: 'обнаружить' },
            { char: '方便', pinyin: 'fāng biàn', meaning: 'удобный' },
            { char: '放', pinyin: 'fàng', meaning: 'класть' },
            { char: '放心', pinyin: 'fàng xīn', meaning: 'не волноваться' },
            { char: '分', pinyin: 'fēn', meaning: 'минута' },
            { char: '附近', pinyin: 'fù jìn', meaning: 'поблизости' },
            { char: '复习', pinyin: 'fù xí', meaning: 'повторять (уроки)' },
            { char: '干净', pinyin: 'gān jìng', meaning: 'чистый' },
            { char: '感冒', pinyin: 'gǎn mào', meaning: 'простуда' },
            { char: '感兴趣', pinyin: 'gǎn xìng qù', meaning: 'интересоваться' },
            { char: '刚', pinyin: 'gāng', meaning: 'только что', examples: [{ word: '刚才', pinyin: 'gāng cái', meaning: 'только что' }] },
            { char: '根据', pinyin: 'gēn jù', meaning: 'согласно' },
            { char: '跟', pinyin: 'gēn', meaning: 'с, вместе', examples: [{ word: '跟他', pinyin: 'gēn tā', meaning: 'с ним' }] },
            { char: '更', pinyin: 'gèng', meaning: 'ещё более', examples: [{ word: '更好', pinyin: 'gèng hǎo', meaning: 'ещё лучше' }] },
            { char: '公园', pinyin: 'gōng yuán', meaning: 'парк' },
            { char: '故事', pinyin: 'gù shi', meaning: 'история' },
            { char: '刮', pinyin: 'guā', meaning: 'дуть (ветер)', examples: [{ word: '刮风', pinyin: 'guā fēng', meaning: 'дует ветер' }] },
            { char: '关', pinyin: 'guān', meaning: 'закрывать' },
            { char: '关系', pinyin: 'guān xì', meaning: 'отношения' },
            { char: '关心', pinyin: 'guān xīn', meaning: 'заботиться' },
            { char: '关于', pinyin: 'guān yú', meaning: 'о, насчёт' },
            { char: '国家', pinyin: 'guó jiā', meaning: 'государство' },
            { char: '过', pinyin: 'guò', meaning: 'проходить' },
            { char: '过去', pinyin: 'guò qù', meaning: 'прошлое' },
            { char: '还是', pinyin: 'hái shi', meaning: 'или (в вопросе)' },
            { char: '害怕', pinyin: 'hài pà', meaning: 'бояться' },
            { char: '河', pinyin: 'hé', meaning: 'река', examples: [{ word: '小河', pinyin: 'xiǎo hé', meaning: 'речка' }] },
            { char: '黑板', pinyin: 'hēi bǎn', meaning: 'доска (в классе)' },
            { char: '护照', pinyin: 'hù zhào', meaning: 'паспорт' },
            { char: '花', pinyin: 'huā', meaning: 'цветок' },
            { char: '花园', pinyin: 'huā yuán', meaning: 'сад' },
            { char: '画', pinyin: 'huà', meaning: 'рисовать', examples: [{ word: '画画', pinyin: 'huà huà', meaning: 'рисовать' }] },
            { char: '坏', pinyin: 'huài', meaning: 'плохой' },
            { char: '欢迎', pinyin: 'huān yíng', meaning: 'добро пожаловать' },
            { char: '还', pinyin: 'huán', meaning: 'возвращать', examples: [{ word: '还书', pinyin: 'huán shū', meaning: 'вернуть книгу' }] },
            { char: '环境', pinyin: 'huán jìng', meaning: 'окружающая среда' },
            { char: '换', pinyin: 'huàn', meaning: 'менять', examples: [{ word: '换钱', pinyin: 'huàn qián', meaning: 'менять деньги' }] },
            { char: '黄', pinyin: 'huáng', meaning: 'жёлтый' },
            { char: '回答', pinyin: 'huí dá', meaning: 'ответ' },
            { char: '会议', pinyin: 'huì yì', meaning: 'совещание' },
            { char: '或者', pinyin: 'huò zhě', meaning: 'или' },
            { char: '几乎', pinyin: 'jī hū', meaning: 'почти' },
            { char: '机会', pinyin: 'jī huì', meaning: 'возможность' },
            { char: '极', pinyin: 'jí', meaning: 'крайне', examples: [{ word: '极其', pinyin: 'jí qí', meaning: 'чрезвычайно' }] },
            { char: '记得', pinyin: 'jì de', meaning: 'помнить' },
            { char: '季节', pinyin: 'jì jié', meaning: 'сезон' },
            { char: '检查', pinyin: 'jiǎn chá', meaning: 'проверять' },
            { char: '简单', pinyin: 'jiǎn dān', meaning: 'простой' },
            { char: '健康', pinyin: 'jiàn kāng', meaning: 'здоровье' },
            { char: '见面', pinyin: 'jiàn miàn', meaning: 'встречаться' },
            { char: '讲', pinyin: 'jiǎng', meaning: 'рассказывать', examples: [{ word: '讲话', pinyin: 'jiǎng huà', meaning: 'выступать' }] },
            { char: '教', pinyin: 'jiāo', meaning: 'учить (кого-то)', examples: [{ word: '教书', pinyin: 'jiāo shū', meaning: 'преподавать' }] },
            { char: '角', pinyin: 'jiǎo', meaning: 'угол/цзяо', examples: [{ word: '角落', pinyin: 'jiǎo luò', meaning: 'угол' }] },
            { char: '脚', pinyin: 'jiǎo', meaning: 'стопа' },
            { char: '接', pinyin: 'jiē', meaning: 'принимать', examples: [{ word: '接电话', pinyin: 'jiē diàn huà', meaning: 'брать трубку' }] },
            { char: '街道', pinyin: 'jiē dào', meaning: 'улица' },
            { char: '节目', pinyin: 'jié mù', meaning: 'программа' },
            { char: '节日', pinyin: 'jié rì', meaning: 'праздник' },
            { char: '结婚', pinyin: 'jié hūn', meaning: 'жениться' },
            { char: '结束', pinyin: 'jié shù', meaning: 'заканчивать' },
            { char: '解决', pinyin: 'jiě jué', meaning: 'решать (проблему)' },
            { char: '借', pinyin: 'jiè', meaning: 'одалживать', examples: [{ word: '借书', pinyin: 'jiè shū', meaning: 'взять книгу' }] },
            { char: '经常', pinyin: 'jīng cháng', meaning: 'часто' },
            { char: '经过', pinyin: 'jīng guò', meaning: 'проходить через' },
            { char: '经理', pinyin: 'jīng lǐ', meaning: 'менеджер' },
            { char: '久', pinyin: 'jiǔ', meaning: 'долго', examples: [{ word: '多久', pinyin: 'duō jiǔ', meaning: 'как долго' }] },
            { char: '旧', pinyin: 'jiù', meaning: 'старый (вещь)', examples: [{ word: '旧书', pinyin: 'jiù shū', meaning: 'старая книга' }] },
            { char: '句子', pinyin: 'jù zi', meaning: 'предложение' },
            { char: '决定', pinyin: 'jué dìng', meaning: 'решать' },
            { char: '可爱', pinyin: 'kě ài', meaning: 'милый' },
            { char: '渴', pinyin: 'kě', meaning: 'хотеть пить' },
            { char: '客人', pinyin: 'kè rén', meaning: 'гость' },
            { char: '空调', pinyin: 'kōng tiáo', meaning: 'кондиционер' },
            { char: '口', pinyin: 'kǒu', meaning: 'рот' },
            { char: '哭', pinyin: 'kū', meaning: 'плакать' },
            { char: '裤子', pinyin: 'kù zi', meaning: 'брюки' },
            { char: '筷子', pinyin: 'kuài zi', meaning: 'палочки' },
            { char: '蓝', pinyin: 'lán', meaning: 'синий' },
            { char: '老', pinyin: 'lǎo', meaning: 'старый' },
            { char: '离开', pinyin: 'lí kāi', meaning: 'уходить' },
            { char: '礼物', pinyin: 'lǐ wù', meaning: 'подарок' },
            { char: '历史', pinyin: 'lì shǐ', meaning: 'история' },
            { char: '脸', pinyin: 'liǎn', meaning: 'лицо', examples: [{ word: '红脸', pinyin: 'hóng liǎn', meaning: 'красное лицо' }] },
            { char: '练习', pinyin: 'liàn xí', meaning: 'упражнение' },
            { char: '辆', pinyin: 'liàng', meaning: 'сч. слово для машин' },
            { char: '聊天', pinyin: 'liáo tiān', meaning: 'болтать' },
            { char: '了解', pinyin: 'liǎo jiě', meaning: 'понимать' },
            { char: '邻居', pinyin: 'lín jū', meaning: 'сосед' },
            { char: '留学', pinyin: 'liú xué', meaning: 'учиться за границей' },
            { char: '楼', pinyin: 'lóu', meaning: 'этаж/здание', examples: [{ word: '大楼', pinyin: 'dà lóu', meaning: 'большое здание' }] },
            { char: '绿', pinyin: 'lǜ', meaning: 'зелёный' },
            { char: '马', pinyin: 'mǎ', meaning: 'лошадь' },
            { char: '马上', pinyin: 'mǎ shàng', meaning: 'немедленно' },
            { char: '满意', pinyin: 'mǎn yì', meaning: 'довольный' },
            { char: '帽子', pinyin: 'mào zi', meaning: 'шапка' },
            { char: '米', pinyin: 'mǐ', meaning: 'метр/рис' },
            { char: '面包', pinyin: 'miàn bāo', meaning: 'хлеб' },
            { char: '面条', pinyin: 'miàn tiáo', meaning: 'лапша' },
            { char: '母亲', pinyin: 'mǔ qīn', meaning: 'мать' },
            { char: '目的', pinyin: 'mù dì', meaning: 'цель' },
            { char: '拿', pinyin: 'ná', meaning: 'брать' },
            { char: '奶奶', pinyin: 'nǎi nai', meaning: 'бабушка' },
            { char: '南', pinyin: 'nán', meaning: 'юг' },
            { char: '难', pinyin: 'nán', meaning: 'трудный' },
            { char: '难过', pinyin: 'nán guò', meaning: 'грустный' },
            { char: '难道', pinyin: 'nán dào', meaning: 'неужели' },
            { char: '内', pinyin: 'nèi', meaning: 'внутри', examples: [{ word: '内容', pinyin: 'nèi róng', meaning: 'содержание' }] },
            { char: '能', pinyin: 'néng', meaning: 'мочь' },
            { char: '年龄', pinyin: 'nián líng', meaning: 'возраст' },
            { char: '牛仔裤', pinyin: 'niú zǎi kù', meaning: 'джинсы' },
            { char: '努力', pinyin: 'nǔ lì', meaning: 'стараться' },
            { char: '爬山', pinyin: 'pá shān', meaning: 'подниматься в горы' },
            { char: '盘子', pinyin: 'pán zi', meaning: 'тарелка' },
            { char: '胖', pinyin: 'pàng', meaning: 'толстый' },
            { char: '皮鞋', pinyin: 'pí xié', meaning: 'кожаная обувь' },
            { char: '啤酒', pinyin: 'pí jiǔ', meaning: 'пиво' },
            { char: '便宜', pinyin: 'pián yi', meaning: 'дешёвый' },
            { char: '漂亮', pinyin: 'piào liang', meaning: 'красивый' },
            { char: '铅笔', pinyin: 'qiān bǐ', meaning: 'карандаш' },
            { char: '清楚', pinyin: 'qīng chu', meaning: 'ясный' },
            { char: '秋', pinyin: 'qiū', meaning: 'осень', examples: [{ word: '秋天', pinyin: 'qiū tiān', meaning: 'осень' }] },
            { char: '裙子', pinyin: 'qún zi', meaning: 'юбка' },
            { char: '然后', pinyin: 'rán hòu', meaning: 'затем' },
            { char: '热情', pinyin: 'rè qíng', meaning: 'горячий, радушный' },
            { char: '认为', pinyin: 'rèn wéi', meaning: 'считать' },
            { char: '认真', pinyin: 'rèn zhēn', meaning: 'серьёзный' },
            { char: '容易', pinyin: 'róng yì', meaning: 'легко' },
            { char: '如果', pinyin: 'rú guǒ', meaning: 'если' },
            { char: '伞', pinyin: 'sǎn', meaning: 'зонт', examples: [{ word: '雨伞', pinyin: 'yǔ sǎn', meaning: 'зонт' }] },
            { char: '上网', pinyin: 'shàng wǎng', meaning: 'сидеть в интернете' },
            { char: '生气', pinyin: 'shēng qì', meaning: 'злиться' },
            { char: '声音', pinyin: 'shēng yīn', meaning: 'звук' },
            { char: '世界', pinyin: 'shì jiè', meaning: 'мир' },
            { char: '事情', pinyin: 'shì qing', meaning: 'дело' },
            { char: '收', pinyin: 'shōu', meaning: 'получать', examples: [{ word: '收到', pinyin: 'shōu dào', meaning: 'получить' }] },
            { char: '手表', pinyin: 'shǒu biǎo', meaning: 'наручные часы' },
            { char: '手机', pinyin: 'shǒu jī', meaning: 'телефон' },
            { char: '瘦', pinyin: 'shòu', meaning: 'худой' },
            { char: '舒服', pinyin: 'shū fu', meaning: 'удобный, комфортный' },
            { char: '叔叔', pinyin: 'shū shu', meaning: 'дядя' },
            { char: '树', pinyin: 'shù', meaning: 'дерево' },
            { char: '数学', pinyin: 'shù xué', meaning: 'математика' },
            { char: '刷', pinyin: 'shuā', meaning: 'чистить щёткой', examples: [{ word: '刷牙', pinyin: 'shuā yá', meaning: 'чистить зубы' }] },
            { char: '双', pinyin: 'shuāng', meaning: 'пара', examples: [{ word: '一双', pinyin: 'yì shuāng', meaning: 'одна пара' }] },
            { char: '水平', pinyin: 'shuǐ píng', meaning: 'уровень' },
            { char: '司机', pinyin: 'sī jī', meaning: 'водитель' },
            { char: '太阳', pinyin: 'tài yáng', meaning: 'солнце' },
            { char: '特别', pinyin: 'tè bié', meaning: 'особенный' },
            { char: '疼', pinyin: 'téng', meaning: 'болеть', examples: [{ word: '头疼', pinyin: 'tóu téng', meaning: 'голова болит' }] },
            { char: '提高', pinyin: 'tí gāo', meaning: 'повышать' },
            { char: '体育', pinyin: 'tǐ yù', meaning: 'физкультура' },
            { char: '甜', pinyin: 'tián', meaning: 'сладкий', examples: [{ word: '甜蜜', pinyin: 'tián mì', meaning: 'сладкий' }] },
            { char: '条', pinyin: 'tiáo', meaning: 'полоса (сч. слово)' },
            { char: '同事', pinyin: 'tóng shì', meaning: 'коллега' },
            { char: '同意', pinyin: 'tóng yì', meaning: 'соглашаться' },
            { char: '头发', pinyin: 'tóu fa', meaning: 'волосы' },
            { char: '突然', pinyin: 'tū rán', meaning: 'вдруг' },
            { char: '图书馆', pinyin: 'tú shū guǎn', meaning: 'библиотека' },
            { char: '腿', pinyin: 'tuǐ', meaning: 'нога' },
            { char: '完成', pinyin: 'wán chéng', meaning: 'завершить' },
            { char: '碗', pinyin: 'wǎn', meaning: 'чашка', examples: [{ word: '饭碗', pinyin: 'fàn wǎn', meaning: 'чашка для риса' }] },
            { char: '万', pinyin: 'wàn', meaning: 'десять тысяч' },
            { char: '忘记', pinyin: 'wàng jì', meaning: 'забывать' },
            { char: '为', pinyin: 'wèi', meaning: 'для' },
            { char: '为了', pinyin: 'wèi le', meaning: 'ради' },
            { char: '位', pinyin: 'wèi', meaning: 'место (вежл.)' },
            { char: '文化', pinyin: 'wén huà', meaning: 'культура' },
            { char: '问题', pinyin: 'wèn tí', meaning: 'вопрос' },
            { char: '西', pinyin: 'xī', meaning: 'запад' },
            { char: '习惯', pinyin: 'xí guàn', meaning: 'привычка' },
            { char: '洗手间', pinyin: 'xǐ shǒu jiān', meaning: 'туалет' },
            { char: '洗澡', pinyin: 'xǐ zǎo', meaning: 'принимать душ' },
            { char: '夏', pinyin: 'xià', meaning: 'лето', examples: [{ word: '夏天', pinyin: 'xià tiān', meaning: 'лето' }] },
            { char: '先', pinyin: 'xiān', meaning: 'сначала' },
            { char: '相信', pinyin: 'xiāng xìn', meaning: 'верить' },
            { char: '香蕉', pinyin: 'xiāng jiāo', meaning: 'банан' },
            { char: '像', pinyin: 'xiàng', meaning: 'похож на' },
            { char: '小心', pinyin: 'xiǎo xīn', meaning: 'осторожно' },
            { char: '校长', pinyin: 'xiào zhǎng', meaning: 'директор школы' },
            { char: '新闻', pinyin: 'xīn wén', meaning: 'новости' },
            { char: '新鲜', pinyin: 'xīn xiān', meaning: 'свежий' },
            { char: '信', pinyin: 'xìn', meaning: 'письмо/верить' },
            { char: '行李箱', pinyin: 'xíng li xiāng', meaning: 'чемодан' },
            { char: '兴趣', pinyin: 'xìng qù', meaning: 'интерес' },
            { char: '熊猫', pinyin: 'xióng māo', meaning: 'панда' },
            { char: '需要', pinyin: 'xū yào', meaning: 'нуждаться' },
            { char: '选择', pinyin: 'xuǎn zé', meaning: 'выбирать' },
            { char: '要求', pinyin: 'yāo qiú', meaning: 'требовать' },
            { char: '爷爷', pinyin: 'yé ye', meaning: 'дедушка' },
            { char: '一般', pinyin: 'yì bān', meaning: 'обычный' },
            { char: '一边', pinyin: 'yì biān', meaning: 'одновременно' },
            { char: '一定', pinyin: 'yí dìng', meaning: 'обязательно' },
            { char: '一共', pinyin: 'yí gòng', meaning: 'всего' },
            { char: '一会儿', pinyin: 'yí huìr', meaning: 'через минуту' },
            { char: '一样', pinyin: 'yí yàng', meaning: 'одинаковый' },
            { char: '以前', pinyin: 'yǐ qián', meaning: 'раньше' },
            { char: '以为', pinyin: 'yǐ wéi', meaning: 'думать (ошибочно)' },
            { char: '音乐', pinyin: 'yīn yuè', meaning: 'музыка' },
            { char: '银行', pinyin: 'yín háng', meaning: 'банк' },
            { char: '应该', pinyin: 'yīng gāi', meaning: 'должен' },
            { char: '影响', pinyin: 'yǐng xiǎng', meaning: 'влиять' },
            { char: '用', pinyin: 'yòng', meaning: 'использовать' },
            { char: '游戏', pinyin: 'yóu xì', meaning: 'игра' },
            { char: '有名', pinyin: 'yǒu míng', meaning: 'знаменитый' },
            { char: '又', pinyin: 'yòu', meaning: 'снова' },
            { char: '遇到', pinyin: 'yù dào', meaning: 'встретить' },
            { char: '元', pinyin: 'yuán', meaning: 'юань' },
            { char: '愿意', pinyin: 'yuàn yì', meaning: 'готов (сделать)' },
            { char: '月亮', pinyin: 'yuè liang', meaning: 'луна' },
            { char: '越', pinyin: 'yuè', meaning: 'чем больше', examples: [{ word: '越来越', pinyin: 'yuè lái yuè', meaning: 'всё больше' }] },
            { char: '云', pinyin: 'yún', meaning: 'облако', examples: [{ word: '白云', pinyin: 'bái yún', meaning: 'белое облако' }] },
            { char: '站', pinyin: 'zhàn', meaning: 'стоять/станция', examples: [{ word: '车站', pinyin: 'chē zhàn', meaning: 'станция' }] },
            { char: '张', pinyin: 'zhāng', meaning: 'сч. слово для плоских предметов' },
            { char: '长', pinyin: 'zhǎng', meaning: 'расти' },
            { char: '着急', pinyin: 'zháo jí', meaning: 'волноваться' },
            { char: '照顾', pinyin: 'zhào gù', meaning: 'заботиться' },
            { char: '照片', pinyin: 'zhào piàn', meaning: 'фотография' },
            { char: '照相机', pinyin: 'zhào xiàng jī', meaning: 'фотоаппарат' },
            { char: '只', pinyin: 'zhǐ', meaning: 'только' },
            { char: '只有', pinyin: 'zhǐ yǒu', meaning: 'только (есть)' },
            { char: '中间', pinyin: 'zhōng jiān', meaning: 'середина' },
            { char: '中文', pinyin: 'zhōng wén', meaning: 'китайский язык' },
            { char: '终于', pinyin: 'zhōng yú', meaning: 'наконец' },
            { char: '种', pinyin: 'zhǒng', meaning: 'вид' },
            { char: '重要', pinyin: 'zhòng yào', meaning: 'важный' },
            { char: '周末', pinyin: 'zhōu mò', meaning: 'выходные' },
            { char: '主要', pinyin: 'zhǔ yào', meaning: 'главный' },
            { char: '注意', pinyin: 'zhù yì', meaning: 'обращать внимание' },
            { char: '自己', pinyin: 'zì jǐ', meaning: 'сам' },
            { char: '自行车', pinyin: 'zì xíng chē', meaning: 'велосипед' },
            { char: '总是', pinyin: 'zǒng shì', meaning: 'всегда' },
            { char: '嘴', pinyin: 'zuǐ', meaning: 'рот' },
            { char: '最近', pinyin: 'zuì jìn', meaning: 'в последнее время' },
            { char: '作业', pinyin: 'zuò yè', meaning: 'домашнее задание' }
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

