let form1 = document.querySelector("#emailPassValidator");
let pass = document.querySelector("#pass")
let mail = document.querySelector("#email")

let mailCorrect = document.querySelector("small#correct")
let mailInvalid = document.querySelector("small#error")

let lenError = document.querySelector("small#lenError")
let numError = document.querySelector("small#numError")
let capError = document.querySelector("small#capError")
let lowError = document.querySelector("small#lowError")
let spError = document.querySelector("small#spError")

let passCorrect = document.querySelector("small#passCorrect")

let passcheck = false;
let mailcheck = false;

mail.addEventListener("input", function (dets) {
    if (dets.target.value.trim() !== "") {
        let mailValue = dets.target.value.trim();
        let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (regex.test(mailValue)) {
            mailCorrect.style.display = "initial"
            mailInvalid.style.display = "none"
            mailcheck = true;
        } else {
            mailCorrect.style.display = "none";
            mailInvalid.style.display = "initial";
            mailcheck = false;
        }
    } else {
        mailCorrect.style.display = "none";
        mailInvalid.style.display = "none";
        mailcheck = false;
    }
})

pass.addEventListener("input", function (dets) {
    if (dets.target.value.trim() !== "") {
        let passValue = dets.target.value.trim();

        let lengthCheck = /.{6,}/;
        let numberCheck = /\d/;
        let upperCheck = /[A-Z]/;
        let lowerCheck = /[a-z]/;
        let specialCheck = /[!@#$%^&*(),.?":{}|<>]/;

        lenError.style.display = lengthCheck.test(passValue) ? "none" : "initial";
        numError.style.display = numberCheck.test(passValue) ? "none" : "initial";
        capError.style.display = upperCheck.test(passValue) ? "none" : "initial";
        lowError.style.display = lowerCheck.test(passValue) ? "none" : "initial";
        spError.style.display = specialCheck.test(passValue) ? "none" : "initial";

        if (
            lengthCheck.test(passValue) &&
            numberCheck.test(passValue) &&
            upperCheck.test(passValue) &&
            lowerCheck.test(passValue) &&
            specialCheck.test(passValue)
        ) {
            passCorrect.style.display = "initial";
            passcheck = true;
        } else {
            passCorrect.style.display = "none";
            passcheck = false;
        }
    } else {
        lenError.style.display = "none";
        numError.style.display = "none";
        capError.style.display = "none";
        lowError.style.display = "none";
        spError.style.display = "none";
        passCorrect.style.display = "none";
        passcheck = false;
    }
})

form1.addEventListener("submit", function (dets) {
    dets.preventDefault();

    if(mailcheck && passcheck) {
        alert("Form submitted Successfully")
        location.reload()
    }else {
        alert("Both Mail and Password are required and must be correct!")
    }
})