const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

    const campoID = new TextInputBuilder()
        .setCustomId("campoID")
        .setLabel("ID do usuário")
        .setStyle(TextInputStyle.Short);

    const rowID = new ActionRowBuilder()
        .addComponents(campoID);

    const campoMotivo = new TextInputBuilder()
        .setCustomId("campoMotivo")
        .setLabel("motivo do ban")
        .setStyle(TextInputStyle.Short);

    const rowMotivo = new ActionRowBuilder()
        .addComponents(campoMotivo);

    
module.exports = {
    data: new ModalBuilder()
        .setCustomId("modalBan")
        .setTitle("Banir membro")
        .addComponents(rowID, rowMotivo),

    async execute(interaction){

        const confirmar = new ButtonBuilder()
        .setCustomId("confirmar")
        .setLabel("Banir")
        .setEmoji("🔨")
        .setStyle(ButtonStyle.Danger);

        const cancelar = new ButtonBuilder()
        .setCustomId("cancelar")
        .setLabel("Cancelar")
        .setEmoji("❌")
        .setStyle(ButtonStyle.Secondary);


        const id = interaction.fields.getTextInputValue("campoID");
        const motivo = interaction.fields.getTextInputValue("campoMotivo");

        const membro = await interaction.guild.members.fetch(id);
        
        const row = new ActionRowBuilder()
            .addComponents(confirmar, cancelar);

        await interaction.reply({
            content: `Você tem certeza que deseja banir **${membro.user.tag}**?\nMotivo: **${motivo}**`, components: [row]
        
        })
    }
};