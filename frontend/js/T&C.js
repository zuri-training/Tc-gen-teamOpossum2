const open = document.querySelector(".open")
const close = document.querySelector(".close")
const aside = document.querySelector(".aside")

open.addEventListener("click", ()=>{
    aside.style.left = "0px"
})
close.addEventListener("click", ()=>{
    aside.style.left = "-300px"
})