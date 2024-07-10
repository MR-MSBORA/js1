/*let form=document.querySelector(".forms");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let mail = document.querySelector("#e-mail");
let password = document.querySelector("#lock");
let error1 = document.querySelector(".error-message1");
let error2 = document.querySelector(".error-message2");
let error3 = document.querySelector(".error-message3");
let error4 = document.querySelector(".error-message4");



const validateInput=()=>{
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();
    if(fnameValue==="")
    {
        error1.innerHTML="First name is required";
        return false;
    }
}
form.eventListener("submit",(event)=>
{
    event.preventDefault();
    validateInput();
})*/
let form = document.querySelector(".forms");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let mail = document.querySelector("#e-mail");
let password = document.querySelector("#lock");
let error1 = document.querySelector(".error-message1");
let error2 = document.querySelector(".error-message2");
let error3 = document.querySelector(".error-message3");
let error4 = document.querySelector(".error-message4");

const validateInput = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    // Validate first name
    if (fnameValue === "") {
        error1.innerHTML = "First name is required";
        isValid = false;
    } else {
        error1.innerHTML = "";
    }

    // Validate last name
    if (lnameValue === "") {
        error2.innerHTML = "Last name is required";
        isValid = false;
    } else {
        error2.innerHTML = "";
    }

    // Validate email
    if (mailValue === "") {
        error3.innerHTML = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(mailValue)) {
        error3.innerHTML = "Email format is invalid";
        isValid = false;
    } else {
        error3.innerHTML = "";
    }

    // Validate password
    if (passwordValue === "") {
        error4.innerHTML = "Password is required";
        isValid = false;
    } else if (passwordValue.length < 6) {
        error4.innerHTML = "Password must be at least 6 characters";
        isValid = false;
    } else {
        error4.innerHTML = "";
    }

    return isValid;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateInput()) {
        // If validation is successful, submit the form
        form.submit();
    }
});
