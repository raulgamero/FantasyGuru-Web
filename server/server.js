require("dotenv").config({ path: "./config.env" });

// extra security packages
const cors = require("cors");

const express = require("express");
const app = express();

// connectDB
const connectDB = require('./db/conn');

// routers
app.use(require("./routes/record"));

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
      await connectDB(process.env.ATLAS_URI)
      app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
  }
  catch (error) {
      console.log(error)
  }
}

start()