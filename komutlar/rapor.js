const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Kullanıcı bulunamıyor.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Rapor Belgesi")
    .setColor("#c63af4")
    .addField("Rapor Eden:", `${message.author} ID: ${message.author.id}`)
    .addField("Rapor Edilen:", `${rUser} ID: ${rUser.id}`)
    .addField("Rapor Edilen Kanal:", `${message.channel}`)
    .addField("Tarih:", `${message.createdAt}`)
    .addField("Sebep:", reason);

    let kısaBelge = new Discord.RichEmbed()
    .setDescription("Rapor Belgesi")
    .setColor("#9B59A3")
    .addField("Rapor Edildi", `${rUser} ID: ${rUser.id}`);

    let raporKanalı = message.guild.channels.find(`name`, "kayıtlar");
    if(!raporKanalı) return message.channel.send("Kayıtlar kanalı bulunamıyor, bir tane oluşturun.");

    message.channel.send(kısaBelge);
    message.delete().catch(O_o=>{});
    raporKanalı.send(reportEmbed);

    return;
}

module.exports.help = {
    name: "rapor"
}
