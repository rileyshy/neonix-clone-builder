
document.addEventListener("DOMContentLoaded", function() {
  // Initialize Lucide icons
  lucide.createIcons();

  // Tab navigation
  const navButtons = document.querySelectorAll(".nav-button");
  const tabContents = document.querySelectorAll(".tab-content");
  
  navButtons.forEach(button => {
    button.addEventListener("click", function() {
      const tabId = this.getAttribute("data-tab");
      
      // Remove active class from all buttons and tabs
      navButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(tab => tab.classList.remove("active"));
      
      // Add active class to current button and tab
      this.classList.add("active");
      document.getElementById(`${tabId}-tab`).classList.add("active");
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  
  mobileMenuToggle.addEventListener("click", function() {
    sidebar.classList.toggle("show");
  });

  // Back to site button
  document.getElementById("back-to-site").addEventListener("click", function() {
    window.location.href = "/";
  });

  // Sample data for tables
  const users = [
    { id: 1, username: "admin", email: "admin@cmstore.com", role: "Admin" },
    { id: 2, username: "moderator", email: "mod@cmstore.com", role: "Moderator" },
    { id: 3, username: "user1", email: "user1@example.com", role: "User" }
  ];
  
  const products = [
    { id: 1, name: "CM Protection Plus", price: "£49.99", stock: 25, status: "Active", category: "Protection" },
    { id: 2, name: "CM Protection Basic", price: "£29.99", stock: 50, status: "Active", category: "Protection" },
    { id: 3, name: "Custom Logo Design", price: "£19.99", stock: 999, status: "Active", category: "Custom Designs" },
    { id: 4, name: "Discord Nitro (1 Month)", price: "£7.99", stock: 35, status: "Active", category: "Discord Services" },
    { id: 5, name: "FiveM Development Course", price: "£59.99", stock: 10, status: "Active", category: "Development Resources" },
    { id: 6, name: "CM Protection Enterprise", price: "£69.99", stock: 0, status: "Inactive", category: "Protection" }
  ];

  // Save products to localStorage
  if (!localStorage.getItem('cmstore_products')) {
    localStorage.setItem('cmstore_products', JSON.stringify(products));
  }

  // Load products from localStorage
  function loadProducts() {
    return JSON.parse(localStorage.getItem('cmstore_products')) || [];
  }

  // Save products to localStorage
  function saveProducts(products) {
    localStorage.setItem('cmstore_products', JSON.stringify(products));
  }

  // Populate users table
  const usersTableBody = document.getElementById("users-table-body");
  users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>
        <button class="btn-edit" data-id="${user.id}">Edit</button>
        <button class="btn-delete" data-id="${user.id}">Delete</button>
      </td>
    `;
    usersTableBody.appendChild(row);
  });

  // Populate products table
  function populateProductsTable() {
    const productsTableBody = document.getElementById("products-table-body");
    productsTableBody.innerHTML = '';
    
    const currentProducts = loadProducts();
    
    currentProducts.forEach(product => {
      const stockStatus = product.stock > 0 ? 
        `<span class="stock-status stock-in">${product.stock} in stock</span>` : 
        `<span class="stock-status stock-out">Out of stock</span>`;
        
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.category || 'Uncategorized'}</td>
        <td>${product.price}</td>
        <td>${stockStatus}</td>
        <td><span class="status-${product.status.toLowerCase()}">${product.status}</span></td>
        <td>
          <button class="btn-edit" data-id="${product.id}">Edit</button>
          <button class="btn-delete" data-id="${product.id}">Delete</button>
        </td>
      `;
      productsTableBody.appendChild(row);
    });

    // Re-attach event listeners
    attachProductButtonListeners();
  }

  // Attach event listeners to product table buttons
  function attachProductButtonListeners() {
    // Edit product buttons
    document.querySelectorAll("#products-table-body .btn-edit").forEach(button => {
      button.addEventListener("click", function() {
        const id = parseInt(this.getAttribute("data-id"));
        const products = loadProducts();
        const product = products.find(p => p.id === id);
        
        if (product) {
          document.getElementById("product-modal-title").textContent = "Edit Product";
          document.getElementById("product-id").value = product.id;
          document.getElementById("product-name").value = product.name;
          document.getElementById("product-category").value = product.category || '';
          document.getElementById("product-price").value = product.price.replace('£', '');
          document.getElementById("product-stock").value = product.stock;
          document.getElementById("product-status").value = product.status;
          productModal.classList.add("show");
        }
      });
    });

    // Delete product buttons
    document.querySelectorAll("#products-table-body .btn-delete").forEach(button => {
      button.addEventListener("click", function() {
        const id = parseInt(this.getAttribute("data-id"));
        const products = loadProducts();
        const updatedProducts = products.filter(p => p.id !== id);
        
        saveProducts(updatedProducts);
        populateProductsTable();
        
        showToast(`Product #${id} deleted successfully`);
      });
    });
  }

  // Modal functionality
  const userModal = document.getElementById("user-modal");
  const productModal = document.getElementById("product-modal");
  const addUserBtn = document.getElementById("add-user-btn");
  const addProductBtn = document.getElementById("add-product-btn");
  const cancelUserBtn = document.getElementById("cancel-user-btn");
  const cancelProductBtn = document.getElementById("cancel-product-btn");
  const userForm = document.getElementById("user-form");
  const productForm = document.getElementById("product-form");

  // Add user button
  addUserBtn.addEventListener("click", function() {
    document.getElementById("user-modal-title").textContent = "Add User";
    userModal.classList.add("show");
  });

  // Add product button
  addProductBtn.addEventListener("click", function() {
    document.getElementById("product-modal-title").textContent = "Add Product";
    document.getElementById("product-id").value = "";
    document.getElementById("product-name").value = "";
    document.getElementById("product-category").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-stock").value = "0";
    document.getElementById("product-status").value = "Active";
    productModal.classList.add("show");
  });

  // Cancel buttons
  cancelUserBtn.addEventListener("click", function() {
    userModal.classList.remove("show");
  });

  cancelProductBtn.addEventListener("click", function() {
    productModal.classList.remove("show");
  });

  // Edit buttons for users
  document.querySelectorAll("#users-table-body .btn-edit").forEach(button => {
    button.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      document.getElementById("user-modal-title").textContent = "Edit User";
      userModal.classList.add("show");
      showToast(`Editing user #${id}`);
    });
  });

  // Delete buttons for users
  document.querySelectorAll("#users-table-body .btn-delete").forEach(button => {
    button.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      showToast(`Deleted user #${id}`);
    });
  });

  // Form submissions
  userForm.addEventListener("submit", function(e) {
    e.preventDefault();
    userModal.classList.remove("show");
    showToast("User saved successfully");
  });

  productForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form values
    const id = document.getElementById("product-id").value;
    const name = document.getElementById("product-name").value;
    const category = document.getElementById("product-category").value;
    const priceValue = document.getElementById("product-price").value;
    const stock = parseInt(document.getElementById("product-stock").value) || 0;
    const status = document.getElementById("product-status").value;
    
    // Format price with pound symbol
    const price = `£${parseFloat(priceValue).toFixed(2)}`;
    
    const products = loadProducts();
    
    if (id) {
      // Update existing product
      const index = products.findIndex(p => p.id === parseInt(id));
      if (index !== -1) {
        products[index] = {
          ...products[index],
          name,
          category,
          price,
          stock,
          status
        };
      }
      showToast("Product updated successfully");
    } else {
      // Add new product
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      products.push({
        id: newId,
        name,
        category,
        price,
        stock,
        status
      });
      showToast("Product added successfully");
    }
    
    saveProducts(products);
    populateProductsTable();
    productModal.classList.remove("show");
  });

  // Toast functionality
  function showToast(message) {
    const toast = document.getElementById("toast");
    const toastContent = document.querySelector(".toast-content");
    
    toastContent.textContent = message;
    toast.classList.remove("hidden");
    
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 3000);
  }

  // Click outside modal to close
  window.addEventListener("click", function(e) {
    if (e.target === userModal) {
      userModal.classList.remove("show");
    }
    if (e.target === productModal) {
      productModal.classList.remove("show");
    }
  });
  
  // Initialize products table
  populateProductsTable();
});
