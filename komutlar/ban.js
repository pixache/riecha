const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first();
  let sebep = args.join(" ").slice(22);
//Bir kullanıcı adı girilmemiş ise
  let uyeGirilmedi = new Discord.RichEmbed()
      .setDescription(":mag:  **❯**   Please enter a valid username.")
      .setColor("#ff006a")
  if(!member) return message.channel.send(uyeGirilmedi);
  message.delete()
//Kullanıcı kendini atmaya çalıştığında
  let kendiniAt = new Discord.RichEmbed()
      .setDescription(":thinking:  **❯**  Not yet, bro. Not yet..")
      .setColor("#ff006a")
  if(member == message.author) return message.channel.send(kendiniAt)
  message.delete()
//Atmaya çalışan kişi admin değilse
  let yetkiYok = new Discord.RichEmbed()
      .setDescription(":notepad_spiral:  **❯**  You are missing **Administrator** permission.")
      .setColor("#ff006a")
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bunu yapmaya yetkiniz yok!');
  message.delete()
//Kayıtlar kanalı yoksa bu mesaj belirir.
  let atılanKanalı = message.guild.channels.find(`name`, `bot-logs`);
  let kanalYok = new Discord.RichEmbed()
      .setDescription(":crossed_swords:  **❯**  You have to create a channel called **bot-logs** first.")
      .setColor("#ff006a")
  if(!atılanKanalı) return message.channel.send(kanalYok);
  message.delete()
//Atılmaya çalışılan kişi admin ise
  let atilamaz = new Discord.RichEmbed()
      .setDescription(":no_entry:  **❯**  You cannot ban this member.")
      .setColor("#ff006a")
  if(member.permissions.has('ADMINISTRATOR')) return message.channel.send(atilamaz);
  message.delete()
//Sebep belirtilmemiş ise
  let sebepYok = new Discord.RichEmbed()
      .setDescription(":mag:  **❯**  Please type a reason to ban.")
      .setColor("#ff006a")
  if(!sebep) return message.channel.send(sebepYok)
  message.delete()
//Kullanıcı sunucuda değil ise
  let uyeYok = new Discord.RichEmbed()
      .setDescription(":face_palm:  **❯**  I cannot find any user with that name!")
      .setColor("#ff006a")
  if(!member) return message.channel.send(uyeYok)
  message.delete()
//Kullanıcı sunucudan atıldıktan sonra bu rapor gönderilir.
  let embed = new Discord.RichEmbed()
      .setAuthor("Ban Log")
      .setColor("#ff8c00")
      .addField("Banned by", `${message.author}`)
      .addField("Banned", `${member}`)
      .addField("Reason", sebep)
      .addField("Banned for", member + " has been banned for 7 days.")
      .addField("Time", message.createdAt)
      .addField("Banned on", message.channel);

  message.channel.send(`${member} has been kicked, you can check the log.`);
  atılanKanalı.send({embed: embed});
  member.ban({ days: 7, reason: sebep })
    .then(console.log)
    .catch(console.error);

}

module.exports.help = {
    name: "ban"
}
