console.log("We can't stop here... this is BAT COUNTRY!");
/* 

Build two fieldsets and input fields that will allow you to 
enter the name of a favorite thing of yours, and a location 
where you might purchase it (Target, Amazon, Best Buy, etc...)

Add a button beneath the fieldsets labeled "Save to Wishlist".

When the button is clicked, display the data in the following format in the DOM.

I can purchase {thing} at {location}

*/
const saveToWishlist = () => {
    // get item from fieldset
    let wishlistItem = document.getElementById("item-name").value;
    // get vendor from fieldset
    let vendorLocation = document.getElementById("item-vendor").value;
    // write the sentence to the DOM
    let sentence = `I can purchase ${wishlistItem} at ${vendorLocation}.`
    let outputHtml = document.getElementById("wishlist-output");
    outputHtml.textContent = sentence;
}
// When save button clicked, display the data in the DOM.
document.querySelector("#saveItem").addEventListener("click", saveToWishlist);