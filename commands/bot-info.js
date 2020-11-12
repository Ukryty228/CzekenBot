//type `const Discord = require('discord.js)'`
const Discord = require("discord.js");

//then type `module.exports.run()` under here, lol. sorry delete () ok, its just like a client.on event, (space), then type `= async (client, message, args)` async "syncs in all the values from all the files", then space + `=> {`
module.exports.run = async (client, message, msg, args) => {
  // Most people send their commands/help thing in dms, so if you want to do that you type `let <whatever> = message.author`, then when you send it you type, `member.send(<whatever>)`
  let member = message.author;

  // When you get better at discord.js you use json, but for now were just using js
  //so you want to make a embed using the text `<let | const> <embed-name> = new Discord.RichEmbed()`
  // So if you'd like to set your embed to a color, most of the time I use a way that sets it random, which is `.setColor("RANDOM")`
  // Alos in the embeds you can set footers, Discord.js embeds can also set the timestamp the message was created at the footer, you cant link anything in the footer, theres also no markdown too.
  var serverIcon = message.guild.iconURL;
  var footerImage = message.author.displayAvatarURL;
  var name = message.author.username;
  var serwery = client.guilds.size;
  var dateX = client.user.createdAt;
  let something = new Discord.RichEmbed()

    .setColor("b1ff10")
    .setThumbnail(serverIcon)
    .setAuthor("🤖Bot Info🤖")
    .setTitle("")
    .setDescription("Informacje o bocie.")
    .addField("**Nazwa bota**", "MaterBot")
    .addField("**Twórca**", "ÚЌŘЎŤЎ#1111")
    .addField("**Wersja**", "v2.01")
    .addField("**Prefix**", "m!")
    .addField("**Data stworzenia bota**", "04.09.2020")
    .addField("**Ilość serwerów**", serwery)
    .addField("**Język bota**", "discord.js")
    .setFooter(name, footerImage)
    .setTimestamp();

  //my bad. you cant send it if there is no send event, which is `message.channel.send(something)` type under here, its a value so theres not qoutes
  message.channel.send(something);
};

//so we need to name the command. Type under here `module.exports.help = {}`, then type in the brackets `"name": "<command-name>"`
module.exports.help = {
  name: "bot-info"
};
