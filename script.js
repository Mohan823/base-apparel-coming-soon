const form = document.querySelector('.form');
const email = document.getElementById('email');
const submitbtn = document.getElementById('submit');
const footer = document.getElementById('footer');
const container = document.querySelector('.container')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(pattern)) {
        email.parentElement.classList.add('error');
    } else {
        const formControl = email.parentElement;
        if (formControl.classList.contains('error')) {
            formControl.classList.remove('error');
        }
    }
});