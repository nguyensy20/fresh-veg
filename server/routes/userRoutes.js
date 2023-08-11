const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
  getUsers,
  updateUser
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const authorization = (role) => {
  return (req, res, next) => {
      if (req.user.role !== role) {
          res.status(403).json({ message: "User is not authorized for this action" });;
      }
      
      next();
  };
};
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

router.get("/", validateToken, authorization("admin"),  getUsers)

router.put("/", validateToken, updateUser)
module.exports = router;