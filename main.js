alert('Português: Olá! Este WhatsApp "da deep web", brincadeiras a parte 😅, é um projeto feito por mim (John Anderson), e fiz pensando no mobile (não tenho pc).');

alert('English: Hello! This WhatsApp "from the deep web" 😅, jokes aside, is a project made by me (John Anderson), and I made it thinking about mobile (I dont have a PC).');

alert('My GitHub link: https://github.com/John-Developerx')

const accordion = document.querySelector('.fa-comment-alt');
accordion.addEventListener('click',function(){
   document.querySelector('.sidebar').classList.toggle('show-menu');
});

 const accordionn = document.querySelector('.fa-ellipsis-v');
accordionn.addEventListener('click',function(){
   document.querySelector('.sidebar1').classList.toggle('show-menu');
});
