const { Client, Message, MessageEmbed } = require("discord.js");
const ee = require("../../config/embed.json");
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["inv"],
  description: "",
  usage: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.channel.send(
      new MessageEmbed()
        .setColor(ee.color)
        .setColor("#2f3136")

        .setTitle("Invite & Support Link!")
        .addField(
          "**Invite Link**",
          `[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=975055932478349312&permissions=8&scope=bot%20applications.commands)`
        )
        .addField(
          "**Support Server**",
          `[Click to join support Server](https://discord.gg/QAvH45kw37)`
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          client.user.displayAvatarURL()
        )
        .setTimestamp()
    );
  },
};
