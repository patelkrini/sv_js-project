let signUpbtn = document.querySelector('.signUpbtn');
let signInbtn = document.querySelector('.signInbtn'); 
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text=document.querySelector('.text');

signInbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpbtn.classList.add('disable');
    signInbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    signUpbtn.classList.remove('disable');
    signInbtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});