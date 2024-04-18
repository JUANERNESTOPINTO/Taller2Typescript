import { Serie } from "./serie.js";
import * as dataObject from "./data.js";

var datosSeries = dataObject.series;

let bodyTablaTV: HTMLElement = document.getElementById("bodyTablaTV")!;

let divCard: HTMLElement = document.getElementById("divCard")!;


/**
 * Función para mostrar la información de las series.
 * @param data 
 * @param body 
 */
function mostrarDatos(data: Serie[], body: HTMLElement): void {
    let htmlVar = "";
    let promedio = 0;
    for (let i = 0; i < data.length; i++) {
        htmlVar += `
        <tr class=\"serie\">
            <th scope=\"row\">${data[i].id}</th>
            <td>${data[i].name}</td>
            <td>${data[i].channel}</td>
            <td>${data[i].seasons}</td>
        </tr>`
        promedio += data[i].seasons;
    }
    htmlVar += `
    <tr id = \"promedio\"><h3>Seasons Average: ${promedio / data.length}</h3></tr>`;
    body.innerHTML = htmlVar;
}

/**
 * Nueva funcion con respecto al taller1, la utilice para meter un listener a cada serie que mostrara la card de descripcion
 * 
 */
mostrarDatos(datosSeries, bodyTablaTV);

let listaClassSerie: HTMLCollectionOf<Element> = document.getElementsByClassName("serie")!;

for (let i = 0; i < listaClassSerie.length; i++) {


    listaClassSerie[i].addEventListener("click", () => {
        showCard(i);
    });
}



/**
 * Nueva funcion con respecto al taller1, la utilice para mostrar la tarjeta que va a tener la descripcion
 * @param index 
 */
function showCard(index: number): void {
    divCard.innerHTML = "";


    let currentSerie: Serie = datosSeries[index];

    let card: string = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${currentSerie.imgLink}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${currentSerie.name}</h5>
            <p class="card-text">${currentSerie.info}</p>
            <a href="${currentSerie.pagina}" class="btn btn-primary">Página de la serie</a>
        </div>
    </div>
    `;
    divCard.innerHTML = card;
}