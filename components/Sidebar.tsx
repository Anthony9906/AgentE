import { cn } from '@/lib/utils';
import { 
  BarChart2, 
  PieChart, 
  LineChart, 
  Database, 
  Settings, 
  Plus, 
  FileText,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn("w-56 border-r my-10 h-80% flex flex-col rounded-r-lg", className)}>
      <div className="p-4">
        <Button className="w-full justify-start gap-2" variant="outline">
          <Plus size={16} />
          <span>New Connection</span>
        </Button>
      </div>
      
      <nav className="flex-1 px-3 py-2">
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-500 px-3 py-2">DASHBOARDS</p>
          
          <Button variant="ghost" className="w-full justify-start gap-2 text-blue-600 bg-blue-100">
            <Home size={16} />
            <span>Home</span>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2">
            <BarChart2 size={16} />
            <span>Smart E</span>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2">
            <PieChart size={16} />
            <span>Projects</span>
          </Button>
        </div>
        
        <div className="mt-6 space-y-1">
          <p className="text-xs font-medium text-gray-500 px-3 py-2">DATA SOURCES</p>
          
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Database size={16} />
            <span>SQL Server</span>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Database size={16} />
            <span>MySQL</span>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileText size={16} />
            <span>CSV Files</span>
          </Button>
        </div>
      </nav>
      
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings size={16} />
          <span>Settings</span>
        </Button>
      </div>
    </aside>
  );
} 