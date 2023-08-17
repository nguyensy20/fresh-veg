// cartController.js
const asyncHandler = require("express-async-handler");
const Cart = require('../models/cartModel');
const User = require('../models/userModel');
const Vegetable = require('../models/vegetableModel');

const createCartForUser = async (userId) => {
    const cart = await Cart.create({
        user: userId,
    });
    const user = await User.findById(userId)
    user.carts.push(cart)
    user.save()
    return cart;
};

const getActiveCartsByUserId = asyncHandler(async (userId) => {
    const activeCarts = await Cart.find({ user: userId, status: 'active' });
    return activeCarts[0];
});
const getCompleteCartsByUserId = asyncHandler(async (userId) => {
    const carts = await Cart.find({ user: userId, status: 'completed' });
    return carts;
});

const getActiveCart = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const activeCart = await getActiveCartsByUserId(userId)
    console.log("get active cart ")
    console.log(activeCart)
    res.status(200).json(activeCart)
})
const getCompleteCart = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const completeCart = await getCompleteCartsByUserId(userId)
    res.status(200).json(completeCart)
})

const addToCart = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    res.status(200).json({ iserId: userId })
    const { vegetableId, quantity } = req.body;
    const user = await User.findById(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        throw new Error("User not found")
    }
    console.log("ok")
    activeCart = await getActiveCartsByUserId(userId)
    if (!activeCart) {
        activeCart = await createCartForUser(userId)
    }
    const vegetableBeAdd = await Vegetable.findById(vegetableId);
    if (!vegetableBeAdd) {
        res.status(404).json({ message: 'Vegetable not found' });
        throw new Error("Vegetable not found")
    }
    // Check if the vegetable already exists in the cart
    const quantityToAdd = parseInt(quantity, 10);
    if (quantityToAdd > vegetableBeAdd.quantity) {
        res.status(400).json({ message: "Not enough item" })
        throw new Error("Not enough item")
    }
    const existingCartItem = activeCart.items.find(item => item.vegetable.toString() === vegetableId);
    if (existingCartItem) {
        // Update the quantity of the existing item
        existingCartItem.quantity += quantityToAdd;
        console.log("add2")
        vegetableBeAdd.quantity -= quantityToAdd;
        await activeCart.save();
        await vegetableBeAdd.save();
    } else {
        // Add a new cart item
        const cartItem = {
            vegetable: vegetableId,
            quantity: quantityToAdd,
            price: vegetableBeAdd.price,
            unit: vegetableBeAdd.unit
        };
        activeCart.items.push(cartItem);
        console.log(activeCart)
        console.log("add1")
        vegetableBeAdd.quantity -= quantityToAdd;
        await vegetableBeAdd.save();
        await activeCart.save();
    }
    res.status(200).json({ message: 'Item added to cart' });
});

const chooseAddressForCart = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const { addressId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        throw new Error("User not found")
    }
    // Ensure the user has an active cart with items
    const activeCart = await getActiveCartsByUserId(userId)
    if (!activeCart || activeCart.items.length === 0) {
        res.status(400).json({ message: 'No active cart with items to choose from' });
        throw new Error("User not found")
    }
    activeCart.chosenAddress = addressId;
    res.status(200).json({ message: 'Address chosen for cart' });
    await activeCart.save();
});

const completePurchase = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        throw new Error("User not found")
    }
    const activeCart = await getActiveCartsByUserId(userId)
    // Calculate total cost for the cart based on items' quantity and price
    const total = activeCart.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );
    // Set the status of the current cart to 'completed'
    activeCart.total = total;
    activeCart.status = 'completed';
    // Create a new cart for the user
    await createCartForUser(userId); // Create and add a new cart
    await activeCart.save();
    res.status(200).json({ message: 'Purchase completed and new cart created' });
});

const updateItemsPrice = asyncHandler(async (vegetableId, newName, newPrice, newUnit) => {
    const carts = await Cart.find({ status: 'active', 'items.vegetable': vegetableId });
    for (const cart of carts) {
        const cartItem = cart.items.find((item) => item.vegetable.toString() === vegetableId);
        if (cartItem) {
            cartItem.name = newName;
            cartItem.price = newPrice;
            cartItem.unit = newUnit;
        }
        await cart.save();
    }
});

const removeItem = asyncHandler(async (req, res) => {
    const userId = req.user.id
    const { vegetable } = req.body // Replace with the actual vegetable ID
    console.log(req.body)
    console.log(userId, vegetable)
    const updatedCart = await Cart.findOneAndUpdate(
        { user: userId, status: 'active' },
        { $pull: { items: { vegetable: vegetable } } },
        { new: true }
    );
    updatedCart.save()
    if (!updatedCart) {
        console.log('Cart not found or item not removed.');
        return;
    }
    console.log('Item removed from cart:', updatedCart);
    res.status(200).json({ message: 'Item removed from cart' });
})
// const updateItemsQuantity = asyncHandler(async (req, res) => {
//     const userId = req.user.id
//     const activeCart = getActiveCartsByUserId(userId)
//     if (!activeCart) {
//         res.status(400).json('Ca')
//         throw new Error('Cart not found');
//     }
//     const items = req.body
//     // Update the quantity of items based on the itemList
//     itemList.forEach(itemToUpdate => {
//         const cartItem = cart.items.find(item => item.vegetable.toString() === itemToUpdate.vegetableId);
//         if (cartItem) {
//             cartItem.quantity = itemToUpdate.quantity;
//         }
//     });

//     // Save the updated cart
//     await cart.save();
// });


module.exports = {
    getActiveCart,
    getCompleteCart,
    addToCart,
    chooseAddressForCart,
    completePurchase,
    updateItemsPrice,
    removeItem
};