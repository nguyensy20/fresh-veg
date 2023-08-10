const express = require("express");
const errorHandler = require("./middleware/errorHandle");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors")

connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.use(errorHandler)
app.use("/users", require("./routes/userRoutes"))
app.use("/vegetables", require("./routes/vegetableRoute"))
app.use("/address", require("./routes/addressRoutes"))
app.use("/cart", require("./routes/cartRoutes"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})