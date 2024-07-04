
const express=require('express')
const cors=require('cors');
require('./config/db')
const userRouter=require('./routes/user.route')

const app=express()

app.use(cors());
app.use(express.urlencoded({extended:true}));//form data push korear jnno 
app.use(express.json())
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
    res.send("Helldsadfsafsdfo World!");
    res.sendFile(__dirname + './views/index.html')
  });

/* user router */




/* invalid router */
app.use((req,res,next)=>{

res.status(404).json({message:"NOT FOUND",status:404})


})
/* server error */
app.use((err,req,res,next)=>{
    
res.status(500).json({message:"INTERNAL SERVER ERROR",status:500})

})



module.exports=app;