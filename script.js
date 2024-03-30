const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky',this.window.scrollY > 80 );
});
//open menu
 let menu = docuement.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
 }
//  solucion 
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.toggle('open');
}