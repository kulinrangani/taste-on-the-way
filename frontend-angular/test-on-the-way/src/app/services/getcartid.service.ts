import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcartidService {

  constructor(private http:HttpClient) { }
  cartid=0;
  cart:any={}

  setCartId(id:any){
    this.cartid=id
  }
  getCartId(){
    return this.cartid
  }

  setCart(data:any){
    this.cart=data
  }

  getCart(){
    return this.cart
  }

  // getCartId(user_id:any){
  //   let cart:any={};
  //   let cart_id=0;
  //   this.http.get("http://localhost:8089/cart/cartid/"+user_id).subscribe((data)=>{cart=data})
  //   cart_id=cart[0].id;

  //   return cart_id
  // }

  
}
