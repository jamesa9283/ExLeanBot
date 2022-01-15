// ExLean Bot - For the Exeter University Lean Proofs Server
// Author: James A, Contributions: Ellie V

require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log('Example App'));

// ====== Discord Constants =======

// discord js setup
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

// discord id codes
const theyThemRole = '853628984415748146';
const sheHerRole = '853630661265195028';
const heHimRole = '853630766746435585';
const otherRole = '853630826284449803';
const botUserId = '853624054886694932';
const reactionMessage = '853645612792152126';
const welcomeChannel = '771750371684515922';

// ====== Bot Code =======

// startup
client.login(process.env.DISCORD_TOKEN)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// messages and responses
client.on('message', msg => {
    if (msg.content.toLowerCase().includes('ping')) {
      msg.channel.send('Pong!');
    }
});

// BEEP BOOP
client.on('message', msg => {
    if (msg.content.toLowerCase().includes('beep')) {
      msg.channel.send('BOOP!');
    }
});

// Bot likes ping pong
client.on('message', msg => {
  if (msg.content.toLowerCase().includes('ping pong')) {
    msg.react('😄');
  }
});

// POGGG
client.on('message', msg => {
    if (msg.content.toLowerCase().includes('pog')) {
      msg.react('🥰');
    }
  });

// git video
client.on('message', msg => {
    if (msg.content == '.git') {
      msg.channel.send('This may be helpful to you! https://youtu.be/BS0WseXeaJs');
    }
});

// Welcomes people to the server
client.on('guildMemberAdd', member => {
    member.guild.channels.get(welcomeChannel).send("Welcome" + member + ", have fun exploring the channels. BEEP BOOP. Do Lean."); 
});

// give roles system
client.on('messageReactionAdd', async (reaction, user) => {
    // cached roles to be added
    const TT = reaction.message.guild.roles.cache.find(guild => guild.id === theyThemRole);
    const SH = reaction.message.guild.roles.cache.find(guild => guild.id === sheHerRole);
    const HH = reaction.message.guild.roles.cache.find(guild => guild.id === heHimRole);
    const other = reaction.message.guild.roles.cache.find(guild => guild.id === otherRole);

	// When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }
    
    if (reaction.message.author.id == botUserId && reaction.message.id == reactionMessage) {
        if (reaction._emoji.name == '1️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(TT).catch(console.error);
            })
        }
        if (reaction._emoji.name == '2️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(SH).catch(console.error);
            })
        }
        if (reaction._emoji.name == '3️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(HH).catch(console.error);
            })
        }
        if (reaction._emoji.name == '4️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(other).catch(console.error);
            })
        }
    }
});

// remove roles system
client.on('messageReactionRemove', async (reaction, user) => {
    // cached roles to be removed
    const TT = reaction.message.guild.roles.cache.find(guild => guild.id === theyThemRole);
    const SH = reaction.message.guild.roles.cache.find(guild => guild.id === sheHerRole);
    const HH = reaction.message.guild.roles.cache.find(guild => guild.id === heHimRole);
    const other = reaction.message.guild.roles.cache.find(guild => guild.id === otherRole);

	// When a reaction is received, check if the structure is partial
    if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }

    if (reaction.message.author.id == botUserId && reaction.message.id == reactionMessage) {
        if (reaction._emoji.name == '1️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(TT).catch(console.error);
            })
        }
        if (reaction._emoji.name == '2️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(SH).catch(console.error);
            })
        }
        if (reaction._emoji.name == '3️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(HH).catch(console.error);
            })
        }
        if (reaction._emoji.name == '4️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(other).catch(console.error);
            })
        }
    }
});


var oneRole = '890879275228622878';
var twoRole = '890878612927025152';
var threeRole = '890879034454605864';
const botUserId2 = '853624054886694932';
const reactionMessage2 = '891029758459125880';



// give roles system
client.on('messageReactionAdd', async (reaction, user) => {
    // cached roles to be added
    const one = reaction.message.guild.roles.cache.find(guild => guild.id === oneRole);
    const two = reaction.message.guild.roles.cache.find(guild => guild.id === twoRole);
    const three = reaction.message.guild.roles.cache.find(guild => guild.id === threeRole);

	// When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }
    
    if (reaction.message.author.id == botUserId2 && reaction.message.id == reactionMessage2) {
        if (reaction._emoji.name == '1️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(one).catch(console.error);
            })
        }
        if (reaction._emoji.name == '2️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(two).catch(console.error);
            })
        }
        if (reaction._emoji.name == '3️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(three).catch(console.error);
            })
        }
    }
});

// remove roles system
client.on('messageReactionRemove', async (reaction, user) => {
    // cached roles to be removed
    const one = reaction.message.guild.roles.cache.find(guild => guild.id === oneRole);
    const two = reaction.message.guild.roles.cache.find(guild => guild.id === twoRole);
    const three = reaction.message.guild.roles.cache.find(guild => guild.id === threeRole);

	// When a reaction is received, check if the structure is partial
    if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }

    if (reaction.message.author.id == botUserId2 && reaction.message.id == reactionMessage2) {
        if (reaction._emoji.name == '1️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(one).catch(console.error);
            })
        }
        if (reaction._emoji.name == '2️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(two).catch(console.error);
            })
        }
        if (reaction._emoji.name == '3️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(three).catch(console.error);
            })
        }
    }
});



// Below is code for ExMaths

// ExMaths discord id codes
const ExMathsYearTwoMessage = '931949923837042698';

const ExMathsRoleMTH2005 = '931948923386462268'
const ExMathsRoleMTH2009 = '931974740237750282'
const ExMathsReactionMessageMTH2 = '931949923837042698'
const ExMathsWelcomeChannel = '757519493512822810'
const ExMathsRoleMsgUserID = '745931840011108372'

// give roles system
client.on('messageReactionAdd', async (reaction, user) => {
    // cached roles to be added
    const ExMathsMTH2005 = reaction.message.guild.roles.cache.find(guild => guild.id === ExMathsRoleMTH2005);
    const ExMathsMTH2009 = reaction.message.guild.roles.cache.find(guild => guild.id === ExMathsRoleMTH2009);

	// When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }
    
    if (reaction.message.author.id == ExMathsRoleMsgUserID && reaction.message.id == ExMathsReactionMessageMTH2) {
        if (reaction._emoji.name == '5️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(ExMathsMTH2005).catch(console.error);
            })
        }
        if (reaction._emoji.name == '9️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.add(ExMathsMTH2009).catch(console.error);
            })
        }
    }
});

// remove roles system
client.on('messageReactionRemove', async (reaction, user) => {
    // cached roles to be removed
    const ExMathsMTH2005 = reaction.message.guild.roles.cache.find(guild => guild.id === ExMathsRoleMTH2005);
    const ExMathsMTH2009 = reaction.message.guild.roles.cache.find(guild => guild.id === ExMathsRoleMTH2009);

	// When a reaction is received, check if the structure is partial
    if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }

    if (reaction.message.author.id == ExMathsRoleMsgUserID && reaction.message.id == ExMathsReactionMessageMTH2) {
        if (reaction._emoji.name == '5️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(ExMathsMTH2005).catch(console.error);
            })
        }
        if (reaction._emoji.name == '9️⃣') {
            console.log(user);
            reaction.message.guild.members.fetch(user.id).then(member => {
                member.roles.remove(ExMathsMTH2009).catch(console.error);
            })
        }
    }
});

