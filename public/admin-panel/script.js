
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
    { id: 1, name: "CM Protection Plus", price: "$49.99", status: "Active" },
    { id: 2, name: "CM Protection Basic", price: "$29.99", status: "Active" },
    { id: 3, name: "CM Protection Enterprise", price: "$69.99", status: "Inactive" }
  ];

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
  const productsTableBody = document.getElementById("products-table-body");
  products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td><span class="status-${product.status.toLowerCase()}">${product.status}</span></td>
      <td>
        <button class="btn-edit" data-id="${product.id}">Edit</button>
        <button class="btn-delete" data-id="${product.id}">Delete</button>
      </td>
    `;
    productsTableBody.appendChild(row);
  });

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
    productModal.classList.add("show");
  });

  // Cancel buttons
  cancelUserBtn.addEventListener("click", function() {
    userModal.classList.remove("show");
  });

  cancelProductBtn.addEventListener("click", function() {
    productModal.classList.remove("show");
  });

  // Edit buttons
  document.querySelectorAll(".btn-edit").forEach(button => {
    button.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      
      if (this.closest("#users-table-body")) {
        document.getElementById("user-modal-title").textContent = "Edit User";
        userModal.classList.add("show");
      } else if (this.closest("#products-table-body")) {
        document.getElementById("product-modal-title").textContent = "Edit Product";
        productModal.classList.add("show");
      }
      
      // In a real app, you would fetch the data for the specific ID here
      showToast(`Editing item #${id}`);
    });
  });

  // Delete buttons
  document.querySelectorAll(".btn-delete").forEach(button => {
    button.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      showToast(`Deleted item #${id}`);
      // In a real app, you would send a delete request and remove the row
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
    productModal.classList.remove("show");
    showToast("Product saved successfully");
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
});
