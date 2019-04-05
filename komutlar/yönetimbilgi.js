const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
  message.channel.send({embed: {
  color: 3447003,
  fields: [{
      name: "Riecha ❯ Yönetim Menüsü",
      value: "**●** at <kullanıcı> <sebep>: Kullanıcıyı belirtilen sebepten sunucudan atar.\n" +
      "**●** ban <kullanıcı> <sebep>: Kullanıcıyı belirtilen sebepten sunucuda yasaklar.\n" +
      "**●** oylama <veri 1> <veri 2>: İki veri arasında oylama yaparsınız, hala geliştiriliyor.\n" +
      "**●** sustur <kullanıcı> <süre>: Kullanıcıyı belirtilen süre boyunca susturur.\n" +
      "**●** susturaç <kullanıcı>: Kullanıcının susturmasını açar.\n" +
      "**●** sil <sayı>: Belirtilen sayı oranında mesaj siler, 100'den fazla olamaz.\n" +  
      "**●** yenilikler: Bot sürümünü gösterir.\n"
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: bot.user.avatarURL,
    text: "Riecha v0.13.2"
  }
}
  });

}

module.exports.help = {
    name: "yönetim"
}
