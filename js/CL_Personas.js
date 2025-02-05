export default class CL_Personas{
    constructor(nombre, sexo){
        this.nombre = nombre;   
        this.sexo = sexo;
    }

    set nombre(n){
        return this._nombre = n;
    }

    get nombre(){
        return this._nombre;
    }

    set sexo(s){
        return this._sexo = s;
    }   

    get sexo(){
        return this._sexo;
    }
}