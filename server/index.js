import express, { urlencoded } from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import postModel from './models/postModel.js';
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

connectDB();


app.post('/createPost', async (req, res) => {
    
    postModel.create(req.body)
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
  });

app.get('/getPost', (req, res) => {
    postModel.find({}).sort({createdAt: -1})
    .then((posts) => res.json(posts))
    .catch((err) => res.json(err))
})


app.listen(PORT, () => {
    console.log(`Listening from PORT: ${PORT}`)
})
