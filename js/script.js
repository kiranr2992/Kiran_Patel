/**---------------typing animation-------------*/
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*---------------forresponsive navmenu------------------- */

let menu = document.querySelector('#menu-btn');
let aside = document.querySelector('.aside');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    aside.classList.toggle('active');
}

/**  */