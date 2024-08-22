import multer from 'multer';
import { google } from 'googleapis';
import fs from 'fs';
import express, { urlencoded } from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import postModel from './models/postModel.js';
import mongoose from 'mongoose';
import allRoutes from './routes/index.js';
import { Server } from 'socket.io';
import http from 'http'

const PORT = process.env.PORT;

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin:"*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(`user connected, ${socket.id}`)
    
    socket.on("disconnect", (reason) => {
        console.log(`user disconnected: ${reason}`)
    })
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

connectDB();



app.use(allRoutes)




server.listen(PORT, () => {
    console.log(`Listening from PORT: ${PORT}`)
})