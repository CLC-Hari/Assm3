// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Select the submit button and the contact page
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Replace the contents of the contact page with a thank-you message
    contactPage.innerHTML = '<p>Thank you for your message</p>';

    // Style the thank-you message
    const thankYouMessage = contactPage.querySelector('p');
    thankYouMessage.style.fontSize = '24px';
    thankYouMessage.style.textAlign = 'center';
    thankYouMessage.style.marginBottom = '350px';
});
