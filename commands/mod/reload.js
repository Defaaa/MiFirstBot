const fs = require('fs');

module.exports = {
	name: 'reload',
	description: 'Este commando es para el desarrollador',
	args: true,
	execute(message, args) {
	if (message.author.id === '524244695124017152'){	
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`Eso no es un comando \`${commandName}\`, ${message.author}!`);
		}

		const commandFolders = fs.readdirSync('./commands');
		const folderName = commandFolders.find(folder => fs.readdirSync(`./commands/${folder}`).includes(`${commandName}.js`));

		delete require.cache[require.resolve(`../${folderName}/${command.name}.js`)];

		try {
			const newCommand = require(`../${folderName}/${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`\`${command.name}\` ha sido reiniciado!`);
		} catch (error) {
			console.error(error);
			message.channel.send(`Ha ocurrido un error al reiniciar el comando \`${command.name}\`:\n\`${error.message}\``);
		}
	}
	},
};