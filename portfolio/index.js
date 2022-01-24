// console.log(`
// Общий балл: 85
// Вёрстка соответствует макету. Ширина экрана 768px +48
// Ни на одном из разрешений до 320px включительно
// не появляется горизонтальная полоса прокрутки.
// Весь контент страницы при этом сохраняется:
// не обрезается и не удаляется +15
// На ширине экрана 768рх и меньше реализовано адаптивное меню +18
// `);


(function() {
    
    const clickBurger = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const clickCross = document.querySelector ('.nav_close');
    const navLinks = document.querySelectorAll ('.header_link');
    const lineBurger = document.querySelectorAll ('.line_burger');
    //console.log(lineBurger[0]);

    function closeMenu (event) {
        if (!event.target.classList.contains ('header_nav_active')){
            menu.classList.toggle('header_nav_active');
            lineBurger[0].classList.toggle ('line_burger_first_cress');
            lineBurger[1].classList.toggle ('line_burger_second_cress');
            lineBurger[2].classList.toggle ('line_burger_third_cress');
        };
    }

    clickBurger.addEventListener('click', closeMenu);

    clickCross.addEventListener ('click',closeMenu);

    navLinks.forEach((el) => el.addEventListener('click', closeMenu ));
        


}());
