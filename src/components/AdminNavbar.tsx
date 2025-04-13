
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from "@/components/ui/button";

interface AdminNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminNavbar = ({ activeTab, setActiveTab }: AdminNavbarProps) => {
  const navItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: <LayoutDashboard size={18} />
    },
    {
      id: 'users',
      name: 'Users',
      icon: <Users size={18} />
    },
    {
      id: 'products',
      name: 'Products',
      icon: <Package size={18} />
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: <Settings size={18} />
    }
  ];

  return (
    <div className="space-y-2">
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "secondary" : "ghost"}
            className={`w-full justify-start ${
              activeTab === item.id 
                ? 'bg-neon-purple/20 text-neon-purple' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </Button>
        ))}
      </nav>
      
      <div className="pt-4 mt-6 border-t border-white/10">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5"
          onClick={() => window.location.href = "/"}
        >
          <LogOut size={18} />
          <span className="ml-3">Back to Site</span>
        </Button>
      </div>
    </div>
  );
};

export default AdminNavbar;
