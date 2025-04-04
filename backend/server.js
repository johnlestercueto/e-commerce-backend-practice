const express = require("express")
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.PORT || 5000
const connectToDB = require("./config/db")
const authRoutes = require("./routes/route.auth")
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res)=> {
    res.send("hello")
})

app.listen(PORT, async () => {
    await connectToDB();
    console.log(`Server started at http://localhost:${PORT}`)
})