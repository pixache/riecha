module.exports.run = async (bot, message, args) => {
    let users = bot.users;

    let searchTerm =args[0];
    if(!searchTerm) return message.channel.send("Please type a term.");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

    message.channel.send(matches.map(u => u.tag).join(", "));
    if(!matches.map(u => u.tag).join(", ")) return message.channel.send("There is no member matches with that term.");
}

module.exports.help = {
    name: "findmember"
}
