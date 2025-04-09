const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    organizerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organizer',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Update', updateSchema); 