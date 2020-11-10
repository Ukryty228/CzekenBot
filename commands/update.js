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
  if (message.author.id != "709490499974725632")
    return message.reply(
      "I am sorry but you do not have access to this command!"
    );
  let something = new Discord.RichEmbed()

    .setColor("F8F8F9")
    .setThumbnail(serverIcon)
    .setAuthor("🆕Aktualizacja🆕")
    .setTitle("Wersja: 2.01")
    .setDescription("Poprawki komend.")
    .setFooter(name, footerImage)
    .setTimestamp();

  //my bad. you cant send it if there is no send event, which is `message.channel.send(something)` type under here, its a value so theres not qoutes
  message.channel.send(something);
};

//so we need to name the command. Type under here `module.exports.help = {}`, then type in the brackets `"name": "<command-name>"`
module.exports.help = {
  name: "pomoc"
};
