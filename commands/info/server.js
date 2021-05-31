const {MessageEmbed} = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Muestra info del server',
	execute(message, args) {
            const embed = new MessageEmbed()
      .setTitle(`${message.guild.name}`)
	  .setThumbnail('https://cdn.discordapp.com/attachments/741339063407214593/830512858995359744/PicsArt_04-07-06.13.29.png')
      .setColor(`RANDOM`)
      .setDescription('Server Oficial de los Giles')
	  .addField('Total de miembros:', `${message.guild.memberCount}`, true)
	  .addField('Region:', `${message.guild.region}`, true)
	  .setFooter(`Invita a tus amigos: https://discord.gg/e7wNNtEJt4`);
message.channel.send(embed);
}
};