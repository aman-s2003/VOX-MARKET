const express = require('express');
const Model = require('../models/cartModel');
const verifytoken = require('../middlewares/verifytoken');
const router = express.Router();


router.post('/cart', verifytoken, (req, res) => {
    req.body.user = req.user._id;
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
