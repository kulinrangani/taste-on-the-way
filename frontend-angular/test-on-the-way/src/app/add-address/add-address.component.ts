import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit{

  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder,private homeService:HomeService){}
  addressForm!:FormGroup;
  user_id=0;

  addAddress(){
    const address=this.addressForm.getRawValue();
    this.http.post("http://localhost:8089/address",address).subscribe((data)=>{console.log(data);
    })
    this.router.navigate(['../address'])
  }


  ngOnInit(){
    this.user_id=this.homeService.getUserId();

    this.addressForm=this.formBuilder.group({
      houseno:'',
      street:'',
      area:'',
      city:'',
      country:'',
      user_id:this.user_id
    })
  }
}
