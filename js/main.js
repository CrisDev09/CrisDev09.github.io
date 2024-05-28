document.addEventListener('DOMContentLoaded', ()=>{

    const switcherTheme = document.querySelector('.main_switch');
    const root = document.documentElement;
    const btn_menu = document.querySelector('.button_toggle');
    const menu_item = document.querySelector('#navbarNavAltMarkup');
    
    if(root.getAttribute('data-theme') === 'dark'){
        switcherTheme.checked = true;
    }


    switcherTheme.addEventListener('click', toggleTheme);
    btn_menu.addEventListener('click', toggleMenu);


    function toggleTheme(){
        const setTheme = switcherTheme.checked ? 'dark' : 'light';

        root.setAttribute('data-theme', setTheme);
        document.querySelector('.my_menu').setAttribute('data-bs-theme', setTheme);
        localStorage.setItem('theme', setTheme);
    }

    function toggleMenu(){
        if (menu_item.style.right === "-100%" | menu_item.style.right === ""){
            menu_item.style.right = "0%";
        } else{
            menu_item.style.right = "-100%";
        }
    }

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        const menu = document.querySelector(".menu")
        if (menu_item.style.right === "0%"){
            menu_item.style.right = "-100%";
        }

        if (prevScrollpos > currentScrollPos) {
            menu.style.top = "0";
        } else {
            menu.style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
});