const openIcon = document.getElementById('menu_icon');
const hambMenu = document.getElementById('ham_menu')
const myBody = document.getElementById('bodied')
const klose = document.getElementById('closeIcon')
openIcon.addEventListener('click',function(){
  console.log('hi there')
  myBody.style.overflow ='hidden'
  hambMenu.style.transform = 'translateX(0px)'
  hambMenu.style.display = 'block'
  hambMenu.style.boxShadow = '-170px 0px 200px'
  openIcon.style.display = 'none'
});

klose.addEventListener('click',function(){
  console.log('closed shop')
  myBody.style.overflow ='scroll'
  hambMenu.style.transform = 'translateX(250px)'
  hambMenu.style.display = 'none'
  hambMenu.style.boxShadow = 'none'
  openIcon.style.display = 'block'
});