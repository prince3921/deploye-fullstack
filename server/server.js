import express from 'express'
import cors from "cors"

const app = express()

app.use(cors({
  origin:[
    "http://localhost:5173",
    "http://localhost:5174",
    // add-public-ip
  ]
}))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/api/message",(req,res)=>{
   return res.json({message:"welcome to hostinger deploy in docker"})
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})