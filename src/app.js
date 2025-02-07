import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// to accept json files 
app.use(express.json({limit: "16kb"}))

// to accept data from an URL like form POST requests
app.use(express.urlencoded({extended: true, limit:"16kb"}))

//ye basically koi static files jo webpages prr chahiye hi unko store krr leta hai aur public usi file ka naam hai jo humne ek folder bana krr rakha hai
app.use(express.static("public"));

//used for accesing server cookies and setting them
app.use(cookieParser());

export { app }