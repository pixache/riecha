module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Wait a moment...");
    if(!message.guild.iconURL) return msg.edit("This server doesn't have any icon.")

    await message.channel.send({files: [
        {
            attachment: message.guild.iconURL,
            name: "secretname.png"
        }
    ]});
    msg.delete();
}

module.exports.help = {
    name: "icon"
}
