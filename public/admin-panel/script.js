
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // Initial tab
  setActiveTab('dashboard');

  // Sidebar navigation
  const navButtons = document.querySelectorAll('.nav-button[data-tab]');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      setActiveTab(tabId);
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Change icon based on sidebar state
    const icon = sidebar.classList.contains('active') ? 'x' : 'menu';
    mobileMenuToggle.innerHTML = '';
    const newIcon = document.createElement('i');
    newIcon.setAttribute('data-lucide', icon);
    mobileMenuToggle.appendChild(newIcon);
    lucide.createIcons();
  });

  // Back to site button
  document.getElementById('back-to-site').addEventListener('click', () => {
    window.location.href = '/';
  });

  // Initialize users table
  initUsers();
  
  // Initialize products table
  initProducts();
  
  // Setup user form
  const userForm = document.getElementById('user-form');
  userForm.addEventListener('submit', handleUserSubmit);
  
  // Setup product form
  const productForm = document.getElementById('product-form');
  productForm.addEventListener('submit', handleProductSubmit);
  
  // Setup modal close buttons
  document.getElementById('cancel-user-btn').addEventListener('click', () => {
    toggleModal('user-modal', false);
  });
  
  document.getElementById('cancel-product-btn').addEventListener('click', () => {
    toggleModal('product-modal', false);
  });
  
  // Add new user button
  document.getElementById('add-user-btn').addEventListener('click', () => {
    currentUserId = null;
    document.getElementById('user-modal-title').textContent = 'Add User';
    document.getElementById('user-form').reset();
    toggleModal('user-modal', true);
  });
  
  // Add new product button
  document.getElementById('add-product-btn').addEventListener('click', () => {
    currentProductId = null;
    document.getElementById('product-modal-title').textContent = 'Add Product';
    document.getElementById('product-form').reset();
    toggleModal('product-modal', true);
  });
});

// Tab navigation
function setActiveTab(tabId) {
  // Update tab content
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => {
    tab.classList.remove('active');
  });
  
  const activeTab = document.getElementById(`${tabId}-tab`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // Update navigation buttons
  const navButtons = document.querySelectorAll('.nav-button[data-tab]');
  navButtons.forEach(button => {
    button.classList.remove('active');
    if (button.getAttribute('data-tab') === tabId) {
      button.classList.add('active');
    }
  });
  
  // Close mobile menu after navigation
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth < 768) {
    sidebar.classList.remove('active');
    
    // Reset mobile toggle icon
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = '';
    const newIcon = document.createElement('i');
    newIcon.setAttribute('data-lucide', 'menu');
    mobileMenuToggle.appendChild(newIcon);
    lucide.createIcons();
  }
}

// Mock data for users
let users = [
  { id: 1, username: "admin", email: "admin@cmstore.com", role: "Admin" },
  { id: 2, username: "moderator", email: "mod@cmstore.com", role: "Moderator" },
  { id: 3, username: "user1", email: "user1@example.com", role: "User" }
];

// Mock data for products
let products = [
  { id: 1, name: "Premium Access", price: "$49.99", status: "Active" },
  { id: 2, name: "Basic Package", price: "$19.99", status: "Active" },
  { id: 3, name: "Bundle Deal", price: "$79.99", status: "Inactive" }
];

let currentUserId = null;
let currentProductId = null;

// Initialize users table
function initUsers() {
  const tableBody = document.getElementById('users-table-body');
  tableBody.innerHTML = '';
  
  users.forEach(user => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td class="actions-cell">
        <button class="action-button edit-user" data-id="${user.id}">
          <i data-lucide="edit"></i>
        </button>
        <button class="action-button delete delete-user" data-id="${user.id}">
          <i data-lucide="trash"></i>
        </button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
  
  // Initialize icons
  lucide.createIcons();
  
  // Add event listeners
  const editButtons = document.querySelectorAll('.edit-user');
  editButtons.forEach(button => {
    button.addEventListener('click', () => {
      const userId = parseInt(button.getAttribute('data-id'));
      editUser(userId);
    });
  });
  
  const deleteButtons = document.querySelectorAll('.delete-user');
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const userId = parseInt(button.getAttribute('data-id'));
      deleteUser(userId);
    });
  });
}

// Initialize products table
function initProducts() {
  const tableBody = document.getElementById('products-table-body');
  tableBody.innerHTML = '';
  
  products.forEach(product => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>
        <span class="status-badge ${product.status.toLowerCase()}">${product.status}</span>
      </td>
      <td class="actions-cell">
        <button class="action-button edit-product" data-id="${product.id}">
          <i data-lucide="edit"></i>
        </button>
        <button class="action-button delete delete-product" data-id="${product.id}">
          <i data-lucide="trash"></i>
        </button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
  
  // Initialize icons
  lucide.createIcons();
  
  // Add event listeners
  const editButtons = document.querySelectorAll('.edit-product');
  editButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      editProduct(productId);
    });
  });
  
  const deleteButtons = document.querySelectorAll('.delete-product');
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      deleteProduct(productId);
    });
  });
}

// Edit user
function editUser(userId) {
  const user = users.find(u => u.id === userId);
  if (!user) return;
  
  currentUserId = userId;
  
  document.getElementById('user-modal-title').textContent = 'Edit User';
  document.getElementById('username').value = user.username;
  document.getElementById('email').value = user.email;
  document.getElementById('role').value = user.role;
  
  toggleModal('user-modal', true);
}

// Edit product
function editProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  currentProductId = productId;
  
  document.getElementById('product-modal-title').textContent = 'Edit Product';
  document.getElementById('product-name').value = product.name;
  document.getElementById('price').value = product.price;
  document.getElementById('status').value = product.status;
  
  toggleModal('product-modal', true);
}

// Delete user
function deleteUser(userId) {
  users = users.filter(user => user.id !== userId);
  initUsers();
  showToast('User deleted successfully');
}

// Delete product
function deleteProduct(productId) {
  products = products.filter(product => product.id !== productId);
  initProducts();
  showToast('Product deleted successfully');
}

// Handle user form submission
function handleUserSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const userData = {
    username: formData.get('username'),
    email: formData.get('email'),
    role: formData.get('role')
  };
  
  if (currentUserId) {
    // Update existing user
    users = users.map(user => {
      if (user.id === currentUserId) {
        return { ...user, ...userData };
      }
      return user;
    });
    showToast('User updated successfully');
  } else {
    // Add new user
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...userData
    };
    users.push(newUser);
    showToast('User added successfully');
  }
  
  initUsers();
  toggleModal('user-modal', false);
}

// Handle product form submission
function handleProductSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const productData = {
    name: formData.get('name'),
    price: formData.get('price'),
    status: formData.get('status')
  };
  
  if (currentProductId) {
    // Update existing product
    products = products.map(product => {
      if (product.id === currentProductId) {
        return { ...product, ...productData };
      }
      return product;
    });
    showToast('Product updated successfully');
  } else {
    // Add new product
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      ...productData
    };
    products.push(newProduct);
    showToast('Product added successfully');
  }
  
  initProducts();
  toggleModal('product-modal', false);
}

// Toggle modal
function toggleModal(modalId, show) {
  const modal = document.getElementById(modalId);
  if (show) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
}

// Show toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastContent = toast.querySelector('.toast-content');
  
  toastContent.textContent = message;
  toast.classList.remove('hidden');
  
  // Auto hide after 3 seconds
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Add anti-save protection
function enableAntiSaveProtection() {
  // Disable right-click
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
  
  // Disable keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S, Command+S
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      return false;
    }
    
    // Prevent F12 key (developer tools)
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
  });
}

// Enable protection
enableAntiSaveProtection();
