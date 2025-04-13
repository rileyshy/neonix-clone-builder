
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu, X, Edit, Trash, Plus, Save, AlertTriangle } from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';
import { useToast } from "@/components/ui/use-toast";

// Mock data for users
const initialUsers = [
  { id: 1, username: "admin", email: "admin@cmstore.com", role: "Admin" },
  { id: 2, username: "moderator", email: "mod@cmstore.com", role: "Moderator" },
  { id: 3, username: "user1", email: "user1@example.com", role: "User" },
];

// Mock data for products
const initialProducts = [
  { id: 1, name: "Premium Access", price: "$49.99", status: "Active" },
  { id: 2, name: "Basic Package", price: "$19.99", status: "Active" },
  { id: 3, name: "Bundle Deal", price: "$79.99", status: "Inactive" },
];

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState(initialUsers);
  const [products, setProducts] = useState(initialProducts);
  const [editingUser, setEditingUser] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Stats for dashboard
  const stats = {
    totalUsers: users.length,
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === "Active").length,
    revenue: "$149.97"
  };
  
  // Handle edit user
  const handleEditUser = (user) => {
    setEditingUser({...user});
  };
  
  // Handle edit product
  const handleEditProduct = (product) => {
    setEditingProduct({...product});
  };
  
  // Handle save user
  const handleSaveUser = () => {
    if (!editingUser) return;
    
    setUsers(users.map(user => 
      user.id === editingUser.id ? editingUser : user
    ));
    
    toast({
      title: "User Updated",
      description: `User ${editingUser.username} has been updated.`
    });
    
    setEditingUser(null);
  };
  
  // Handle save product
  const handleSaveProduct = () => {
    if (!editingProduct) return;
    
    setProducts(products.map(product => 
      product.id === editingProduct.id ? editingProduct : product
    ));
    
    toast({
      title: "Product Updated",
      description: `Product ${editingProduct.name} has been updated.`
    });
    
    setEditingProduct(null);
  };
  
  // Handle delete user
  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    
    toast({
      title: "User Deleted",
      description: "User has been removed from the system."
    });
  };
  
  // Handle delete product
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    
    toast({
      title: "Product Deleted",
      description: "Product has been removed from the catalog."
    });
  };
  
  // Handle add new user
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      username: "newuser",
      email: "new@example.com",
      role: "User"
    };
    
    setUsers([...users, newUser]);
    setEditingUser(newUser);
    
    toast({
      title: "User Added",
      description: "New user has been created. Please update the details."
    });
  };
  
  // Handle add new product
  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Product",
      price: "$0.00",
      status: "Inactive"
    };
    
    setProducts([...products, newProduct]);
    setEditingProduct(newProduct);
    
    toast({
      title: "Product Added",
      description: "New product has been created. Please update the details."
    });
  };
  
  return (
    <div className="min-h-screen bg-neon-dark text-white">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden fixed top-4 left-4 z-50">
          <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] bg-neon-darker border-r border-white/10">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-6 neon-text-blue">CM Store Admin</h2>
            <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <div className="w-64 min-h-screen bg-neon-darker p-4 border-r border-white/10 fixed">
          <h2 className="text-xl font-bold mb-6 neon-text-blue">CM Store Admin</h2>
          <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Main content */}
        <div className="ml-64 w-full p-6">
          {/* Admin content */}
          {activeTab === "dashboard" && (
            <div className="fade-in">
              <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="glass-card p-4">
                  <h2 className="text-lg text-gray-400">Total Users</h2>
                  <p className="text-3xl font-bold neon-text-blue">{stats.totalUsers}</p>
                </div>
                
                <div className="glass-card p-4">
                  <h2 className="text-lg text-gray-400">Total Products</h2>
                  <p className="text-3xl font-bold neon-text-cyan">{stats.totalProducts}</p>
                </div>
                
                <div className="glass-card p-4">
                  <h2 className="text-lg text-gray-400">Active Products</h2>
                  <p className="text-3xl font-bold neon-text-purple">{stats.activeProducts}</p>
                </div>
                
                <div className="glass-card p-4">
                  <h2 className="text-lg text-gray-400">Total Revenue</h2>
                  <p className="text-3xl font-bold text-green-400">{stats.revenue}</p>
                </div>
              </div>
              
              <div className="glass-card-highlight p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="text-neon-purple" />
                  <h2 className="text-xl font-medium">Anti-Save Protection Active</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  Your website is protected against saving attempts with our enhanced security measures.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Protected against right-clicking</li>
                  <li>Disabled keyboard save shortcuts</li>
                  <li>Prevented text selection</li>
                  <li>Blocked developer tools access</li>
                  <li>Image drag protection</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === "users" && (
            <div className="fade-in">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Users Management</h1>
                <Button className="neon-button" onClick={handleAddUser}>
                  <Plus size={18} />
                  Add User
                </Button>
              </div>
              
              <div className="glass-card overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEditUser(user)}>
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteUser(user.id)}>
                              <Trash size={16} className="text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
          
          {activeTab === "products" && (
            <div className="fade-in">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Products Management</h1>
                <Button className="neon-button" onClick={handleAddProduct}>
                  <Plus size={18} />
                  Add Product
                </Button>
              </div>
              
              <div className="glass-card overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.status === "Active" ? "bg-green-400/20 text-green-400" : "bg-red-400/20 text-red-400"
                          }`}>
                            {product.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEditProduct(product)}>
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                              <Trash size={16} className="text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
          
          {activeTab === "settings" && (
            <div className="fade-in">
              <h1 className="text-2xl font-bold mb-6">Settings</h1>
              
              <div className="glass-card p-6 space-y-6">
                <h2 className="text-xl font-bold">Protection Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Block Right-Click</h3>
                      <p className="text-sm text-gray-400">Prevents users from right-clicking on your website.</p>
                    </div>
                    <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-sm">Enabled</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Block Developer Tools</h3>
                      <p className="text-sm text-gray-400">Prevents users from opening browser developer tools.</p>
                    </div>
                    <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-sm">Enabled</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Block Text Selection</h3>
                      <p className="text-sm text-gray-400">Prevents users from selecting text on your website.</p>
                    </div>
                    <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-sm">Enabled</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Clear Clipboard</h3>
                      <p className="text-sm text-gray-400">Periodically clears the user's clipboard.</p>
                    </div>
                    <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-sm">Enabled</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile content */}
      <div className="md:hidden p-6 pt-16">
        {/* Admin content for mobile (same content as desktop but styled for mobile) */}
        {activeTab === "dashboard" && (
          <div className="fade-in">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="glass-card p-4">
                <h2 className="text-lg text-gray-400">Total Users</h2>
                <p className="text-3xl font-bold neon-text-blue">{stats.totalUsers}</p>
              </div>
              
              <div className="glass-card p-4">
                <h2 className="text-lg text-gray-400">Total Products</h2>
                <p className="text-3xl font-bold neon-text-cyan">{stats.totalProducts}</p>
              </div>
              
              <div className="glass-card p-4">
                <h2 className="text-lg text-gray-400">Active Products</h2>
                <p className="text-3xl font-bold neon-text-purple">{stats.activeProducts}</p>
              </div>
              
              <div className="glass-card p-4">
                <h2 className="text-lg text-gray-400">Total Revenue</h2>
                <p className="text-3xl font-bold text-green-400">{stats.revenue}</p>
              </div>
            </div>
            
            <div className="glass-card-highlight p-4">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="text-neon-purple" />
                <h2 className="text-xl font-medium">Protection Active</h2>
              </div>
              <p className="text-gray-400 mb-4">
                Anti-save protection is currently active on your website.
              </p>
            </div>
          </div>
        )}
        
        {/* Users tab for mobile */}
        {activeTab === "users" && (
          <div className="fade-in">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Users</h1>
              <Button className="neon-button" onClick={handleAddUser}>
                <Plus size={18} />
                Add
              </Button>
            </div>
            
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="glass-card p-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-bold">{user.username}</h2>
                      <p className="text-sm text-gray-400">{user.email}</p>
                      <p className="text-xs bg-neon-purple/20 text-neon-purple inline-block px-2 py-0.5 rounded-full mt-1">
                        {user.role}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEditUser(user)}>
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteUser(user.id)}>
                        <Trash size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Products tab for mobile */}
        {activeTab === "products" && (
          <div className="fade-in">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Products</h1>
              <Button className="neon-button" onClick={handleAddProduct}>
                <Plus size={18} />
                Add
              </Button>
            </div>
            
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="glass-card p-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="font-bold">{product.name}</h2>
                      <p className="text-sm text-neon-blue">{product.price}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs inline-block mt-1 ${
                        product.status === "Active" ? "bg-green-400/20 text-green-400" : "bg-red-400/20 text-red-400"
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEditProduct(product)}>
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                        <Trash size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Settings tab for mobile */}
        {activeTab === "settings" && (
          <div className="fade-in">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>
            
            <div className="glass-card p-4 space-y-4">
              <h2 className="text-xl font-bold">Protection Settings</h2>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Block Right-Click</h3>
                </div>
                <div className="bg-green-500/20 text-green-500 px-2 py-0.5 rounded text-xs">Enabled</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Block Developer Tools</h3>
                </div>
                <div className="bg-green-500/20 text-green-500 px-2 py-0.5 rounded text-xs">Enabled</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Block Text Selection</h3>
                </div>
                <div className="bg-green-500/20 text-green-500 px-2 py-0.5 rounded text-xs">Enabled</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Clear Clipboard</h3>
                </div>
                <div className="bg-green-500/20 text-green-500 px-2 py-0.5 rounded text-xs">Enabled</div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  value={editingUser.username} 
                  onChange={(e) => setEditingUser({...editingUser, username: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  value={editingUser.email} 
                  onChange={(e) => setEditingUser({...editingUser, email: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <select 
                  id="role"
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                  <option value="User">User</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setEditingUser(null)}>
                  Cancel
                </Button>
                <Button className="neon-button" onClick={handleSaveUser}>
                  <Save size={16} className="mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input 
                  id="name" 
                  value={editingProduct.name} 
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input 
                  id="price" 
                  value={editingProduct.price} 
                  onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select 
                  id="status"
                  value={editingProduct.status}
                  onChange={(e) => setEditingProduct({...editingProduct, status: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setEditingProduct(null)}>
                  Cancel
                </Button>
                <Button className="neon-button" onClick={handleSaveProduct}>
                  <Save size={16} className="mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
