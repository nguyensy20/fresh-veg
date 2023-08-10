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

const getCartById = async (cartId) => {
    const cart = await Cart.findById(cartId);
    return cart;
};

const getActiveCartsByUserId = async (userId) => {
    try {
        const activeCarts = await Cart.find({ user: userId, status: 'active' });
        return activeCarts[0];
    } catch (error) {
        throw new Error('Failed to retrieve active carts');
    }
};

const addToCart = async (req, res) => {
    const userId = req.user.id;
    const { vegetableId, quantity } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        activeCart = await getActiveCartsByUserId(userId)
        if (!activeCart) {
            activeCart = await createCartForUser(userId)
        }
        const vegetable = await Vegetable.findById(vegetableId);
        if (!vegetable) {
            return res.status(404).json({ message: 'Vegetable not found' });
        }
        const vegetableBeAdd = await Vegetable.findById(vegetableId);
        if (!vegetableBeAdd) {
            return res.status(404).json({ message: 'Vegetable not found' });
        }
        // Check if the vegetable already exists in the cart
        const existingCartItem = activeCart.items.find(item => item.vegetable.toString() === vegetableId);
        if (existingCartItem) {
            // Update the quantity of the existing item
            const quantityToAdd = parseInt(quantity, 10);
            existingCartItem.quantity += quantityToAdd;
            console.log("add2")
            vegetable.quantity -= quantityToAdd;
            await activeCart.save();
            await vegetable.save();
        } else {
            const quantityToAdd = parseInt(quantity, 10);
            // Add a new cart item
            console.log(vegetableBeAdd)
            const cartItem = {
                vegetable: vegetableId,
                quantityToAdd,
                price: vegetableBeAdd.price,
                unit: vegetableBeAdd.unit
            };
            activeCart.items.push(cartItem);
            console.log(activeCart)
            console.log("add1")
            vegetable.quantity -= quantityToAdd;
            await vegetable.save();
            await activeCart.save();
        }
        res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to add item to cart' });
    }
};


const chooseAddressForCart = async (req, res) => {
    const userId = req.user.id;
    const { addressId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Ensure the user has an active cart with items
        if (!user.cart || user.cart.status !== 'active' || user.cart.items.length === 0) {
            return res.status(400).json({ message: 'No active cart with items to choose from' });
        }

        user.cart.chosenAddress = addressId;
        await user.save();

        res.status(200).json({ message: 'Address chosen for cart' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to choose address for cart' });
    }
};

const completePurchase = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Calculate total cost for the cart based on items' quantity and price
        const total = user.cart.items.reduce(
            (total, item) => total + item.quantity * item.price,
            0
        );
        // Subtract purchased quantity from items in the Vegetable collection
        for (const item of user.cart.items) {
            const vegetable = item.vegetable;
            if (vegetable) {
                vegetable.quantity -= item.quantity;
                await vegetable.save();
            }
        }
        // Set the status of the current cart to 'completed'
        user.cart.total = total;
        user.cart.status = 'completed';

        // Create a new cart for the user
        user.carts.push(await createCartForUser(userId)); // Create and add a new cart

        await user.save();

        res.status(200).json({ message: 'Purchase completed and new cart created' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to complete purchase' });
    }
};

const updateItems = async (vegetableId, newPrice) => {
    try {
        const carts = await Cart.find({ status: 'active', 'items.vegetable': vegetableId });

        for (const cart of carts) {
            const cartItem = cart.items.find((item) => item.vegetable.toString() === vegetableId);
            if (cartItem) {
                cartItem.price = newPrice;
            }
            await cart.save();
        }
    } catch (error) {
        throw new Error('Failed to update cart items');
    }
};

module.exports = {
    addToCart,
    chooseAddressForCart,
    completePurchase,
};