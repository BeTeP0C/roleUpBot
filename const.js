const {Markup} = require("telegraf");

const textGreetings = `
✅Мы работаем!

Теперь ты VTEME😉
Снимай клады легко и без забот!
@VtemeOper - твой оператор

<a href="https://vteme.cc/">VTEME.CC</a> - наш сайт
Если этого бота или оператора заблокируют, ты всегда можешь получить новый контакт на сайте👆
Это удобно, безопасно и надежно)
100% гарантия от фейков и кидал!
🆘<a href="https://vteme.cc/">РЕЗЕРВНЫЙ БОТ</a>🆘

Твой id код: 
 <code class="text-entity-code">1613156414</code>

Получай 2.5% за каждую покупку!
💸КЕШБЕК: 0.00 грн.
➖➖➖➖➖➖➖
💵ДЕПОЗИТ: 0.00 грн.
`;

const actives = {
    greetings: Markup.inlineKeyboard([
        [Markup.button.callback("Киев", "Kiev"), Markup.button.callback("Днепр", "Dnieper")],
        [Markup.button.callback("Николаев", "Nikolaev"), Markup.button.callback("Львов", "Lviv")],
        [Markup.button.callback("Одесса", "Odessa"), Markup.button.callback("Харьков", "Kharkov")],
        [Markup.button.callback("Херсон", "Kherson")],
        [Markup.button.callback("✅Инструкция | Правила", "instruction")],
        [Markup.button.callback("👍Зачислить кешбек", "cashback")],
        [Markup.button.callback("💞Деньги другу...👍", "money-friend")],
        [Markup.button.callback("💵ПОПОЛНИТЬ ДЕПОЗИТ💵", "deposit")],
        [Markup.button.callback("🎁Бонусы/Скидки", "bonuses")],
    ]),
    town: Markup.inlineKeyboard([
        [Markup.button.callback("Амф-сульфат 1г 520.00 грн", "AMF")],
        [Markup.button.callback("Меф Мяу-мяу 1г 600.00 грн", "MEF")],
        [Markup.button.callback("⬅️Вернуться в меню", "back"), Markup.button.callback("✅ Инструкция | Правила", "instruction")],
        [Markup.button.callback("💵ПОПОЛНИТЬ ДЕПОЗИТ💵", "deposit")]
    ]),
    instruction: Markup.inlineKeyboard([
        [Markup.button.callback("⬅️Вернуться в меню", "back")],
        [Markup.button.callback("💵ПОПОЛНИТЬ ДЕПОЗИТ💵", "deposit")]
    ]),
    cashback: Markup.inlineKeyboard([
        [Markup.button.callback("⬅️Вернуться в меню", "back")]
    ]),
    money_friend: Markup.inlineKeyboard([
        [Markup.button.callback("⬅️Вернуться в меню", "back")]
    ]),
    deposit: Markup.inlineKeyboard([
        [Markup.button.callback("EasyPay - ТОЛЬКО НАЛ", "EasyPay")],
        [Markup.button.callback("GlobalMoney", "GlobalMoney")],
        [Markup.button.callback("Litecoin (LTC) комса ~0%", "Litecoin")],
        [Markup.button.callback("Bitobmen.pro -10% комса", "Bitobmen")],
        [Markup.button.callback("⬅️Вернуться в меню", "back")],
    ]),
    bonuses: Markup.inlineKeyboard([
        [Markup.button.callback("⬅️Вернуться в меню", "back")]
    ]),
}

const checkTown = (text) => {
    if (text === "Kiev" ||
    text === "Dnieper" ||
    text === "Nikolaev" ||
    text === "Lviv" ||
    text === "Odessa" ||
    text === "Kharkov" ||
    text === "Kherson") {
        return true;
    }
}

const textTown = `
Получай 2.5% за каждую покупку!
💸КЕШБЕК: 0.00 грн.
➖➖➖➖➖➖➖
💵ДЕПОЗИТ: 0.00 грн.

➖➖➖➖➖➖➖
ТОВАР:
➖➖➖➖➖➖➖
`;

const textInstruction = `
✔️Чтобы купить клад:
1️⃣Жми кнопу  💵ПОПОЛНИТЬ ДЕПОЗИТ💵
- ты можешь пополнить депозит на любую сумму.
- все платежи плюсуются в общий баланс. 
- депозит бессрочный, деньги на нем не пропадут!
- за каждую покупку ты получишь 2.5% кешбека!
2️⃣Выбери Город - Товар - Район
3️⃣Бот выдаст тебе адрес
- фото с точной меткой
- подробное описание
- координаты или карту

<a href="https://telegra.ph/Pravila-pokupki-VTEMECC-05-01">Правила покупки</a>
`;

const textCashback = `
За оплаченные покупки мы возвращаем Вам 2.5% на бонусный счет. Возврат производится автоматически спустя 3 дня после покупки при условии если покупка была успешной и клад был найден.
Как только средства появятся на бонусном счете, здесь ниже доступной окажется кнопка для зачисления, при нажатии на которую все средства переносятся с бонусного счета на основной депозит.

💸КЕШБЕК: 0.00 грн.
➖➖➖➖➖➖➖ 
💵ДЕПОЗИТ: 0.00 грн.
`;

const textFriend = `
Отправить любую сумму с депозита своему другу:
<a>/give</a> id_код_друга сумма

Например: <a>/give</a> <a href="https://vteme.cc/">543345543</a> 100
`;

const textDeposit = `
Выбирите вариант оплаты:
`;

const textBonuses = `
ВСЕ, КТО В ТЕМЕ ✌️ ПЛАТИМ 150 гривен, за ТРИП-РЕПОРТ😱 НАПИСАННЫЙ на ЛЮБОЙ из НАШИХ ТОВАРОВ!!!
✅Принять участие можно на любом из форумов:

<a href="https://u.legalizer.cc/threads/Платим-150грн-за-Трип-репорт-на-нашу-продукцию.375779/page-5">LEGALIZER +150грн</a>

<a href="https://rcclub.cc/threads/platim-150grn-za-trip-report-na-nashu-produkciju.63498/#post-732352">RCclub +150грн</a>

<a href="https://bmwrc.biz/t20164/#post-494660">BMWrc +150грн</a>
`

module.exports = {textGreetings, actives, checkTown, textTown, textInstruction, textCashback, textFriend, textDeposit, textBonuses};

