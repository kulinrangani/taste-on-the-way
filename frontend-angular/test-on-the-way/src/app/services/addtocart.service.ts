import { Injectable, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  constructor(private homeService:HomeService,private http:HttpClient) { }
  
  user_id=this.homeService.getUserId();
  
  addToCartDetails(product_id:any,product_price:any,cart_id:any){
    let cartDetails={
      product_id:product_id,
      qty:1,
      price:product_price,
      cart_id:cart_id
    }
    this.http.post("http://localhost:8089/cartdetails",cartDetails).subscribe((data)=>{console.log(data);
    })
    // console.log(product_id,product_price,cart_id);
  }
}
