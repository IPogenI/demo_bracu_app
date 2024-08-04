import multer from 'multer';
import { google } from 'googleapis';
import fs from 'fs';
import express, { urlencoded } from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import postModel from './models/postModel.js';
import mongoose from 'mongoose';
import allRoutes from './routes/index.js';

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

connectDB();



app.use(allRoutes)


app.listen(PORT, () => {
    console.log(`Listening from PORT: ${PORT}`)
})