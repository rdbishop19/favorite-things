console.log("We can't stop here... this is BAT COUNTRY!");

/* 
When you click the button and the new favorite thing is added to the DOM, 
clear out the value of both input fields. Then set the focus to the first input field.
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

    // clear values of both input fields
    document.getElementById("item-name").value = "";
    document.getElementById("item-vendor").value = "";
    // reset focus to first input field
    document.getElementById("item-name").focus();
}

// When save button clicked, display the data in the DOM.
document.querySelector("#saveItem").addEventListener("click", saveToWishlist);

