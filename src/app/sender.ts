import { NoopAnimationPlayer } from "@angular/animations";

export class Sender{
    
    constructor(public cust_id: number,public cust_name: string,public balance : number)
    {
        console.log(cust_id);
    }

}