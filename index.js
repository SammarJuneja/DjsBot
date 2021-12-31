const Discord = require('discord.js');
const intents = ['GUILDS', 'GUILD_MEMBERS'];
const {Permissions} = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

//variables
const owners = [
	'670249406527963147',
  '513707147213799436',
	'548419804147613717',
	'780522171226390638',
	'696368083517964288'
];
const wilson = ['wilson', 'wils0n'];
//const prefix = '^';
const frnd = [
	'670249406527963147',
	'754973435318501446',
	'551786741296791562',
	'470909834745872384',
	'780522171226390638',
	'817058348599083028',
	'513707147213799436',
	'696368083517964288',
	'548419804147613717',
	'607097982260740096'
];

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {

if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();


const user = args.length ? client.users.cache.find(x => x.username.startsWith(args)) || client.users.cache.get(args) || message.mentions.users.first() || await client.users.fetch(args) : message.author; 

  

if (command === 'ping') {
message.channel.send(client.ws.ping)
} else if (message.content.startsWith('^eval')){
if (owners.includes(message.author.id)) {
try {
let t = message.content.replace('^eval', '').trim();
let x = require('util').inspect(await eval(t), { depth: 0 });
const { MessageEmbed } = require('discord.js');
let embed = new MessageEmbed()
.setTitle('Eval')
.setURL('https://github.com/Wils0n-op/Djs-bot')
.setColor('BLUE')
.setDescription(`
**Input:**
\`\`\`js
${t}
\`\`\`
**Output:**
\`\`\`js
${x}
\`\`\`
`);
message.channel.send(embed);
} catch (error) {
let brr = message.content.replace('^eval', '').trim();
let { MessageEmbed } = require('discord.js');
let err = new MessageEmbed()
.setColor('RED')
.setURL('https://github.com/Wils0n-op/Djs-bot')
.setDescription(`
**Input:**
\`\`\`js
${brr}
\`\`\`
**Output:**
\`\`\`js
${error.message}
\`\`\`
`)
.setTitle('Error');
message.channel.send(err);
}
} else {
message.channel.send('You are gay')
}
} else if (message.content.startsWith('^npm')) {
if (message.content.replace('^npm', '') === '') {
message.channel.send('Please type a npm package name');
} else {
(async () => {
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
let idk = await fetch(`https://api.leref.ga/npm?search=${message.content.replace('^npm', '')}`).then(x => x.json());
let embed = new MessageEmbed()
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
{name: '**Version:**', value: `${idk.version}`},
{name: '**Publisher:**', value: `${idk.publisher}`},
{name: '**Link:**', value: `${idk.npm}`}
)
.setColor('#c52222')
.setThumbnail('https://cdn.discordapp.com/attachments/833643049556901928/843063826899140628/IMG-20210515-WA0045.jpg');
message.channel.send({ content: `||npm install ${idk.name}||`, embed: embed});
})();
}
} else if (message.content.startsWith('^change')) {
if (message.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES) === false) {
message.channel.send('You are missing \`manage_nickname\` permission')
} else {
let { MessageEmbed } = require('discord.js');
let nah = message.mentions.users.first();
let text = message.content;
let no = text.replace(`${message.mentions.members.first()}`, '');
let ok = no.replace('^change', '');
let lmao = no.replace('^change', '').trim();
let hi = message.mentions.members.first();
let embed = new MessageEmbed();
embed.setDescription(`Succesfully changed ${hi} name to ${lmao}`);
embed.setColor('#c52222');
embed.setThumbnail(nah.displayAvatarURL());
embed.setFooter(`Command used by ${message.author.tag}`, message.author.displayAvatarURL());
message.channel.send(embed);
hi.setNickname(ok);
}
} else if (message.content.startsWith('^whitelist')) {
let ew = message.content.replace('^whitelist', '');
frnd.push(`${message.content.replace('^whitelist', '').trim()}`);
let { MessageEmbed } = require('discord.js');
let eno = new MessageEmbed()
.setDescription(`${message.content.replace('^whitelist', '')} is added to whitelist`)    
.setFooter(`${message.guild.name}`, message.guild.iconURL())
.setColor('#c52222')
message.channel.send(eno);
} else if (message.content.includes('pogman')) {
message.react('🇲');
message.react('🇴');
message.react('🇭');
} else if (message.content.includes('wilson')) {
let { MessageEmbed } = require('discord.js');
let bil = new MessageEmbed()
.setDescription(`
${message.content}

[Jump to message](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
.setTitle(`You got highlighted in ${message.guild.name}`)
.setFooter(`Highlighted by ${message.author.username}`, message.author.displayAvatarURL())
.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setColor('#c52222');
message.client.users.cache.get('670249406527963147').send(bil);
}  else if (message.content.startsWith('^work')) {
let db = require('quick.db')
let {MessageEmbed} = require('discord.js')
let random = Math.floor(Math.random() * 1000) + 1;
let embed = new MessageEmbed()
.setDescription(`You worked as a gay and earned ${random}`)
.setColor('#c52222')
.setTitle('Work')
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(embed)
db.add(`money-server-${message.guild.id}-user-${message.author.id}`, random)
}  else if (message.content.startsWith('^with')) {
if (Number(message.content.replace('^with', ''))) {
const db = require('quick.db')
let kk = db.get(`bank-server-${message.guild.id}-user-${message.author.id}`)
if (Number(message.content.replace('^with', '')) > kk) {
let {MessageEmbed} = require('discord.js')
let embdd = new MessageEmbed()
.setDescription(`You don't have enough money to withdraw`)
.setColor('#c52222')
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(embdd)
} else {
let {MessageEmbed} = require('discord.js')
let embdd = new MessageEmbed()
.setDescription(`You withdrew ${Number(message.content.replace('^with', ''))} successfully`)
.setColor('#c52222')
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(embdd)
db.subtract(`bank-server-${message.guild.id}-user-${message.author.id}`, Number(message.content.replace('^with', '')))
db.add(`money-server-${message.guild.id}-user-${message.author.id}`, Number(message.content.replace('^with', '')))
}
} else {
let {MessageEmbed} = require('discord.js')
let embdd = new MessageEmbed()
.setDescription('Please type a valid number to withdraw')
.setColor('#c52222')
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(embdd)
}
} else if (message.content.startsWith('^bal')) {
if (Number(`${message.content.replace('^bal', '').trim()}`)) {
try {
const umm = message.client.users.cache.get(`${message.content.replace('^bal', '').trim()}`)
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')
const emb = new MessageEmbed()
.setAuthor(umm.tag)
.setColor('#c52222')
.addFields(
{name: '**Money**', value: db.get(`money-server-${message.guild.id}-user-${umm.id}`) + 0},
{name: '**Bank**', value: db.get(`bank-server-${message.guild.id}-user-${umm.id}`) + 0},
{name: '**Total**', value: db.get(`money-server-${message.guild.id}-user-${umm.id}`) + db.get(`bank-server-${message.guild.id}-user-${umm.id}`)}
)
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)
.setThumbnail(umm.displayAvatarURL())
message.channel.send(emb)  
} catch (error) {
  message.channel.send(error.message)
}
} else if(message.mentions.users.first()) {
let mentioned = message.mentions.users.first()
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')
const emb = new MessageEmbed()
.setAuthor(`${mentioned.tag}`)
.setColor('#c52222')
.addFields(
{name: '**Money**', value: db.get(`money-server-${message.guild.id}-user-${mentioned.id}`) + 0},
{name: '**Bank**', value: db.get(`bank-server-${message.guild.id}-user-${mentioned.id}`) + 0},
{name: '**Total**', value: db.get(`money-server-${message.guild.id}-user-${mentioned.id}`) + db.get(`bank-server-${message.guild.id}-user-${mentioned.id}`)}
)
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)
.setThumbnail(mentioned.displayAvatarURL())
message.channel.send(emb)
} else if (message.content.replace('^bal', '') === '') {
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')
const emb = new MessageEmbed()
.setAuthor(`${message.author.tag}`)
.setColor('#c52222')
.addFields(
{name: '**Money**', value: db.get(`money-server-${message.guild.id}-user-${message.author.id}`) + 0},
{name: '**Bank**', value: db.get(`bank-server-${message.guild.id}-user-${message.author.id}`) + 0},
{name: '**Total**', value: db.get(`money-server-${message.guild.id}-user-${message.author.id}`) + db.get(`bank-server-${message.guild.id}-user-${message.author.id}`)}
)
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)
.setThumbnail(message.author.displayAvatarURL())
message.channel.send(emb)
} 
} else if (message.content.startsWith('^dep')) {
if (Number(message.content.replace('^dep', ''))) {
const db = require('quick.db')
let kk = db.get(`money-server-${message.guild.id}-user-${message.author.id}`)
if (Number(message.content.replace('^dep', '')) > kk) {
let {MessageEmbed} = require('discord.js')
let embdd = new MessageEmbed()
.setDescription(`You don't have enough money to deposit`)
.setColor('#c52222')
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(embdd)
} else {
let {MessageEmbed} = require('discord.js')
let embdd = new MessageEmbed()
.setDescription(`You deposit ${Number(message.content.replace('^dep', ''))} successfully`)
.setColor('#c52222')
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(embdd)
db.subtract(`money-server-${message.guild.id}-user-${message.author.id}`, Number(message.content.replace('^dep', '')))
db.add(`bank-server-${message.guild.id}-user-${message.author.id}`, Number(message.content.replace('^dep', '')))
}
} else {
let {MessageEmbed} = require('discord.js')
let embdd = new MessageEmbed()
.setDescription('Please type a valid number to deposit')
.setColor('#c52222')
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(embdd)
}
}  else if (message.content.startsWith('^rob')) {
if (message.mentions.users.first()) {
let db = require('quick.db')
let muser = message.mentions.users.first()
let eror = db.get(`money-server-${message.guild.id}-user-${muser.id}`)
if (eror <= 0) {
let {MessageEmbed} = require('discord.js')
let embed = new MessageEmbed()
.setDescription(`${message.mentions.users.first()} don\'t have enough to rob`)
.setColor('#c52222')
.setTimestamp()
message.channel.send(embed)
} else {
let db = require('quick.db')
let mentioned = message.mentions.users.first()
let bal = db.get(`money-server-${message.guild.id}-user-${mentioned.id}`)
let random = Math.floor(Math.random() * bal)
db.subtract(`money-server-${message.guild.id}-user-${mentioned.id}`, random)
db.add(`money-server-${message.guild.id}-user-${message.author.id}`, random) 
let {MessageEmbed} = require('discord.js')
let embed = new MessageEmbed()
.setDescription(`You robbed ${random} from ${mentioned.tag}`)
.setColor('#c52222')
.setTimestamp()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send(embed)
}
} else if (Number(message.content.replace('^rob', ''))) {
let db = require('quick.db')
let mentioned = message.client.users.cache.get(`${message.content.replace('^rob', '').trim()}`)
let bal = db.get(`money-server-${message.guild.id}-user-${mentioned.id}`)
if (bal <= 0) {
let {MessageEmbed} = require('discord.js')
let embed = new MessageEmbed()
.setDescription(`${mentioned} don\'t have enough to rob`)
.setColor('#c52222')
.setTimestamp()
message.channel.send(embed)
} else {
try {
let db = require('quick.db')
let mentioned = message.client.users.cache.get(`${message.content.replace('^rob', '').trim()}`)
let bal = db.get(`money-server-${message.guild.id}-user-${mentioned.id}`)
let random = Math.floor(Math.random() * bal)
db.subtract(`money-server-${message.guild.id}-user-${mentioned.id}`, random)
db.add(`money-server-${message.guild.id}-user-${message.author.id}`, random) 
let {MessageEmbed} = require('discord.js')
let embed = new MessageEmbed()
.setDescription(`You robbed ${random} from ${mentioned.tag}`)
.setColor('#c52222')
.setTimestamp()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send(embed)
} catch (error) {
message.channel.send(error.message)
}
}
}
} else if(command === 'av') {
let {MessageEmbed} = require('discord.js')
let embed = new MessageEmbed()
.setImage(user.displayAvatarURL({size: 2048}))
.setDescription(`[PNG](${user.displayAvatarURL({size: 2048, format: 'png'})}) | [JPG](${user.displayAvatarURL({size: 2048, format: 'jpg'})}) | [WEBP](${user.displayAvatarURL({size: 2048, format: 'webp'})}) | [GIF](${user.displayAvatarURL({size: 2048, format: 'gif'})})`)
.setColor('#c52222')
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
.setAuthor(user.tag)
message.channel.send(embed) 
}
});

//welcome
client.on('guildMemberAdd', async member => {
if (member.user.bot === true) {
let { MessageEmbed } = require('discord.js');
let nbot = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter('Bot Test', member.guild.iconURL())
.setTimestamp();
member.guild.channels.cache.get('874887845049950259').send(nbot);
} else {
let ms = require('ms');
let altTime = ms('15d');
let joinedAt = member.user.createdAt.getTime();
let TodayDate = Date.now();
let diff = TodayDate - joinedAt;
if (diff < altTime) {
let { MessageEmbed } = require('discord.js');
let altEmbed = new MessageEmbed()
.setDescription('This user seems to be an alt')
.setColor('#c52222')
.setFooter(`${member.user.id}`, member.guild.iconURL())
.setTimestamp()
.setTitle('New Alt')
.setAuthor(`${member.user.tag}`)
.setThumbnail(member.user.displayAvatarURL());
member.guild.channels.cache.get('874887845049950259').send(altEmbed);
} else {
if (member.guild.id === '761901339109621800') {
if (frnd.includes(member.user.id)) {
let { MessageEmbed } = require('discord.js');
let wel = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter('Bot Test', member.guild.iconURL())
.setTimestamp()
.setThumbnail(member.user.displayAvatarURL());
member.guild.channels.cache.get('874887845049950259').send(wel);
} else {
let { MessageEmbed } = require('discord.js');
let noraid = new MessageEmbed()
.setDescription(`${member.user.tag} tried to join this server but i kicked them

**ID:**
${member.user.id}`)
.setFooter('Bot Test anti-raid', member.guild.iconURL())
.setThumbnail(member.user.displayAvatarURL())
.setColor('#c52222')
.setTimestamp();
member.guild.channels.cache.get('874887845049950259').send(noraid);
member.user.send('You cannot join this server without Wils0n Permission');
await member.guild.members.cache.get(member.user.id).kick('Anti Raid');
}
} else if (member.guild.id === '866372720895459388') {
let { MessageEmbed } = require('discord.js');
let devtopia = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter(`${member.guild.name}`, member.guild.iconURL())
.setTimestamp()
.setThumbnail(member.user.displayAvatarURL());
member.guild.channels.cache.get('894490376029745223').send(devtopia);
} else if (member.guild.id === '') {
let { MessageEmbed } = require('discord.js');
let bdfd = new MessageEmbed()
.setDescription(`Welcome <@${member.user.id}> to the server`)
.setTitle(`${member.user.tag}`)
.setColor('#c52222')
.setFooter(`${member.guild.name}`, member.guild.iconURL())
.setTimestamp()
.setThumbnail(member.user.displayAvatarURL());
member.guild.channels.cache.get('886627895315943445').send(bdfd);
}
}
}
});

client.login(process.env.TOKEN);

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
console.log('%cTest', 'color:green;')