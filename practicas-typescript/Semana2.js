var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Paso Fino");
var miAutomovil = construirTransporte(Automovil, "Toyota");
function longitud(x) {
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1, 2, 3, 4, 5]));
/////////?????????////////////
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = [
    "Levantarse",
    "Lavarse los dientes",
    "Sacar al perro"
];
imprimirTareas(misTareas);
