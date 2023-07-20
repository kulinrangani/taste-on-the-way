import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  constructor(private homeService:HomeService,private http:HttpClient) {}

  addresses:any[]=[];
  user_id=0;
  selectedAddId:string="";

  
  changeAddress($event:Event) {
    const target = $event.target as HTMLInputElement
    this.selectedAddId=target.id;
    console.log(this.selectedAddId  );
  }

  ngOnInit(): void {
    this.user_id=this.homeService.getUserId();
    this.http.get("http://localhost:8089/user/address/"+this.user_id).subscribe((data:any)=>{
      this.addresses=data
    })
  }

}
