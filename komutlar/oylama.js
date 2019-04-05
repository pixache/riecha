const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {

    let oy1 = args[0];
    let oy2 = args[1];
    if(!oy1) return message.channel.send("Lütfen oylaması yapılacak iki veri girin.")
    if(!oy2) return message.channel.send("Lütfen ikinci bir veri girin.")
    if(oy1.length < 3) return message.channel.send("İlk veri çok kısa, lütfen 3 harften uzun bir veri girin.")
    if(oy2.length < 3) return message.channel.send("İkinci veri çok kısa, lütfen 3 harften uzun bir veri girin.")
    if(oy1 === oy2) return message.channel.send("Karşılaştırılacak veriler aynı olamaz.")

    let embed = new Discord.RichEmbed()
        .setTitle(oy1 + " Mi?" + " <-]|=|[-> " + oy2 + " Mi?")
        .setColor("#c63af4")
        .addField(":large_blue_diamond: " + oy1, "Bu seçeneğe oy vermek için :large_blue_diamond: emojisine tıklayın.")
        .addField(":large_orange_diamond: " + oy2, "Bu seçeneğe oy vermek için :large_orange_diamond: emojisine tıklayın.")

    message.channel.send(embed);

}

module.exports.help = {
    name: "oylama"
}
