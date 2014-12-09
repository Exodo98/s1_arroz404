$(document).ready(function()
{
    console.log("Hola mundo, jquery funciona");
    InicializarEventos();

});
                  
function InicializarEventos(){
    $("#Entrantes h2").mouseover(SenyalarPlato)
    $("#Entrantes h2").mouseout(DesenyalarPlato)
    $("#Entrantes img").click(CargarCarta);
}

function SenyalarPlato(){
    $("#Entrantes img").addClass("platoSenyalado");
    //console.log("entra");
}function DesenyalarPlato(){
    $("#Entrantes img").removeClass("platoSenyalado");
    //console.log("sale");
}
function CargarCarta(){
    $("#ModalPrueba .modal-dialog").load("3DRestaurantMenu/index.html");
    console.log("Entra al modal");
}