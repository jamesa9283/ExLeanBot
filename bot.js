require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log('Example App'));

// =============

const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.login(process.env.DISCORD_TOKEN)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content.toLowerCase().includes('ping')) {
      msg.channel.send('Pong!');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase().includes('beep')) {
      msg.channel.send('BOOP!');
    }
  });

  client.on('message', msg => {
  if (msg.content.toLowerCase().includes('ping pong')) {
    msg.react('😄');
  }
  });


  client.on('messageReactionAdd', async (reaction, user) => {
    const TT = reaction.message.guild.roles.cache.find(guild => guild.id === '853628984415748146');
    const SH = reaction.message.guild.roles.cache.find(guild => guild.id === '853630661265195028');
    const HH = reaction.message.guild.roles.cache.find(guild => guild.id === '853630766746435585');
    const other = reaction.message.guild.roles.cache.find(guild => guild.id === '853630826284449803');
    // const TT = reaction.guild.roles.cache.get("853628984415748146");
    // const SH = reaction.guild.roles.cache.get("853630661265195028");
    // const HH = reaction.guild.roles.cache.get("853630766746435585");
    // const other = reaction.guild.roles.cache.get("853630826284449803");
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
    console.log(reaction.message.id); // 853645612792152126  853645612792152126 853689102163771432
    if (reaction.message.author.id == '853624054886694932' && reaction.message.id == '853645612792152126') {
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