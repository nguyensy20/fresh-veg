const Address = require('../models/addressModel'); // Make sure to provide the correct path
const asyncHandler = require("express-async-handler");
// Retrieve addresses for a user
const getAddressesUser = asyncHandler(async (req, res) => {
    const userId = req.user.id; // Assuming you have the user ID from authentication
    console.log(userId)
    try {

        const addresses = await Address.find({ user: userId });
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving addresses' });
    }
});

// Create a new address for a logged-in user
const addAddressForLoggedInUser = asyncHandler(async (req, res) => {
    const userId = req.user.id; // Assuming you have the user ID from authentication
    const addressData = req.body;
    console.log("on")

    try {
        // Create the address and associate it with the user
        const newAddress = await Address.create({
            ...addressData,
            user: userId,
        });
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create address' });
    }
});
const updateAddressForLoggedInUser = asyncHandler(async (req, res) => {
    const addressId = req.params.id; // Assuming address ID is passed in the URL
    try {
        console.log("update")
        addressToUpdate = await Address.findByIdAndUpdate(
            addressId,
            req.body,
            {new: true}
        );
        res.status(200).json(addressToUpdate);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update address' });
    }
});

// Delete an address for a logged-in user
const deleteAddressForLoggedInUser = asyncHandler(async (req, res) => {
    const userId = req.user.id; // Assuming you have the user ID from authentication
    const addressId = req.params.id; // Assuming address ID is passed in the URL

    try {
        // Find the address by ID and user to ensure ownership
        const address = await Address.findOne({ _id: addressId, user: userId });

        if (!address) {
            return res.status(404).json({ message: 'Address not found' });
        }
        console.log("delte")
        // Delete the address
        await Address.deleteOne({
            _id: addressId
        });

        res.status(200).json({ message: 'Address deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete address' });
    }
});

const getAddressByIdForLoggedInUser = asyncHandler(async (req, res) => {
    const userId = req.user.id; // Assuming you have the user ID from authentication
    const addressId = req.params.id; // Assuming address ID is passed in the URL

    try {
        // Find the address by ID and user to ensure ownership
        const address = await Address.findOne({ _id: addressId, user: userId });

        if (!address) {
            return res.status(404).json({ message: 'Address not found' });
        }

        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving address' });
    }
});

// Export the functions
module.exports = {
    getAddressesUser,
    addAddressForLoggedInUser,
    updateAddressForLoggedInUser,
    deleteAddressForLoggedInUser,
    getAddressByIdForLoggedInUser
};
