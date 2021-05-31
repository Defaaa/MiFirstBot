module.exports = {
	name: 'kill',
	description: 'Mata a alguien!',
	execute(message) {
        if (!message.mentions.users.size) {
			return message.reply(({embed: {
				color: 16711680,
				description: "Necesitas mencionar a alguien"
			  }
		  })
		)
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(({embed: {
			color: 16711680 ,
			description: `Has matado a ${taggedUser.username}`
		  }
	  }));
},
};
