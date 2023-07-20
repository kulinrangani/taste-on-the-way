import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http:HttpClient) { }
  getUser(){
    let data:any;
    let url='http://localhost:8089/user';
    
    try{

      this.http.get(url).subscribe((user)=>{
        data=user;
        // console.log("from TS " +data);
      })
  }catch(e){
    console.log(e);
    
  }
    return data
  }
}
