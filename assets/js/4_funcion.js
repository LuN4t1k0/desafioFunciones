let color = "";

const pintarSegunIdObtenido = (e) => {
  document.getElementById(e.target.id).style.backgroundColor = color;
};

const obtenerColorSegunTecla = (e) => {
  console.log(e.keyCode);
  if (e.keyCode === 65) {
    color = "#F5F0BB";
  } else if (e.keyCode === 83) {
    color = "#C4DFAA";
  } else if (e.keyCode === 68) {
    color = "#90C8AC";
  } else if (e.keyCode === 70){
    color = "#73A9AD"
  }else if (e.keyCode === 82)
  refrescarPagina();
};

const refrescarPagina = () => {
  location.reload();
}

document.addEventListener("click", pintarSegunIdObtenido, false);
document.addEventListener("keydown", obtenerColorSegunTecla, false);
