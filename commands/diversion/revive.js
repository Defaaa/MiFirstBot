module.exports = {
	name: 'revive',
	description: 'Revive a alguien que mataron!',
	execute(message) {
        if (!message.mentions.users.size) {
			return message.reply(({embed: {
				color: 9723185,
				description: "Necesitas mencionar a alguien"
			  }
		  }));
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(({embed: {
			color: 9723185,
			description: `Has revivido a: ${taggedUser.username}`
		  }
	  }));
    }
};