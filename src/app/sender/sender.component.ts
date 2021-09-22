import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { RecieverService } from '../reciever.service';
import { Sender } from '../sender';
import { SenderService } from '../sender.service';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { MessageService } from '../message.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  @Output()  emitter= new EventEmitter<any>()
  s:Transaction
  f:Form
  msgTomodal(){
    this.emitter.emit(this.s)
    this.emitter.emit(this.f)
  }
  var1:boolean=false
  instArr: string[]=[]
  msgArr:string[]=[]
  trans_type:string
  constructor(public matdialog: MatDialog, private messageservice : MessageService, private senderservice: SenderService , private recieverservice: RecieverService, private TransactionService: TransactionService) { }

  ngOnInit(): void {
    this.getInstruction()
  }

  getsender($event: any, form: NgForm)
  {
    this.senderservice.getCustomerById($event.target.value)
    .subscribe(
      (data:{cust_id:any,cust_name:string,balance:any,over_draft:any})=>{
        console.log(form.controls['cust_id'])
        form.controls['cust_id'].setValue(data.cust_id)
        form.controls['cust_name'].setValue(data.cust_name)
        form.controls['balance'].setValue(data.balance)
        if( data.cust_name.includes("Bank"))
            form.controls['transfer_type'].setValue("Bank Transfer")
        else
        form.controls['transfer_type'].setValue("Customer Transfer")
      }
    )
  }

  getreciever($event: any, form: NgForm)
  {
    this.recieverservice.getCustomerById($event.target.value)
    .subscribe(
      (data:{bic:any,b_name:any})=>{
        console.log(form.controls['cust_id'])
        form.controls['bic'].setValue(data.bic)
        form.controls['b_name'].setValue(data.b_name)
      }
    )
  }

  postaddtransaction($event: any, form: NgForm)
  {
    let trans : Transaction={
    trans_id:'null',  
    sender_id:form.controls['cust_id'].value,
    reciever_id:form.controls['reciever_id'].value,
    reciever_bic :form.controls['bic'].value,
    reciever_name :form.controls['reciever_name'].value,
    amount:form.controls['amount'].value,
    msg:this.msgArr[this.instArr.indexOf(form.controls['msg_code'].value)],
    trans_status:"SUCCESS",};
    this.TransactionService.postaddtransaction(trans)
    .subscribe(
      (data)=>{
         console.log(data)
         
          //this.s=data.toString()
          this.s=data
          this.f=form
          console.log(this.s)
          this.openmodal()
          this.msgTomodal()
      }
    )
  }

  trans_charge($event:any,form:NgForm)
  {
    let tf=0.0025*Number($event.target.value)
    form.controls['fees'].setValue(tf)
    form.controls['tot_amt'].setValue(tf+Number($event.target.value))
  }

  getInstruction(){
    this.messageservice.getMes()
    .subscribe(
      (data)=>{
        data.forEach(item =>this.instArr.push(item.instruction));
        data.forEach(item =>this.msgArr.push(item.msg_code));
        console.log(this.instArr)
        //this.instArray.push(data.instruction)
      }
    )
    console.log(this.instArr)
  }
  openmodal()
  {
    const dialogC = new MatDialogConfig()
    dialogC.disableClose=true
    dialogC.height="320px"
    dialogC.width="650px"
    dialogC.data={
      s:this.s,f:this.f}
    
    const modaldia=this.matdialog.open(ModalComponent, dialogC)
  }
}
