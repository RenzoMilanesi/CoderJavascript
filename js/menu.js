const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

/*Efecto Spead al clickear el menu hamburguesa*/
hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
/*Efecto cerrado al clickaer fuera de el menu spread (una vez abierto)*/
window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
})