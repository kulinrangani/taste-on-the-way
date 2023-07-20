import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  constructor(private http:HttpClient) {}
  categories:any[]=[];

  deleteCetegory(category:any){
      let i = category.id
      this.http.delete("http://localhost:8089/category/"+i).subscribe((data)=>{console.log(data);
      })
    }

  ngOnInit(): void {
    this.http.get("http://localhost:8089/category").subscribe((data:any)=>{this.categories=data})
  }

}
