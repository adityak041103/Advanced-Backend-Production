import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
});

connectDB()
// After database get connected we will start our HTTP server using app.listen() to listen the requests on server
.then(() => {
    app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`); 
    })
})
.catch((err) => {
    console.log("MongoDB connection failed!!!", err);  
}) 