const express = require('express');
const Model = require('../models/productModel');
const verifytoken = require('../middlewares/verifytoken');
const product = express.Router();

product.post('/add', verifytoken, (req, res) => {
    req.body.seller = req.user._id;
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
product.post('/addtocart', verifytoken, (req, res) => {
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


product.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

product.get('/getbycategory/:category', (req, res) => {
    Model.find({ category: req.params.category })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
product.get('/getbysearch/:search', (req, res) => {
    Model.find({ $or: [{ name: { $regex: req.params.search, $options
: 'i' } }, { category: { $regex: req.params.search, $options: 'i' } }] })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        }
    );
});

product.get('/getbycategory/:category', (req, res) => {
    Model.find({ category: req.params.category })

    
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
   

product.get('/getbyseller', verifytoken, (req, res) => {
    Model.find({ seller: req.user._id })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
product.get('/getbyuser', verifytoken, (req, res) => {
    Model.find({ user: req.user._id })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

product.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})
product.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

product.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = product;
