import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

//rest object
const app = express()
// configure env
dotenv.config();
//database configuration
connectDB()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);





//rest api
app.get('/',(req,res)=>{
    res.send(
        "<h1>Welcome to ShopEZ</h1>"
    )
})
// connect mongoose


//Port
const PORT =process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.Dev_Mode} mode on port ${PORT}`)
})
