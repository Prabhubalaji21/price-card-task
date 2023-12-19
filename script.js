// Check if the user's device screen width is less than or equal to 768 pixels
if (window.innerWidth <= 768) {
    // If so, change the style of the pricing boxes
    let pricingBoxes = document.getElementsByClassName('pricing-box');
    for (let i = 0; i < pricingBoxes.length; i++) {
        pricingBoxes[i].style.width = '100%';
    }
}