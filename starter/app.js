const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js');
require('dotenv').config()
//middleware 
app.use(express.json());
//Routes
app.get("/Hello", function(req,res){
    res.send("Task Manager App")
})
app.use('/api/v1/tasks',tasks)
 
const port = 3000;
const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port,console.log(`Our Server is listening on port:${port}`));
    }catch(error){
         console.log(error)
    }
}

 start()