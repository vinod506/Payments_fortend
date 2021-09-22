import { Component, Inject, Input, OnInit,Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Modal } from 'ng2-modal';
import { NoopAnimationPlayer } from "@angular/animations";
import { Transaction } from '../transaction';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  s:Transaction
  @Input() f:NgForm
  data:string
  constructor(public dialog: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) data ) 
{
  
  this.s = data.s;
  this.f = data.f;
}
  ngOnInit(): void {
  }

  closemodal()
  { this.f.reset();
    this.dialog.close();
  }
}
