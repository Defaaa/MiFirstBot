module.exports = {
	name: 'ping',
	description: 'Pong?',
	cooldown: 10,
	execute(message, args){
	message.channel.send(`Pinging...`
	.then(sent => {edit(`Ping: ${sent.createdTimestamp-message.createdTimestamp}ms`)})  
	);
},
};