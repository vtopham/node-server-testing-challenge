const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).json({message: "You reached the router"})
});

module.exports = router;