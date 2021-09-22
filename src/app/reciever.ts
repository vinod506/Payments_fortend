import { NoopAnimationPlayer } from "@angular/animations";

export class Reciever{
    
    constructor(public bic: string,public b_name: string)
    {
        console.log(bic);
    }

}