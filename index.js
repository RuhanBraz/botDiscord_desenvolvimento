require("dotenv").config();

const {
    Client,
    GatewayIntentBits
} = require("discord.js");

const moderar = require("./commands/setup-moderacao");
const ban = require("./buttons/ban.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds]
});

client.once("clientReady", () => {
    console.log("Bot online!");
});

client.on("interactionCreate", async (interaction) => {

    if (interaction.isChatInputCommand()){
        if (interaction.commandName === "moderacao") {
            await moderar.execute(interaction);
        }
    }

    if (interaction.isButton()){
        if (interaction.customId === "ban"){
            await ban.execute(interaction);
        }
    }

    if (interaction.isButton()){
        if (interaction.customId === "confirmar"){
            await confirmar.execute(interaction);
        }
    }
});

client.login(process.env.TOKEN);