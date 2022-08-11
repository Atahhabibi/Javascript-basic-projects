const close_btn=document.querySelector('.close-btn');
const sidebar_toggle=document.querySelector('.sidebar-toggle');
const sidebar=document.querySelector('.sidebar');

sidebar_toggle.addEventListener('click',()=>{

   if(sidebar.classList.contains('show-sidebar')){
       sidebar.classList.remove('show-sidebar')
   }
   else{
       sidebar.classList.add('show-sidebar');
   }
})

close_btn.addEventListener('click',()=>{
   sidebar.classList.remove('show-sidebar');
})