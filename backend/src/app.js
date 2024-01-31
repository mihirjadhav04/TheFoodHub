import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRouter from "./routes/reservation.routes.js";

const app = express()
dotenv.config( 
    {
        path: "./env"
    }
);

// to connect backend with frontend
app.use(cors({
    origin: [
        process.env.FRONTEND_URL, 
        "the-food-hub-backend.vercel.app",
        "the-food-hub-backend-6rpz95mq1-mihir-jadhavs-projects.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
}))

// 4 MAIN CONFIGURATION.
//to set configuration and middleware.
app.use(express.json({
    limit: "16kb"
}))

// below is done fro url input data configuration
// with encoded you can give nested objects too. But in most cases you won't be using it.
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// configuraition for public static assests.
app.use(express.static("public"))

// app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/ok', (req, res) => {
    res.json('It Worked!');
});

app.use("/api/v1/reservation", reservationRouter);



export default app