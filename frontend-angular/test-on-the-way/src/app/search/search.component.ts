import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AddtocartService } from '../services/addtocart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private http:HttpClient,private homeService:HomeService,private addToCartService:AddtocartService) {}
  products:any[]=[];
  searchText:string=""
  categories:any[]=[];
  restaurants:any[]=[];
  cart_id=0;
  user_id=0;


  addToCart(product_id:string,prodcut_price:any){

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

  ngOnInit(): void {


  this.user_id=this.homeService.getUserId()
  this.searchText=this.homeService.getsearchText() 
  this.homeService.getCategory().subscribe((data:any)=>{this.categories=data});


  this.http.get("http://localhost:8089/product").subscribe((data:any)=>{
    this.products=data
  })

  //getCartId
  this.http.get("http://localhost:8089/cart/cartid/"+this.user_id).subscribe((data:any)=>{
    this.cart_id=data[0].id
    console.log(this.cart_id); 
  })
  }
}
