const express=require("express")
const router =express.Router()
const {msignup,mLogin,mReg,upload,mLoginPost,mDashboard,addPro,addProPost,viewPro, deletepage,edit,logout,editPost}= require("../Controller/mController")
router.get('/signup',msignup)
router.get('/login',mLogin)
router.post('/login',mLoginPost)
router.get('/addpro',addPro)
router.post('/addpro',upload.single('image'),addProPost)
router.get("/viewPro",viewPro)
router.get('/logout',logout)
router.get('/dashboard',mDashboard)
router.post('/signup',upload.single('image'), mReg)

router.get("/edit/:pid",edit)
router.post("/edit/:pid",editPost)
router.get("/delete/:pid",deletepage)


module.exports =router