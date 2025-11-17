import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI
// TEMPORARY DEBUG LOG
console.log("Attempting to connect with URI:", MONGODB_URI ? "URI is set" : "URI is UNDEFINED!");
// END TEMPORARY DEBUG LOG

let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}


export const connectDB = async () => {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: 'PORTFOLIO-AREEB',
            bufferCommands: false
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}