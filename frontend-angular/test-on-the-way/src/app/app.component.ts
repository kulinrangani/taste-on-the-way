import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-on-the-way';

  categories:any[]=[];
  restaurants:any[]=[];

  constructor(private http:HttpClient , private homeService:HomeService){}
  
  getCategory=this.homeService.getCategory().subscribe((data:any)=>{
    this.categories=data
  })

  getRestaurant=this.homeService.getRestaurant().subscribe((data:any)=>{
    this.restaurants=data
  })

}
