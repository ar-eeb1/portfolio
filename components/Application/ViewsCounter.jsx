"use client"
import { useEffect, useState, useMemo } from "react"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { TrendingUp, Eye, Globe } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  views: {
    label: "Views",
    color: "hsl(var(--chart-1))",
  },
}

const ViewsCounter = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/view/get");
        
        if (!res.ok) {
          throw new Error("Failed to fetch views");
        }
        
        const data = await res.json();

        const counts = data.views.reduce((acc, v) => {
          acc[v.visitedUrl] = (acc[v.visitedUrl] || 0) + 1;
          return acc;
        }, {});

        // Convert to array and sort by views
        const formatted = Object.keys(counts)
          .map((url) => ({
            website: url
              .replace(/^https?:\/\//, "")
              .replace(/\/$/, "")
              .split("/")[0], // Get just the domain
            fullUrl: url,
            views: counts[url],
          }))
          .sort((a, b) => b.views - a.views);

        setChartData(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchViews();
  }, []);

  const stats = useMemo(() => {
    if (chartData.length === 0) return null;
    
    const totalViews = chartData.reduce((sum, item) => sum + item.views, 0);
    const topSite = chartData[0];
    const avgViews = Math.round(totalViews / chartData.length);
    
    return { totalViews, topSite, avgViews };
  }, [chartData]);

  if (isLoading) {
    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Website Views</CardTitle>
          <CardDescription>Loading analytics...</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading chart data...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Website Views</CardTitle>
          <CardDescription>Error loading data</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="text-destructive">Error: {error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Website Views
            </CardTitle>
            <CardDescription>Total views per website</CardDescription>
          </div>
          {stats && (
            <div className="text-right">
              <div className="text-2xl font-bold">{stats.totalViews}</div>
              <div className="text-xs text-muted-foreground">Total Views</div>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
              <XAxis 
                dataKey="website" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={10}
                angle={-45}
                textAnchor="end"
                height={80}
                className="text-xs"
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tickMargin={10}
                className="text-xs"
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                cursor={{ fill: "hsl(var(--muted))" }}
              />
              <Bar 
                dataKey="views" 
                fill="hsl(var(--chart-1))" 
                radius={[8, 8, 0, 0]}
                maxBarSize={60}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      {stats && (
        <CardFooter className="flex-col items-start gap-3 border-t pt-6">
          <div className="flex items-center gap-2 font-medium">
            <TrendingUp className="h-4 w-4 text-chart-1" />
            Top Performer
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Globe className="h-4 w-4 mt-0.5 text-muted-foreground" />
            <div>
              <span className="font-semibold text-foreground">{stats.topSite.website}</span>
              <span className="text-muted-foreground"> leads with </span>
              <span className="font-semibold text-foreground">{stats.topSite.views}</span>
              <span className="text-muted-foreground"> views ({Math.round((stats.topSite.views / stats.totalViews) * 100)}% of total)</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            Average views per site: <span className="font-medium text-foreground">{stats.avgViews}</span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ViewsCounter;