const bar   = document.getElementById('bar');
const close = document.getElementById ('close');
const nav   = document.getElementById('nav');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove ('active');
    })
}
let addtocart = document.getElementsByClassName("fa fa-shopping-cart")
for(let i =0; i<addtocart.length;i++){
    addtocart[i].addEventListener('click',add_ToCart)
}
function add_ToCart(event){
   let btn = event.target
   let btn_parent= btn.parentElement
    console.log(btn_parent)
}







    