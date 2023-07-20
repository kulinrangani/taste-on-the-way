import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../services/get-user.service';
import { GetOrderService } from '../services/get-order.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  orders:any[]=[];
  user:any={};
  // id=0;

  constructor(private http:HttpClient,private homeService:HomeService,private getOrderService:GetOrderService){}
  
  userId=0;
  
  getUser(){
    this.http.get("http://localhost:8089/register/user",{withCredentials:true})
    .subscribe((data:any)=>{
      this.user=data, console.log(this.user)
      });
    }
    
   getOrder(){ 
      this.http.get("http://localhost:8089/user/order/"+this.userId)
      .subscribe((data:any)=>{this.orders=data,console.log(this.orders)})
      }

    ngOnInit():void {
      this.userId=this.homeService.getUserId();
      this.getUser()
      this.getOrder()
  }
}
