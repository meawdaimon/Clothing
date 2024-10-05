
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product-card button');
    const cartItems = document.getElementById('cart-items');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.parentElement;
            const productName = productCard.getAttribute('data-name');
            const productPrice = productCard.getAttribute('data-price');

            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - $${productPrice}`;

            cartItems.appendChild(listItem);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const payButton = document.getElementById('payButton');
    const cartItems = document.getElementById('cart-items');

    payButton.addEventListener('click', function() {
 
        if (cartItems.children.length > 0) {
          
            alert('ชำระเสร็จสิ้น! ขอบคุณสำหรับการสั่งซื้อ');
            
            cartItems.innerHTML = '';
        } else {
 
            alert('กรุณาเลือกสินค้า');
        }
    });
});
