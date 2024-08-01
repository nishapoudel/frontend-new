import { products, categoryBooks } from '../js/api.js';

document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromUrl();
    fetchProductDetails(productId);
});

function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function fetchProductDetails(id) {
    let product = null;

    // Iterate through the products object
    if (products[id]) {
        product = products[id];
    }

    // If product is not found in products, search in categoryBooks
    if (!product) {
        Object.keys(categoryBooks).forEach(category => {
            const foundProduct = categoryBooks[category].find(product => product.id === id);
            if (foundProduct) {
                product = foundProduct;
            }
        });
    }

    // If product is found, display its details
    if (product) {
        console.log(product);
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = product.price; // Updated price format
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('mainImg').src = product.image;

        const smallImgGroup = document.querySelector('.small-img-group');
        smallImgGroup.innerHTML = '';

        // Assume that other images are stored similarly by replacing part of the filename
        const smallImages = [product.image, product.image.replace('1', '2'), product.image.replace('1', '3'), product.image.replace('1', '4')];
        smallImages.forEach((imgSrc, index) => {
            const smallImg = document.createElement('div');
            smallImg.className = 'small-img-col';
            smallImg.innerHTML = `<img src="${imgSrc}" width="100%" class="small-img" alt="">`;
            smallImgGroup.appendChild(smallImg);
        });
    } else {
        console.error('Product not found');
    }
}
