const express =require("express")
const router =express.Router()
const {landingPage,productView} =require('../Controller/uController')
router.get('/',landingPage)
router.get('products/:category',productView)
module.exports=router