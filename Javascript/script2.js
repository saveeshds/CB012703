document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const payButton = document.getElementById('Pay'); // Select the button with id 'Pay'

    // Add an event listener to the 'Pay' button
    payButton.addEventListener('click', function () {
        let isValid = true;
        const requiredFields = form.querySelectorAll('input[required], textarea[required]');

        // Validate required fields
        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        // Show alert if the form is valid
        if (isValid) {
            alert('Thank you for purchasing from Health Hub! Your order will be delivered within 4 days.');
        } else {
            alert('Please fill out all required fields.');
        }
    });
});
