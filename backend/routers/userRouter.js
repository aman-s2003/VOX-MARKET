const express = require('express');
const Model = require('../models/userModel');
const CartModel = require('../models/cartModel');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifytoken = require('../middlewares/verifytoken');
// const verifyToken = require('../middleware/verifyToken')
require('dotenv').config();


router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);

            // create new cart for the user
            const cart = new CartModel({ user: result._id });
            cart.save()
                .then(() => {
                    console.log('Cart created for user:', result._id);
                })
                .catch((err) => {
                    console.error('Error creating cart:', err);
                });

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});




router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getdetails', verifytoken, (req, res) => {
    Model.findById(req.user._id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                if (result.blocked) {
                    return res.status(405).json({ message: 'user blocked' })
                }
                //generate tokan
                const { _id, name, email } = result;
                const payload = { _id, name, email }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1h'
                    },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err)
                        }
                        else {
                            res.status(200).json({ token });
                        }
                    }
                )
            }
            else {
                res.status(401).json({ message: 'invalid user email or password' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)

        });
});

router.put('/updatedetails/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.delete('/deletebyid/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;
