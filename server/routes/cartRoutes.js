const express = require("express")
const router = express.Router()
const {
    getActiveCart,
    getCompleteCart,
    addToCart,
    chooseAddressForCart,
    completePurchase,
} = require("../controllers/cartController")
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
router.get('/active', authorization('customer'), getActiveCart)
router.get('/complete', authorization('customer'), getCompleteCart)
router.post('/add',authorization('customer'), addToCart);
router.post('/choose-address', authorization('customer'), chooseAddressForCart)
router.post('/complete-purchase', authorization('customer'), completePurchase);
module.exports = router