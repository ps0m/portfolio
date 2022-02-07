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

// Video Player

const video = document.querySelector ('.video')
const buttonVideo = document.querySelector('.button_video');
const playerControls = document.querySelector('.player_controls');
const buttonControls = document.querySelector('.button_controls');
const progressFull = document.querySelector('.progress_full');
const offVolume = document.querySelector('.button_volume');
const volumePlayer = document.querySelector('.volume_range');
const timeVideoPlayer = document.querySelector('.time_video_player');
const buttonFullscreen = document.querySelector('.button_fullscreen');


function togglePlay () {
    if (video.paused) {
        video.play()
        buttonVideo.classList.add('button_video_none');
        buttonControls.textContent = "▷";

    } else {
        video.pause()
        buttonControls.textContent = "❚❚" ;
        buttonVideo.classList.remove('button_video_none');
    };
}

function visibilityPlayerControls() {
    playerControls.style.visibility = "visible";
}

buttonVideo.addEventListener ('click', visibilityPlayerControls);
buttonControls.addEventListener('click', togglePlay);
buttonVideo.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

function videoVolume(n) {
    let v;
    (n == 0) ? v = 0 : v = volumePlayer.value;
    video.volume = v;
    volumePlayer.style.background = "linear-gradient(to right, #bdae82 0%, #bdae82  " +v*100+ "%, #fff 0%, #fff 100%)";
    if (v<0.01) {
        offVolume.textContent = "🕨" ;
    } else {
        offVolume.textContent = "🕪" ;
    }
}


volumePlayer.addEventListener ('change', videoVolume);
offVolume.addEventListener ('click', function() {videoVolume (0)})

function fullScreen () {
        console.dir(video);
        if(video.webkitSupportsFullscreen) video.webkitEnterFullScreen();
} 

buttonFullscreen.addEventListener ('click', fullScreen);

function timer() {
    progressFull.value = (video.currentTime / video.duration) *100;
    let Minutes = Math.floor (video.currentTime / 60);
    Minutes = ((Minutes < 10) ? '0': '') + String(Minutes);

    let Seconds = Math.floor (video.currentTime % 60);
    Seconds = ((Seconds < 10) ? '0': '') + String(Seconds);

    timeVideoPlayer.innerHTML = `${Minutes}:${Seconds}`;

    let s = (video.currentTime/ video.duration)*100;
    progressFull.style.background = "linear-gradient(to right, #bdae82 0%, #bdae82  "+ s + "%, #fff 0%, #fff 100%)";
    
}


video.addEventListener ('timeupdate', timer)


function progressVideo () {
    video.currentTime = (progressFull.value * video.duration)/100;

}
progressFull.addEventListener ('change', progressVideo)

console.log(`
Ваша отметка - 65 балла(ов)
Вёрстка +10
вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause, прогресс-бар, кнопка Volume/Mute, регулятор громкости звука +5
в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
Кнопка Play/Pause на панели управления +10
при клике по кнопке Play/Pause запускается или останавливается проигрывание видео +5
внешний вид и функционал кнопки изменяется в зависимости от того, проигрывается ли видео в данный момент +5
Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10
При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка +10
При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10
Кнопка Play/Pause в центре видео +10
есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления +5
когда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается +5
Добавлено возможность полноэкранного просмотра — 5 балл(а)

`);
