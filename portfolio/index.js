import i18Obj from './translate.js';

// function Translate text 

const allText = document.querySelectorAll("[data-i18]");
const readLanguage = document.querySelectorAll('input[name="lang"]');

function setLanguage() {
    if(!localStorage.getItem('language')){
        localStorage.setItem('language', "en");
        }
    allText.forEach((n) => {
        if (n.placeholder) {
            n.placeholder = i18Obj[localStorage.getItem('language')][n.dataset.i18];
            } else 
        n.textContent = i18Obj[localStorage.getItem('language')][n.dataset.i18]});
}
setLanguage();
if (readLanguage) {
    readLanguage.forEach((elem) => {
        if (elem.value === localStorage.getItem('language')) {
            elem.checked = true;
        }
        elem.addEventListener("change", function(event) {
        localStorage.setItem('language', `${event.target.value}`);
        setLanguage(localStorage.getItem('language'));
      });
    });
  }


// functions set and change theme

const clickTheme = document.querySelector('.theme');
const logoFooter = document.querySelectorAll('.footer_logo');

function setTheme() {
    if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', "dark");
    }
    if (localStorage.getItem('theme') === "light") {
        clickTheme.classList.remove('theme-dark');
        clickTheme.classList.add('theme-light');
        document.documentElement.style.setProperty('--body-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#000');
        document.documentElement.style.setProperty('--hover-color', '#000');
        logoFooter.forEach((el) => {
            el.classList.remove('footer_logo_dark');
            el.classList.add('footer_logo_light')});

    } else {
        clickTheme.classList.remove('theme-light');
        clickTheme.classList.add('theme-dark');
        document.documentElement.style.setProperty('--body-color', ""); 
        document.documentElement.style.setProperty('--text-color', ""); 
        document.documentElement.style.setProperty('--hover-color', "");
        logoFooter.forEach((el) => {
            el.classList.add('footer_logo_dark');
            el.classList.remove('footer_logo_light')});
    }
}
setTheme();

function changeTheme (event) {
        if (event.target.classList.contains ('theme')){
            if (localStorage.getItem('theme') === "light") {
                localStorage.setItem('theme', "dark");
            } else if( localStorage.getItem('theme') === "dark"){
                localStorage.setItem('theme', "light")};
        setTheme();
        };
} 
clickTheme.addEventListener('click', changeTheme);


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
if (event.target.classList.contains('button_solid')) { 
  const buttonTop = event.offsetY;
  const buttonLeft = event.offsetX;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = buttonTop + 'px';
  circle.style.left =  buttonLeft + 'px';
  
  this.appendChild(circle)

  setTimeout(() => circle.remove(), 750)
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

function preloadImages(...season) {
    for (const item of season) {
        for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/jpg/${item}/${i}.jpg`;
        }
    }
  }
preloadImages('summer','winter', 'spring');

