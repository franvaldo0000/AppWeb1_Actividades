//Funciones

//Arreglos y objetos

// Estructura de control de bucle

// for(let i = 0;i < 10;i++){
//     console.log(i)
// }

// Arreglos
// const numeros = [1,true,'hola',4,5,6]

// Tipos no primitivos y comparacion

// const numeros1 = [1,2,3]
const numeros2 = [1,2,3]

const numeros3 = [1, 2, [2,5], [1,[2]]];
console.log(numeros3[3][1][0])

// for(let i = 0;i < numeros.length;i++){
//     console.log(numeros[i])
// }

// Objetos

const persona = {
    // propiedad -> valor
    nombre: 'Andres',
    edad: 20,
    estudia: true,
    redes: [
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros: {
        mascotas: 2
    }
}


//Funciones
//definicion
//intreduce datos y puede o no devolver algo

//funciones de declaracion
// funcion + identificador + parametros     
function suma(){
    console.log(5+2)

}


function suma(a, b){
    //console.log(5+2)
    return a + b


    //const operacion = a + b
    //return operacion
}

//invocar, llamar, ejecutar
//identificador
let resultado = suma(10,5)
console.log(resultado)


//funcion flecha
//es una funcion que adquiere el ambito donde es declarada y la funcion de declaracion tiene su propio ambito
// la palabra es "vis"
// es anonima es decir no tiene identificador

const suma(a, b)=>{

    return a + b
}
let resultado0 = suma (10 + 5)
console.log(resultado)

console.log(suma)

//callback: funcion que se pasa como argumento de otra funcion
// y se ejecutara dentro de la segunda funcion

const a = (ab)=>{
    console.log("se ejecuto el callback")
    cd()
}

const b = ()=>{
    console.log("se ejecuto el callback de la funcion b")
    cd()
}

const c = ()=>{
    console.log("se ejecuto el callback de la funcion b")
    cd()
}

// buscar la diferencia entre a(b()) y a(b)

a(b)
