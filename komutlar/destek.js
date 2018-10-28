const Discord = require('discord.js');
exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed()
        .setTitle("Lord ! \n")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor("RANDOM")
        .addField('**1.** !✯ђ§✯Łøяð#4969 ')
        .addField('**2.** 「ＧＹＴ」DJ dikkat#3846 ')
        .addField('**3.** TSKadirB3Y#8931  ')
        .addField('**Yukarıdaki Yetkililere Danışabilirsiniz.!!!!**')
        .setFooter("♥ 2018 ♥ Lord BOT ♥", " ")
        /*
         * Takes a Date object, defaults to current date.
         */

    message.channel.send({
        embed
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'destek',
    description: 'Botun pingini gösterir.',
    usage: 'destek'
};