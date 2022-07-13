const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String, required:true, lowercase: true},
    age: Number,
    phone:Number,
    email:{type:String, trim:true,lowercase: true},
    available:{type: Boolean, default: true}
})

module.exports= User = mongoose.model("user", userSchema)