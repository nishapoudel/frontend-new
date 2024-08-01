import { products, categoryBooks } from '../js/api.js';
const cart_btn = document.getElementById("cart-btn");

if (cart_btn) {
    cart_btn.addEventListener("click", () => {
       

        // Get the current product ID from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        // Find the product in the products object
        let product = products[productId];

        // If product is not found in products, search in categoryBooks
        if (!product) {
            Object.keys(categoryBooks).forEach(category => {
                const foundProduct = categoryBooks[category].find(product => product.id === productId);
                if (foundProduct) {
                    product = foundProduct;
                }
            });
        }


        if (product) {
            // Get existing cart items from local storage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product already exists in the cart
            let existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                // If product already exists, increase the quantity
                existingProduct.quantity += 1;
            } else {
                // If product does not exist, add to cart with quantity 1
                cart.push({ ...product, quantity: 1 });
            }

            // Save the updated cart back to local storage
            localStorage.setItem('cart', JSON.stringify(cart));


            // Display an alert and reload the page
            alert('Product added to cart');
            location.reload();
        } else {
            console.log('Product not found');
        }
    });
}
