module.exports = {
	name: 'userinfo',
	description: 'Obten info del usuario mencionado',
	execute(message, args) {
			if (!message.mentions.users.size) {
			return message.channel.send(`Tu informacion:**\nTu Username:${message.author.username}\nTu ID:${message.author.id}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `**La info de ${user.username}:**\nUsername:${user.username}\nID:${user.id}`;
		});

		message.channel.send(avatarList);	},
};