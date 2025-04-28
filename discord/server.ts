console.log('uncomment all of that')

/*
import express, { Request, Response } from 'express'
import { Client, GatewayIntentBits, PresenceStatusData } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000

// Discord client setup
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
  ],
})

// when u make the discord bot make sure u actually grant it the permissions to see the status of the user u want to check, otherwise it won't work (u can do this by going to the bot settings and then going to the "bot" tab and then scroll down to "privileged gateway intents" and enable the "presence intent" and "server members intent" options)

// Types
interface StatusInfo {
  status: PresenceStatusData | 'unknown' | 'error'
  username: string | null
  displayName: string | null
  avatarUrl: string | null
  lastChecked: string | null
}

// State
let latestStatus: StatusInfo = {
  status: 'unknown',
  username: null,
  displayName: null,
  avatarUrl: null,
  lastChecked: null,
}

// ignore this my linter is being dumb and doesn't understand that im using the latestStatus variable in the updatePresence function
latestStatus = {
  status: 'unknown',
  username: null,
  displayName: null,
  avatarUrl: null,
  lastChecked: null,
}

// Config from environment
const BOT_TOKEN = process.env.BOT_TOKEN
const GUILD_ID = process.env.GUILD_ID
const TARGET_USER_ID = process.env.TARGET_USER_ID

// Ensure environment variables are present
if (!BOT_TOKEN || !GUILD_ID || !TARGET_USER_ID) {
  throw new Error('Missing required environment variables (BOT_TOKEN, GUILD_ID, TARGET_USER_ID)')
}

// Connect bot
client.login(BOT_TOKEN)

// Once bot is ready
client.once('ready', () => {
  console.log(`Status bot logged in at ${client.user?.tag}`)
  updatePresence() // initial presence check
  setInterval(updatePresence, 3 * 60 * 1000) // every 3 minutes
})

// Update presence function
async function updatePresence(): Promise<void> {
  try {
    const guild = await client.guilds.fetch(GUILD_ID)
    const member = await guild.members.fetch(TARGET_USER_ID)

    if (member) {
      latestStatus.status = member.presence?.status || 'offline'
      latestStatus.username = member.user.username
      latestStatus.displayName = member.displayName // nickname if available
      latestStatus.avatarUrl = member.user.displayAvatarURL({ extension: 'png', size: 256 })
    } else {
      latestStatus.status = 'offline'
      latestStatus.username = null
      latestStatus.displayName = null
      latestStatus.avatarUrl = null
    }

    latestStatus.lastChecked = new Date().toISOString()
    console.log(`Updated status: ${latestStatus.status}`)
  } catch (error) {
    console.error('Error fetching presence:', error)
    latestStatus.status = 'error'
    latestStatus.username = null
    latestStatus.displayName = null
    latestStatus.avatarUrl = null
    latestStatus.lastChecked = new Date().toISOString()
  }
}

// API route
app.get('/get/status', (req: Request, res: Response) => {
  res.json(latestStatus)
})

// Start express server
app.listen(PORT, () => {
  console.log(`Status api running on port ${PORT}`)
})

*/
