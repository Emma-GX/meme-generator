// Variables
// Selecting the form element
const form = document.querySelector('#form');

// Get the value from the input
const imageInput = document.querySelector("#image");
const topTextInput = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text");

// function getMemeOnSubmit() {
    form.addEventListener("submit", (e)  => {
        e.preventDefault();
        console.log(e);
        console.log(imageInput.value);

        // Creates an empty div
        let memDiv = document.createElement('div');

        // Creates an empty img tag
        let newMeme = document.createElement("img");
        newMeme.src = imageInput.value;
        document.body.append(newMeme);

        if (imageInput.value !== '') {
            newMeme.innerText = `${imageInput.value} `;
        } else {
            alert("Please enter a todo");
            exit();
        }
    });
// }
