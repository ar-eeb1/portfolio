import { connectDB } from "@/lib/databaseConnection"
import ViewModel from "@/models/Views.model"

export async function GET() {
    try {
        await connectDB()
        const views = await ViewModel.find().sort({ createdAt: -1 })

        return new Response(
            JSON.stringify({ success: true, views }),
            { status: 200 }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        )
    }
}
