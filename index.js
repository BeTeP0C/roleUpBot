const {Telegraf, Scenes: {BaseScene, Stage}, session, Markup} = require("telegraf");
const {textGreetings, actives, checkTown, textTown, textInstruction, textCashback, textFriend, textDeposit, textBonuses} = require("./const.js")
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async ctx => {
    return await ctx.replyWithHTML(textGreetings, actives.greetings);
})

bot.on("callback_query", async ctx => {
    const data = ctx.update.callback_query.data;
    if (checkTown(data)) {
        ctx.editMessageText(textTown, actives.town);
    } else if (data === "instruction") {
        ctx.editMessageText(textInstruction, actives.instruction);
    } else if (data === "cashback") {
        ctx.editMessageText(textCashback, actives.cashback);
    } else if (data === "money-friend") {
        ctx.editMessageText(textFriend, actives.money_friend);
    } else if (data === "deposit") {
        ctx.editMessageText(textDeposit, actives.deposit);
    } else if (data === "bonuses") {
        ctx.editMessageText(textBonuses, actives.bonuses);
    } else if (data === "back") {
        ctx.editMessageText(textGreetings, actives.greetings);
    }
});

bot.launch();