import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserService  {

  constructor(private http:HttpClient) { }

  getUser(){
    let user:any={};
    this.http.get("http://localhost:8089/register/user",{withCredentials:true})
    .subscribe((data:any)=>{
      console.log(data);
     return data});   
  }
}
