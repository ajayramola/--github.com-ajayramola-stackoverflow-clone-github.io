 import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(express.json({limit: "300mb",expended:true}))
app.use(express.urlencoded({limit:"30",extended:true}))
app.use(cors());

app.get('/',(req,res) => {
    res.send("This is a stack overflow clone API")
})

const PORT = process.env.PORT || 5000
const CONNECTION_URL = "mongodb+srv://ramola:ramola@stack-over-clone.eac4fur.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen (PORT,()=>{console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))