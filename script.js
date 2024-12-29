function getFormvalue(event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Get the values of the First Name and Last Name input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Display the full name in an alert
    alert(`${firstName} ${lastName}`);
}

// Attach event listener to form submission
document.getElementById('form1').addEventListener('submit', getFormvalue);
