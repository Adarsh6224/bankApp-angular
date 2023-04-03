import { Component,EventEmitter,Input,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
constructor(){

}

  ngOnInit(): void {

  }
  // to hold value from the parent
  @Input() item: string | undefined
  @Output() OnCancel=new EventEmitter();
  @Output() OnDelete=new EventEmitter();

  cancel(){
    this.OnCancel.emit();
  }

  delete(){
    this.OnDelete.emit(this.item);
  }

}
