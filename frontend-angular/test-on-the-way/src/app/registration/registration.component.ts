import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){
  }
  user_id=0;

  ngOnInit(){
    this.form=this.formBuilder.group({
      name:'',
      email:'',
      phone:'',
      password:'',
      cpassword:'',
      isAdmin:'false'
    })
  }

  ValidateEmail(mail:any) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

  submit() : void{
    console.log(this.form.getRawValue());
    
    let pass=this.form.getRawValue().password;
    let cpass=this.form.getRawValue().cpassword;
    let name=this.form.getRawValue().name;
    let email=this.form.getRawValue().email;
    let phone=this.form.getRawValue().phone;
    if(name=="" || name == null || phone=="" || phone==null){
      alert("Field Can not be empty");
    }
    else if(!this.ValidateEmail(email)){
      alert("You have entered an invalid email address!")
    }
    else if(pass != cpass){
     alert("Cofirm Password Must Be same"); 
    }
    else{     
      console.log(phone);
       
      this.http.post("http://localhost:8089/register",this.form.getRawValue()).subscribe((res:any)=>{
        this.createCart(res.id);
        this.router.navigate(['/login'])
      })      
    }
  }

  createCart(user_id:any){
    let cart={
      "user_id":user_id,
      "total":0,
      "address_id":1
    }
    this.http.post("http://localhost:8089/cart",cart,{withCredentials:true}).subscribe((data)=>{console.log(data);
      })
  }
}
