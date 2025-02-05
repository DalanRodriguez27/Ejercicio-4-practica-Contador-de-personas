export default class CL_IContador{

    reporteContador(cp, cm, cf){
        return`
        <br>Reporte Contador
        <ul>
        <li>Cantidad de personas ${cp}</li>
        <li>Cantidad de personas masculinas ${cm}</li>
        <li>Cantidad de personas femeninas ${cf}</li>
        </ul>`
    }
}