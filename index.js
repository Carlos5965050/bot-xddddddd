const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;

const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({

intents: [Guilds, GuildMembers, GuildMessages], Partials: [User, Message, GuildMember, ThreadMember]

});

const { loadEvents } = require("./Handlers/eventHandler");

client.config = require('./config.json');

client.events = new Collection;
client.commands = new Collection;

loadEvents(client);

require(`./Handlers/anti-crash`)(client);

client.login(client.config.token)
