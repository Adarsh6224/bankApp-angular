import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
// class is a collection of properties and methods
  constructor(private router: Router,private ds:DataService,private fb:FormBuilder,private http:HttpClient ){//1st executed
                //used for object initialization
                //It automatically invokes when an object is created
  }
  ngOnInit(): void {// 2nd executed
                    //initial process of component
                    //when a component is created ,at same time it initialize or authorize
                    //when a component is created ,There is a life cycle for it
    
  }

  aim="Your Perfect Banking Partner"
  accountNo="Enter the account number"
  password="Enter the password"

  // acno=""
  // pswd=""


  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })



  //properties
  
  //User defined function// 4th executed
//   login(a:any,p:any){
//     var acno=a.value;
//     var pswd=p.value;
//     var UserDetails=this.UserDetails;

//     if(acno in UserDetails)
//     {
//       if(pswd==UserDetails[acno].password)
//       {
//         alert("login successful");
//       }
//       else
//       {
//         alert("incorrect password");
//       }
//     }
//     else
//     {
//       alert("user not found")
//     }
    
//   }
//   acnoChange(event:any){
//     // console.log(event.target.value);
//     this.acno=event.target.value;
//     console.log(this.acno);
    
    
//   }
//   pswdChange(event:any){
//     // console.log(event.target.value);
//     this.pswd=event.target.value;
//     console.log(this.pswd);
//   }

// }

// UserDetails={
//   1000:{acno:1000,username:"abhi",password:1000,balance:2000,transaction:[]},
//   1001:{acno:1001,username:"adwaid",password:1001,balance:2000,transaction:[]},
//   1002:{acno:1002,username:"pranav",password:1002,balance:2000,transaction:[]}
// }
acno:any;
pswd:any;
userDetais:any;

login(){
  var acno=this.loginForm.value.acno;
  var pswd=this.loginForm.value.pswd;


  if(this.loginForm.valid){
    this.ds.login(acno,pswd).subscribe(
      (result:any)=>{
        localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('Token',JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl('dashboard');
      },
      result=>{
        alert(result.error.message)
      }
    )
    }
  }

//   const result = this.ds.login(acno,pswd)
//   if(this.loginForm.valid){
//   if (result){
//     alert("login successful");
//     this.router.navigateByUrl('dashboard');
//   }
//   else{
//     alert("login failure");
//     // console.log(this.loginForm.get('acno')?.errors);
//   }
// }
}
  

// acnoChange(event:any){
//   // console.log(event.target.value);
//   this.acno=event.target.value;
//   console.log(this.acno);
  
  
// }
// pswdChange(event:any){
//   // console.log(event.target.value);
//   this.pswd=event.target.value;
//   console.log(this.pswd);
// }
