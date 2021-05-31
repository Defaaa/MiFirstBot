module.exports = {
	name: 'kick',
	description: 'Menciona a alguien y lo kickeas del server',
	guildOnly: true,
    permissions: 'KICK_MEMBERS',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Necesitas mencionar a alguien!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Has kickeado a: ${taggedUser.username}`);
		const member = message.mentions.members.first();
member.kick();
	},
};