import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  authenticated : boolean = false;  
  adminAuthenticated:boolean=false;
  searchText:String="";
  constructor(private http:HttpClient,private router:Router,private homeService:HomeService){}

    ngOnInit(): void {
        Emitters.authEmitter.subscribe((auth:boolean)=> this.authenticated= auth)
        Emitters.adminAuthEmitter.subscribe((auth:boolean)=> this.adminAuthenticated= auth)
        console.log(this.authenticated + " " +this.adminAuthenticated);
    }

    search(){
      this.homeService.setSearchText(this.searchText.toString())
    }

    logOut(){
      this.http.post("http://localhost:8089/register/logout",{},{withCredentials:true}).subscribe(()=>{
        this.authenticated=false;
        this.adminAuthenticated=false;
        this.router.navigate(['/login'])
      })
    }

}
