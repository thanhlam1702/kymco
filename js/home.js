//handle modal product detail
document.querySelectorAll('.products__item')[1].addEventListener('click', function(){
    $('.products__detail').addClass('active');
})
document.querySelector('.close-product-detail').addEventListener('click',() =>{
    $('.products__detail').removeClass('active');
})

window.onscroll = function(){
    let currentScroll = window.pageYOffset;
    if(currentScroll > banner.clientHeight){
        if(prevScroll < currentScroll){
            header.style.top = '-100px'
        }
        else{
            header.style.top = '0'
    
        }
        prevScroll = currentScroll;
        backTop.classList.add('active');
        if(window.innerWidth > 992){
            header.style.background = '#f4352c'
        }
    }
    else{
        header.style.background = 'none'
        backTop.classList.remove('active');
    }
    
}