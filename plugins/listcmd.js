const config = require('../config')
const { cmd, commands } = require('../command');

cmd({
    pattern: "list",
    alias: ["listcmd","menu3","command"],
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━❮ *DOWNLOAD CMD* ❯━┈⊷
┃▸📖 *COMMAND:* .play
┃▸ℹ️ *Download Audio from yt*
┃▸📖 *COMMAND:* .song
┃▸ℹ️ *Download song from yt*
┃▸📖 *COMMAND:* .apk
┃▸ℹ️ *Download apk from playstore*
┃▸📖 *COMMAND:* .video
┃▸ℹ️ *Download video from yt*
┃▸📖 *COMMAND:* .fb
┃▸ℹ️ *Download video from fb*
┃▸📖 *COMMAND:* .tk
┃▸ℹ️ *Download video from tiktok*
┃▸📖 *COMMAND:* .ig
┃▸ℹ️ *Download video from ig*
┃▸📖 *COMMAND:* .gdrive
┃▸ℹ️ *Download drive files*
┃▸📖 *COMMAND:* .twitter
┃▸ℹ️ *Download video from Twitter*
┃▸📖 *COMMAND:* .img
┃▸ℹ️ *Download image*
┃▸📖 *COMMAND:* .darama
┃▸ℹ️ *Download full episode video*
┃▸📖 *COMMAND:* .play2
┃▸ℹ️ *Download Audio from yt*
┃▸📖 *COMMAND:* .video2
┃▸ℹ️ *Download video from yt*
┃▸📖 *COMMAND:* .baiscope
┃▸ℹ️ *Download video from baiscope*
┃▸📖 *COMMAND:* .mfire
┃▸ℹ️ *Download mediafire files*
╰━━━━━━━━━━━━⪼

╭━❮ *ANIME CMD* ❯━┈⊷
┃▸📖 *COMMAND:* .yts
┃▸ℹ️ *Search videos from yt*
┃▸📖 *COMMAND:* .king
┃▸ℹ️ *Get king about*
┃▸📖 *COMMAND:* .dog
┃▸ℹ️ *Get random dog images*
┃▸📖 *COMMAND:* .anime 
┃▸ℹ️ *Get anime pics*
┃▸📖 *COMMAND:* .animegirl 
┃▸ℹ️ *Get animegirl pics*
┃▸📖 *COMMAND:* .loli
┃▸ℹ️ *Get romantic anime pics*
╰━━━━━━━━━━━━⪼  

╭━❮ *INFO CMD* ❯━┈⊷
┃▸📖 *COMMAND:* .alive
┃▸ℹ️ *Check online or not*
┃▸📖 *COMMAND:* .ping
┃▸ℹ️ *Check bot speed*
┃▸📖 *COMMAND:* .menu
┃▸ℹ️ *Nero main menu*
┃▸📖 *COMMAND:* .menu2
┃▸ℹ️ *Nero main menu2*
┃▸📖 *COMMAND:* .ai
┃▸ℹ️ *Chat with AI bot*
┃▸📖 *COMMAND:* .system
┃▸ℹ️ *Check bot systems*
┃▸📖 *COMMAND:* .owner
┃▸ℹ️ *Get owner info*
┃▸📖 *COMMAND:* .status
┃▸ℹ️ *Check bot runtime*
┃▸📖 *COMMAND:* .about 
┃▸ℹ️ *Get about bot*
┃▸📖 *COMMAND:* .list 
┃▸ℹ️ *Get bot command list*
┃▸📖 *COMMAND:* .script 
┃▸ℹ️ *Get bot repository*
╰━━━━━━━━━━━━⪼

╭━❮ *OTHER CMD* ❯━┈⊷
┃▸📖 *COMMAND:* .joke 
┃▸ℹ️ *Get random joke*
┃▸📖 *COMMAND:* .fact
┃▸ℹ️ *Get random fact*
┃▸📖 *COMMAND:* .githubstalk 
┃▸ℹ️ *Get GitHub data of any user*
┃▸📖 *COMMAND:* .gpass
┃▸ℹ️ *Get a strong password*
┃▸📖 *COMMAND:* .hack
┃▸ℹ️ *Prank with friends*
┃▸📖 *COMMAND:* .srepo 
┃▸ℹ️ *Search repository*
┃▸📖 *COMMAND:* .define 
┃▸ℹ️ *Search any words*
╰━━━━━━━━━━━━⪼

╭━❮ *GROUP CMD* ❯━┈⊷
┃▸📖 *COMMAND:* .mute
┃▸ℹ️ *Mute group*
┃▸📖 *COMMAND:* .unmute
┃▸ℹ️ *Unmute group*
┃▸📖 *COMMAND:* .left
┃▸ℹ️ *Leave group*
┃▸📖 *COMMAND:* .jid
┃▸ℹ️ *Group JID*
┃▸📖 *COMMAND:* .remove
┃▸ℹ️ *Remove member from group*
┃▸📖 *COMMAND:* .delete 
┃▸ℹ️ *Remove SMS from group*
┃▸📖 *COMMAND:* .add
┃▸ℹ️ *Add members to group*
┃▸📖 *COMMAND:* .kick
┃▸ℹ️ *Kick any user*
┃▸📖 *COMMAND:* .kickall
┃▸ℹ️ *Remove all members from group*
┃▸📖 *COMMAND:* .setgoodbye
┃▸ℹ️ *Set member leave SMS*
┃▸📖 *COMMAND:* .setwelcome 
┃▸ℹ️ *Set member welcome SMS*
┃▸📖 *COMMAND:* promote 
┃▸ℹ️ *Make group admin*
┃▸📖 *COMMAND:* .demote 
┃▸ℹ️ *Dismiss any admin*
┃▸📖 *COMMAND:* .tagall
┃▸ℹ️ *Mention all group members*
┃▸📖 *COMMAND:* .getpic
┃▸ℹ️ *Get group profile picture*
┃▸📖 *COMMAND:* .invite 
┃▸ℹ️ *Get group invite link*
┃▸📖 *COMMAND:* .revoke 
┃▸ℹ️ *Reset group link*
┃▸📖 *COMMAND:* .joinrequests
┃▸ℹ️ *Check group pending members*
┃▸📖 *COMMAND:* .allreq
┃▸ℹ️ *Add group pending members*
┃▸📖 *COMMAND:* .lockgc
┃▸ℹ️ *Lock group to private*
┃▸📖 *COMMAND:* .unlockgc
┃▸ℹ️ *Unlock group to public*
╰━━━━━━━━━━━━⪼
>  *Made For You By Marisel*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/SXDd8Lp/mrfrankofc.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363299029326322@newsletter',
                        newsletterName: '𝐌𝖊𝖗𝖈𝖊𝖉𝖊𝖘',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
