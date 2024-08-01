import { products,new_books,categories } from './api.js';

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const home = document.getElementById('home');
const shop = document.getElementById('shop');
const mainImg= document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");
const firstBtn = document.getElementById("firstBtn");
const first = document.getElementById("first");
const secBtn = document.getElementById("secBtn");
const sec = document.getElementById("sec");
const thirdBtn = document.getElementById("thirdBtn");
const third = document.getElementById("third");


//cart
const btn= document.getElementById("btn"); 
const couponIn = document.getElementById("coupon"); 
const totalBtn = document.getElementById("total-btn");
const invalid =document.getElementById("invalid");
const insert = document.getElementById("insert");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");


 //sproduct--ADD to Cart

 const select_option= document.getElementById("select-option");
 const buy_btn = document.getElementById("buy-btn");
 const first_hero = document.getElementById("first-hero");
 const sec_hero = document.getElementById("sec-hero");


 const images = ["img/banner1.jpg", "img/banner2.jpg"];
 let currentIndex = 0;
 
 function changeBackgroundImage() {
     const heroSection = document.getElementById('hero');
     const firstHero = document.getElementById('first_hero');
     const secHero = document.getElementById('sec_hero');
 
     // Ensure heroSection and elements are defined
     if (!heroSection || !firstHero || !secHero) {
         console.error('Hero section or required elements are missing.');
         return;
     }
 
     heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
 
     // Use numeric values for comparison
     if (currentIndex === 0) {
         heroSection.style.backgroundPosition = 'top 25% right 0';
         firstHero.classList.remove('hide');
         secHero.classList.add('hide');
     } else if (currentIndex === 1) {
         heroSection.style.backgroundPosition = 'top -30px right -236px';
         secHero.classList.remove('hide');
         firstHero.classList.add('hide');
     }
 
     currentIndex = (currentIndex + 1) % images.length;
 
     heroSection.classList.remove('slide');
     void heroSection.offsetWidth; // Trigger reflow
     heroSection.classList.add('slide');
 }
 
 setInterval(changeBackgroundImage, 2500);
 



const span1 = document.getElementById("span-id1");
const read1= document.getElementById("read1");
const less1= document.getElementById("less1");
const span2 = document.getElementById("span-id2");
const read2= document.getElementById("read2");
const less2= document.getElementById("less2");
const span3 = document.getElementById("span-id3");
const read3= document.getElementById("read3");
const less3= document.getElementById("less3");
const span4 = document.getElementById("span-id4");
const read4= document.getElementById("read4");
const less4= document.getElementById("less4");
const span5 = document.getElementById("span-id5");
const read5= document.getElementById("read5");
const less5= document.getElementById("less5");


if(bar){
    bar.addEventListener("click", ()=>{
       nav.classList.add('active');
    })
}

close.addEventListener("click", (e)=>{
    nav.classList.remove('active');
     e.preventDefault();  
}) 

const select_size = document.getElementById("select-size");

// buy btn 

if(buy_btn)
 {
    buy_btn.addEventListener("click", ()=>{

        if(select_option.value=='Select Size')
            select_size.classList.remove('hide');
          else{
            //   window.location.href=`payment.html`; 
            select_size.classList.add('hide');
              window.open('payment.html', '_blank');
          }
    })
 }


// sproduct.. changePic mini to main
if(smallImg.length > 0 && mainImg) {
    smallImg[0].addEventListener("click", () => {
        mainImg.src = smallImg[0].src;
    });
    smallImg[1].addEventListener("click", () => {
        mainImg.src = smallImg[1].src;
    });
    smallImg[2].addEventListener("click", () => {
        mainImg.src = smallImg[2].src;
    });
    smallImg[3].addEventListener("click", () => {
        mainImg.src = smallImg[3].src;
    });

} else {
    console.log("addEventListener: Elements not found");
}


// read more


if(read1)
read1.addEventListener("click",()=>{
      span1.classList.remove("hide"); 
      read1.classList.add('hide');
      less1.classList.remove("hide");

      less1.addEventListener("click", ()=>{
        read1.classList.remove('hide');
        span1.classList.add("hide");
        less1.classList.add('hide');

      })
   })
   
if(read2)
read2.addEventListener("click",()=>{
      span2.classList.remove("hide");
      read2.classList.add('hide');
      less2.classList.remove("hide");

      less2.addEventListener("click", ()=>{
        read2.classList.remove('hide');
        span2.classList.add("hide");
        less2.classList.add('hide');

      })
   })
if(read3)
read3.addEventListener("click",()=>{
      span3.classList.remove("hide");
      read3.classList.add('hide');
      less3.classList.remove("hide");

      less3.addEventListener("click", ()=>{
        read3.classList.remove('hide');
        span3.classList.add("hide");
        less3.classList.add('hide');

      })
   })
if(read4)
read4.addEventListener("click",()=>{
      span4.classList.remove("hide");
      read4.classList.add('hide');
      less4.classList.remove("hide");

      less4.addEventListener("click", ()=>{
        read4.classList.remove('hide');
        span4.classList.add("hide");
        less4.classList.add('hide');

      })
   })
if(read5)
read5.addEventListener("click",()=>{
      span5.classList.remove("hide");
      read5.classList.add('hide');
      less5.classList.remove("hide");

      less5.addEventListener("click", ()=>{
        read5.classList.remove('hide');
        span5.classList.add("hide");
        less5.classList.add('hide');

      })
   })


   // cart /// 

  
function subtotal(){
    
    if(firstBtn)
        firstBtn.addEventListener("click", ()=>{
       let a= confirm("You really want to remove ?") 
        if(a)
           first.classList.add("hide");
          num1.value=0;
           
        })
        if(secBtn)   
            secBtn.addEventListener("click", ()=>{
                let a= confirm("You really want to remove ?") 
                if(a)
            sec.classList.add("hide");
        num2.value=0;
            })
        if(thirdBtn)   
            thirdBtn.addEventListener("click", ()=>{
                let a= confirm("You really want to remove ?") 
                if(a)
                third.classList.add("hide"); 
              num3.value=0;
            })

        }


subtotal();

let enter_coupon =document.getElementById("enter-coupon");

if(btn) {
btn.addEventListener("click" , ()=>{
 const coup = couponIn.value.trim();
if(coup==""){
    enter_coupon.classList.remove('hide'); 
    invalid.classList.add('hide');
    console.log("hit coupon")
    // alert(" Please Enter Coupon first!"); 
}

else{
invalid.classList.remove('hide'); 
enter_coupon.classList.add('hide');
 couponIn.value=""; 
}
});  
} 


//populate item from local storage to cart

document.addEventListener('DOMContentLoaded', () => {
    populateCart();
    updateCartCount();
});

function populateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ''; // Clear any existing items

    cart.forEach(item => {
        const itemPrice = parseFloat(item.price.replace('$', ''));
        const row = document.createElement('tr');
        row.id = item.id;

        row.innerHTML = `
            <td><i class="fa-solid fa-trash remove-btn" data-id="${item.id}"></i></td>
            <td><img src="${item.image}" alt="${item.title}"></td>
            <td>${item.title}</td>
            <td>$${itemPrice.toFixed(2)}</td>
            <td><input type="number" min="1" value="${item.quantity}" data-id="${item.id}"></td>
        `;

        cartItemsContainer.appendChild(row);
    });

    addEventListeners(); 
}

function addEventListeners() {
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            removeFromCart(productId);
        });
    });

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const productId = e.target.dataset.id;
            const newQuantity = parseInt(e.target.value, 10);
            updateCartQuantity(productId, newQuantity);
        });
    });
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    populateCart(); // Refresh the cart display
}

function updateCartQuantity(productId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => {
        if (item.id === productId) {
            item.quantity = newQuantity;
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

//action when you click total bill button

function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalQuantity = 0;
    let totalAmount = 0;

    cart.forEach(item => {
        const itemPrice = parseFloat(item.price.replace('$', ''));
        totalQuantity += item.quantity;
        totalAmount += itemPrice * item.quantity;
    });
     
    const insert = document.getElementById('insert');
    insert.classList.add("cart-total")
    console.log(insert)
    insert.classList.remove('hide');
    insert.innerHTML = `
        <div>
            <h2>Cart Total</h2>
            <table>
                <tr>
                    <td>Quantity</td>
                    <td>${totalQuantity}</td>
                </tr> 
                <tr>
                    <td>Amount</td>
                    <td>$${totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td style="color:black;"><b>Total</b></td>
                    <td style="font-weight: 500; color:black;">$${totalAmount.toFixed(2)}</td>
                </tr>
            </table>
            <a href="payment.html" target="_blank">
                <button id="Proceed">Proceed to Pay</button>
            </a>
            <br><br><br>
            <span id="redId" class="hide" style="color: red;">Add some items before proceeding</span>  
        </div>`;
}

if (totalBtn) {
    totalBtn.addEventListener('click', () => {
        calculateTotal();
    });
}


//populate product to featured item and new arrival

document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
    populateNew();

});

function populateProducts() {
    const container = document.getElementById('pro-container');

    for (const key in products) {
        if (products.hasOwnProperty(key)) {
            const product = products[key];

            const productElement = document.createElement('div');
            productElement.classList.add('pro');
            productElement.id = key;

            productElement.innerHTML = `
                <a href="sproduct.html?id=${key}">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="des">
                        <span>${product.brand}</span>
                        <h5>${product.title}</h5>
                        <div class="star">${generateStars(product.stars)}</div>
                        <h4>${product.price}</h4>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
            `;

            container.appendChild(productElement);
        }
    }
}
function populateNew() {
    const container = document.getElementById('pro-new');

    for (const key in new_books) {
        if (new_books.hasOwnProperty(key)) {
            const product = new_books[key];

            const productElement = document.createElement('div');
            productElement.classList.add('pro');
            productElement.id = key;
console.log("pp",product)
            productElement.innerHTML = `
                <a href="sproduct.html?id=${key}">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="des">
                        <span>${product.brand}</span>
                        <h5>${product.title}</h5>
                        <div class="star">${generateStars(product.stars)}</div>
                        <h4>${product.price}</h4>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart"></i>
                </a>
            `;

            container.appendChild(productElement);
        }
    }
}

function generateStars(starCount) {
    let stars = '';
    for (let i = 0; i < starCount; i++) {
        stars += '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';
    }
    return stars;
}

const featureSection = document.getElementById('feature');

// inserting category 
categories.forEach(category => {
const card = document.createElement('div');
card.className = 'card';
card.dataset.category = category.name.toLowerCase();

const img = document.createElement('img');
img.src = category.imgSrc;
img.alt = category.name;

const h6 = document.createElement('h6');
h6.textContent = category.name;

card.appendChild(img);
card.appendChild(h6);

featureSection.appendChild(card);
});


document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        window.location.href = 'category.html?category=' + category;
    });
});


//to count cart items
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getCartItemCount() {
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
return cartItems.length;
}


function updateCartCount() {
const cartCount = getCartItemCount();
document.getElementById('cart-count').textContent = cartCount;
document.getElementById('mobile-cart-count').textContent = cartCount;
}

window.onload = function() {
    var category = getQueryParam('category');
    if (category) {
        console.log('Category:', category);
    }
    updateCartCount();
};