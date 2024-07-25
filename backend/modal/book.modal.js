import mongoose from "mongoose";

//defining shema
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

//creating model for schema
const BOOK = mongoose.model("Book",bookSchema);

export default BOOK;