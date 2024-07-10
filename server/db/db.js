
import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://shehranr157:data123@cluster2.y88bqo1.mongodb.net/bracu_social?retryWrites=true&w=majority&appName=Cluster2");
        //const conn = await mongoose.connect("mongodb://localhost:27017/social_media");

        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;