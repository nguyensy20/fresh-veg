const mongoose = require("mongoose");

const vegetableScheme = mongoose.Schema({
    name: {
        type: String, 
        require: [true, "Please add the vegetable name"],
    },
    price: {
        type: Number, 
        require: [true, "Please add the vegetable price"],
    },
    quantity: {
        type: Number, 
        require: [true, "Please add the vegetable quantity"],
    },
    unit: {
        type: String, 
        require: [true, "Please add the vegetable unit"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Vegetable", vegetableScheme);