module.exports = {
	name: 'clear',
	description: 'Borra mensajes',
	args: true,
	permissions: 'ADMINISTRATOR',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Ese no es un numero valido');
		} else if (amount <= 1 || amount > 1000) {
			return message.reply('Pon un numero entre 1 y 999.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Ha habido un error en eliminar el/los mensajes!');
		});
	},
};
