
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
        
        adminBtn.addEventListener('click', () => {
            window.location.href = '/admin-panel/index.html';
        });
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
}

// Initialize the product manager
const productManager = new ProductManager();
