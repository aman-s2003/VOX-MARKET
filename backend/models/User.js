const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    token: { type: String, default: null }, // Field to store the user token
});

module.exports = mongoose.model('User', userSchema);