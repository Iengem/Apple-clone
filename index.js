dropdown =  document.querySelector('.dropdown');
exit = document.querySelector('.exit');

function drop(){
    dropdown.style.height = '100vh';
    dropdown.style.transition = '0.7s';
}
exit.addEventListener('click', function(){
    dropdown.style.height = '0vh';
})