// conditional type:j type conditional er opor depend kore


type A=null;
type B=undefined;

type C= A extends null ?true:false


type RichPeopleVhecial={
    bike:string;
    car:string;
    ship:string
}
type CheakVhecial<T> = T extends keyof RichPeopleVhecial?true:false

type HasBike=CheakVhecial<'bike'>