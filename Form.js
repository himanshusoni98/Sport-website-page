// Login form validation and submission
document.getElementById('loginForm').querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const loginErrorMessage = document.getElementById('loginErrorMessage');

    // Add your login form validation here

    // If all validations pass, submit the form
    this.submit();
});

// Registration form validation and submission
document.getElementById('registrationForm').querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;
    const regConfirmPassword = document.getElementById('regConfirmPassword').value;
    const regErrorMessage = document.getElementById('regErrorMessage');

    // Add your registration form validation here

    // If all validations pass, submit the form
    this.submit();
});
// contact us from validation and submission
document.getElementById('registrationForm').querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const Name = document.getElementById('exampleInputname').value;
    const Emailid = document.getElementById('exampleInputEmail1').value;
    const Mobno = document.getElementById('exampleInputmob').value;
    const Query = document.getElementById('exampleInputquery');

    // Add your registration form validation here

    // If all validations pass, submit the form
    this.submit();
});
