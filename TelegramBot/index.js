/**
 * Creating bot to find any IT reledted course
 * --> link :: ---> t.me/find_any_course_bot
 * tokrn --> 6831954604:AAFMc7q-9mYisatkBhZ4vvFTtVGb2cqQf8M
 */

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters')

const bot = new Telegraf('6831954604:AAFMc7q-9mYisatkBhZ4vvFTtVGb2cqQf8M')

bot.start((ctx) => ctx.reply('Welcome to era of get anything you wish\n the bot is under construction stage you may not get some replay for few course \n Step to follow to get full fledged use of this bot \n Step1 - Search  with course name only or name of instructor ex -- tle eliminators \n you will get telegram channel for that course'))

bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('tle eliminators', (ctx) => ctx.reply('t.me/tle_eliminators_all_course'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))


bot.launch();