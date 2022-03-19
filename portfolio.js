const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// const form = document.getElementById('form');
// const username = document.getElementById('name');
// const email = document.getElementById('email');
// const subject = document.getElementById('subject');
// const message =document.getElementById('message');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const formControl = element.parentElement;
//     const errorDisplay = formControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     formControl.className = 'form-control error';

// };
// const setSuccess = element => {
//     const formControl = element.parentElement;
//     const errorDisplay = formControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     formControl.className = 'form-control success';

// };

// const validEmail = (email) => {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// } ;

// const validateInputs= () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const subjectValue = subject.value.trim();
//     const messageValue = message.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Your name is required');
//     }else {
//         setSuccess(username);
//     }
//     if(emailValue === '') {
//         setError(email, 'Your email is required');
//     }else if(!validEmail(emailValue)) {
//         setError(email, 'Your email is not valid');
//     }else {
//         setSuccess(email);
//     }

//     if(subjectValue === '') {
//         setError(subject, 'Subject is required');
//     }else {
//         setSuccess(subject);
//     }

//     if(messageValue === '') {
//         setError(message, 'Message is required');
//     }else {
//         setSuccess(message);
//     }
// };
