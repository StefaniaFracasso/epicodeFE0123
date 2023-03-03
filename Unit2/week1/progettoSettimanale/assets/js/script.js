let header = document.getElementsByTagName('header')[0]
let button = document.getElementById('getStarted-button')
let hero = document.getElementById('hero')

window.addEventListener('scroll', function() {
    if (window.scrollY > hero.offsetHeight) {
        header.classList.add('white-header')
        button.classList.remove('black-button')
        button.classList.add('green-button')
      } else {
        header.classList.remove('white-header')
        button.classList.remove('green-button')
        button.classList.add('black-button')
      }
    });
