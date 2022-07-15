let elemento = document.querySelector("#ele1")
console.log(elemento);

const pintar = (color = "green") => {
  elemento.style.background = color
}

ele1.addEventListener("click", ()=>{
  pintar("yellow")
})

