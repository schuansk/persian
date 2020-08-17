const Note = require('../models/Note');

module.exports = {
    async store (notes, id) {        
        let note = [];
        let success = false

        for(let i = 0; i < notes.length; i++) {
            note = await Note.create({
               notepad_id: id,
               topic: notes[i][0],
               content: notes[i][1],
            });

            success = true;
        }

        if(success) {
            return true;
        } else {
            return false;
        }     
    }
}