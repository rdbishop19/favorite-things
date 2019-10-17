console.log("We can't stop here... this is BAT COUNTRY!");

/* 
When you click the button check if both input fields 
have a value that is not empty string (""). 
If it is that, then you did not type anything into that input field.

If either input field is blank, do not add anything to the DOM 
and alert the user that they need to enter in all information.
*/
const saveToWishlist = () => {
    // get item from fieldset
    let wishlistItem = document.getElementById("item-name").value;
    // get vendor from fieldset
    let vendorLocation = document.getElementById("item-vendor").value;
    
    // check for empty inputs and execute if form filled in
    if (wishlistItem && vendorLocation){
        let sentence = `I can purchase ${wishlistItem} at ${vendorLocation}.`
        let outputHtml = document.getElementById("wishlist-output");
        // write the sentence to the DOM
        outputHtml.textContent = sentence;
        
        // clear values of both input fields
        document.getElementById("item-name").value = "";
        document.getElementById("item-vendor").value = "";
        // reset focus to first input field
        document.getElementById("item-name").focus();
    }
    else {
        window.alert('Fill in fields with item and vendor first.')
    }
}

// When save button clicked, display the data in the DOM.
document.querySelector("#saveItem").addEventListener("click", saveToWishlist);

