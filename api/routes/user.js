const router = require("express").Router()
const verifyToken = require("./verifyToken")
const verifyTokenAndAuthorization = require('./verifyToken')
const verifyTokenAndAdmin = require("./verifyToken")
const CryptoJS = require("crypto-js")
const User = require("../models/User")

//UPDATE
router.put('/:id',verifyTokenAndAuthorization,async (req, res)=>{
  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {new:true})

    return res.status(200).json(updatedUser)
  } catch (error) {
    return res.status(403).json(error)
  }
})

// DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).json("User has been deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
})

//GET A USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others} = user._doc
        return res.status(200).send(others)

    } catch (error) {
        return res.status(500).json(error)
    }
})

//GET ALL USERS
router.get("/", verifyTokenAndAdmin , async (req, res)=>{

    const query = req.query.new
    try {
        const users = query 
        ? await User.find().sort({_id:-1}).limit(5) 
        : await User.find();
        return res.status(200).send(users)

    } catch (error) {
        return res.status(500).json(error)
    }
})

//GET USERS STATS - return total numer of users per month limit with last year
router.get("/stats", verifyTokenAndAdmin, async (req, res)=> {
    const date = new Date()
    const lastYear = new Date(date.getFullYear(date.getFullYear() - 1))

    try {
        
        const data = await User.aggregate([
            {$match: {createdAt: { $gte: lastYear} } },
            {
                $project : {
                    month: { $month: "$createdAt" },
                }
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: 1}
                }
            }

        ])

        res.send(data)

    } catch (error) {
        return res.status(500).json(error)
    }
})


module.exports = router