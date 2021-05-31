const {MessageEmbed} = require('discord.js');

module.exports = {
	name: 'directo',
	description: 'Te dice cuando hay directo',
	cooldown: 10,
	aliases: ['hay directo?','hoy hay directo?'],
	execute(message, args) {
		const embed = new MessageEmbed()
     .setTitle('Directos')
	 .setColor(`GOLD`)
     .addField('Lunes a Viernes', 'Desde las hasta las ');
	 message.channel.send(embed);
	},
};