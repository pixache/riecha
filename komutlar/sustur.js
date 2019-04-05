const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bunu yapma yetkisine sahip değilsiniz!");

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("Bir üye etiketi veya kodu girmediniz.");

        if(toMute.id === message.author.id) return message.channel.send("Kendinizi susturamazsınız.")
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Susturmaya çalıştığınız kişinin rütbesi sizinle aynı veya daha yüksek.");

        let role = message.guild.roles.find(r => r.name === "Susturulanlar");
        if (!role) {
        try{
            let role = await message.guild.createRole({
                    name: "Susturulanlar",
                    color: "#000000",
                    permissions: []
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

        if(toMute.roles.has(role.id)) return message.channel.send("Bu kullanıcı zaten susturulmuş!");
        
        bot.mutes[toMute.id] = {
            guild: message.guild.id,
            time: Date.now() + parseInt(args[1]) * 1000
        }
        await toMute.addRole(role);

        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
            if(err) throw err;
            message.channel.send(target +  " susturuldu.")
        });
}

module.exports.help = {
    name: "sustur"
}