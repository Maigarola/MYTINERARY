const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


router.get('/all', (req, res) => {
    userModel.find()
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});

router.post('/add', (req, res) => {

    const {name, email, password} = req.body;
      
    //Simple validation
    if (!name || !email ||!password){
        return res.status(400).json({msg:"Please enter all fields"});
    }

    console.log("Add users")
    //Check for existing model
    userModel.findOne({email})
    .then(user =>{
        if (user) return res.status(400).json({msg: "User alredy exists "});

        const newUser = new userModel({
            name,
            email,
            password
        });

        //Create salt & hash
        bcrypt.genSalt(10,(err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) =>{
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user => {

                    jwt.sign(
                        {id: user.id},
                        config.get('jtwsecret'),
                        {expiresIn: 3600},
                        (err,token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                   
                })
            })
        })
    })
});

module.exports = router;