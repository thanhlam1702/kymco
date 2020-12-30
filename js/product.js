// handle chang frame product
document.querySelectorAll('.content__nav-item').forEach(function(item, index){
    item.addEventListener('click', function(){
        document.querySelectorAll('.content__nav-item').forEach((item) =>{
            item.classList.remove('active')
        })
        this.classList.add('active')
    })
})