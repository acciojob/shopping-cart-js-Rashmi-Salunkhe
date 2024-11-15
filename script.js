// Array to store cart items
let cartItems = [];

function addToCart() {
    const item = document.getElementById('item').value;
    const price = document.getElementById('price').value;

    if (item && price) {
        // Add item to the cart array
        cartItems.push({ item, price });

        // Render the cart items
        renderCart();
    }
}

function renderCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = ''; // Clear the cart before rendering

    cartItems.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - Rs.${cartItem.price}`;
        cart.appendChild(li);
    });
}

// Example: Adding "Apple" and "Banana" to the cart array and rendering them
// cartItems.push({ item: 'Apple', price: '10' });
// cartItems.push({ item: 'Banana', price: '20' });
renderCart();
