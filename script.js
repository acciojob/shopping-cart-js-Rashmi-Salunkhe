// Function to add item to the cart and store in Local Storage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from Local Storage or initialize
    cart.push(product); // Add product to the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to Local Storage
    displayCart(); // Update cart display
}

// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from Local Storage
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>No items in cart</li>';
    } else {
        cart.forEach((item, index) => {
            let li = document.createElement('li');
            li.id = `item-${index + 1}`;  // Give each cart item a unique id
            li.textContent = `${item} (Item ${index + 1})`;
            cartItems.appendChild(li);
        });
    }
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart'); // Clear cart from Local Storage
    displayCart(); // Update cart display
}

// Display cart when the page loads
window.onload = displayCart;
