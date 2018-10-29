
const allowVisit = "Welcome, ";
const confirmVisit = "Are you sure you want to continue?";
const notAllowVisit = "You are not allowed to visit this website";

let nameInput = prompt("Name", "");
let ageInput = prompt("Age", "");
let nameReg = /[A-zА-яЁёЇїІі]/;
let ageReg = /[0-9]/;

while (nameInput == "" || nameReg.test(nameInput) == false) {
    nameInput = prompt("Name again", nameInput);
}

while (ageInput == "" || ageReg.test(ageInput) == false) {
    ageInput = prompt("Age again", ageInput);
}

if (ageInput < 18) {
    alert(notAllowVisit);
} else if (ageInput > 22) {
    alert(allowVisit + nameInput);
} else {
    if (confirm(confirmVisit)) {
        alert(allowVisit + nameInput);
    } else {
        alert(notAllowVisit);
    }
}