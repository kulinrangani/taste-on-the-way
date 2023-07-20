import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor(private http:HttpClient){}
  users:any[]=[]
  ngOnInit(): void {
    this.http.get("http://localhost:8089/user").subscribe((data:any)=>{this.users=data})
  }

}
