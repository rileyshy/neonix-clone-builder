
// Store data in localStorage
const STORAGE_KEY = 'cmstore_products';

// Product management
class ProductManager {
    constructor() {
        this.products = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        this.setupEventListeners();
        this.renderProducts();
    }

    setupEventListeners() {
        // Admin panel toggle
        const adminBtn = document.getElementById('adminBtn');
        const adminPanel = document.getElementById('adminPanel');
        
        adminBtn.addEventListener('click', () => {
            adminPanel.classList.toggle('active');
            this.renderAdminProducts();
        });

        // Close admin panel when clicking outside
        adminPanel.addEventListener('click', (e) => {
            if (e.target === adminPanel) {
                adminPanel.classList.remove('active');
            }
        });

        // Product form submission
        const productForm = document.getElementById('productForm');
        productForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addProduct({
                name: document.getElementById('productName').value,
                price: parseFloat(document.getElementById('productPrice').value),
                stock: parseInt(document.getElementById('productStock').value),
                category: document.getElementById('productCategory').value,
                description: document.getElementById('productDescription').value,
            });
            productForm.reset();
        });
    }

    addProduct(product) {
        product.id = Date.now();
        this.products.push(product);
        this.saveProducts();
        this.renderProducts();
        this.renderAdminProducts();
    }

    removeProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
        this.saveProducts();
        this.renderProducts();
        this.renderAdminProducts();
    }

    saveProducts() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.products));
    }

    renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = this.products.map(product => `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">£${product.price.toFixed(2)}</div>
                <div class="product-stock">
                    ${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </div>
                <button class="discord-btn" 
                    ${product.stock === 0 ? 'disabled' : ''}>
                    Buy Now
                </button>
            </div>
        `).join('');
    }

    renderAdminProducts() {
        const productsList = document.getElementById('productsList');
        productsList.innerHTML = this.products.map(product => `
            <div class="product-item">
                <div>
                    <strong>${product.name}</strong> - £${product.price.toFixed(2)}
                    (${product.stock} in stock)
                </div>
                <button onclick="productManager.removeProduct(${product.id})">
                    Delete
                </button>
            </div>
        `).join('');
    }
}

// Initialize the product manager
const productManager = new ProductManager();
