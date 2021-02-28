/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'news ?(.*)', fromMe: false, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*🗞️ ' + Lang.NEWST +':* ```' + json.data[0].title + '```\n' + 
    '*📰 ' + Lang.NEWS +':* ```' + json.data[0].content + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[0].readMoreUrl + '```\n\n' +
    '*🗞️ ' + Lang.NEWST +':* ```' + json.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + json.data[1].content + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[1].readMoreUrl + '```\n\n' + 
    '*🗞️ ' + Lang.NEWST +':* ```' + json.data[2].title + '```\n' +
    '*📰 ' + Lang.NEWS +':* ```' + json.data[2].content + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[2].readMoreUrl + '```\n\n' + 
    '*🗞️ ' + Lang.NEWST +':* ```' + json.data[3].title + '```\n' +
   	'*📰 ' + Lang.NEWS +':* ```' + json.data[3].content + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[3].readMoreUrl + '```\n\n' + 
    '*🗞️ ' + Lang.NEWST +':* ```' + json.data[4].title + '```\n' +                                                                         
    '*📰 ' + Lang.NEWS +':* ```' + json.data[4].content + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[4].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	}
});
