window.onscroll = function showheader() {

    var header = document.querySelector('.header__list');
    
    if(window.pageYOffset > 200) {
            header.classList.add('header__fixed');
    }   else{
            header.classList.remove('header__fixed');
    }

}

