export const dynamic = "force-dynamic";
import { connectDB } from "@/lib/databaseConnection"
import ViewModel from "@/models/Views.model";

export async function POST(request) {
    try {
        await connectDB()
        const { url } = await request.json()

        const newView = new ViewModel({ visitedUrl: url })
        await newView.save()

        return new Response(
            JSON.stringify({ message: 'View Recorded' }),
            { status: 201 }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        )
    }
}
