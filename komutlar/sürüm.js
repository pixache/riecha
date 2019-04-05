const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    let reportEmbed = new Discord.RichEmbed()
      .setColor("#adff1f")
      .addField("v0.13.2:", `Menüler ayarlandı.`)
      .addField("v0.13.1:", "Menüler ayarlandı.")

    message.channel.send(reportEmbed);

}
module.exports.help = {
    name: "yenilikler"
}
