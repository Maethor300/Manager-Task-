const getAllTask = (req,res) => {
   res.send("All items")
}
const  postTasks = (req,res) =>{
    res.send("Post your tasks")
}
const getTask = (req,res) => {
    res.send("Get single task")
}
const updateTask = (req,res) => {
    res.send("Update Tasks")
}
const deleteTask = (req,res) =>{
    res.send("Delete your tasks")
}
module.exports={
    getAllTask,
    postTasks,
    getTask,
    updateTask,
    deleteTask
}