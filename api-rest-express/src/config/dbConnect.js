import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vinicius:1234567890@cluster0.mqykj4l.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;