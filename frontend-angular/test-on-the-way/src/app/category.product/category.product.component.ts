import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AddtocartService } from '../services/addtocart.service';
import { HomeService } from '../services/home.service';
import { GetcartidService } from '../services/getcartid.service';

@Component({
  selector: 'app-category.product',
  templateUrl: './category.product.component.html',
  styleUrls: ['./category.product.component.css']
})
export class CategoryProductComponent implements OnInit{
 
  products:any[]=[];
  categoryId:string | null="";
  user_id=0;
  cart_id=0;
  cartDetails:any[]=[];
  
  constructor(private http:HttpClient,private getcartidservice:GetcartidService,private homeService:HomeService,private route:ActivatedRoute,private addToCartService:AddtocartService){}

  addToCart(product_id:string,prodcut_price:any,i:any){

    if(this.user_id==0){
      alert("Please Login")
      return
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
    this.categoryId=this.route.snapshot.paramMap.get('id');
    this.user_id=this.homeService.getUserId()
    //getting product By category
    this.http.get("http://localhost:8089/category/product/"+this.categoryId).subscribe((data:any)=>{
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
