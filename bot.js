// Author: Aakash Jha
// Version: 1.0.0
// Created on: 21/08/21
// Description: Entry point for the HealthPolice Bot

require("dotenv/config")

const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] })

const commandHandler = require("./commandHandler")

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag} :)`)
})

client.on("messageCreate", commandHandler)

client.login(process.env.NEW_TOKEN)
