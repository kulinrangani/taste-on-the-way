import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit{

  user:any
  orderDetails:any;
  orderId:string|null=""; 


  constructor(private http:HttpClient,private route:ActivatedRoute,private homeService:HomeService){}

  ngOnInit(): void {
    this.orderId=this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:8089/order/details/"+this.orderId).subscribe((data:any)=>{
      this.orderDetails=data;console.log(data);
    })
    this.user=this.homeService.getUser()
  }

}
