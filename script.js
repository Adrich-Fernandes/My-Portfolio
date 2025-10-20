// access the element and assigne it to a variable...>
const java = document.querySelector('.java');
const js = document.querySelector('.js');
const css = document.querySelector('.css');
const py = document.querySelector('.python');
const re = document.querySelector('.react');
const html = document.querySelector('.html');
const simg = document.querySelector('.simg');

const menu = document.querySelector('.menu');
let pos = document.querySelector('.pos');
let active = true;

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

simg.addEventListener('mouseover',()=>{
  
});