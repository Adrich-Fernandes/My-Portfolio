const menu = document.querySelector('.menu')
const phone = document.querySelector('.phone')
const close = document.querySelector('.close')

menu.addEventListener('click',function(){
  phone.style.display = "flex"
})

close.addEventListener('click',function(){
  phone.style.display = "none"
})