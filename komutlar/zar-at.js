const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sayı = Math.floor(Math.random() * 6 + 1)
    var i = (i = 0, i > -1, i++)
    let embed = new Discord.RichEmbed()
    .setDescription(sayı + ("") + " is what you just rolled!")
    .setColor("#c63af4");

    message.channel.send(embed);
    message.channel.send(i + 1)

    if(sayı === 6) return message.reply(" rolled a 6, that's amazing!");

};

module.exports.help = {
    name: "roll"
}
