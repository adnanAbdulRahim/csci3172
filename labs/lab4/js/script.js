document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    //getting values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
    const country = document.getElementById('country').value;

    //Regex for validations
    const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
    const lastNameRegex = /^[A-Za-z]+(?:[-'][A-Za-z]+)?$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,6}$/i;

    // Validations
    if (!nameRegex.test(firstName)) {
        alert('First Name can only contain letters.');
        return;
    }
    if (!lastNameRegex.test(lastName)) {
        alert('Last Name can only contain letters.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!gender) {
        alert('Please select a gender.');
        return;
    }
    if (!country) {
        alert('Please select a country.');
        return;
    }

    //display
    const displayDiv = document.getElementById('displayData');
    displayDiv.innerHTML = `
        <h2>Form Data</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
    `;

    //clear after submission
    document.getElementById('form').reset();

    //submission check
    alert('Form submitted successfully!');
});

//ANSWER TO QUESTIONS:
//preventDefault() is used to stop the form from being automatically accepted and allowing
//user of validations

//What changes are required in the code to keep previous data on the page?
//in order to store the data after submission
//we are retrieving the elements and updating the div element in index.html
//with form values.
