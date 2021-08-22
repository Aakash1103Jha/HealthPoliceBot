// Author: Aakash Jha
// Version: 1.0.0
// Created on: 21/08/21
// Description: This module handles $ sign prefixed commands issued to the bot, by the user.

const PREFIX = "$"

module.exports = async (msg) => {
	if (msg.author.bot) return

	if (msg.content.startsWith(PREFIX)) {
		const [CMD, ...args] = msg.content
			.toLowerCase()
			.trim()
			.substring(PREFIX.length)
			.split(/\s+/)

		if (CMD === "hydrate") {
			if (args.length === 0) {
				msg.channel.send(`Hiiyaaa..!! Let's take a break and HYDRATE.`)
			} else {
				const hydrateTimerId = setInterval(
					() => {
						msg.channel.send(`Hiiyaaa..!! Let's take a break and HYDRATE.`)
					},
					args[0] * 3600000,
					setTimeout(() => {
						clearInterval(hydrateTimerId)
						msg.channel.send(`Hope you drank enough water today :)`)
					}, args[1] * 3600000)
				)
			}
		}

		if (CMD === "stretch") {
			msg.channel.send(`Hiiyaaa..!! Let's take a break and STREEEEETCHHH :P`)
		}

		if (CMD === "commands" || CMD === "command") {
			msg.channel.send(
				`Hey ${msg.author}.. Thanks for asking about the commands. **_$hydrate_** (or **_$hydrate <interval in hrs> <duration in hrs>_**) and **_$stretch_** are the ones you'd use with me.`
			)
		}
		if (CMD === "introduce" || CMD === "intro") {
			msg.channel.send(
				`Hiiyaaa ${msg.author}..!! I am the **HealthPolice Bot**. My job is to help you all stay devinitelyhealthy :) Use the **_$hydrate_** or **_$stretch_** commands to see what I mean.`
			)
		}
	}
}
