//Funcion que aplica las animaciones de las habilidades
let proyectos = 0;
let clientes = 0;
let cursos =0;
let intervalProyectos = null;
let intervalclientes = null;
let intervalCursos = null;
function animacionNumeros(){
    var numeros = document.getElementById("numeros");
    var distancia_numeros = window.innerHeight - numeros.getBoundingClientRect().top;
    if(distancia_numeros >= 200 && proyectos ==0){
        intervalo = setInterval(actualizarContador, 60);
    }
}



function actualizarContador() {
    // Verificamos si hemos llegado a 50
    if (proyectos <= 50) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contProyectos").textContent = proyectos;
        // Incrementamos el contador en 1
        proyectos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalProyectos);
    }
    // Verificamos si hemos llegado a 30
    if (clientes <= 30) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contClientes").textContent = clientes;
        // Incrementamos el contador en 1
        clientes++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalclientes);
    }
    // Verificamos si hemos llegado a 40
    if (cursos <= 40) {
        // Mostramos el valor actual del contador en el elemento con id "contador"
        document.getElementById("contCursos").textContent = cursos;
        // Incrementamos el contador en 1
        cursos++;
    } else {
        // Si hemos llegado a 50, detenemos el intervalo
        clearInterval(intervalCursos);
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    animacionNumeros();
    animacionesSkills();
}
let visible=false;

function abrirCerrarMenu(){    
    if(visible==false){
        document.getElementById("nav").className = "responsive";
        visible = true;
    }else{
        document.getElementById("nav").className = "";
        visible = false;
    }
}

// Función que activa las animaciones de las barras de habilidades
function animacionesSkills() {
    var skills = document.getElementById("sobremi");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    // Si el usuario ha hecho scroll suficiente para llegar a la sección de habilidades
    if (distancia_skills >= 400) {
        // Añadir las clases de animación a las barras de habilidad
        document.getElementById("dw").classList.add("dw");
        document.getElementById("dg").classList.add("dg");
        document.getElementById("bd").classList.add("bd");
        document.getElementById("md").classList.add("md");

        // Eliminar el event listener después de que se haya ejecutado la animación para evitar que se ejecute varias veces
        window.removeEventListener("scroll", animacionesSkills);
    }
}

// Agregar el event listener para el evento 'scroll'
window.addEventListener("scroll", animacionesSkills);

let currentIndex = 0;
const items = document.querySelectorAll('.list .item');
const thumbnails = document.querySelectorAll('.thumbnail .item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showItem(index) {
    // Ocultar todos los elementos
    items.forEach((item) => {
        item.classList.remove('active');
    });
    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
    });

    // Mostrar el elemento actual
    items[index].classList.add('active');
    thumbnails[index].classList.add('active');
}

// Funciones para avanzar y retroceder en el slider
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Siguiente índice
    showItem(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Índice anterior
    showItem(currentIndex);
});

// Opcional: Función para cambiar al hacer clic en miniaturas
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showItem(currentIndex);
    });
});