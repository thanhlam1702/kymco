//handle modal product detail
document.querySelectorAll('.products__item')[1].addEventListener('click', function(){
    $('.products__detail').addClass('active');
})
document.querySelector('.close-product-detail').addEventListener('click',() =>{
    $('.products__detail').removeClass('active');
})

// window.onscroll = function(){
//     let currentScroll = window.pageYOffset;
//     if(currentScroll > banner.clientHeight){
//         if(prevScroll < currentScroll){
//             header.style.top = '-100px'
//         }
//         else{
//             header.style.top = '0'
    
//         }
//         prevScroll = currentScroll;
//         backTop.classList.add('active');
//         if(window.innerWidth > 992){
//             header.style.background = '#f4352c'
//         }
//     }
//     else{
//         header.style.background = 'none'
//         backTop.classList.remove('active');
//     }
    
// }

//slide banner
$('.slide__imgs').flickity({
    // cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 3000,
    selectedAttraction: 0.01,
    on: {
        change : function(index){
            document.querySelector('.page-here').innerHTML = (index + 1).toString().padStart(2,'0')
        }
    }
})

//slide 
$('.showlist__slide').flickity({
    // cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 3000,
    selectedAttraction: 0.01,
    on: {
        change : function(index){
            document.querySelectorAll('.mission .--textbox').forEach((item) =>{
                item.classList.remove('active')
            })
            let item = document.querySelectorAll('.mission .--textbox')[index]
            item.classList.add('active')

        }
    }
})

$('.icon.--next').on( 'click', function() {
    $('.showlist__slide').flickity('next');
});
$('.icon.--prev').on( 'click', function() {
    $('.showlist__slide').flickity('previous');
});

// choose
$('.choose__bg').parallax({imageSrc: 'img/banner-see-more.jpg'});

// news
document.querySelectorAll('.newslist__item-img img').forEach(item =>{
    item.addEventListener('mousemove', function(e){
        let posX = -(((this.clientWidth/2) - e.offsetX)*8)/100
        let posY = -(((this.clientHeight/2) - e.offsetY)*8)/100
        
        gsap.to(item, {
            x: posX,
            y: posY,
            duration: 1,
        })
    })
    item.addEventListener('mouseleave', function(){
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 1,
        })
    })
})

// network
document.querySelectorAll('.network__global img').forEach(item =>{
    item.addEventListener('mousemove', function(e){
        let x = -((this.clientWidth/2) - e.offsetX) / 300
        gsap.to(item, {
            rotate: x,
        })
    })
    item.addEventListener('mouseleave', function(e){
        gsap.to(item, {
            rotate: 0,
        })
    })
})