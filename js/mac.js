//total price calculation 
function updatePrice(){
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('extra-mamory-cost').innerText);
    const storageCost = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-cost').innerText);

    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCharge;

    document.getElementById('total-cost').innerText  = totalPrice;
    document.getElementById('promo-price').innerText  = totalPrice;

}


// price  update

function inputPrice(feature, price){

    document.getElementById(feature + '-cost').innerText = price;
}

// promocode apply on 20% discount 
function promoCodeApply() {
    const promoCode = document.getElementById('promo-code-input').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('total-cost').innerText);
        totalPrice = totalPrice - (totalPrice * 0.20);
        document.getElementById('promo-price').innerText = totalPrice;
    }
    document.getElementById('promo-code-input').value = '';
}

 // extra memory cost
document.getElementById('memory-8gb').addEventListener('click', function(){
    inputPrice("extra-mamory", 0);
    updatePrice();
 });

document.getElementById('memory-16gb').addEventListener('click', function(){
    inputPrice("extra-mamory", 180);
    updatePrice();
 });
 
// extra storage cost
 document.getElementById('ssd-256gb').addEventListener('click', function(){
    inputPrice("extra-storage", 0);
    updatePrice();
 });

document.getElementById('ssd-512gb').addEventListener('click', function(){
    inputPrice("extra-storage", 100);
    updatePrice();
});

document.getElementById('ssd-1tb').addEventListener('click', function(){
    inputPrice("extra-storage", 180);
    updatePrice();
});

// Delivery cost
document.getElementById('aug25').addEventListener('click', function(){
    inputPrice("delivery", 0);
    updatePrice();
});

document.getElementById('aug21').addEventListener('click', function(){
    inputPrice("delivery", 20);
    updatePrice();
});