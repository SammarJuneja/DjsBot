//const Discord = require('discord.js'); 
const Discord = require('discord.js')
const intents = ["GUILDS", "GUILD_MEMBERS"];
const client = new Discord.Client();

//vars
const owners = ["670249406527963147"]
const prefix = '^'
const frnd = ['670249406527963147', '754973435318501446', '551786741296791562', '470909834745872384', '780522171226390638', '817058348599083028', '513707147213799436', '696368083517964288', '548419804147613717', '607097982260740096']

client.once('ready', () => {
console.log('Ready!');
});

client.on('message', async message => {
/*if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();*/
	if (message.content === '^ping') {	
message.channel.send(client.ws.ping)
	} else if (message.content.startsWith('^eval') && owners.includes(message.author.id)) {
try {
let t = message.content.trim()
let x = await eval(t.replace('^eval', ''))
const {MessageEmbed} = require('discord.js')
let embed = new MessageEmbed()
.setTitle('Eval')
.setColor('#c52222')
.setDescription(`
**Input:**
\`\`\`
${message.content.replace('^eval', '')}
\`\`\`
**Output:**
\`\`\`
${x}
\`\`\`
`)
message.channel.send(embed)
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
.setURL(`${idk.npm}`)
.setDescription(`
\`\`\`
npm install ${idk.name}
\`\`\`
${idk.description}
`)
.addFields(
{name: '**Name**', value: `${idk.name}`},
/*{name: '**Description:**', value: `${idk.description}`},*/
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
let lmao = no.replace('^change', '').trim()   
let hi = message.mentions.members.first()
let embed = new MessageEmbed()
embed.setDescription(`Succesfully changed ${hi} name to ${lmao}`)
embed.setColor('#c52222')
embed.setThumbnail(nah.displayAvatarURL())
embed.setFooter(`Command used by ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send(embed)
hi.setNickname(ok) 
} else if (message.content.startsWith('^whitelist')) {
let ew = message.content.replace('^whitelist', '') 
frnd.push(`${message.content.replace('^whitelist', '').trim()}`)
let { MessageEmbed } = require('discord.js')
let eno = new MessageEmbed()
.setDescription(`${message.content.replace('^whitelist', '')} is added to whitelist`)
.setTitle(`${message.author.tag}`)
.setFooter(`${message.guild.name}`, message.guild.iconURL())
.setColor('#c52222')
.setTimestamp()
message.channel.send(eno)
}
});

//welcome
client.on("guildMemberAdd", async (member) => {
if (member.user.bot === true) {
let {MessageEmbed} = require('discord.js')
let nbot = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter('Bot Test', member.guild.iconURL())
.setTimestamp()
member.guild.channels.cache.get('874887845049950259').send(nbot)
} else {
if (member.guild.id === '761901339109621800') {
if (frnd.includes(member.user.id)) {
let {MessageEmbed} = require('discord.js')
let wel = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter('Bot Test', member.guild.iconURL())
.setTimestamp()
.setThumbnail(member.user.displayAvatarURL())
member.guild.channels.cache.get('874887845049950259').send(wel)
} else {
let {MessageEmbed} = require('discord.js')
let noraid = new MessageEmbed()
.setDescription(`${member.user.tag} tried to join this server but i kicked them

**ID:**
${member.user.id}`)
.setFooter('Bot Test anti-raid', member.guild.iconURL())
.setThumbnail(member.user.displayAvatarURL())
.setColor('#c52222')
.setTimestamp()
member.guild.channels.cache.get('874887845049950259').send(noraid)
member.user.send('You cannot join this server without Wils0n Permission')
await member.guild.members.cache.get(member.user.id).kick('Anti Raid')
}
} else if (member.guild.id === '866372720895459388') {
  let {MessageEmbed} = require('discord.js')
 let devtopia = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter(`${member.guild.name}`, member.guild.iconURL())
.setTimestamp()
.setThumbnail(member.user.displayAvatarURL())
member.guild.channels.cache.get('894490376029745223').send(devtopia)
} else if (member.guild.id === '') {
  let {MessageEmbed} = require('discord.js')
  let bdfd = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter(`${member.guild.name}`, member.guild.iconURL())
.setTimestamp()
.setThumbnail(member.user.displayAvatarURL())
member.guild.channels.cache.get('886627895315943445').send(bdfd)
}
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