const router = require("express").Router()
const User = require("../models/User")
// const Encrypter = require("../Encrypt")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req, res) => {

    // const hashedPwd = await Encrypter.cryptPassword(req.body.password).toString()

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        console.log(savedUser);
    } catch (error) {
        res.status(500).json(error)
    }
    
})

//Login

router.post("/login", async (req, res)=>{
    try {

        const user = await User.findOne({ username: req.body.username})

        if(!user) {
            return res.status(401).json("Wrong credentials")
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
        const pass = hashedPassword.toString(CryptoJS.enc.Utf8)

        if(pass !== req.body.password){ 
            return res.status(401).json("Wrong credentials")
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SEC,
        {expiresIn: "3d"}
        )

        const { password, ...others} = user._doc
        
        return res.status(200).json({...others, accessToken})
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router