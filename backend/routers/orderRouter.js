const express = require("express");
const Model = require("../models/orderModel");
const verifytoken = require('../middlewares/verifytoken');
const router = express.Router();

// Create a new order
router.post("/buyproduct",  async (req, res) => {
    try {
        const order = new Model(req.body);
        await order.save();
        res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        res.status(500).json({ error: "Failed to create order", details: error.message });
    }
});

// Get all orders for a user
router.get("/user-orders", verifytoken, async (req, res) => {
    try {
        const orders = await Model.find({ userId: req.user.id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch orders", details: error.message });
    }
});

// Get a specific order by ID
router.get("buy/:id",  async (req, res) => {
    try {
        const order = await Model.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch order", details: error.message });
    }
});

// Delete an order by ID
router.delete("/:id", verifytoken, async (req, res) => {
    try {
        const order = await Model.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete order", details: error.message });
    }
});

module.exports = router;



