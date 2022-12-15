let email = "linda@wave.com";

// linda@wave.com
console.log(email);

let calls;
console.log(calls);
let task;
console.log(task);

console.log("linda");

const emailButton = document.querySelector("#emailSubmitButton");

emailButton.addEventListener("click", (event) => {
    // cancel page refresh
    event.preventDefault();
    const emailInputElement = document.querySelector("input#email");
    const emailValue = emailInputElement.value;

    console.log("emailValue:", emailValue);
});
