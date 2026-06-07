
function displayCartItems() {
    let cartItems = document.getElementById('cart-items')
    console.log(cartItems)
    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price
        return `
        <div class="food-cards">
                <img src="${item.img}" alt="">
                <h3>${item.name} --- ₹${item.price}</h3>
                <button id="remove-btn" onclick="removeItem(${index})">Remove Item</button>
            </div>
        `
    })
    document.getElementById('total-price').innerText = ` Total Bill : ₹${total}/-`

}
displayCartItems()


function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let ans = confirm("Are you sure u want to remove an item??")
    if (ans) {
        cart.splice(id, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        displayCartItems()
    }

}

function clearCart() {
    let ans = confirm("Are you sure u want to remove an all items from the cart??")
    if (ans) {
        localStorage.setItem('cart', JSON.stringify([]))
        displayCartItems()
        setTimeout(() => {
            window.location.href = '../homepage.html'
        }, 2000)
    }
}

function checkout() {
    alert("Thank You for order food!! Order Again ❤️😊")
    localStorage.setItem('cart', JSON.stringify([]))
    displayCartItems()
    setTimeout(() => {
        window.location.href = '../homepage.html'
    }, 2000)

}