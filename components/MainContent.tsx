import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart2, LineChart, PieChart, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface MainContentProps {
  className?: string;
}

export function MainContent({ className }: MainContentProps) {
  return (
    <main className={cn("flex-1 overflow-auto px-6 py-4 my-8 bg-transparent", className)}>
      <div className="mb-8 flex items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">Hi, I am Smart E.</h1>
          <p className="text-gray-500 mt-1">Your intelligent AI assistant. How can I help you today?</p>
        </div>
        <div className="flex items-center mx-10 justify-end mb-6">
        <Button>
          <span>New Dashboard</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Smart Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">658,230</p>
                <p className="text-xs text-gray-500">Total Visitors</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Daily Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">+12.5%</p>
                <p className="text-xs text-gray-500">From yesterday</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <LineChart className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">7.2%</p>
                <p className="text-xs text-gray-500">Last 7 days</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <PieChart className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
            <CardDescription>Monthly sales data comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
              <div className="text-center">
                <BarChart2 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Bar chart visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
            <CardDescription>Sales by geographic region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
              <div className="text-center">
                <PieChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Pie chart visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 