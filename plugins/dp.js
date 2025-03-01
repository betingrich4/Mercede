const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "deploy",
    alias: "get",
    desc: "menu the bot",
    category: "menu",
    react: "🫱",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*Hello 👋 If you want a bot below are the steps*
1. *Get your session in the link below*
> *https://sessz-deb529ac2d73.herokuapp.com/*
2. *Alternatively get session here*
> *https://bwm-xmd-scanner-s211.onrender.com/*
*After getting, forward the session to me along with:*
* *Your phone number with settings you need for your bot.*

> *PAYMENT METHODS*
*Payment can be made before or after deployment, depending on your preference.*
* *Recepient: Richard*
* *M-Pesa (Safaricom)*
* *Number: 0740007567 country code 254*
*If you are outside East Africa we acceptthe following*
* *Binance; 883082193*
* *PayPal*

> *PRICING*
* *kenya = 100ksh*
* *Tanzania = 3000Tsh*
* *Uganda = 400Ush*
*I will ensure everything is set.*
> *Thanks for the visit*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/K0Rh9Sh/mercedes.jpg` },
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
