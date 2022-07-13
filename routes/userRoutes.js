const User = require("../models/user")
const express= require('express')


const router=express.Router()


// RETURN ALL USERS 
router.get("/", async (req,res)=>{
    try {
        const allUsers = await User.find({})
        res.send(allUsers)
        console.log(allUsers)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message) 
    }
})
//  ADD A NEW USER TO THE DATABASE 
router.post("/addUser", async (req, res)=>{
    try {
        const existUSer = await User.findOne({name:req.body.name})
        if(existUSer){ return res.status(400).send({msg: "name already exist"})} 

        const newUser = new User({...req.body})
        await newUser.save()
        res.send({msg:"user added successufully", newUser})
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message)

    }
})
// EDIT A USER BY ID
router.put("/:id", async (req, res)=>{
    try {
        const updateUser= await User.updateOne({_id: req.params.id}, {$set:{...req.body}})
        const newUser = await User.find({_id: req.params.id})
        if(updateUser.modifiedCount){ return res.send({msg: "user updated", newUser})}
        res.status(400).send("user already edited")
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})
//REMOVE A USER BY ID 
router.delete('/REMOVE/:id', async (req,res)=> {
    try {
        const deleteUser = await User.deleteOne({_id:req.params.id})
        if(deleteUser.deletedCount){ return res.send({msg:"User deleted"})}
        res.status(400).send({msg:" User is already deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)   
   
        
    }
})
module.exports= router

 

