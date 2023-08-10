const express = require("express")
const router = express.Router()
const {
    getAddressesUser,
    addAddressForLoggedInUser,
    getAddressByIdForLoggedInUser,
    updateAddressForLoggedInUser,
    deleteAddressForLoggedInUser
} = require("../controllers/addressController")
const validateToken = require("../middleware/validateTokenHandler");
// const {validateToken,authorization} = require("../middleware/validateTokenHandler");
const authorization = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            res.status(403).json({ message: "User is not authorized for this action" });;
        }
        req.user = req.user
        next();
    };
};
router.use(validateToken)
router.get('/', getAddressesUser);
router.get('/:id', authorization('customer'), getAddressByIdForLoggedInUser);
router.post('/', authorization('customer'), addAddressForLoggedInUser)
router.put('/:id', authorization('customer'), updateAddressForLoggedInUser);
router.delete('/:id', authorization('customer'), deleteAddressForLoggedInUser);
module.exports = router