const Discord = require('discord.js'); 
const client = new Discord.Client(); 

//vars
const owners = ["670249406527963147"]
const prefix = '^'

client.once('ready', () => {
console.log('Ready!');
});

client.on('message', message => {
/*if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();*/
	if (message.content === '^ping') {	
message.channel.send(client.ws.ping)
	} else if
(message.content.startsWith('^eval') && owners.includes(message.author.id)) {
try {
eval(message.content.replace('^eval', ''))
} catch (error) {
message.channel.send(error.message)
} 
} else if (message.content.startsWith('^npm')) {
if (message.content.replace('^npm', '') === '') {
message.channel.send('Please type a npm package name')
} else {
(async() => {
const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
let idk = await fetch(`https://api.leref.ga/npm?search=${message.content.replace('^npm', '')}`).then(x => x.json())
let embed = new MessageEmbed ()
.setTitle(`${idk.name}`)
.setDescription(`
\`\`\`
npm install ${idk.name}
\`\`\`
`)
.addFields(
{name: '**Name**', value: `${idk.name}`},
{name: '**Description:**', value: `${idk.description}`},
{name: '**Version:**', value: `${idk.version}`},
{name: '**Publisher:**', value: `${idk.publisher}`},
{name: '**Link:**', value: `${idk.npm}`}
)
.setColor('#c52222')
.setThumbnail('https://cdn.discordapp.com/attachments/833643049556901928/843063826899140628/IMG-20210515-WA0045.jpg')
message.channel.send({content: `||npm install ${idk.name}||`, embed: embed})
})()  
}
} else if (message.content.startsWith('^change')) {
let {MessageEmbed} = require('discord.js');
let nah = message.mentions.users.first()
let text = message.content
let no = text.replace(`${message.mentions.members.first()}`, '')
let ok = no.replace('^change', '')
let hi = message.mentions.members.first()
let embed = new MessageEmbed()
embed.setDescription(`Succesfully changed ${hi} name to ${ok}`)
embed.setColor('#c52222')
embed.setThumbnail(nah.displayAvatarURL())
embed.setFooter(`Command used by ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send(embed)
hi.setNickname(ok) 
}
});


client.login(process.env.TOKEN)

const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
	website: '',
	title: 'NAME',
	interval: 2
});

monitor.on('up', res => console.log(`${res.website} its on.`));
monitor.on('down', res =>
	console.log(`${res.website} it has died - ${res.statusMessage}`)
);
monitor.on('stop', website => console.log(`${website} has stopped.`));
monitor.on('error', error => console.log(error));