export interface IProduct{
    id:number 
    price:number 
    title:string 
    rate:number
    picture:string
}

export interface IState{
    items:IProduct[]
}

export interface IRate{
    id:number 
    rate:number
}