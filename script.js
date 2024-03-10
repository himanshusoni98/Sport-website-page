document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const eventStart = document.getElementById('es').value;
    const eventEnd = document.getElementById('ed').value;
    const gameSelection = document.getElementById('gameSelection').value;
    const location = document.getElementById('location').value;
    const skills = document.getElementById('skills').value;
    const mobileOrEmail = document.getElementById('mobileOrEmail').value;


    // For demonstration purposes, let's log the form data
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Event Start:', eventStart);
    console.log('Event End:', eventEnd);
    console.log('Selected Game:', gameSelection);
    console.log('Location:', location);
    console.log('Skills:', skills);
    console.log('Mobile Number or Email ID:', mobileOrEmail);
});


// contact us page javaScript code
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});

