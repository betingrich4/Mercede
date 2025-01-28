const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "gpt3",
    alias: ["chatgpt3","subzero3"], 
    react: "🚀",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt3?text=${q}`)
console.log(data);
return reply(`${data.message}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
