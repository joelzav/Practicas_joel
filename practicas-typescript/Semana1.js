"use strict";
exports.__esModule = true;
var rectangulo = { altura: 10, anchura: 15 };
var area = rectangulo.altura * rectangulo.anchura; ///Aqui iba error de tipado
///////Tipos de datos////////
var esverdadero = true;
console.log(esverdadero);
var nombre1 = "joel";
var apellido1 = "zavala";
var impresion = "\nNombre: " + nombre1 + "\nApellido: " + apellido1 + "\n"; ////template string
console.log(impresion);
function saludo(nombre) {
    return "Hola, " + nombre;
}
console.log(saludo("Geovany1"));
// tipo ANY//////////
var varSinTipo = 'hola joel';
varSinTipo = 100;
////////Tipo Unknown//////////
var valDesc = 4;
valDesc = true;
////////Tipo Void/////////
function Saludar2() {
    console.log("Hola Mundo... Cruel");
}
Saludar2();
///////Tipo Tuplas/////////
var futbolista;
futbolista = ['Raul Jimenez', 28];
console.log("El futbolista es:" + futbolista[0]);
/////Enum////////
var Marca;
(function (Marca) {
    Marca[Marca["toyota"] = 24] = "toyota";
    Marca[Marca["porsche"] = 25] = "porsche";
    Marca[Marca["ferrari"] = 26] = "ferrari";
})(Marca || (Marca = {}));
var turboS911 = Marca.porsche;
console.log(turboS911);
console.log(Marca[25]);
///////////Uniones////////////
function UnionID(id) {
    if (typeof id === "string") {
        console.log("El Id es " + id.toUpperCase());
    }
    else {
        console.log("El Id es " + id.toFixed(2));
    }
}
UnionID("este es el id");
UnionID(24.123456);
//////////Tipo assertion/////////
var algunValor = "Esto es un string";
var longitudDelString = algunValor.length;
////////Funciones paramtros/////////
function saludar3(nombre) {
    console.log("hola " + nombre);
}
saludar3("Nubia");
////////Funciones retorno/////////
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
////////Funciones Anonimas/////////
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es: " + punto.x);
    console.log("La coordenada y es: " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
/////////Tipos Interfaces////////////
// interface dentro de la funcion
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
/////////Tipos Literales////////////
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
/////////Funciones como Expresiones////////////
function saludar4(fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
