const logInBtn = document.querySelector(".MD-logIn-btn");
const logInInput = document.querySelector(".MD-logIn-input1")
const modalWindow = document.querySelector(".modalWindow");
logInBtn.addEventListener("click", (logInClick) => {
    if (logInInput.value) {
modalWindow.style.display = "none"
    }
})
console.log(modalWindow);