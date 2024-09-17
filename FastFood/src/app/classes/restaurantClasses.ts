export class Pedido{
    number: number;
    name: string;
    description: string;
    date: Date;
    done?:boolean;

    constructor() {
        this.number= Math.floor(Math.random() * (999 - 0 + 1) + 0);
        this.name= "";
        this.description="";
        this.date=new Date();
    }
}