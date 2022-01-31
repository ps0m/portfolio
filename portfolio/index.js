import i18Obj from './translate.js';

// function Translate text 

const allText = document.querySelectorAll("[data-i18]");
const readLanguage = document.querySelectorAll('input[name="lang"]');

if (readLanguage) {
    readLanguage.forEach((elem) => {
      elem.addEventListener("change", function(event) {
        var item = event.target.value;
        allText.forEach((n) => {
            if (n.placeholder) {
                n.placeholder = i18Obj[item][n.dataset.i18];
                } else 
            n.textContent = i18Obj[item][n.dataset.i18]});
      });
    });
  }


// function change theme



(function() {
    const clickTheme = document.querySelector('.theme');
    const logoFooter = document.querySelectorAll('.footer_logo');
    let a;
    function toggleMe(){
      return () => a = !a;
    }
    function changeTheme (event) {
        if (event.target.classList.contains ('theme')){
            clickTheme.classList.toggle('theme-light');
            clickTheme.classList.toggle('theme-dark');
            logoFooter.forEach((el) => {
                el.classList.toggle('footer_logo_dark');
                el.classList.toggle('footer_logo_light')});
            
            const b = toggleMe();
            if (b()) {
            document.documentElement.style.setProperty('--body-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#000');
            document.documentElement.style.setProperty('--hover-color', '#000');
            } else {
               document.documentElement.style.setProperty('--body-color', ""); 
               document.documentElement.style.setProperty('--text-color', ""); 
               document.documentElement.style.setProperty('--hover-color', ""); 
            }
        };
    } 
    clickTheme.addEventListener('click', changeTheme);


}());

// function for Burger menu 

(function() {
    
    const clickBurger = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const clickCross = document.querySelector ('.nav_close');
    const navLinks = document.querySelectorAll ('.header_link');
    const lineBurger = document.querySelectorAll ('.line_burger');

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

// function for change Portfolio

(function() {
    const portfolioBtn = document.querySelectorAll ('.button_portfolio');
    const portfolioImages = document.querySelectorAll ('.photo_portfolio');

    function changePhotoPortfolio (event){
        if (event.target.classList.contains ('button_portfolio')) {
            portfolioImages.forEach((img, index) => img.src = `./assets/jpg/${event.target.dataset.season}/${index+1}.jpg`);
        }
    }

    function addActiveButton (event) {
        if (event.target.classList.contains ('button_portfolio')) {
            portfolioBtn.forEach((item) => item.classList.remove ('button_portfolio_active'));
            event.target.classList.toggle ('button_portfolio_active');
        }
    }

    portfolioBtn.forEach((el) => el.addEventListener('click', changePhotoPortfolio));
    portfolioBtn.forEach((el) => el.addEventListener('click', addActiveButton ));
    
}());

// function difficult Button

const button = document.querySelectorAll('.button_solid');

button.forEach((el) => el.addEventListener('click', e));
function e (event) {
if (event.target.classList.contains ('button_solid')) { 
  const x = e.clientX
  const y = e.clientY

  const buttonTop = e.offsetTop
  const buttonLeft = e.offsetLeft

  const xInside = x - buttonLeft
  const yInside = y - buttonTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
}};

console.log(`Ваша отметка - 80 балла(ов)
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы
Комментарий проверяющего: НЕ Выполнено


Комментарии к выполненным пунктам:

1) при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием
Комментарий проверяющего: Выполнено
2) кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными
Комментарий проверяющего: Выполнено
3) при клике по надписи ru англоязычная страница переводится на русский язык
Комментарий проверяющего: Выполнено
4) при клике по надписи en русскоязычная страница переводится на английский язык
Комментарий проверяющего: Выполнено
5) надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем
Комментарий проверяющего: Выполнено
6) тёмная тема приложения сменяется светлой
Комментарий проверяющего: Выполнено
7) светлая тема приложения сменяется тёмной
Комментарий проверяющего: Выполнено
8) после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне)
Комментарий проверяющего: Выполнено
9) сложные эффекты для кнопок при наведении и/или клике
Комментарий проверяющего: Выполнено


Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.
`);







