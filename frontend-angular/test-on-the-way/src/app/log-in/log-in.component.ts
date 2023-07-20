import { Component, OnInit , AfterContentInit } from '@angular/core';
// import { LogInService } from '../services/log-in.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit,AfterContentInit{
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){}

  ngOnInit(): void {
      this.form=this.formBuilder.group({email:'',password:''})
  }

  submit() : void{
      let pass=this.form.getRawValue().password;
      let email=this.form.getRawValue().email;
      if(pass==""||pass==null ||email==""||email==null){
        alert("Fields Can Not be Empty");
      }
      else{
        this.http.post("http://localhost:8089/register/login",this.form.getRawValue(),{
          withCredentials:true
        }).subscribe(()=>{
          this.router.navigate(['/home']);
        },err=>{
          if(err.status== 404){
            alert("User Not Found With This mail");
          }
          else if(err.status==403){
            alert("Invalid Password");
          }else{
            alert("Invalid Credentials")
          }
        }
      )
    }
  }

  ngAfterContentInit(): void {
      
  }
}