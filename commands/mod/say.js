const Discord = require('discord.js');

module.exports = {
	name: 'say',
	description: 'El bot mandara un msj con lo que escribas\nFormato: `gg!say {embed/normal} texto`',
	args: true,
    guildOnly: true,
    permissions: 'ADMINISTRATOR',
	execute(message, args) {
        if(args[0] == "embed") {
            let texto = args.slice(1).join(" ")
            
            if(!texto) return message.channel.send("No has escrito un mensaje");
            
            const embed = new Discord.MessageEmbed()
            .setDescription(texto) 
            .setColor("RANDOM")
            
            message.channel.send(embed)
            
            message.delete({timeout:0})
            } else if(args[0] == "normal") {
            let texto = args.slice(1).join(" ") 
            if(!texto) return message.channel.send("No has escrito un mensaje");
            
            message.delete({timeout:0})

            message.channel.send(texto)
            }
            if (args[0] == "anuncio") {
            let texto = args.slice(1).join(" ")
            const anunce = new Discord.MessageEmbed()
            .setDescription(texto)
            .setColor("RANDOM")
            
            message.delete({timeout:0})
            message.channel.send(anunce)
             message.reaction('❌');
             message.reaction('✅');
            };
    },
}