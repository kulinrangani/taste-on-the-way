import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories:any[]=[];
  constructor(private homeService:HomeService){}

  getCategory=this.homeService.getCategory().subscribe((data:any)=>{
    this.categories=data
  })
}
