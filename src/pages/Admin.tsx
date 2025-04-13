
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  
  // Open the standalone admin panel
  const openAdminPanel = () => {
    window.open('/admin-panel/index.html', '_blank');
  };

  return (
    <div className="min-h-screen bg-neon-dark text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-neon-darker/80 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold neon-text-blue mb-6 text-center">CM Store Admin Access</h1>
        
        <div className="space-y-6">
          <div className="text-gray-300">
            <p className="mb-4">
              You're about to access the standalone admin panel for CM Store. This panel gives you full control over:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>User management</li>
              <li>Product management</li>
              <li>Store statistics</li>
              <li>Protection settings</li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <Button className="neon-button w-full" onClick={openAdminPanel}>
              Open Admin Panel
            </Button>
            <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
              Return to Store
            </Button>
          </div>
          
          <div className="text-sm text-gray-400 mt-4">
            <p>Note: The admin panel opens in a new window for better management experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
