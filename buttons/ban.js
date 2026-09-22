module.exports = {

    async execute(interaction){
        const modal = require("../modals/ban.js");    

        await interaction.showModal(modal.data);
    }
}

