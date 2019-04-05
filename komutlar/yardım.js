const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor("#c63af4")
        .addField("r+yardım", `Bu mesajı gösterir.`)
        .addField("r+eğlence", `Eğlence kategorisini gösterir.`)
        .addField("r+bilgiler" , `Riecha'nın engin bilgileri..`)
        .addField("r+yönetim", `Sunucu yönetim komutlarını gösterir.`)
        .addField("r+sürüm", "En son yenilikleri gösterir.");

    message.channel.send(embed);

}

module.exports.help = {
    name: "//"
}
