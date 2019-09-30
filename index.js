const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('guildMemberAdd', member =>{

  const channel = member.guild.channels.find(channel => channel.name ==="✈｜arrivals");
  if (!channel) return;

  channel.send(`**Welcome to our server, ${member} we are so happy to have you here! Make sure you check out the rules channel**`)
});


client.login('NjI3NDY2ODM4MTY2NjAxNzI4.XY_Ydw.31jkdusMfN2g1g6fWqYP_aE-q98');



client.on('message', msg => {
  if (msg.content === '!ip') {
    msg.reply('Zero Gravity: 208.87.97.148:30102');
  }
});

client.on('message', message => {
  // If the message is "thicc"
  if (message.content === 'thicc') {
    // Send the user's avatar URL
    message.reply("It is"+message.author.avatarURL);
  }
});




