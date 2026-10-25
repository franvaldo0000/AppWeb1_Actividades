//a Sin retorno de valor
function SaludarPersona(){

    console.log("Hola Bienvenido")
} 

const nombre = "Hola Bienvenido"

//b Sin retorno de valor
function SaludarPersona(nombre){

    console.log(nombre)
} 

//c  retorno de valor

const edad = 18

function esMayorDeEdad {

    if edad>=18 (

        console.log("Es Mayor de edad")

    )
    else
    (
       console.log ("es menor de edad")

    )    
    

}



//Funciones de flecha

const esMayorDeEdad(18)=>{

    return edad >= 18
}
let resultado0 = suma (10 + 5)
console.log(resultado)

console.log(suma)


function esMayorDeEdad=>(edad){

    if (edad >= 18) {

        return true

        else if (edad < 18) {
            return false
        }

        else {
            return "es igual a 18"
        }


    }


    //funciones callback Escriba un programa con una función flecha con el identificador operacion que debe recibir tres parámetros, los dos primeros son números y el tercero un callback (función).
