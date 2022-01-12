import { type } from "jquery";

const rectangulo = {altura:10, anchura:15};
const area = rectangulo.altura * rectangulo.anchura;///Aqui iba error de tipado
///////Tipos de datos////////
let esverdadero =true;
console.log(esverdadero);

let nombre1: string="joel";
let apellido1: string="zavala";
let impresion: string =`
Nombre: ${nombre1}
Apellido: ${apellido1}
`;    ////template string

console.log(impresion)


function saludo(nombre){
    return "Hola, "+ nombre;
}
console.log(saludo("Geovany1"));
// tipo ANY//////////
let varSinTipo: any='hola joel';
varSinTipo=100;
////////Tipo Unknown//////////
let valDesc:unknown=4;
valDesc=true;
////////Tipo Void/////////
function Saludar2():void{
    console.log("Hola Mundo... Cruel");
}
Saludar2();
///////Tipo Tuplas/////////
let futbolista:[string,number];
futbolista=['Raul Jimenez',28];
console.log(`El futbolista es:${futbolista[0]}`);

/////Enum////////
enum Marca {
    toyota=24,
    porsche,
    ferrari
}

let turboS911:Marca =Marca.porsche;
console.log(turboS911);
console.log(Marca[25]);
///////////Uniones////////////
function UnionID(id:number|string){
if (typeof id === "string") {
    console.log(`El Id es ${(id as string).toUpperCase()}`);
} else {
    console.log(`El Id es ${(id as number).toFixed(2)}`);
}

}

UnionID("este es el id");
UnionID(24.123456);
//////////Tipo assertion/////////
let algunValor: unknown="Esto es un string";
let longitudDelString:number=(algunValor as string).length;

////////Funciones paramtros/////////
function saludar3(nombre: string){
 console.log(`hola ${nombre}`);
}
saludar3("Nubia");
////////Funciones retorno/////////
function elevarAlCuadrado(base: number): number {
  return base *base;
}
let numeroBase =10;
let numeroAlCuadrado =elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
////////Funciones Anonimas/////////
const nombres=["Juan","Pedro","Luis"];
nombres.forEach(function(s){
    console.log(s.toUpperCase());
});

nombres.forEach((s)=>{
   console.log(s.toUpperCase());
});
/////////Tipo Aliases////////////
type punto={
    x:number;
    y:number;
}

function imprimirCoordenada(punto:punto){
    console.log(`La coordenada x es: ${punto.x}`);
    console.log(`La coordenada y es: ${punto.y}`);
}
imprimirCoordenada({x:10, y:25});

/////////Tipos Interfaces////////////
// interface dentro de la funcion
function imprimirEtiqueta(etiqueta: {label:string}){
  console.log(etiqueta.label);
}
let miEtiqueta ={numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);

/////////opcionales en interfaces////////////
interface Cuadrado{
    color?:string;
    ancho:number;
}
function crearCuadrado(cuadrado:Cuadrado): {area: number}{
    const area =cuadrado.ancho*cuadrado.ancho;
    return{ area: area};
}
crearCuadrado({ancho:10});

/////////Extender interface////////////
interface Transporte{
    nombre: string;
}
type Figura={
    nombre:string;
}

interface Auto extends Transporte{
    ruedas:number;
}
/////////Extender un type////////////
type Cuadrado2 =Figura &{
    lados:4;
}

/////////Tipos Literales////////////

function imprimir(estadoCivil:'soltero' | 'casado'){
    console.log(estadoCivil);
}
imprimir('soltero');

/////////Funciones como Expresiones////////////
function saludar4(fn: (a:string)=>void){
    fn("Hola Mundo")
}

function imprimirEnConsola(s: string){
    console.log(s);
}

saludar4(imprimirEnConsola);






