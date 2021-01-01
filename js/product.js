
// handle change tab, change frame product 
document.querySelectorAll('.content__nav-item').forEach(function(item, index){
    item.addEventListener('click', function(){
        document.querySelectorAll('.content__nav-item').forEach((item) =>{
            item.classList.toggle('active')
        })
        document.querySelectorAll('.frame-product').forEach((item) =>{
            item.classList.toggle('active')
        })
    })
})

//handle show popup product
document.querySelectorAll('.listmore__item-btn .so-sanh').forEach((item, index) =>{
    item.addEventListener('click', () =>{
        let nameBike = document.querySelectorAll('.listmore__item-name')[index].textContent;
        document.querySelector('.popup__mess').innerHTML = `${nameBike} vừa được thêm vào danh sách so sánh`
        document.querySelector('.popup-modal').classList.add('active');
        document.querySelector('.popup').classList.add('active');
    })
})
document.querySelector('.popup__close').addEventListener('click', () =>{
    document.querySelector('.popup-modal').classList.remove('active');
    document.querySelector('.popup').classList.remove('active');
})
document.querySelector('.compare').addEventListener('click', () =>{
    //Todo
})

// handle range price product
const inputLeft = document.getElementById('input-left')
const inputRight = document.getElementById('input-right')

let thumbLeft = document.querySelector('.range__main-slide .thumb.left')
let thumbRight = document.querySelector('.range__main-slide .thumb.right')

let priceMin = document.querySelector('.price.min')
let priceMax = document.querySelector('.price.max')

inputLeft.addEventListener('input', function(){
    let _this = inputLeft;
    let min = parseInt(_this.min)
    let max = parseInt(_this.max)

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value))
    let percent = ((_this.value - min ) / (max - min)) * 100;
    thumbLeft.style.left = percent + '%';

    let result = parseInt((percent*1035000) + 13500000);

    priceMin.innerHTML = Intl.NumberFormat('de-DE').format(result) + ' VNĐ'

})

inputRight.addEventListener('input', function(){
    let _this = inputRight;
    let min = parseInt(_this.min)
    let max = parseInt(_this.max)

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value))
    let percent = ((_this.value - min ) / (max - min)) * 100;
    thumbRight.style.right = (100 - percent) + '%';

    let result = parseInt(117000000 - ((100- percent)*1035000));

    priceMax.innerHTML = Intl.NumberFormat('de-DE').format(result) + ' VNĐ'


})
//event click and hove thumb
//thumb left
inputLeft.addEventListener('mouseover', function(){
    thumbLeft.classList.add('hover')
})
inputLeft.addEventListener('mouseout', function(){
    thumbLeft.classList.remove('hover')
})
inputLeft.addEventListener('mousedown', function(){
    thumbLeft.classList.add('active')
})
inputLeft.addEventListener('mouseup', function(){
    thumbLeft.classList.remove('active')
})
//thumb right
inputRight.addEventListener('mouseover', function(){
    thumbRight.classList.add('hover')
})
inputRight.addEventListener('mouseout', function(){
    thumbRight.classList.remove('hover')
})
inputRight.addEventListener('mousedown', function(){
    thumbRight.classList.add('active')
})
inputRight.addEventListener('mouseup', function(){
    thumbRight.classList.remove('active')
})
