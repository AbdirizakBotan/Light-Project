const box = document.querySelector("#box")
const btnOn = document.querySelector("#btnOn")
const btnOf = document.querySelector("#btnOf")


btnOn.addEventListener("click" , ()=>{
    box.style.backgroundColor = "yellow"
    btnOn.style.color="red"
    btnOf.style.color ="black"
})

btnOf.addEventListener("click", ()=>{
    box.style.backgroundColor ="transparent"
    btnOf.style.color="red"
    btnOn.style.color ="black"
})