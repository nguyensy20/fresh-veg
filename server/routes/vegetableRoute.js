const express = require("express")
const router = express.Router()
const { 
getVegetable,
getVegetables,
createVegetable,
updateVegetable,
deleteVegetable
} = require("../controllers/vegetablesController")

router.route('/').get(getVegetables).post(createVegetable)
router.route('/:id').get(getVegetable).put(updateVegetable).delete(deleteVegetable)

module.exports = router