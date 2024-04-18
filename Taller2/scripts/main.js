import * as dataObject from "./data.js";
var datosSeries = dataObject.series;
var bodyTablaTV = document.getElementById("bodyTablaTV");
var divCard = document.getElementById("divCard");
/**
 * Función para mostrar la información de las series.
 * @param data
 * @param body
 */
function mostrarDatos(data, body) {
    var htmlVar = "";
    var promedio = 0;
    for (var i = 0; i < data.length; i++) {
        htmlVar += "\n        <tr class=\"serie\">\n            <th scope=\"row\">".concat(data[i].id, "</th>\n            <td>").concat(data[i].name, "</td>\n            <td>").concat(data[i].channel, "</td>\n            <td>").concat(data[i].seasons, "</td>\n        </tr>");
        promedio += data[i].seasons;
    }
    htmlVar += "\n    <tr id = \"promedio\"><h3>Seasons Average: ".concat(promedio / data.length, "</h3></tr>");
    body.innerHTML = htmlVar;
}
mostrarDatos(datosSeries, bodyTablaTV);
var listaClassSerie = document.getElementsByClassName("serie");
var _loop_1 = function (i) {
    listaClassSerie[i].addEventListener("click", function () {
        showCard(i);
    });
};
for (var i = 0; i < listaClassSerie.length; i++) {
    _loop_1(i);
}
/**
 *
 * @param index
 */
function showCard(index) {
    divCard.innerHTML = "";
    var currentSerie = datosSeries[index];
    var card = "\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"".concat(currentSerie.imgLink, "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(currentSerie.name, "</h5>\n            <p class=\"card-text\">").concat(currentSerie.info, "</p>\n            <a href=\"").concat(currentSerie.pagina, "\" class=\"btn btn-primary\">P\u00E1gina de la serie</a>\n        </div>\n    </div>\n    ");
    divCard.innerHTML = card;
}