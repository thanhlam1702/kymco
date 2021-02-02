// convert svg 
$(document).ready(function(){
    svgToInline('.icon-svg');
})

//handle nav mobile
$('.btn-menu').click(function(){
    console.log('object');
    $('.navmobile').toggleClass('active')
    $('.btn-menu').toggleClass('clicked')
})
//header

let banner = document.querySelector('.slide');
let backTop = document.querySelector('.back-top');

window.onscroll = function(){
    let currentScroll = window.pageYOffset;
    if(currentScroll > 600){
        backTop.classList.add('active');
    }
    else{
        backTop.classList.remove('active');
    }
}
// back to top
backTop.addEventListener('click', () =>{
    window.scrollTo(0,0);
})