import mongoose from "mongoose";
const viewsSchema = new mongoose.Schema({
    visitedUrl: {
        type: String,
        required: true

    }
}, { timestamps: true })

const ViewModel = mongoose.models.View || mongoose.model('View', viewsSchema, 'views')
export default ViewModel