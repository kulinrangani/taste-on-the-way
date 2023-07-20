import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-admin-addcategory',
  templateUrl: './admin-addcategory.component.html',
  styleUrls: ['./admin-addcategory.component.css']
})
export class AdminAddcategoryComponent implements OnInit{
  constructor(private http:HttpClient,private router:Router,private formBuilder:FormBuilder,private homeService:HomeService){}
  categoryForm!:FormGroup;

  categories:any[]=[];
  restaurants:any[]=[];
  private imageSrc: string = '';

  getCategory(){
    this.homeService.getCategory().subscribe((data:any)=>{
      this.categories=data
    })
  }
  getRestaurant(){
    this.homeService.getRestaurant().subscribe((data:any)=>{
      this.restaurants=data
    })  
  }

  addCategory(){
    const category=this.categoryForm.getRawValue();
    category.img=this.imageSrc;    
    console.log(category);
    this.http.post("http://localhost:8089/category",category).subscribe((data)=>{console.log(data);
    this.router.navigate(['admin/category'])  
  })
  }

  //convert Img to BASE64
  handleInputChange(e:any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e:any) {
    let reader = e.target;
    this.imageSrc = reader.result;

  }

  ngOnInit(): void {
    this.categoryForm=this.formBuilder.group({
      name:'',
      img:'',
      restaurant_id:null
    })


    this.getCategory()
    this.getRestaurant()
  }
}
