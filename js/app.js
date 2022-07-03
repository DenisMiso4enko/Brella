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
console.log(demo);

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

if (innerWidth < 430) {
    demo.textContent = 'Demo'
}

