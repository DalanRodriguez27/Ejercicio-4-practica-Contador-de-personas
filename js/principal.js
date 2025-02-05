import CL_Contador from "./CL_Contador.js"
import CL_Personas from "./CL_Personas.js"
import CL_IPersonas from "./CL_IPersonas.js"
import CL_IContador from "./CL_IContador.js"


let iContador = new CL_IContador(),
contador = new CL_Contador(),
salida = document.getElementById("salida");


let opc = 1;
while(opc ==1){
    let iPersona = new CL_IPersonas(),
    n = iPersona.leerNombre(),
    s = iPersona.leerSexo(),
    personas = new CL_Personas(n,s);

    contador.procesarPersona(personas);

    opc = iPersona.solicitarOpcion();   
}

salida.innerHTML = iContador.reporteContador(contador.cantidadPersonas(), contador.cantidadMasculino(), contador.cantidadFemenino());