$(document).ready(function()
{
    console.log("Hola mundo, jquery funciona");
    InicializarEventos();
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'rigth',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
});


});

                  
function InicializarEventos(){
    $("#Entrantes h2").mouseover(SenyalarPlatoEntrante)
    $("#Entrantes h2").mouseout(DesenyalarPlatoEntrante)
    $("#Entrantes img").click(CargarCartaEntrante);
    $("#Entrantes h2").click(CargarCartaEntrante);
    
    $("#PrimerosPlatos h2").mouseover(SenyalarPlatoPrimeros)
    $("#PrimerosPlatos h2").mouseout(DesenyalarPlatoPrimeros)
    $("#PrimerosPlatos img").click(CargarCartaPrimeros);
    $("#PrimerosPlatos h2").click(CargarCartaPrimeros);
    
    $("#SegundosPlatos h2").mouseover(SenyalarPlatoSegundos)
    $("#SegundosPlatos h2").mouseout(DesenyalarPlatoSegundos)
    $("#SegundosPlatos img").click(CargarCartaSegundos);
    $("#SegundosPlatos h2").click(CargarCartaSegundos);
    
    $("#Postres h2").mouseover(SenyalarPlatopostres)
    $("#Postres h2").mouseout(DesenyalarPlatopostres)
    $("#Postres img").click(CargarCartaPostres);
    $("#Postres h2").click(CargarCartaPostres);
    
    $("#Vinos h2").mouseover(SenyalarBebidas)
    $("#Vinos h2").mouseout(DesenyalarBebidas)
    $("#Vinos img").click(CargarCartaBebidas);
    $("#Vinos h2").click(CargarCartaBebidas);
}

function SenyalarPlatoEntrante(){
    $("#Entrantes img").addClass("platoSenyalado");
}function DesenyalarPlatoEntrante(){
    $("#Entrantes img").removeClass("platoSenyalado");
}
function CargarCartaEntrante(){
    $("#ModalPrueba .modal-dialog").load("entrantes.html");
}
/****************************************************************************************************/
function SenyalarPlatoPrimeros(){
    $("#PrimerosPlatos img").addClass("platoSenyalado");
}
function DesenyalarPlatoPrimeros(){
    $("#PrimerosPlatos img").removeClass("platoSenyalado");
}
function CargarCartaPrimeros(){
    $("#ModalPrueba .modal-dialog").load("Primeros.html");
}
/****************************************************************************************************/
function SenyalarPlatoSegundos(){
    $("#SegundosPlatos img").addClass("platoSenyalado");
}
function DesenyalarPlatoSegundos(){
    $("#SegundosPlatos img").removeClass("platoSenyalado");
}
function CargarCartaSegundos(){
    $("#ModalPrueba .modal-dialog").load("Segundos.html");
}
/****************************************************************************************************/
function SenyalarPlatopostres(){
    $("#Postres img").addClass("platoSenyalado");
}
function DesenyalarPlatopostres(){
    $("#Postres img").removeClass("platoSenyalado");
}
function CargarCartaPostres(){
    $("#ModalPrueba .modal-dialog").load("Postres.html");
}
/****************************************************************************************************/
function SenyalarBebidas(){
    $("#Bebidas img").addClass("platoSenyalado");
}
function DesenyalarBebidas(){
    $("#Bebidas img").removeClass("platoSenyalado");
}
function CargarCartaBebidas(){
    $("#ModalPrueba .modal-dialog").load("vinos.html");
}
