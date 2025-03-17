import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("h-16 flex items-center justify-between px-6 bg-transparent", className)}>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <Image 
              src="/logo.svg" 
              alt="Quick BI Logo" 
              width={24} 
              height={24}
              className="text-white"
            />
          </div>
          <span className="font-semibold text-lg">Agentic <span className="text-blue-300 text-xl font-bold">/</span>E</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        <Button variant="ghost" size="sm">Help</Button>
        <Button variant="ghost" size="sm">Settings</Button>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm font-medium">A</span>
        </div>
      </div>
    </header>
  );
} 