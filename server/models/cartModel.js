const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            vegetable: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Vegetable',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            unit: {
                type: String,
                required: true,
            }
        },
    ],
    chosenAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    total: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['active', 'completed'],
        default: 'active',
    },
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Cart', cartSchema);
