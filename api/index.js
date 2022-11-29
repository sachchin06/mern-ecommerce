const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const CartRoute = require("./routes/cart")
const OrderRoute = require("./routes/order")
const StripeRoute = require("./routes/stripe")
const cors = require("cors")



const mongoose = require('mongoose')
mongoose.connect(
    process.env.MONGO_URL
    ).then(() => console.log("DBConnection Successfull !"))
    .catch((err) => {console.log(err)})

app.use(cors())
app.use(express.json())

app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/product", productRoute)
app.use("/api/cart", CartRoute)
app.use("/api/order", OrderRoute)
app.use("/api/checkout", StripeRoute)

app.use("/", (req, res)=>{
    res.send("from index")
})

app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Backend server is running on port 5000`);
})