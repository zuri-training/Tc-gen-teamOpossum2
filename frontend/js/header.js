// Assign all needed variables
const menuButton = document.querySelector('.menu-icon');
const head1 = document.querySelector('.head1-tooltip');
const head2 = document.querySelector('.head2-tooltip');
const xButton = document.querySelector('.x-icon');
const screen = document.querySelector('body');
const main = document.querySelector('main');

let mediaScreen = screen.getBoundingClientRect().width;

//Menu Button function
menuButton.addEventListener('click', e => {
     
    if (mediaScreen <= 1100) {
        xButton.classList.remove('visibility');
        head1.classList.remove('visibility');
        head2.classList.remove('visibility');
    } else if (mediaScreen <= 900) {
        head1.classList.remove('visibility');
        head2.classList.remove('visibility');
        xButton.classList.remove('visibility');
    } 

 })

 //X-Button function
 xButton.addEventListener('click', e => {
   
    if (mediaScreen <= 1100) {
        xButton.classList.add('visibility');
        head1.classList.add('visibility');
        head2.classList.add('visibility');
    } else if (mediaScreen <= 900) {
        head1.classList.add('visibility');
        head2.classList.add('visibility');
        xButton.classList.add('visibility');
    }

 })

  //main-section close function
 main.addEventListener('click', e => {
   
    if (mediaScreen <= 1100) {
        xButton.classList.add('visibility');
        head1.classList.add('visibility');
        head2.classList.add('visibility');
    } else if (mediaScreen <= 900) {
        head1.classList.add('visibility');
        head2.classList.add('visibility');
        xButton.classList.add('visibility');
    }
    
 })

