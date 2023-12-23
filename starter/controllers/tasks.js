const getAllTask = (req,res) => {
   res.send("All items")
}
const  postTasks = (req,res) =>{
    res.json(req.body)
}
const getTask = (req,res) => {
    res.send({id:req.params.id})
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