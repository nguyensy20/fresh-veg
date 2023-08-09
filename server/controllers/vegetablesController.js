const asyncHandler = require("express-async-handler");
const Vegetable = require("../models/vegetableModel");


const getVegetables =asyncHandler(async (req, res) => {
    console.log("get vegetables")
    const vegetables =await Vegetable.find();
    res.status(200).json(vegetables);
})
const createVegetable =  asyncHandler(async  (req, res) => {
    console.log(req.body)
    const {name, price, quantity, unit} = req.body
    if (!name || !price || !quantity || !unit) {
        res.status(400);
        throw new Error("All feild are mandatory")
    }
    const vegetable =  await Vegetable.create({
        name, price, quantity, unit
    });

    res.status(200).json(vegetable);
})
const getVegetable =asyncHandler(async(req, res) => {
    const vegetable = await Vegetable.findById(req.params.id);
    if (!vegetable) {
        res.status(404);
        throw new Error("Vegetable not found");
    }
    res.status(200).json(vegetable);
})
const updateVegetable =asyncHandler (async(req, res) => {
    const vegetable = await Vegetable.findById(req.params.id);
    if (!vegetable) {
        res.status(404);
        throw new Error("Vegetable not found");
    }
    const updatedVegetable = await Vegetable.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        
    );
    res.status(200).json(updatedVegetable);
});
const deleteVegetable = asyncHandler(async(req, res) => {
    const vegetable = await Vegetable.findById(req.params.id);
    // console.log(vegetable);
    if (!vegetable) {
        res.status(404);
        throw new Error("Vegetable not found");
    };
    await Vegetable.deleteOne({
        _id: req.params.id
    });
    res.status(200).json(vegetable);
})

module.exports = {getVegetable, getVegetables, createVegetable, updateVegetable, deleteVegetable}