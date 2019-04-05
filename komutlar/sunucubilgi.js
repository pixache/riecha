const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let servicon = message.guild.iconURL
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name)
        .setDescription("Sunucu bilgileri")
        .setColor("#c63af4")
        .addField("Sunucu ID", message.guild.id)
        .addField("Kurulduğu Tarih", message.guild.createdAt)
        .addField("Üye Sayısı", message.guild.memberCount)
        .setThumbnail(servicon);

    message.channel.send({embed: embed});

}

module.exports.help = {
    name: "sunucubilgi"
}