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