import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddtocartService } from '../services/addtocart.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-restaurant.product',
  templateUrl: './restaurant.product.component.html',
  styleUrls: ['./restaurant.product.component.css']
})
export class RestaurantProductComponent implements OnInit {
  restaurant_id:string|null='';
  categoryId:string | null="";
  user_id=0;
  cart_id=0;
  products:any;
  cartDetails:any[]=[];
  constructor (private http:HttpClient,private homeService:HomeService,private addToCartService:AddtocartService,private route:ActivatedRoute){}

  addToCart(product_id:string,prodcut_price:any){

    if(this.user_id==0){
      alert("Please Login")
    }

    this.http.get("http://localhost:8089/cartdetails/product/"+this.user_id+"/"+product_id).subscribe((data:any)=>{
      let product:any[]=data
    if(product.length>0){
      alert("product Already in cart");

    }else{
      this.addToCartService.addToCartDetails(product_id,prodcut_price,this.cart_id)
        alert("product Added To cart");
    }
  })
  }

  getCartDetails(){
      
    this.http.get("http://localhost:8089/cartdetails/"+this.user_id).subscribe((data:any)=>
    {
      this.cartDetails=data;
      console.log(this.cartDetails);
    }
    )
  }

  ngOnInit(): void {

    this.restaurant_id=this.route.snapshot.paramMap.get('id');
    this.user_id=this.homeService.getUserId()

    this.http.get("http://localhost:8089/restaurant/product/"+this.restaurant_id).subscribe((data:any)=>{
      this.products=data
    })
    //getCartId
    this.http.get("http://localhost:8089/cart/cartid/"+this.user_id).subscribe((data:any)=>{
      this.cart_id=data[0].id
      console.log(this.cart_id); 
    })
    this.getCartDetails()
    
  }
}
