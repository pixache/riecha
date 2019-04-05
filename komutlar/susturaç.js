const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bunu yapma yetkisine sahip değilsiniz!");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Bir üye etiketi veya kodu girmediniz.");

    let role = message.guild.roles.find(r => r.name === "Susturulanlar");

    if(!role || !toMute.roles.has(role.id)) return message.channel.send("Bu kullanıcının susturulma cezası yok!");
    
    await toMute.removeRole(role);

    delete bot.mutes[toMute.id];

    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
        if(err) throw err;
        message.channel.send(`${toMute.user.username} artık konuşabilir.`)
    });
}

module.exports.help = {
    name: "susturaç"
}