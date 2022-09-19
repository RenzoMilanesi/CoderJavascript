window.addEventListener('load', obtenerDatos);
/*API DE LA NASA*/
const ApiKey = "fDbF1Keaa3Vyf8StfE84XQgS43sVpGl8coHbDX2V"
const ApodKey = `https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`

function obtenerDatos() {
  fetch(ApodKey)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))

}
/*Mostrar datos de la api , muestra una foto y descripcion distinta cada dia , quise hacer que se pueda elegir el dia y que te muestre la foto de ese dia , pero al trabajar con fechas se me hizo muy dificil y lo deje estandar*/
function mostrarDatos({
  date,
  explanation,
  title,
  media_type,
  url
}) {
  const titulo = document.querySelector('#titulo_apod')
  titulo.innerHTML = title;
  const explicacion = document.querySelector('#dsc_apod')
  explicacion.innerHTML = explanation
  const fecha = document.querySelector('#fecha_apod')
  fecha.innerHTML = date;
  const multimedia = document.querySelector('#c_multimedia')
  if (media_type == 'video') {
    multimedia.innerHTML = ` 
    <iframe class="embed-responsive-item" src="${url}" ></iframe>`
  } else {
    multimedia.innerHTML = `<img src="${url}" class="img-fluid pb-5" alt="${title}  width="560" height="315">`
  }
}