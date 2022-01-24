// console.log(`
// Общий балл: 81
// Вёрстка соответствует макету. Ширина экрана 768px +48
// Ни на одном из разрешений до 320px включительно
// не появляется горизонтальная полоса прокрутки.
// Весь контент страницы при этом сохраняется:
// не обрезается и не удаляется +15
// На ширине экрана 768рх и меньше реализовано адаптивное меню +18
// `);

//Burger function

(function() {
    
    const clickBurger = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const clickCross = document.querySelector ('.nav_close');
    const navLinks = document.querySelectorAll ('.header_link');
    
    clickBurger.addEventListener('click', ()=> {
        menu.classList.toggle('header_nav_active');
    }); 

    clickCross.addEventListener ('click', ()=> {
        menu.classList.toggle('header_nav_active');
    });

    function closeMenu (event) {
        if (!event.target.classList.contains ('header_nav_active')){
            menu.classList.remove('header_nav_active');
        };
    }

    navLinks.forEach((el) => el.addEventListener('click', closeMenu ));
   
}());
