import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router){}
  products:any[]=[]
  getProducts(){
    this.http.get("http://localhost:8089/product",{withCredentials:true}).subscribe((data:any)=>{this.products=data;console.log(this.products);
    })
  }
  deleteProduct(product:any){
    let i = product.pid
    this.http.delete("http://localhost:8089/product/"+i).subscribe((data)=>{console.log(data);
    })
  }
  ngOnInit(): void {
    this.getProducts()
  }
}
