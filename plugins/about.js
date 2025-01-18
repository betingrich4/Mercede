const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "🫕",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `
*𝑯𝒆𝒍𝒍𝒐, ${pushname}!*
*𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒎𝒚 𝒘𝒐𝒓𝒍𝒅 𝒐𝒇 𝒄𝒓𝒆𝒂𝒕𝒊𝒗𝒊𝒕𝒚 𝒂𝒏𝒅 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒐𝒏!*

> *𝑨𝒃𝒐𝒖𝒕 𝑴𝒆*
✦ *Name: Marisel*
✦ *Age: 19*
✦ *Hometown: Kenya*
✦ *Passion: Crafting innovative coded projects*

> *𝑴𝒚 𝑽𝒊𝒔𝒊𝒐𝒏*
*I’m driven by the idea of turning simple ideas into impactful tools. Every line of code I write is aimed at making life easier, smarter, and more fun for everyone.*

> *𝑳𝒆𝒕’𝒔 𝑪𝒐𝒏𝒏𝒆𝒄𝒕*
*Explore my creations, stay inspired, and join me on this exciting journey:*
*https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x*

*Thank you for being here. Together, we can make the ordinary extraordinary!*
> *Thats Everything About Marisel*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
