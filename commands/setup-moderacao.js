const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("moderacao")
        .setDescription("Abre o painel de moderação"),

    async execute(interaction) {

    const ban = new ButtonBuilder()
        .setCustomId("ban")
        .setLabel("Ban")
        .setEmoji("🔨")
        .setStyle(ButtonStyle.Danger)

    const kick = new ButtonBuilder()
        .setCustomId("kick")
        .setLabel("Kick")
        .setEmoji("🥾")
        .setStyle(ButtonStyle.Danger)

    const timeout = new ButtonBuilder()
        .setCustomId("timeout")
        .setLabel("Time Out")
        .setEmoji("⏳")
        .setStyle(ButtonStyle.Secondary)

    const warn = new ButtonBuilder()
        .setCustomId("warn")
        .setLabel("Advertência")
        .setEmoji("⚠️")
        .setStyle(ButtonStyle.Primary)

    

    const row = new ActionRowBuilder()
        .addComponents(ban, kick, timeout, warn);

    await interaction.reply({
        content: "Painel de Moderação",
        components: [row]
    });
    }
};