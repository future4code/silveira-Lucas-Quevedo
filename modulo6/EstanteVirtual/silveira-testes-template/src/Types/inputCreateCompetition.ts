export enum Competition{
    EM_ANDAMENTO="Competição em andamento",
    TERMINOU="Competição terminou",
    
}
export type inpuCreateCompetition ={
    competicao:string,
    condicao:Competition.EM_ANDAMENTO
}


export type inputCreateCompetitionData ={
    id:string,
    competicao:string,
    condicao:string
}

export type getId ={
    id:string
}