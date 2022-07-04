// Слайдер 
/* $('.slider').slick() */

$('.slider').slick({
    /* dots: true, */
    /* infinite: false,
    speed: 300, */
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1088,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ] 
  });

// DropDown
const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdownList = document.querySelector('.dropdown-list')
const list = document.querySelectorAll('.dropdown-list__item')

dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('visible')
})
list.forEach( function(item) {
    item.addEventListener('click', function(e) {
        e.stopPropagation()
        dropdownList.classList.remove('visible')
    })
})

document.addEventListener('click', function(e) {
    //console.log('click window');
    if (e.target !== dropdownBtn) {
        dropdownList.classList.remove('visible')
    } 
})

// Burger
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav-menu__list')

const demo = document.querySelector('.btn-header')
//console.log(demo);

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

if (innerWidth < 430) {
    demo.textContent = 'Demo'
}


   