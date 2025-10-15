const menu = document.querySelector('.menu');
let pos = document.querySelector('.pos');
let active = true;
menu.addEventListener('click',()=>{
 
  if(active){
    pos.style.display = 'flex';
    active = false;
  }
  else{
    pos.style.display = 'none';
    active = true;
  }
});