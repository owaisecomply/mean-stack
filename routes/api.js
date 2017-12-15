const express = require("express");
const router = express.Router();
//const todo = require("../models/todolist")

router.get("/todos", (req, res)=>{
    const todos =[
        {
            name:"task1",
            description:"this is task one ",
            isCompleted:true
        },
        {
            name:"task2",
            description:"this is task two ",
            isCompleted:false
        }
    ];
    res.json(todos)
    // todo.find(function(err, todos){
    //     if(err){
    //         res.json(err)
    //     }else{
    //         res.json(todos)
    //     }
    // })
})

router.post("/todos", (req, res, next)=>{
    // console.log("add todo", req.body)
    // let newtodo = new todo({
    //     name: req.body.todoName,
    //     description : req.body.todoDescription,
    //     isComplete: req.body.isComplete
    // })
    // newtodo.save((err, todo)=>{
    //     if(err){
    //         res.json(err)
    //     }else{
    //         res.json(req.body)
    //     }
    // })
})

router.put("/todo/:id", (req, res)=>{
    // let payload = {
    //     name: req.body.todoName,
    //     description: req.body.todoDescription,
    //     isComplete: req.body.isComplete
    // }
    // todo.findByIdAndUpdate(req.params.id, { $set:payload}, (err, result)=>{
    //     if(err){
    //         res.json(err);
    //     }else{
    //         res.json(result);
    //     }
    // })
  //  res.json({type:"put"})
})

router.delete("/todos", (req, res)=>{
    res.json({type:"delete"})
})

module.exports = router;