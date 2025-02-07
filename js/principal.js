import CL_Contador from "./CL_Contador.js"
import CL_Personas from "./CL_Personas.js"


let personas1 = new CL_Personas("Luisa","F");
let personas2 = new CL_Personas("Ana","F");
let personas3 = new CL_Personas("Jose","M");
let personas4 = new CL_Personas("Carmen","F");
let personas5 = new CL_Personas("Rosa","F");
let personas6 = new CL_Personas("Jose","M");
let personas7 = new CL_Personas("Luz","F");
let personas8 = new CL_Personas("Rafael","M");
let personas9 = new CL_Personas("Liz","F");
let personas10 = new CL_Personas("Marcos","M");
let personas11 = new CL_Personas("Maria","F");
let personas12 = new CL_Personas("Leo","M");

let contador = new CL_Contador();

contador.procesarPersona(personas1);
contador.procesarPersona(personas2);
contador.procesarPersona(personas3);
contador.procesarPersona(personas4);
contador.procesarPersona(personas5);
contador.procesarPersona(personas6);
contador.procesarPersona(personas7);
contador.procesarPersona(personas8);
contador.procesarPersona(personas9);
contador.procesarPersona(personas10);
contador.procesarPersona(personas11);
contador.procesarPersona(personas12);

let salida = document.getElementById("salida");

salida.innerHTML =`
<br>Cantidad de personas: ${contador.cantidadPersonas()}
<br>Cantidad de hombres: ${contador.cantidadMasculino()}
<br>Cantidad de mujeres: ${contador.cantidadFemenino()}
`;
