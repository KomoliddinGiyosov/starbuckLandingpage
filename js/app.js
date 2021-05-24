function imgSlider(anything){
    document.querySelector('.starbucks').src = anything
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle')
    circle.style.background = color
}
function toogleMenu(){
    var menuToogle = document.querySelector('.toogle')
    var navigation = document.querySelector('.navigation')
    menuToogle.classList.toggle('active')
    navigation.classList.toggle('active')
}