module.exports.run = async (bot, message, args) => {
  const user = message.mentions.users.first();
  const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

  if (!amount) return message.channel.send('Lütfen silinecek mesaj sayısını girin!');
  if (!amount && !user) return message.channel.send('Silmek için bir kullanıcı ve silinecek mesaj veya sadece silinecek mesaj olmalıdır!');
  if (amount > 100) return message.channel.send("Silinecek mesaj sayısı 100'ü aşamaz!")
  message.channel.fetchMessages({
   limit: amount,
  }).then((messages) => {
   if (user) {
   const filterBy = user ? user.id : Client.user.id;
   messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
   }

   message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
   message.channel.send("`" + amount + " mesaj başarıyla silindi." + "`")
   message.delete();
  });
}

module.exports.help = {
    name: "sil"
}
