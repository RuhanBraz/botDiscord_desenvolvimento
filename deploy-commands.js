require("dotenv").config();

const fs = require("fs");

const arquivos = fs.readdirSync("./commands");

const commands = [];

for (const arquivo of arquivos) {

    const comando = require(`./commands/${arquivo}`);

    commands.push(comando.data.toJSON());

}

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Registrando comandos...");

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );

        console.log("Comandos registrados!");
    } catch (error) {
        console.error(error);
    }
})();