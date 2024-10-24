export interface Tags{
    caracteristicnNme: string
    caracteristics: Filters[]
}

export interface Filters{
    name:string
    options:string[];
}