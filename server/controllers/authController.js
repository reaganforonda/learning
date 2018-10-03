const axios = require('axios');
const bcrypt = require('bcryptjs');

module.exports = {
    register : async (req, res) => {
        const db = req.app.get('db');
    },

    login: (req, res) => {
        const db = req.app.get('db');
    }
}