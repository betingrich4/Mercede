const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤓",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────►*
> *BOT OWNER:*
*|* *Marisel*
> *Bot Repo:*
*|* *https://github.com/betingrich3/Mercedes*
> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x*
*╰──────────────►*
> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363299029326322@newsletter',
      newsletterName: "𝐌𝖊𝖗𝖈𝖊𝖉𝖊𝖘",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝐌𝖊𝖗𝖈𝖊𝖉𝖊𝖘',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/betingrich3/Mercedes" ,
thumbnailUrl: "https://i.ibb.co/SXDd8Lp/mrfrankofc.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
