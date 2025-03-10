const express = require('express');
const Model = require('../models/productModel');
const product = express.Router();

product.post('/add', (req, res) => {
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

product.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})
product.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
            });
        })

     product.put('/update/:id',(req,res)=>{
        Model.findByIdAndUpdate(req.params.id,req.body,{ new: true })
        .then((result) => {
            res.status(200).json(result);
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
                });
            })   


module.exports = product;