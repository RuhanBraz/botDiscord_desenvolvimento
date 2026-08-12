require("dotenv").config();

const {
    Client,
    GatewayIntentBits
} = require("discord.js");

const moderar = require("./commands/setup-moderacao");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds]
});

client.once("clientReady", () => {
    console.log("Bot online!");
});

client.on("interactionCreate", async (interaction) => {

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "moderacao") {
        await moderar.execute(interaction);
    }
});

client.login(process.env.TOKEN);