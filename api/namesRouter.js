const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    next()
})

router.post('/', (req, res, next)=> {
    next()
})

module.exports = router;