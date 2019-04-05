const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let yazı = args.join(` `);
    let atılanKanalı = message.guild.channels.find(`name`, `bot-logs`);
//Kod yazılmazsa bu mesaj gider.
    let kodYok = new Discord.RichEmbed()
      .setDescription(":no_entry:  | Please enter the text that will be wrote.")
      .setColor("#ff006a")
    if(yazı.length < 1) return message.channel.send(kodYok)
//Kod çok uzun olursa bu mesaj gider.
    let uzunlukuyarı = new Discord.RichEmbed()
      .setDescription(":no_entry:  | This code is so long! Please keep it under 25 letters.")
      .setColor("#ff006a")
    if(yazı.length > 25) return message.channel.send(uzunlukuyarı);

    let reportEmbed = new Discord.RichEmbed()
      .setTitle("Code Text")
      .setColor("#00ffed")
      .addField("Writer:", `${message.author} ID: ${message.author.id}`)
      .addField("Wrote:", "`" + yazı + "`")
      .addField("Wrote In:", `${message.channel}`)
      .addField("Wrote At:", `${message.createdAt}`)

    message.channel.send("`" + yazı + "`");
        message.delete();
    atılanKanalı.send(reportEmbed);

}
module.exports.help = {
    name: "code"
}
