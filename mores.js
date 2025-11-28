// Sample food data
const foods = [
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Fresh tomatoes, mozzarella, basil, and olive oil",
        price: 14.99,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&q=80"
    },
    {
        id: 2,
        name: "Classic Burger",
        description: "Beef patty, lettuce, tomato, cheese, and special sauce",
        price: 12.99,
        category: "burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
    },
    {
        id: 3,
        name: "California Roll",
        description: "Crab, avocado, cucumber, and tobiko",
        price: 16.99,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80"
    },
    {
        id: 4,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with ganache frosting",
        price: 8.99,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80"
    },
    {
        id: 5,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni with mozzarella and tomato sauce",
        price: 15.99,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80"
    },
    {
        id: 6,
        name: "Dragon Roll",
        description: "Eel, cucumber, avocado, and unagi sauce",
        price: 18.99,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&q=80"
    }
];

// Shopping cart array
let cart = [];

// DOM Elements
const foodGrid = document.getElementById('food-grid');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const subtotalElement = document.getElementById('subtotal');
const cartTotalElement = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutForm = document.getElementById('checkout-form');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const closeButtons = document.querySelectorAll('.close');

// Display foods
function displayFoods(foodsToDisplay = foods) {
    foodGrid.innerHTML = foodsToDisplay.map(food => `
        <div class="food-card">
            <img src="${food.image}" alt="${food.name}" class="food-image">
            <div class="food-info">
                <h3 class="food-title">${food.name}</h3>
                <p class="food-description">${food.description}</p>
                <p class="food-price">$${food.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${food.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add to cart function
function addToCart(foodId) {
    const food = foods.find(f => f.id === foodId);
    const cartItem = cart.find(item => item.id === foodId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...food,
            quantity: 1
        });
    }

    updateCartCount();
    updateCartDisplay();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Update cart display
function updateCartDisplay() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div>
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 2.99;
    const total = subtotal + deliveryFee;

    subtotalElement.textContent = subtotal.toFixed(2);
    cartTotalElement.textContent = total.toFixed(2);
}

// Update quantity
function updateQuantity(foodId, newQuantity) {
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== foodId);
    } else {
        const item = cart.find(item => item.id === foodId);
        if (item) {
            item.quantity = newQuantity;
        }
    }

    updateCartCount();
    updateCartDisplay();
}

// Search functionality
function searchFoods() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFoods = foods.filter(food => 
        food.name.toLowerCase().includes(searchTerm) ||
        food.description.toLowerCase().includes(searchTerm)
    );
    displayFoods(filteredFoods);
}

// Filter by category
function filterByCategory(category) {
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const filteredFoods = category === 'all' 
        ? foods 
        : foods.filter(food => food.category === category);
    displayFoods(filteredFoods);
}

// Close confirmation modal
function closeConfirmation() {
    confirmationModal.style.display = 'none';
}

// Event Listeners
document.querySelector('.cart-icon').addEventListener('click', () => {
    cartModal.style.display = 'block';
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'block';
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'none';
    });
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkoutModal.style.display = 'none';
    confirmationModal.style.display = 'block';
    cart = [];
    updateCartCount();
    updateCartDisplay();
});

searchBtn.addEventListener('click', searchFoods);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchFoods();
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterByCategory(btn.dataset.category);
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (e.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// Initialize the display
displayFoods(); 