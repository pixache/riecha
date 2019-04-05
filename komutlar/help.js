const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  message.channel.send({embed: {
  color: 3447003,
  author: {
    name: "Riecha ❯ Help"
  },
  fields: [{
      name: "r+help <category>",
      value: "\n**● moderation:** Lists moderation commands.\n\n**● fun:** Lists fun commands."
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: bot.user.avatarURL,
    text: "Riecha v0.13.2"
  }
}
});

  message.channel.send({embed: {
  color: 3447003,
  fields: [{
      name: "Support",
      value: "❯ [Click](https://google.com) to upvote Riecha.\n❯ [Click](https://discord.gg/pfWm9rm) to join Riecha's Server."
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
    name: "help"
}
