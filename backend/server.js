import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';



//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api end point
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log(`Server Stared on http://localhost:${port}`)
})

// mongodb+srv://sujalparsana:1766@cluster0.is5jy.mongodb.net/?

