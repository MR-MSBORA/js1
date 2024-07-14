let form=document.querySelector(".forms");

form.addEventListener=("submit",(event)=>{
    event.preventDefault();

    if (document.getElementById("fname").value.trim() === "") {
        document.getElementById("fspan").style.visibility="visible";
    } else {
        document.getElementById("fspan").style.visibility="hiddden";
    }
    if (document.getElementById("lname").value.trim() === "") {
        document.getElementById("lspan").style.visibility="visible";
    } else {
        document.getElementById("lspan").style.visibility="hidden";
    }

    if (document.getElementById("email").value.trim() === "") {
        document.getElementById("espan").style.visibility="visible";
    } else {
        document.getElementById("espan").style.visibility="hidden";
    }
    
    if (document.getElementById("password").value.trim() === "") {
        document.getElementById("pspan").style.visibility="visible";
    } else {
        document.getElementById("pspan").style.visibility="hidden";
    }
});
