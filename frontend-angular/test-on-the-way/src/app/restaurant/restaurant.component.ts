import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  constructor(private homeService:HomeService){}
  restaurants:any[]=[];
  getRestaurant=this.homeService.getRestaurant().subscribe((data:any)=>{
    this.restaurants=data
  })
}
