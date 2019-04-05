const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Riecha ❯ Eğlence Menüsü"
    },
    fields: [{
        name: "<zorunlu> [<opsiyonel>]",
        value: "**●** avatar [<kullanıcı>]: Belirtilen kullanıcının (yoksa sizin) avatarını gönderir.\n" +
        "**●** ikon: Sunucunun ikonunu gönderir.\n" +
        "**●** kod: Yazdığınız kodu Riecha'ya söyletin.\n" +
        "**●** söyle: Yazdığınız yazıyı Riecha'ya söyletin.\n" +
        "**●** kullanıcıara <terim>: Aradığınız terimi içinde bulunduran kullanıcı isimleri listelenir.\n" +
        "**●** zarat: Rastgele bir zar atarsınız.\n"
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
    name: "eğlence"
}
