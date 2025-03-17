"use client";

import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart2, LineChart, PieChart, TrendingUp, ArrowRight, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface MainContentProps {
  className?: string;
}

export function MainContent({ className }: MainContentProps) {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <main className={cn("flex-1 overflow-auto px-6 py-2 my-8 bg-transparent", className)}>
      <div className="flex h-full">
        <div 
          className={`transition-all duration-300 ease-in-out ${
            showChatbot ? 'w-[60%] pr-4' : 'w-full'
          }`}
        >
          
          <div className="grid grid-cols-1 gap-6 mb-8 bg-transparent">
            <Card className="col-span-1 transition-all duration-300 ease-in-out bg-transparent border-none shadow-none">
              <CardHeader className="flex flex-col items-center relative pb-10 pt-0">
                <div className="w-full flex justify-between items-center mb-2">
                  <div className="flex-1"></div> {/* 左侧空白区域，用于平衡布局 */}
                  <div className="text-center flex-grow-2">
                    <CardTitle className="text-3xl font-bold text-gray-600">Explore Agentic Hub</CardTitle>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <Button 
                      variant="outline" 
                      className="hover:bg-blue-500 hover:text-white transition-colors duration-200" 
                      onClick={() => setShowChatbot(!showChatbot)}
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span className="ml-2">{showChatbot ? 'Hide Search' : 'AI Search'}</span>
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-center text-gray-400 max-w">
                  Explore the power of AI Agents to boost your career. <br />
                  Build and grow "Smart E", an AI that understands you better and acts smarter.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-auto flex flex-col bg-transparent rounded-md pb-0">
                  {/* 顶部图片区域 */}
                  <div className="relative h-48 mb-6 flex justify-center items-center rounded-md">
                    <Image 
                      src="/AgenticE.jpeg" 
                      alt="Agentic Illustration" 
                      width={600} 
                      height={200}
                      className="object-contain rounded-md md:rounded-lg"
                      onError={(e) => {
                        // 如果图片加载失败，显示备用内容
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* 在AI Agents卡片网格之前添加标题区域 */}
                  <div className="flex justify-between items-center mb-4 mt-2">
                    <h2 className="text-xl font-bold text-gray-600"> </h2>
                    <p className="text-sm text-gray-400 italic">Agents in Agentic Hub.</p>
                  </div>
                  
                  {/* AI Agents 卡片网格 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                    {/* 卡片 1: 智能助手创建 */}
                    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-600 mb-1"><span className="text-blue-400 text-2xl">/</span> Agent Creation</h3>
                      <p className="text-xs text-gray-400 italic mb-2">Build personalized AI assistants that understand your unique needs and workflows</p>
                    </div>
                    
                    {/* 卡片 2: 自动化工作流 */}
                    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                      <h3 className="font-bold text-lg text-gray-600 mb-1"><span className="text-purple-500 text-2xl">/</span> Workflow Automation</h3>
                      <p className="text-xs text-gray-400 italic mb-2">Delegate repetitive tasks to your agents and boost productivity by 10x</p>
                    </div>
                    
                    {/* 卡片 3: 智能决策支持 */}
                    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                      <h3 className="font-bold text-lg text-gray-600 mb-1"><span className="text-green-600 text-2xl">/</span> Decision Intelligence</h3>
                      <p className="text-xs text-gray-400 italic mb-2">Leverage AI-powered insights to make better decisions faster in your career</p>
                    </div>
                    
                    {/* 卡片 4: 持续学习与成长 */}
                    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                      <h3 className="font-bold text-lg text-gray-600 mb-1"><span className="text-orange-600 text-2xl">/</span> Continuous Growth</h3>
                      <p className="text-xs text-gray-400 italic mb-2">Your "Smart E" evolves with you, learning from interactions to provide increasingly personalized assistance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
        
        <div 
          className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            showChatbot 
              ? 'w-[40%] opacity-100 translate-x-0' 
              : 'w-0 opacity-0 translate-x-full'
          }`}
        >
          {showChatbot && (
            <iframe
              src="https://udify.app/chatbot/klVEPKx3YyS05rtK"
              style={{ width: '100%', height: '100%', minHeight: '700px' }}
              frameBorder="0"
              allow="microphone"
            ></iframe>
          )}
        </div>
      </div>
    </main>
  );
}
