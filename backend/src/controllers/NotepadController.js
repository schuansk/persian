const { Op } = require('sequelize')
const Notepad = require('../models/Notepad');
const Note = require('../models/Note');
const NoteContreller = require('./NoteController');

module.exports = {
    async store(req, res) {
        const {
            title,
            notes
        } = req.body;

        const {
            customer_id
        } = req.params;

        const [notepad] = await Notepad.findOrCreate({
            where: { title, customer_id }
        });

        const note = await NoteContreller.store(notes, notepad.id);

        return res.json(notepad);
    },

    async index(req, res) {
        const {
            customer_id
        } = req.params;
        
        const {
            title
        } = req.body;

        const notebooks = await Notepad.findAll({
            where: {
                customer_id,
                title: {
                    [Op.iLike]: '%' + title + '%'
                }
            },
            include: [{
                model: Note,
                as: 'notepad'
            }]
        });

        return res.json(notebooks);
    }
}