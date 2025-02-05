export default class CL_Contador{
    constructor(){
        this.cntPersonas = 0;
        this.cntMasculino = 0;
        this.cntFemenino = 0;
    }

    procesarPersona(personas){
        this.cntPersonas++;

        if(personas.sexo == "M"){
            this.cntMasculino++;
        }

        if(personas.sexo == "F"){
            this.cntFemenino++;
        }
    
    }

    cantidadPersonas(){
        return this.cntPersonas;
    }

    cantidadMasculino(){
        return this.cntMasculino;
    }

    cantidadFemenino(){
        return this.cntFemenino;
    }
}