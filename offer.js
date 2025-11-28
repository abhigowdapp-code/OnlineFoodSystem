document.addEventListener('DOMContentLoaded', () => {
    // Sample special offers data
    const specialOffers = [
        {
            id: 1,
            title: "50% OFF on First Order",
            description: "Use code FIRST50 to get 50% off on your first order",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            badge: "New"
        },
        {
            id: 2,
            title: "Free Delivery",
            description: "Free delivery on orders above ₹299",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            badge: "Popular"
        },
        {
            id: 3,
            title: "Combo Meal Deal",
            description: "Get a free drink with any burger combo",
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
            badge: "Hot"
        },
        {
            id: 4,
            title: "Weekend Special",
            description: "30% off on all desserts this weekend",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            badge: "Limited"
        },
        {
            id: 5,
            title: "Family Pack",
            description: "2 Large Pizzas + 1 Side at ₹499",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            badge: "Best Value"
        }
    ];

    // Sample food items data
    const foodItems = [
        {
            id: 1,
            name: "Margherita Pizza",
            category: "pizza",
            description: "Classic pizza with tomato sauce and mozzarella",
            price: 299,
            originalPrice: 399,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            isVeg: true
        },
        {
            id: 2,
            name: "Classic Burger",
            category: "burger",
            description: "Juicy beef patty with fresh vegetables",
            price: 199,
            originalPrice: 249,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: false
        },
        {
            id: 3,
            name: "Pasta Alfredo",
            category: "pasta",
            description: "Creamy pasta with parmesan cheese",
            price: 249,
            originalPrice: 299,
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
            isVeg: true
        },
        {
            id: 4,
            name: "Chocolate Cake",
            category: "dessert",
            description: "Rich chocolate cake with ganache",
            price: 149,
            originalPrice: 199,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
            isVeg: true
        },
        {
            id: 5,
            name: "Pepperoni Pizza",
            category: "pizza",
            description: "Spicy pepperoni with extra cheese",
            price: 399,
            originalPrice: 499,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            isVeg: false
        },
        {
            id: 6,
            name: "Veg Burger",
            category: "burger",
            description: "Grilled vegetable patty with special sauce",
            price: 179,
            originalPrice: 229,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: true
        },
        {
            id: 7,
            name: "Pasta Bolognese",
            category: "pasta",
            description: "Classic meat sauce with spaghetti",
            price: 279,
            originalPrice: 329,
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
            isVeg: false
        },
        {
            id: 8,
            name: "Tiramisu",
            category: "dessert",
            description: "Classic Italian coffee-flavored dessert",
            price: 199,
            originalPrice: 249,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
            isVeg: true
        },
        {
            id: 9,
            name: "BBQ Chicken Pizza",
            category: "pizza",
            description: "BBQ sauce with grilled chicken",
            price: 449,
            originalPrice: 549,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            isVeg: false
        },
        {
            id: 10,
            name: "Cheese Burger",
            category: "burger",
            description: "Double cheese with special sauce",
            price: 229,
            originalPrice: 279,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: false
        },
        {
            id: 11,
            name: "Pasta Carbonara",
            category: "pasta",
            description: "Creamy sauce with bacon and egg",
            price: 299,
            originalPrice: 349,
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
            isVeg: false
        },
        {
            id: 12,
            name: "Cheesecake",
            category: "dessert",
            description: "New York style cheesecake",
            price: 179,
            originalPrice: 229,
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
            isVeg: true
        },
        {
            id: 13,
            name: "Veg Supreme Pizza",
            category: "pizza",
            description: "Loaded with fresh vegetables",
            price: 349,
            originalPrice: 449,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            isVeg: true
        },
        {
            id: 14,
            name: "Chicken Burger",
            category: "burger",
            description: "Grilled chicken with spicy mayo",
            price: 249,
            originalPrice: 299,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: false
        },
        {
            id: 15,
            name: "Pasta Primavera",
            category: "pasta",
            description: "Fresh vegetables in light sauce",
            price: 259,
            originalPrice: 309,
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
            isVeg: true
        },
        {
            id: 16,
            name: "Ice Cream Sundae",
            category: "dessert",
            description: "Vanilla ice cream with chocolate sauce",
            price: 129,
            originalPrice: 179,
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
            isVeg: true
        },
        {
            id: 17,
            name: "Farmhouse Pizza",
            category: "pizza",
            description: "Loaded with fresh vegetables and cheese",
            price: 379,
            originalPrice: 479,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            isVeg: true
        },
        {
            id: 18,
            name: "Mushroom Burger",
            category: "burger",
            description: "Grilled portobello mushroom patty",
            price: 199,
            originalPrice: 249,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            isVeg: true
        },
        {
            id: 19,
            name: "Pasta Arrabbiata",
            category: "pasta",
            description: "Spicy tomato sauce with garlic",
            price: 239,
            originalPrice: 289,
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
            isVeg: true
        },
        {
            id: 20,
            name: "Chocolate Brownie",
            category: "dessert",
            description: "Warm chocolate brownie with ice cream",
            price: 159,
            originalPrice: 209,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
            isVeg: true
        }
    ];

    // DOM Elements
    const specialOffersContainer = document.getElementById('specialOffers');
    const foodGrid = document.getElementById('foodGrid');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    // State
    let currentCategory = 'all';
    let currentSearch = '';

    // Render special offers
    function renderSpecialOffers() {
        specialOffersContainer.innerHTML = '';
        specialOffers.forEach(offer => {
            const offerCard = document.createElement('div');
            offerCard.className = 'special-offer-card';
            offerCard.innerHTML = `
                <div class="offer-image">
                    <img src="${offer.image}" alt="${offer.title}">
                </div>
                <div class="offer-content">
                    <span class="offer-badge">${offer.badge}</span>
                    <h3 class="offer-title">${offer.title}</h3>
                    <p class="offer-description">${offer.description}</p>
                    <button class="grab-deal-btn">Grab Deal</button>
                </div>
            `;
            specialOffersContainer.appendChild(offerCard);
        });
    }

    // Render food items
    function renderFoodItems(items) {
        foodGrid.innerHTML = '';
        items.forEach(item => {
            const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
            
            const foodCard = document.createElement('div');
            foodCard.className = 'food-card';
            foodCard.innerHTML = `
                <div class="food-image">
                    <img src="${item.image}" alt="${item.name}">
                    ${item.isVeg ? '<div class="veg-badge"><i class="fas fa-circle"></i></div>' : ''}
                </div>
                <div class="food-content">
                    <h3 class="food-title">${item.name}</h3>
                    <p class="food-description">${item.description}</p>
                    <div class="food-price">
                        <div class="price-section">
                            <span class="current-price">₹${item.price}</span>
                            <span class="original-price">₹${item.originalPrice}</span>
                            <span class="discount">${discount}% OFF</span>
                        </div>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            `;
            foodGrid.appendChild(foodCard);
        });
    }

    // Filter and search food items
    function filterAndSearchItems() {
        let filteredItems = [...foodItems];

        // Apply category filter
        if (currentCategory !== 'all') {
            filteredItems = filteredItems.filter(item => item.category === currentCategory);
        }

        // Apply search filter
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            filteredItems = filteredItems.filter(item => 
                item.name.toLowerCase().includes(searchLower) ||
                item.description.toLowerCase().includes(searchLower)
            );
        }

        renderFoodItems(filteredItems);
    }

    // Carousel functionality
    function scrollCarousel(direction) {
        const container = specialOffersContainer;
        const scrollAmount = 320; // card width + gap
        container.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    }

    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        filterAndSearchItems();
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.filter;
            filterAndSearchItems();
        });
    });

    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    nextBtn.addEventListener('click', () => scrollCarousel('next'));

    // Add to cart functionality
    foodGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const foodCard = e.target.closest('.food-card');
            const itemName = foodCard.querySelector('.food-title').textContent;
            
            // Add animation
            e.target.classList.add('clicked');
            setTimeout(() => {
                e.target.classList.remove('clicked');
            }, 200);

            // Here you would typically add the item to the cart
            console.log(`Added ${itemName} to cart`);
        }
    });

    // Grab deal functionality
    specialOffersContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('grab-deal-btn')) {
            const offerCard = e.target.closest('.special-offer-card');
            const offerTitle = offerCard.querySelector('.offer-title').textContent;
            
            // Add animation
            e.target.classList.add('clicked');
            setTimeout(() => {
                e.target.classList.remove('clicked');
            }, 200);

            // Here you would typically apply the offer
            console.log(`Applied offer: ${offerTitle}`);
        }
    });

    // Initial render
    renderSpecialOffers();
    renderFoodItems(foodItems);

    // Add click animation styles
    const style = document.createElement('style');
    style.textContent = `
        .add-to-cart-btn.clicked,
        .grab-deal-btn.clicked {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
}); 