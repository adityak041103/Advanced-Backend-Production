import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(connectionInstance);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`) // To know on which database we are getting connected
    } catch (error) {
        console.log("MONOGODB connection error", error);
        process.exit(1);
    }
}

export default connectDB;