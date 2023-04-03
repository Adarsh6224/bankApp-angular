import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){

}
ngOnInit(): void {
}
  uname: any;
  acno: any;
  pswd: any;
  userDetails:any;

  // UserDetails={
  //   1000:{acno:1000,username:"abhi",password:1000,balance:2000,transaction:[]},
  //   1001:{acno:1001,username:"adwaid",password:1001,balance:2000,transaction:[]},
  //   1002:{acno:1002,username:"pranav",password:1002,balance:2000,transaction:[]}
  // }


  // model for register
  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

 register(){
  var uname= this.registerForm.value.uname;
  var acno=this.registerForm.value.acno;
  var pswd=this.registerForm.value.pswd;
  if(this.registerForm.valid){
      this.ds.register(acno,uname,pswd).subscribe(
        (result:any)=>{
          alert(result.message);
          this.router.navigateByUrl('')
        },
        result=>{
          alert(result.error.message)
        }
      )
     
    }
    else{
      alert("Register failure");
      console.log(this.registerForm.get('uname')?.errors);
      
    }
  }
  
}
