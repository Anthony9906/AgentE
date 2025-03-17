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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左侧列 - 技能列表 */}
        <div className="space-y-4">
          {/* AI Skills 标题 */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center">
              <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-600">Recent Tasks</h2>
          </div>
          <p className="text-xs text-gray-400 mb-4">Review your recent tasks and information</p>

          {/* Smart Q&A 卡片 */}
          <Card className="border hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-base text-gray-600 mb-1">Smart Q&A</h3>
                  <p className="text-xs text-gray-400">Conversational interface for data analysis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Q&A Summary 卡片 */}
          <Card className="border hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base text-gray-600 mb-1">Q&A Summary</h3>
                  <p className="text-xs text-gray-400">Summarize your conversation insights</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* KPI Diagnose 卡片 */}
          <Card className="border hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <BarChart2 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-base text-gray-600 mb-1">KPI Diagnose</h3>
                  <p className="text-xs text-gray-400">Analyze your metrics data performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 右侧列 - 详细信息 */}
        <div className="space-y-4">
          {/* AI Skills 标题 */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center">
              <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-600">AI Skills</h2>
          </div>
          <p className="text-xs text-gray-400 mb-4">Ability of Smart Q to do things</p>
          {/* Report Summary 卡片 */}
          <Card className="border hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base text-gray-600 mb-1">Knowledge Base</h3>
                  <p className="text-xs text-gray-400">The knowledge and reference for retrieval</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report Design 卡片 */}
          <Card className="border hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-base text-gray-600 mb-1">Toolbox</h3>
                  <p className="text-xs text-gray-400">What tools can Smart Q use and act</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* More 卡片 */}
          <Card className="border hover:shadow-md transition-shadow bg-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Grid className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-base text-gray-600 mb-1">Memory</h3>
                  <p className="text-xs text-gray-400">Remember everything and experiences</p>
                </div>
              </div>
            </CardContent>
          </Card>
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