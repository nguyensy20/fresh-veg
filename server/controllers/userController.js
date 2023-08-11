const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Address = require("../models/addressModel");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, address, password } = req.body;
  if (!name || !email || !password || !phone || !address) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }
  console.log(name, email, phone, address, password)
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    role: "customer"
  });
  console.log(`User created ${user}`);
  if (user) {
    const userAddress = await Address.create({
      address: address,
      user: user._id,
    });
    if (userAddress) {
      user.addresses.push(userAddress)
      await user.save();
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("Failed to create user address");
    }
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  //compare password with hashedpassword
  console.log(user)
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.addresses,
          role: user.role,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
})

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

const updateUser = asyncHandler(async (req, res) => {
  console.log("update profile")
  userToUpdate = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      {new: true}
  );
  res.status(200).json(userToUpdate);
})

module.exports = { registerUser, loginUser, currentUser, getUsers, updateUser };