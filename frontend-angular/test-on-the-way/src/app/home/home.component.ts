import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private http:HttpClient,private homeService:HomeService,private router:Router){}
  message ='you are not logged in'
  categories:any[]=[];
  restaurants:any[]=[];

  ngOnInit():void{
    this.http.get("http://localhost:8089/register/user",{withCredentials:true})
    .subscribe(
      (res:any)=>{
                    this.message= `Hii ${res.name}`;
                    this.homeService.setUser(res);
                    this.homeService.setuserId(res.id);
                    Emitters.authEmitter.emit(true)
                    if(res.isAdmin){
                      Emitters.adminAuthEmitter.emit(true)
                    }
                  } 
                  );
                  this.router.navigate(['/home'])
    
                  this.homeService.getCategory().subscribe((data:any)=>{
                    this.categories=data
                  })
                  this.homeService.getRestaurant().subscribe((data:any)=>{
                  this.restaurants=data
  })
                  
          }

}
