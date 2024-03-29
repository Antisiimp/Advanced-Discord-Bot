const { Client, Message, MessageEmbed } = require("discord.js");
var ee = require("../../config/embed.json");
var config = require("../../config/config.json");

module.exports = {
  name: "antiraid",
  aliases: ["anti-raid", "ar"],
  category: "⚙️ Config",
  memberpermissions: ["ADMINISTRATOR"],
  cooldown: 5,
  description: "Enables anti-raid and won't allow new members to join.",
  usage: "antiraid",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args, prefix) => {
    options = ["enable", "disable"];

    if (!args.length)
      return message.reply("Please enter either **enable** or **disable**");
    const opt = args[0].toLowerCase();
    if (!opt)
      return message.reply("Please enter either **enable** or **disable**");

    if (!options.includes(opt))
      return message.reply("Please enter either **enable** or **disable**");

    if (opt === "enable") {
      client.db.set(`antiraid-${message.guild.id}`, true);
      message.reply(`Anti-raidmode now Enabled`);
    }

    if (opt === "disable") {
      client.db.set(`antiraid-${message.guild.id}`, false);
      message.reply("Anti-Raid now Disabled");
    }
  },
};
