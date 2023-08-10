const express = require("express")
const router = express.Router()
const { 
getVegetable,
getVegetables,
createVegetable,
updateVegetable,
deleteVegetable
} = require("../controllers/vegetablesController")
const validateToken = require("../middleware/validateTokenHandler");
// const {validateToken,authorization} = require("../middleware/validateTokenHandler");
const authorization = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            res.status(403).json({ message: "User is not authorized for this action" });;
            throw Error("User is not authorized for this action")
        }
        console.log(req.user.role)
        next();
    };
};
router.use(validateToken)
router.get('/', getVegetables);
router.post('/', authorization('admin'), createVegetable);
router.get('/:id', getVegetable);
router.put('/:id', authorization('admin'), updateVegetable);
router.delete('/:id', authorization('admin'), deleteVegetable);
module.exports = router

