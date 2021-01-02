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

//slide 

$('.showlist__slide-imgs').flickity({
    // cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 3000,
    selectedAttraction: 0.01,
    friction: 0.15,
    on: {
        change : function(index){
            // console.log(index);
        }
    }
})

$('.icon.--next').on( 'click', function() {
    $('.showlist__slide-imgs').flickity('next');
});
$('.icon.--prev').on( 'click', function() {
    $('.showlist__slide-imgs').flickity('previous');
});