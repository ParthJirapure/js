
// Shopping Cart Array
const cart = [];

// Add Item to Cart
function addToCart() {
    let select = document.getElementById("item");
    let name = select.options[select.selectedIndex].text.split(" (")[0];
    let price = Number(select.value);
    let qty = Number(document.getElementById("qty").value);

    if (!Number.isInteger(qty) || qty <= 0) {
        alert("Enter valid quantity");
        return;
    }

    cart.push({name, price, quantity: qty});
    displayCart();
    document.getElementById("qty").value = "";
}

// Display Cart Items
function displayCart() {
    let table = document.getElementById("cartTable");
    table.innerHTML = "";

    cart.forEach(item => {
        table.innerHTML += `<tr>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>${item.quantity}</td>
        <td>₹${item.price * item.quantity}</td>
        </tr>`;
    });
}

// Calculate Bill
function calculateBill() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let total = cart.reduce((sum, item) =>
        sum + item.price * item.quantity, 0);

    let discount = total >= 10000 ? total * 0.20 :
                   total >= 5000 ? total * 0.10 :
                   total >= 2000 ? total * 0.05 : 0;

    let finalAmount = total - discount;

    document.getElementById("result").innerHTML =
    `Total: ₹${total.toFixed(2)}<br>
    Discount: ₹${discount.toFixed(2)}<br>
    <span style="color:green">Final Amount: ₹${finalAmount.toFixed(2)}</span>`;
}

// Clear Cart
function clearCart() {
    cart.length = 0;
    document.getElementById("cartTable").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
