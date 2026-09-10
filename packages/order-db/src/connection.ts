import mongoose from "mongoose"
let isConnected = false;
export const connectDB = async () => {
    if(isConnected){
        return;
    }
    if(!process.env.MONGO_URL){
        throw new Error("MongoDB connection failed");
        
    }
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
        isConnected = true;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}
