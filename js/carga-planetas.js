const planetasContainer = document.querySelector('.contenedor-galeria')

planetas.forEach((planeta) => {
    const div = document.createElement('div')
    div.className = "img-galeria"
    div.innerHTML = `
    <img src=${planeta.img} alt="" class="img_glry">
    <h3>${planeta.nombre}</h3>
    <p>${planeta.desc}</p>
    <p>Distancia a la tierra: ${planeta.dist} </p>
    `
    planetasContainer.append(div)
})

