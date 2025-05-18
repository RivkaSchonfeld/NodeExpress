import express from "express";
import r from "./router.js"
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/render", r)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/render`);
});



