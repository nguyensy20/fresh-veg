const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    phone: {
      type: String,
      required: [true, "Please add the user phone"],
    },
    addresses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
      },
    ],
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    role: {
      type: String,
      required: [true, "Please add the user role"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
module.exports = User;