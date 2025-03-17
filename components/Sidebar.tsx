"use client";

import { cn } from '@/lib/utils';
import { 
  BarChart2, 
  PieChart, 
  LineChart, 
  Database, 
  Settings, 
  Plus, 
  FileText,
  Home,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarProps {
  className?: string;
  onNavigate?: (route: string) => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleNavigation = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      router.push(route);
    }
  };

  const isActive = (route: string) => {
    return pathname === route;
  };

  return (
    <aside className={cn("w-56 border-r my-10 h-80% flex flex-col rounded-r-lg", className)}>
      <div className="p-4">
        <Button 
          className="w-full justify-start gap-2 transition-all duration-200" 
          variant="outline"
          onMouseEnter={() => setHoveredItem('new')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            backgroundColor: hoveredItem === 'new' ? 'rgba(59, 130, 246, 0.05)' : '',
            transform: hoveredItem === 'new' ? 'translateY(-1px)' : '',
            boxShadow: hoveredItem === 'new' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
          }}
        >
          <Plus size={16} />
          <span>New Conversation</span>
        </Button>
      </div>
      
      <nav className="flex-1 px-3 py-2">
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-500 px-3 py-2">DASHBOARDS</p>
          
          <Button 
            variant="ghost" 
            className={`w-full justify-start gap-2 transition-all duration-200 ${isActive('/') ? 'text-blue-600 bg-blue-100' : ''}`}
            onClick={() => handleNavigation('/')}
            onMouseEnter={() => setHoveredItem('home')}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              backgroundColor: hoveredItem === 'home' && !isActive('/') ? 'rgba(59, 130, 246, 0.05)' : '',
              transform: hoveredItem === 'home' ? 'translateY(-1px)' : '',
              boxShadow: hoveredItem === 'home' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
            }}
          >
            <Home size={16} />
            <span>Home</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className={`w-full justify-start gap-2 transition-all duration-200 ${isActive('/find-ai') ? 'text-blue-600 bg-blue-100' : ''}`}
            onClick={() => handleNavigation('/find-ai')}
            onMouseEnter={() => setHoveredItem('find-ai')}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              backgroundColor: hoveredItem === 'find-ai' && !isActive('/find-ai') ? 'rgba(59, 130, 246, 0.05)' : '',
              transform: hoveredItem === 'find-ai' ? 'translateY(-1px)' : '',
              boxShadow: hoveredItem === 'find-ai' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
            }}
          >
            <BarChart2 size={16} />
            <span>Find AI</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className={`w-full justify-start gap-2 transition-all duration-200 ${isActive('/smart-e') ? 'text-blue-600 bg-blue-100' : ''}`}
            onClick={() => handleNavigation('/smart-e')}
            onMouseEnter={() => setHoveredItem('smart-e')}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              backgroundColor: hoveredItem === 'smart-e' && !isActive('/smart-e') ? 'rgba(59, 130, 246, 0.05)' : '',
              transform: hoveredItem === 'smart-e' ? 'translateY(-1px)' : '',
              boxShadow: hoveredItem === 'smart-e' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
            }}
          >
            <PieChart size={16} />
            <span>Smart E</span>
          </Button>
        </div>
        
        <div className="mt-6 space-y-1">
          <p className="text-xs font-medium text-gray-500 px-3 py-2">RECENT</p>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 transition-all duration-200 text-left"
            onMouseEnter={() => setHoveredItem('sales')}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              backgroundColor: hoveredItem === 'sales' ? 'rgba(59, 130, 246, 0.05)' : '',
              transform: hoveredItem === 'sales' ? 'translateY(-1px)' : '',
              boxShadow: hoveredItem === 'sales' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
            }}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm">Sales Analysis</span>
              <span className="text-xs text-gray-500">24/10/23 15:08:13</span>
            </div>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-2 transition-all duration-200 text-left"
            onMouseEnter={() => setHoveredItem('order')}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              backgroundColor: hoveredItem === 'order' ? 'rgba(59, 130, 246, 0.05)' : '',
              transform: hoveredItem === 'order' ? 'translateY(-1px)' : '',
              boxShadow: hoveredItem === 'order' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
            }}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm">Order</span>
              <span className="text-xs text-gray-500">24/10/23 15:08:13</span>
            </div>
          </Button>
        </div>
      </nav>
      
      <div className="mt-auto p-4 space-y-2">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-2 transition-all duration-200"
          onMouseEnter={() => setHoveredItem('skill')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            backgroundColor: hoveredItem === 'skill' ? 'rgba(59, 130, 246, 0.05)' : '',
            transform: hoveredItem === 'skill' ? 'translateY(-1px)' : '',
            boxShadow: hoveredItem === 'skill' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
          }}
        >
          <FileText size={16} />
          <span>Skill Center</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-2 transition-all duration-200"
          onMouseEnter={() => setHoveredItem('assets')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            backgroundColor: hoveredItem === 'assets' ? 'rgba(59, 130, 246, 0.05)' : '',
            transform: hoveredItem === 'assets' ? 'translateY(-1px)' : '',
            boxShadow: hoveredItem === 'assets' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
          }}
        >
          <Database size={16} />
          <span>Q&A Assets</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-2 transition-all duration-200"
          onMouseEnter={() => setHoveredItem('help')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            backgroundColor: hoveredItem === 'help' ? 'rgba(59, 130, 246, 0.05)' : '',
            transform: hoveredItem === 'help' ? 'translateY(-1px)' : '',
            boxShadow: hoveredItem === 'help' ? '0 2px 4px rgba(0,0,0,0.05)' : ''
          }}
        >
          <Settings size={16} />
          <span>Help Center</span>
        </Button>
      </div>
    </aside>
  );
} 