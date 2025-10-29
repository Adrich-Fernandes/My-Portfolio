const menu = document.querySelector('.menu');
let pos = document.querySelector('.pos');
let active = true;



const navp = document.querySelectorAll('.pon-nav').forEach(items=>{
  items.addEventListener('click',()=>{
    menu.textContent = "menu"
    pos.style.display = 'none';
    active = true;
  });
})
// to open the menu for more options...>
menu.addEventListener('click',()=>{
  // open the menu...>
  if(active){
    menu.textContent = "close"
    pos.style.display = 'flex';
    active = false;
  }
  // close the menu...>
  else{
    menu.textContent = "menu"
    pos.style.display = 'none';
    active = true;
  }
}); 