const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming your user model is named 'User'
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Address', addressSchema);
