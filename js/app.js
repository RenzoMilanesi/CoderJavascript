const deptosContainer=document.querySelector('.contenedor-galeria')

departamentos.forEach((depto)=>{
    const div= document.createElement('div')
    div.className="img-galeria"
    div.innerHTML =`
    <img src=${depto.img} alt="" class="img_glry">
    <h3>${depto.nombre}</h3>
    <p>${depto.desc}</p>
    <p>Precio:$${depto.precio} </p>
    `
    deptosContainer.append(div)
})

fetch('./js/data.json')
.then((res)=>res.json())
.then((data)=>{
    data.forEach((depto)=>{const div= document.createElement('div')
    div.className="img-galeria"
    div.innerHTML =`
    <img src=${depto.img} alt="" class="img_glry">
    <h3>${depto.nombre}</h3>
    <p>${depto.desc}</p>
    <p>Precio:$${depto.precio} </p>
    `
    deptosContainer.append(div)})
})