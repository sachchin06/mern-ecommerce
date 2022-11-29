const router = require("express").Router()
const verifyToken = require("./verifyToken")
const verifyTokenAndAuthorization = require('./verifyToken')
const verifyTokenAndAdmin = require("./verifyToken")
const CryptoJS = require("crypto-js")
const Cart = require("../models/Cart")

//CREATE

router.post("/",verifyToken, async (req, res)=>{
    const newCart = new Product(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// UPDATE
router.put('/:id',verifyTokenAndAuthorization,async (req, res)=>{
 

  try {
    const updatedCart = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new:true})

    return res.status(200).json(updatedCart)
  } catch (error) {
    return res.status(403).json(error)
  }
})

// DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        return res.status(200).json("Cart has been deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET USER CART
router.get("/find/:userId",verifyTokenAndAuthorization , async (req, res)=>{
    try {
        const cart = await Cart.findOneAndDelete({userId: req.params.userId})
        
        return res.status(200).send(cart)

    } catch (error) {
        return res.status(500).json(error)
    }
})

//GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const carts = await Cart.find()
        return res.status(200).json(carts)
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router