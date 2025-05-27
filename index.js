const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu-container');

hamburger.addEventListener('click', function(e){
    if(!hamburgerMenu.classList.contains('show')){
 hamburgerMenu.classList.add('show');
 document.body.classList.add('overflow-none');
    }else{
        hamburgerMenu.classList.remove('show');
        document.body.classList.remove('overflow-none');
    };
});