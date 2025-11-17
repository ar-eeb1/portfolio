import mongoose from "mongoose";

export const dynamic = "force-dynamic";

const MONGODB_URI = process.env.MONGODB_URL;
if (!MONGODB_URI) throw new Error("Missing MONGODB_URL");

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "PORTFOLIO-AREEB",
            bufferCommands: false,
        }).then((conn) => conn);
    }

    cached.conn = await cached.promise;
    return cached.conn;
};
