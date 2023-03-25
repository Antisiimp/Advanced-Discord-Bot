const { Client, Message, MessageEmbed } = require("discord.js");
const config = require("../../config/config.json");

module.exports = {
  name: "membercount",
  category: "🔰 Info",
  aliases: ["members", "mc", "memberc"],
  cooldown: 5,
  description: "Show all Member",
  usage: "membercount",
  memberpermissions: [" "],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.channel.send(
      new MessageEmbed()
      .setColor("#2f3136")
      .setDescription(
        `** 🔰  Total Members** :- \`\`${
          message.guild.memberCount
        }\`\` \n ** ✨ Total Bots** :- \`\`${
          message.guild.members.cache.filter((member) => member.user.bot).size
        }\`\``
      )
    );
  },
};
