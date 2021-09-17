// Variables
// Selecting the form element
const form = document.querySelector("#form");

// Get the value from the input
const imageInput = document.querySelector("#image");
const topTextInput = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text");


let memeDiv;
let deleteMeme = document.createElement("button");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Creates an empty div
	memeDiv = document.createElement("div");
	memeDiv.classList.add("container");
	document.body.appendChild(memeDiv);
   
    // Creates div for top text
    let topTextDiv = document.createElement('div');
    topTextDiv.classList.add("top");
    memeDiv.append(topTextDiv);
    
    // Creates div for bottom text
    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("bottom");
    memeDiv.append(bottomTextDiv);

	// Creates an empty img tag
	let newMeme = document.createElement("img");
	newMeme.src = imageInput.value;
    imageInput.value = '';
	memeDiv.append(newMeme);

    // Creates empty paragraph tag
	let topText = document.createElement("p");
	topText = topTextInput.value;
    topTextInput.value = '';
	topTextDiv.append(topText);

    // Creates empty paragraph tag
	let bottomText = document.createElement("p");
	bottomText = bottomTextInput.value;
	bottomTextInput.value = '';
	bottomTextDiv.append(bottomText);

    // Creates the button to delete
    // deleteMeme = document.createElement("button");
	deleteMeme.innerText = "Delete";
	deleteMeme.className = "delete";
    memeDiv.append(deleteMeme);
});



deleteMeme.addEventListener('click', (e) => {
    console.log(e.target.className);
    if (e.target.tagName === "BUTTON" && e.target.className === "delete") {
        e.target.parentElement.remove();
    }
});



