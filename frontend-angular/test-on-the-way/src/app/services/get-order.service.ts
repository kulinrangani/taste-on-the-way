import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOrderService {

  constructor(private http:HttpClient ) {}

  getOrder(id:any){
    // this.http.get("http://localhost:8089/user/order/"+user.id,)
    this.http.get(`http://localhost:8089/user/order/${id}`).subscribe((order)=>{return order})
  }
}
