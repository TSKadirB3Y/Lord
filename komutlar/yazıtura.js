const Discord = require('discord.js');

var hd = [
    "Tura",
    "Yaz�"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Para D�nd�: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yaz�-tura',
  description: 'Yaz� Tura Oynaman�za Yarar.',
  usage: 'yaz�tura'
};