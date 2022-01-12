/////////Funciones, Constructor Signature////////////
interface Transporte{
    nombre:string;
}
class Caballo implements Transporte{
    constructor(public nombre:string){}
}
class Automovil implements Transporte {
    constructor(public nombre: string) {}
}

type ConstructorDeTransporte={
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string){
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Paso Fino");
const miAutomovil =construirTransporte(Automovil, "Toyota");

console.log("Mi caballo se llama "+ miCaballo.nombre);
console.log("Mi automovil es un "+ miAutomovil.nombre);

/////////Funciones con sobrecarga////////////
function longitud(a: any[]): number;
function longitud(x: string): number;
function longitud(x:any): number{
    return x.length;
}
console.log(longitud("hola mundo"));
console.log(longitud([1,2,3,4,5]));
//Con unions
function calcularLongitud(x: any[] | string){
    return x.length;
} 
console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1,2,3,4,5]));

/////////funciones uso del "this"////////////
const usuario={
    id:123,
    admin: false,
    volverseAdmin:function(){
        this.admin=true;
    },
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
//con funcion tipo flecha
const usuario2={
    id:123,
    admin: false,
    volverseAdmin:()=>{
        this.admin=true;
    },
};

console.log(usuario2.admin);
usuario.volverseAdmin();
console.log(usuario2.admin);

/////////funciones Rest Parameters//////////// para tomar un numero indefinido de argumentos
function multiplicar(n: number, ...m:number[]): number {
    return m.reduce((p, c)=>{
        return p* c;
    }, n);
}

console.log(multiplicar(2,2));
console.log(multiplicar(2,2,3));
console.log(multiplicar(2,2,3,4));

/////////Funciones parameter destructuring////////////
function sumar(num) {
    return num.a+ num.b + num.c;
}
const numeros ={a: 1, b: 2, c:3 };
console.log(sumar(numeros));
/////////?????????////////////



/////////?????????////////////
const imprimirTareas = (v: Array<string>)=> {
    v.forEach((v)=>{
        console.log(v);
    });
}

const misTareas: string[] =[
    "Levantarse",
    "Lavarse los dientes",
    "Sacar al perro"
];

imprimirTareas(misTareas);