export default class CL_IPersonas {

    leerNombre(){
        return prompt("Ingrese el nombre de la persona");
    }

    leerSexo(){
        return prompt("Ingrese el sexo de la persona");
    }

    solicitarOpcion(){
        return prompt("Desea procesar a otra persona?: 1-->Si 2-->No");
    }
}