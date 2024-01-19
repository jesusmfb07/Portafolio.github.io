let id = 0;
const Carrusel = {
    'proy1': {
        'img': './img/proyGymAfit.JPG',
        'title': 'Afit gym (Front End)',
        'link': 'https://edwardmelendezm.github.io/'
    },
    'proy2': {
        'img': './img/proyCasaMiau.JPG',
        'title': 'Casa Miau (Back end - Front End)',
        'link': 'https://github.com/EdwardMelendezM/CasaMiau'
    },
    'proy3': {
        'img': './img/proyCentroComputo.JPG',
        'title': 'Sistema gestor de silabos y asistencia de docente (Back end - Front End)',
        'link': 'https://github.com/LosCuatroFantasticoss/ProyectoIngenieriaSoftware2022-II'
    }
}


let button_atras = d.getElementById("button_atras"),
    button_siguiente = d.getElementById("button_siguiente");
let espacio_proyecto = d.getElementById("espacio_proyecto");


function carrusel_inicio(proy) {
    if (espacio_proyecto.dataset.value = '0') {
        insertar_proyecto(Carrusel.proy1, espacio_proyecto);
        espacio_proyecto.dataset.value = '1'
    }
}

function insertar_proyecto(proy, espacio, movimiento) {
    const template = `
    <div class="proy ${movimiento}">
        <a href="${proy.link}">
            <img src="${proy.img}" alt="" width="700px" >
            <h1>${proy.title}</h1>
        </a>
    </div>
    `;
    espacio.innerHTML = template;
}
function carrusel(e) {
    if (e.target == button_atras) {
        console.log("Button atras...")
        let valor = espacio_proyecto.dataset.value;
        switch (valor) {
            case '1':
                insertar_proyecto(Carrusel.proy3, espacio_proyecto, 'mostrarIzquierda');
                espacio_proyecto.dataset.value = '3'
                break;
            case '2':
                insertar_proyecto(Carrusel.proy1, espacio_proyecto, 'mostrarIzquierda');
                espacio_proyecto.dataset.value = '1'
                break;
            case '3':
                insertar_proyecto(Carrusel.proy2, espacio_proyecto, 'mostrarIzquierda');
                espacio_proyecto.dataset.value = '2'
                break;
            default:
                console.error('Algo ha ocurrido...');
                break;
        }
    }
    if (e.target == button_siguiente) {
        console.log("BOTTON Adelante...");
        let valor = espacio_proyecto.dataset.value;
        switch (valor) {
            case '1':
                insertar_proyecto(Carrusel.proy2, espacio_proyecto, 'mostrarDerecha');
                espacio_proyecto.dataset.value = '2'
                break;
            case '2':
                insertar_proyecto(Carrusel.proy3, espacio_proyecto, 'mostrarDerecha');
                espacio_proyecto.dataset.value = '3'
                break;
            case '3':
                insertar_proyecto(Carrusel.proy1, espacio_proyecto, 'mostrarDerecha');
                espacio_proyecto.dataset.value = '1'
                break;
            default:
                console.error('Algo ha ocurrido...');
                break;
        }
    }
}
window.addEventListener("DOMContentLoaded", carrusel_inicio);
window.addEventListener("click", carrusel);
