import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user:any={}
  address:any[]=[];
  
  // add1:any={}
  // stringadd:string=""
  constructor(private homeService:HomeService,private http:HttpClient){}

  ngOnInit(): void {
      this.user=this.homeService.getUser();
      this.http.get("http://localhost:8089/user/address/"+this.user.id)
      .subscribe((add:any)=>{this.address=add
      console.log(this.address);
      
        // this.add1=this.address[0]
        // // this.stringadd=JSON.stringify(this.add1)
        
        // this.stringadd+= this.add1.houseno +"," + this.add1.street+" "+this.add1.area +"," + this.add1.city +" ,"+ this.add1.country;
      })
  } 
}
