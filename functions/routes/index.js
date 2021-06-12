const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('Welcome')
})
router.use('/books',require('./book.route'))

module.exports = router