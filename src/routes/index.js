const router = require('express').Router()

router.get('/',(req,res)=>{
    res.json({message:'api JoDev'})
})

module.exports = router