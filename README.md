Meme Generator
For this assignment, you’ll be building a meme generator in the browser using HTML, CSS, and JavaScript.

Your generator should consist of a form that accepts a link to an image, text for the top of the meme, and text for the bottom of the meme. When the user submits the form, use JavaScript to append to the DOM a div which contains the meme, including the image and its text.

Requirements

* User should be able to submit a form on the page to generate a new meme on the page, and should be able to add multiple memes to the page by submitting the form multiple times.

* Users should be able to click on a button to remove a meme from the page.

* When the meme form is submitted, values in the form inputs should be cleared.

Be sure to style your meme generator! It should be functional but also look nice.

Only use vanilla JavaScript only: no frameworks/third-party libraries.

You can find a 30 second video demo of a possible solution here

Want a hint on how to get the meme text over the image?
 
Approach

You could do this by:

* Add a div around your img and text and give it a position: relative.

* To position text divs, give them each a position: absolute and set their positioning by using the properties of top, right, bottom and left.

Want a hint on handling the form submit to add a meme?

Approach

* The standard way to handle a form submit is to include an input in the form with a type attribute of “submit”. In JavaScript, you should then listen for “submit” events on the form element rather than click events on the button (form submits are triggered not only by clicking on the submit button, but also by hitting “enter” when you’re inside the form).

* After submission, if you see the page refresh, it’s because this is the default behavior of HTML forms! To stop the page from refreshing, you need to call e.preventDefault() on the event object e.

Want a hint on deleting a meme?

Approach

* Just like with submitting a new meme, to delete a meme you may need access to the event object. When you click on delete, take a look at what the e.target is. Using JavaScript, can you navigate from the target to the meme, and then remove the meme from the DOM?