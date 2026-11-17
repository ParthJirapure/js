
// GST Rate
const GST = 0.18;

// User Input
let customerName = prompt("Enter Customer Name:");
while (!customerName || !customerName.trim())
    customerName = prompt("Enter Customer Name:");

let productName = prompt("Enter Product Name:");
while (!productName || !productName.trim())
    productName = prompt("Enter Product Name:");

let quantity = Number(prompt("Enter Quantity:"));
while (!Number.isInteger(quantity) || quantity <= 0)
    quantity = Number(prompt("Enter Valid Quantity:"));

let price = Number(prompt("Enter Price Per Item:"));
while (!Number.isFinite(price) || price <= 0)
    price = Number(prompt("Enter Valid Price:"));

// Calculations
let total = quantity * price;
let gstAmount = total * GST;
let finalBill = total + gstAmount;

// Object
const bill = {
    customer: customerName,
    product: productName,
    quantity: quantity,
    price: price,
    total: total,
    gstAmount: gstAmount,
    finalBill: finalBill
};

// Destructuring
const {
    customer,
    product,
    quantity: qty,
    price: itemPrice,
    total: amount,
    gstAmount: gst,
    finalBill: finalAmount
} = bill;

// Output
document.getElementById("result").innerHTML = `
    <h3>Billing Receipt</h3>
    <p><b>Customer:</b> ${customer}</p>
    <p><b>Product:</b> ${product}</p>
    <p><b>Quantity:</b> ${qty}</p>
    <p><b>Price Per Item:</b> ₹${itemPrice.toFixed(2)}</p>
    <p><b>Total:</b> ₹${amount.toFixed(2)}</p>
    <p><b>GST (18%):</b> ₹${gst.toFixed(2)}</p>
    <hr>
    <h3>Final Bill: ₹${finalAmount.toFixed(2)}</h3>
`;
