"use client";

import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, ExternalLink, Filter, Download, Wrench, BotMessageSquare, Link2, GitCompareArrows, BookmarkCheck, Star } from 'lucide-react';
import Image from 'next/image';

interface FindAIContentProps {
  className?: string;
}

export function FindAIContent({ className }: FindAIContentProps) {
  return (
    <main className={cn("flex-1 overflow-auto px-6 py-4 my-8 bg-transparent", className)}>
      {/* 顶部标题和搜索区域 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-600 mb-2">Explore AI Agents to boost your efficiency</h1>
        <p className="text-gray-400 mb-6 text-sm">
        Discover  
        <span className="text-blue-400 text-sm"> agents</span>, 
        <span className="text-blue-400 text-sm"> workflows</span>, 
        <span className="text-purple-400 text-sm"> tools</span> and 
        <span className="text-purple-400 text-sm"> mcps</span> in Agentic Hub
      </p>
      
        {/* 搜索栏 */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search agent.."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button variant="outline" className="px-4">
            <span>All Tags</span>
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>
        
        {/* 分类标签 */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
            <BookmarkCheck className="mr-2 h-5 w-5" />
            All
            </Button>
          <Button variant="ghost" className="hover:bg-gray-100">
            <BotMessageSquare className="mr-2 h-5 w-5" />
            Agents
          </Button>
          <Button variant="ghost" className="hover:bg-gray-100">
            <Wrench className="mr-2 h-5 w-5" />
            Tools
          </Button>
          <Button variant="ghost" className="hover:bg-gray-100">
            <GitCompareArrows className="mr-2 h-5 w-5" />
            Workflows
          </Button>
          <Button variant="ghost" className="hover:bg-gray-100">
            <Link2 className="mr-2 h-5 w-5" />
            Mcps
          </Button>
        </div>
      </div>

      {/* Partners 部分 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
            <div className="flex justify-between items-center mb-4 mt-2">
                <Star className="mr-2 h-5 w-5 text-purple-300" />
                <h2 className="text-xl font-bold text-gray-600">Featured</h2>
                <p className="text-sm text-gray-400 pl-2">Agents in Agentic Hub.</p>
            </div>
          <Button variant="outline" className="flex items-center gap-2">
            <span>View more</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* 合作伙伴卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Agora 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center border border-gray-200">
                    <span className="text-blue-500 font-bold">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Agora AI</CardTitle>
                    <CardDescription className="text-xs">plutotess / convoai</CardDescription>
                  </div>
                </div>
                <div className="bg-purple-100 bg-opacity-90 text-purple-400 rounded-full p-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">Agora Conversational AI is a conversational AI platform</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Agent</span>
              </div>
            </CardContent>
          </Card>

          {/* Brave 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center border border-gray-200">
                    <span className="text-purple-500 font-bold">B</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Brave</CardTitle>
                    <CardDescription className="text-xs">langgenius / brave</CardDescription>
                  </div>
                </div>
                <div className="bg-purple-100 bg-opacity-90 text-purple-400 rounded-full p-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">Brave Search offers programmatic web search</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Tool</span>
              </div>
            </CardContent>
          </Card>

          {/* DupDub 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center border border-gray-200">
                    <span className="text-blue-500 font-bold">D</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">DupDub</CardTitle>
                    <CardDescription className="text-xs">dupdub-dify / dupdub</CardDescription>
                  </div>
                </div>
                <div className="bg-purple-100 bg-opacity-90 text-purple-400 rounded-full p-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">DupDub workflow for generate</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Workflow</span>
              </div>
            </CardContent>
          </Card>

          {/* E2B 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center border border-gray-200">
                    <span className="text-gray-500 font-bold">E</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">E2B</CardTitle>
                    <CardDescription className="text-xs">langgenius / e2b</CardDescription>
                  </div>
                </div>
                <div className="bg-purple-100 bg-opacity-90 text-purple-400 rounded-full p-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">Tool for integration with e2b.dev.</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Tool</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* All Agents 部分 */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">All Agents</h2>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <span>View more</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* All Agents 卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Google 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-gray-200">
                    <svg className="h-6 w-6" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4285F4" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-base">Google</CardTitle>
                    <CardDescription className="text-xs">langgenius / google</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">A tool for performing a Google SERP search</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Tool</span>
              </div>
            </CardContent>
          </Card>

          {/* Amazon Bedrock 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-md flex items-center justify-center border border-gray-200">
                    <span className="text-teal-500 font-bold">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Amazon Bedrock</CardTitle>
                    <CardDescription className="text-xs">langgenius / bedrock</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">The models of Amazon Bedrock</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Model</span>
              </div>
            </CardContent>
          </Card>

          {/* Azure OpenAI 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center border border-gray-200">
                    <span className="text-blue-500 font-bold">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Azure OpenAI</CardTitle>
                    <CardDescription className="text-xs">langgenius / azure_openai</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">Azure OpenAI Service Model</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Model</span>
              </div>
            </CardContent>
          </Card>

          {/* Jina 卡片 */}
          <Card className="border hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-md flex items-center justify-center border border-gray-200">
                    <span className="text-red-500 font-bold">J</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Jina</CardTitle>
                    <CardDescription className="text-xs">langgenius / jina</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400 mb-2">Embedding and Rerank Model Supported</p>
              <div className="mt-3 text-xs text-gray-300">
                # <span className="bg-gray-100 px-1 py-1 rounded text-gray-500 text-xs">Model</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 