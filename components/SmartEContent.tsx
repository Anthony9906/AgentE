"use client";

import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, ChevronDown, Grid, BarChart2, PieChart, Star, BookmarkCheck, MessageSquare, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SmartEContentProps {
  className?: string;
}

export function SmartEContent({ className }: SmartEContentProps) {
  return (
    <main className={cn("flex-1 overflow-auto px-6 py-4 my-8 bg-transparent", className)}>
      {/* 顶部问候区域 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-600 mb-2 flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-blue-500" /> 
            Hi, I am Smart Q
        </h1>
        <p className="text-gray-400 mb-6 text-sm">
          Your super AI assistant on data consumption! I can do better things for you.
        </p>
        
        {/* 搜索栏 */}
      </div>

      {/* 主要内容区域 - 两列布局 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧列 - Smart Q&A 部分 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-600">Smart Q&A</h2>
              </div>
              <Button variant="outline" className="flex items-center gap-2 text-sm">
                <span>View all</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* 标签切换 */}
            <div className="mb-6">
              <Tabs defaultValue="corp" className="w-full">
                <TabsList className="bg-gray-100 p-1 rounded-full">
                  <TabsTrigger value="corp" className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white">Corp Operation</TabsTrigger>
                  <TabsTrigger value="customer" className="rounded-full">Customer Sales</TabsTrigger>
                  <TabsTrigger value="analysis1" className="rounded-full">Analysis Topic1</TabsTrigger>
                  <TabsTrigger value="analysis2" className="rounded-full">Analysis Topic2</TabsTrigger>
                  <TabsTrigger value="more" className="rounded-full">
                    <Grid className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* 分析卡片区域 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CRM Analysis 卡片 */}
              <Card className="border hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold text-gray-600">CRM Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Customer</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Product</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Funnel</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Analysis 卡片 */}
              <Card className="border hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold text-gray-600">Campaign Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Campaign</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Sales Amount</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Profit</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Channel acquisition analysis 卡片 */}
              <Card className="border hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold text-gray-600">Channel acquisition analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Channel</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Product</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Sales</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">Profit</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 查看更多数据按钮 */}
            <div className="flex justify-end mt-4">
              <Button variant="ghost" className="text-blue-600 flex items-center gap-1 text-sm">
                <span>All Available Data</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* 右侧列 - Smart Skills 部分 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Star className="h-4 w-4 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-600">Smart Skills</h2>
              </div>
              <Button variant="outline" className="flex items-center gap-2 text-sm">
                <span>View all</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-400 mb-6 text-sm">Efficiency tools for data consumption scenarios</p>

            {/* 技能卡片 */}
            <div className="space-y-4">
              {/* KPI Diagnose 卡片 */}
              <Card className="border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mt-1 border border-gray-200">
                      <BarChart2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-gray-600 mb-1">KPI Diagnose</h3>
                      <p className="text-xs text-gray-400">Analyze your KPI data for better decision-making</p>
                      <div className="mt-3 text-xs text-gray-300">
                        # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Analytics</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Report Summary 卡片 */}
              <Card className="border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mt-1 border border-gray-200">
                      <PieChart className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-gray-600 mb-1">Report Summary</h3>
                      <p className="text-xs text-gray-400">Summarize reports with key insights</p>
                      <div className="mt-3 text-xs text-gray-300">
                        # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Reporting</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* More 卡片 */}
              <Card className="border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mt-1 border border-gray-200">
                      <Grid className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base text-gray-600 mb-1">More</h3>
                      <p className="text-xs text-gray-400">Click here for more efficiency skills</p>
                      <div className="mt-3 text-xs text-gray-300">
                        # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Tools</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* 底部聊天输入框 */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-600">
            <span>Your Data Topic</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="What kind of report do you want to design?" 
              className="w-full py-2 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l7-7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full w-10 h-10 p-0 flex items-center justify-center">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Button>
        </div>
      </div>
    </main>
  );
} 