// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles cl

const links=document.querySelector('.links');
const nav_toggle=document.querySelector('.nav-toggle');

nav_toggle.addEventListener('click',()=>{
   
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');
    }
  
})
