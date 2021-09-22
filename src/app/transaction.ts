import { NoopAnimationPlayer } from "@angular/animations";

export class Transaction{
    
    constructor(public trans_id:any,public reciever_name: String, public sender_id: number,public reciever_id: number,public reciever_bic:String, public amount: number,public msg: string,public trans_status: string)
    {
        
    }

}