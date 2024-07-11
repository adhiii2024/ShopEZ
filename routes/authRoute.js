import express from 'express';
import {registerController,loginController,testController, forgetPasswordController, updateProfileController,  getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';
//router object
const router = express.Router()

//routing
//Register || Method POST
router.post('/register',registerController);

//Login || Method POST
router.post('/login',loginController)

//forget password
router.post('/forgot-password',forgetPasswordController)
//testroutes
router.get('/test',requireSignIn,isAdmin,testController)

// protected user route-auth
router.get('/user-auth',requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
})
// protected admin route auth
router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
})

//update profile
router.put('/profile',requireSignIn,updateProfileController)

//orders
//orders
router.get("/orders", requireSignIn, getOrdersController);

// all orders

router.get('/all-orders',requireSignIn, isAdmin, getAllOrdersController)


//order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );
  

export default  router;


