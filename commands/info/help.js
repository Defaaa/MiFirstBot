require("dotenv").config();

module.exports = {
	name: 'help',
	description: 'Lista de mis comandos.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aqui una lista de mis commandos:');
			data.push(commands.map(command => command.name).join('\n'));
			data.push(`\nEnvia \`${process.env.PREFIX}help [command name]\` para saber mas del comando!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Te envie un DM con mis comandos!');
				})
				.catch(error => {
					console.error(`No se pudo enviar un DM a ${message.author.tag}.\n`, error);
					message.reply('No pude enviarte un dm con mis comandos, revisa tu configuración!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('No es un comando valido!');
		}

		data.push(`**Nombre:** ${command.name}`);

		if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Descripción:** ${command.description}`);
		if (command.usage) data.push(`**Uso:** ${process.env.PREFIX}${command.name} ${command.usage}`);
        if (command.permissions) data.push(`**Permiso necesario:** ${command.permissions}`)

		data.push(`**Cooldown:** ${command.cooldown || 3} segundos`);

		message.channel.send(data, { split: true });
	},
};