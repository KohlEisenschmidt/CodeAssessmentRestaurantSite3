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

   var nameInput = document.forms["contactForm"]["nameInput"].value;
   var emailInput = document.forms["contactForm"]["emailInput"].value;
   var phoneInput = document.forms["contactForm"]["phoneInput"].value;

   if (nameInput == "" || !isNaN(nameInput)) {
    alert("Num1 must be filled in with a number.");
    document.forms["contactForm"]["nameInput"]
       .parentElement.className = "form-group has-error";
    document.forms["contactForm"]["nameInput"].focus();
    return false;
    }
    if (emailInput == "" || isNaN(emailInput)) {
    alert("Num2 must be filled in with a number.");
    document.forms["contactForm"]["num2"]
        .parentElement.className = "form-group has-error"
    document.forms["contactForm"]["emailInput"].focus();
    return false;
    }
    if (phoneInput == "" || isNaN(phoneInput)) {
    alert("Num2 must be filled in with a number.");
    document.forms["contactForm"]["phoneInput"]
        .parentElement.className = "form-group has-error"
    document.forms["contactForm"]["phoneInput"].focus();
    return false;
    }  