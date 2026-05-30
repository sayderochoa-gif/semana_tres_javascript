let notas = [];

const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotas = document.getElementById("listaNotas");

console.log("Referencia del input:", inputNota);
console.log("Referencia del botón:", btnAgregar);
console.log("Referencia de la lista (UL):", listaNotas);

window.addEventListener("DOMContentLoaded", () => {
    const notasGuardadas = localStorage.getItem("notas");
    
    if (notasGuardadas) {
        notas = JSON.parse(notasGuardadas);
        console.log(`Se cargaron ${notas.length} notas desde Local Storage.`);
        renderizarNotas();
    } else {
        console.log("No hay notas guardadas en Local Storage.");
    }
});


function renderizarNotas() {
    listaNotas.innerHTML = "";

    notas.forEach((textoNota, index) => {
        const nuevoLi = document.createElement("li");
        
        nuevoLi.textContent = textoNota + " ";

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";



        btnEliminar.addEventListener("click", () => {
            listaNotas.removeChild(nuevoLi);
            
            notas.splice(index, 1);
            
            actualizarLocalStorage();
            console.log("Se eliminó la nota de la lista.");
        });
        nuevoLi.appendChild(btnEliminar);
        listaNotas.appendChild(nuevoLi);
    });
}


btnAgregar.addEventListener("click", () => {
    const textoInput = inputNota.value.trim();

    if (textoInput === "") {
        alert("Por favor, escribe algo antes de agregar la nota.");
        return;
    }

    notas.push(textoInput);

    actualizarLocalStorage();


    renderizarNotas();

    console.log("Se agregó la nota correctamente.");

    inputNota.value = "";
    inputNota.focus();
});

function actualizarLocalStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
    console.log("Local Storage actualizado con éxito.");
}