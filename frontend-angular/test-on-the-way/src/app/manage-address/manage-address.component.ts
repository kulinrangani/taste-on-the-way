import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit{
  addresses:any[]=[];
  user_id=0;

  constructor(private homeService:HomeService,private http:HttpClient){}

  deleteAddress(add:any){
    let i = add.id
    this.http.delete("http://localhost:8089/address/"+i).subscribe((data)=>{console.log(data);
    })
  }

  ngOnInit(): void {
    this.user_id=this.homeService.getUserId();
    this.http.get("http://localhost:8089/user/address/"+this.user_id).subscribe((data:any)=>{
      this.addresses=data
    })
  }
  }

