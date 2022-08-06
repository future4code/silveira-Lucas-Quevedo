export enum Competition{
    EM_ANDAMENTO="Competição em andamento",
    TERMINOU="Competição terminou",
}
export enum TypeCompetition{
    DARDO = "Dardo",
    CEM_METROS="100m Rasos",
}
export enum UNITY{
    S="s",
    m="m"
}
export type inpuCreateCompetition ={
    competicao:TypeCompetition,
    condicao:Competition
}


export type inputCreateCompetitionData ={
    id:string,
    competicao:TypeCompetition,
    condicao:Competition
}

export type getId ={
    id:string
}

