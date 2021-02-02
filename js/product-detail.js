// handle accordion

let accordion = document.querySelectorAll('.accordion__title')

accordion.forEach((item, index) => {
    item.addEventListener('click', function () {
        let panel = document.querySelectorAll('.accordion__content')[index]
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            document.querySelectorAll('.icon-plus')[index].classList.remove('active')

        } else {
            panel.style.maxHeight = (panel.scrollHeight + 8) + "px";
            document.querySelectorAll('.icon-plus')[index].classList.add('active')
        }
    })
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

$('.showlist__slide-imgs').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    selectedAttraction: 0.01,
    wrapAround: true,
    on: {
        change : function(index){
            document.querySelector('.paging__current').innerHTML = (index + 1).toString().padStart(2,'0')

            document.querySelectorAll('.showlist__text').forEach((item) =>{
                item.classList.remove('active')
            })
            document.querySelectorAll('.showlist__text')[index].classList.add('active')
        }
    }

});

//choose
$('.choose__bg').parallax({imageSrc: 'img/banner-see-more.jpg'});