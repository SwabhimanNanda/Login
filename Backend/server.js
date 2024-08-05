const express = require("express");
const connectDB = require('./db/dbConnection');
const app = express();
const port = 8000;
const User = require("./db/user")
const cors = require('cors'); // Import the cors package



app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
  res.send("hy")
})
app.post('/register', async(req, res)=>{
  try{
    const {username, password} = req.body;
    const user = new User({username, password});
    await user.save();
    res.status(201).json({message:'registration Successfull'})
    
  }
  catch(error){
    console.log(error)
    res.status(501).json({message:'registration Unsuccessfull'})
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid username or password" });
    }

    return res.status(200).json({ success: true, message: "Login Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


app.post("/forgotpassword", async(req, res)=>{
  const {username} = req.body;
  const user = await User.findOne({username})
  try{
    if(!user){
      return res.status(405).json({message:"can't find the username"})
      
    }
    const userPassword = user.password;
    res.status(501).json({password:userPassword})
  }

  catch(err){
    return res.status(501).json({message:"there is some issue please try later"})
  }
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  connectDB();
});
