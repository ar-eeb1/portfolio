import mongoose from "mongoose";
// Make sure to read the variable here
const MONGODB_URI = process.env.MONGODB_URI 

let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}

export const connectDB = async () => {
    // ----------------------------------------------------
    // ADD THIS CRITICAL CHECK:
    if (!MONGODB_URI) {
        // This will show up clearly in the Vercel logs/response
        throw new Error("❌ MONGODB_URI environment variable is not defined in the Vercel environment.");
    }
    // ----------------------------------------------------

    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { // MONGODB_URI will be a string now
            dbName: 'PORTFOLIO-AREEB',
            bufferCommands: false
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}