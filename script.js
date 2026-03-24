function showMessage() {
    alert("Form Submitted!");
}

function cardClick(skill) {
    alert("You selected " + skill);
}

function validateForm() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Enter your name first!");
    } else {
        alert("Welcome " + name);
    }
}