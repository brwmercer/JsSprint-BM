// Get total cost button
const totalCostBtn = document.querySelector('#CalculateTotalCost');

// Get add to cart buttons
const addToCartButtons = document.querySelectorAll('.addtocart');

// Create Array to store items in the cart
let cart = [];

// Function to add items to cart
function addToCart(name, price) {
  cart.push({name: name, price: price});
  updateCart();
}

// Function to update the cart
function updateCart() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemElement = document.createElement("li");
        itemElement.innerHTML = `${item.name}: $${item.price.toFixed(2)}`;
        cartList.appendChild(itemElement);
        total += item.price;    
    }

    let totalElement = document.getElementById("total");
    totalElement.innerHTML = "Total: $" + total.toFixed(2);
}

// Function to calculate total cost and display it
function calculateTotalCost() {
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let card = document.getElementById("card").value;

    // Calculate total
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }

    // Print and Display Reciept
    let receipt = "Name: " + name + "\n";
    receipt += "Phone" + phone + "\n";
    receipt += "Card Number " + card + "\n\n";
    receipt += "Order Summary:\n";
    for(let i = 0; i < cart.length; i++) {
        receipt += cart[i].name + ": $" + cart[i].price.toFixed(2) + "\n";
    }
    receipt += "Total: $" + total.toFixed(2);
    alert(receipt);

    // Clear the cart and update view
    cart = [];
    updateCart();
}

// Event listeners for cart buttons
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let name = button.previousElementSibling.textContent.trim();
        let price = parseFloat(button.getAttribute('dataprice'));
        addToCart(name, price);
    });
});

// Event listener for total cost button
totalCostBtn.addEventListener("click", calculateTotalCost);
