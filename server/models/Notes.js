const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const NotesSchema = new Schema({
    user:{
        type:Schema.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    },
})


module.exports=mongoose.model('Note',NotesSchema)