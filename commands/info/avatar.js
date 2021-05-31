module.exports = {
	name: 'avatar',
	description: 'Este comando muestra tu avatar o el de los demas',
	aliases: ['icon', 'pfp'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Tu avatar: <${message.author.displayAvatarURL({ format: "png",  dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `Avatar de ${user.username}: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});

		message.channel.send(avatarList);
	},
};