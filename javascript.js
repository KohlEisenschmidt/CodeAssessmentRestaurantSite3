function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["contactForm"]["nameInput"].value = "";
    document.forms["contactForm"]["emailInput"].value = "";
    document.forms["contactForm"]["phoneInput"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}

function validateItems() {
    clearErrors();

//     var num1 = document.forms["numberFun"]["num1"].value;
//     var num2 = document.forms["numberFun"]["num2"].value;
//     if (num1 == "" || isNaN(num1)) {
//         alert("Num1 must be filled in with a number.");
//         document.forms["numberFun"]["num1"]
//            .parentElement.className = "form-group has-error";
//         document.forms["numberFun"]["num1"].focus();
//         return false;
//     }
//    if (num2 == "" || isNaN(num2)) {
//        alert("Num2 must be filled in with a number.");
//        document.forms["numberFun"]["num2"]
//           .parentElement.className = "form-group has-error"
//        document.forms["numberFun"]["num2"].focus();
//        return false;
//    }  

    var nameInput = document.forms["contactForm"]["Name"].value;
    var emailInput = document.forms["contactForm"]["email"].value;
    var phoneInput = document.forms["contactForm"]["phone"].value;

    var alphaMatch = /[ a-zA-Z]/;

    if (!nameInput.match(alphaMatch)) {
        alert("Your name should only have letters.");
        document.forms["contactForm"]["Name"]
            .parentElement.className = "form-group has-error";
        document.forms["contactForm"]["Name"].focus();
        return false;
    }

    var emailMatch = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!emailInput.match(emailMatch)) {
        alert("Please put in a real email.");
        document.forms["contactForm"]["email"]
            .parentElement.className = "form-group has-error"
        document.forms["contactForm"]["email"].focus();
        return false;
    }

    var phoneMatch = /^\(\d{3}\)\s\d{3}-\d{4}/;

    if (!phoneInput.match(phoneMatch)) {
        alert("Please put in a real phone number.");
        document.forms["contactForm"]["phone"]
            .parentElement.className = "form-group has-error"
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
}