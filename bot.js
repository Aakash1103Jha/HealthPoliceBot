require("dotenv/config")

const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] })
const PREFIX = "$"

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag} :)`)
})

// Message event
client.on("messageCreate", async (msg) => {
	// handling bot message
	// if message is sent by bot, it is ignored
	if (msg.author.bot) return

	// checking command and args
	if (msg.content.startsWith(PREFIX)) {
		const [CMD, ...args] = msg.content
			.toLowerCase()
			.trim()
			.substring(PREFIX.length)
			.split(/\s+/)

		// checking for HYDRATE command
		if (CMD === "hydrate") {
			msg.channel.send(`Hiiyaaa..!! Let's take a break and HYDRATE.`)
		}
		// checking for STRETCH command
		if (CMD === "stretch") {
			msg.channel.send(`Hiiyaaa..!! Let's take a break and STREEEEETCHHH :P`)
		}
		// checking for the COMMAND command
		if (CMD === "commands" || CMD === "command") {
			msg.channel.send(
				`Hey ${msg.author}.. Thanks for asking about the commands. **_$hydrate_** and **_$stretch_** are the ones you'd use with me.`
			)
		}
		if (CMD === "introduce" || CMD === "intro") {
			msg.channel.send(
				`Hiiyaaa ${msg.author}..!! I am the **HealthPolice Bot**. My job is to help you all stay devinitelyhealthy :) Use the **_$hydrate_** or **_$stretch_** commands to see what I mean.`
			)
		}
	}
})

client.login(process.env.TOKEN)
