const config = require('../config');
const { cmd, commands } = require('../command');
const { formatBytes, getLocalBuffer, runtime } = require('../lib/functions');
const { platform, totalmem, freemem } = require('os');
const { join } = require('path');

cmd({
    pattern: "menu",
    desc: "Show all commands",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, pushname, reply }) => {
    try {
        let botName = config.BOT_INFO ? config.BOT_INFO.split(';')[1] || 'marisel' : 'marisel';

        let menuText = `┌── *MERCEDES* ───┐
│ User: ${pushname}
│ Mode: ${config.MODE}
└──────────────────┘\n`;

        const categorized = {};

        commands.forEach(cmd => {
            if (!cmd.pattern || cmd.dontAddCommandList) return;
            const commandName = cmd.pattern.toString().replace(/[^a-zA-Z0-9]/g, "");
            const category = cmd.category?.toLowerCase() || 'misc';

            if (!categorized[category]) categorized[category] = [];
            categorized[category].push(commandName);
        });

        Object.keys(categorized).forEach(category => {
            menuText += `\n┌──〔 ${category.toUpperCase()} 〕──┐\n`;
            categorized[category].forEach(cmd => {
                menuText += `│ ◦ ${cmd}\n`;
            });
            menuText += `└──────────────┘\n`;
        });

        const image = await getLocalBuffer(join(process.cwd(), '.owner.jpg'));
        return await conn.sendMessage(from, { image, caption: menuText }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply(' An error occurred while generating the menu.');
    }
});
// coded by marisel tech
