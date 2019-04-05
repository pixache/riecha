const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let yazı = args.join(` `);
    let uzunlukuyarı = ("Yazılacak yazı 50 harften uzun olamaz!");
    let atılanKanalı = message.guild.channels.find(`name`, `kayıtlar`);
    if(!yazı) return message.channel.send("Lütfen söylenecek sözü girin.")
    if(yazı.length < 10) return message.channel.send("10 harften uzun bir cümle kurmalısınız.") 
    if(yazı.length > 50) return message.channel.send(uzunlukuyarı);

    let reportEmbed = new Discord.RichEmbed()
      .setTitle("Söyle Komutu")
      .setColor("#00ffed")
      .addField("Söyleten:", `${message.author} ID: ${message.author.id}`)
      .addField("Söyletilen Söz:", `${yazı}`)
      .addField("Söylenen Kanal:", `${message.channel}`)
      .addField("Tarih:", `${message.createdAt}`)

    message.channel.send(yazı);
    atılanKanalı.send(reportEmbed);
    message.delete();

}
module.exports.help = {
    name: "söyle"
}
