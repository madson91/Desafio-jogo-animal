export interface Animal {
    id?:number;
    nome:string;
    tipo?:number;
    caracteristica?:string;
    checkCaract?:boolean;
}

export interface mensagemDto {
    
    animal?:Animal;
    descricaoAnimal?:string;
	mensagem?:string
	caracteristica?:string;
	tipoAnimal?:number;
	resposta:boolean;
    
}

