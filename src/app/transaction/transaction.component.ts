import { transition } from '@angular/animations';
import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  acno:any;
  transactions:any;
  constructor(private ds:DataService){
    this.acno=this.ds.currentAcno
    this.transactions=this.ds.getTransaction(this.acno);
  }
  ngOnInit(): void {
    
  }

}
