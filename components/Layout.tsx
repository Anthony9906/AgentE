import React from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("flex flex-col h-screen", className)}>
      <Header className="bg-transparent" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="bg-white" />
        <div className="flex-1 overflow-auto bg-transparent">
          {children}
        </div>
      </div>
    </div>
  );
} 