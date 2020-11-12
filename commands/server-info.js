const Discord = require("discord.js");
const moment = require("moment");
exports.run = (client, message, args) => {
  const role = message.guild.roles.size;
  const online = message.guild.members.filter(
    m => m.presence.status != "offline"
  ).size;
  const regions = {
    brazil: "Brazylia",
    europe: "Europa",
    hongkong: "Hong Kong",
    india: "Indie",
    japan: "Japonia",
    russia: "Rosja",
    singapore: "Singapur",
    southafrica: "Republika Południowej Afryki",
    sydney: "Sydney",
    "us-central": "US Central",
    "us-east": "US East",
    "us-west": "US West",
    "us-south": "US South"
  };
  const verificationLevels = {
    NONE: "Brak",
    LOW: "Niski",
    MEDIUM: "Średni",
    HIGH: "Wysoki (członkostwo 10 min)",
    VERY_HIGH: "Bardzo Wysoki (weryfikacja nr tel)"
  };
  const filterLevels = {
    DISABLED: "Off",
    MEMBERS_WITHOUT_ROLES: "No Role",
    ALL_MEMBERS: "Everyone"
  };
  const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor(0x00a2e8)
    .setDescription(
      `Owner: ${message.guild.owner.user.tag} (${message.guild.owner.id})`
    )
    .addField("Member Count", `${message.guild.memberCount}`, true)
    .addField("Online", `${online}`, true)
    .addField("Server Region", regions[message.guild.region])
    .addField("Created At", message.guild.createdAt.toLocaleString(), true)

    .addField("Created At", message.guild.createdAt.toLocaleString(), true)
    .addField("Verification Level", verificationLevels[message.guild.verificationLevel],
      true
    )
    .addField(
      "Voice Channels",
      `${message.guild.channels.filter(chan => chan.type === "voice").size}`
    )
    .addField(
      "Text Channels",
      `${message.guild.channels.filter(chan => chan.type === "text").size}`,
      true
    )
    .addField("Roles", role, true);
  message.channel.send({ embed });
};
