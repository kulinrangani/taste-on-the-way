import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-addproduct',
  templateUrl: './admin-addproduct.component.html',
  styleUrls: ['./admin-addproduct.component.css']
})
export class AdminAddproductComponent implements OnInit{
  constructor(private http:HttpClient,private router:Router,private formBuilder:FormBuilder,private homeService:HomeService){}
  productForm!:FormGroup;

  products:any[]=[];
  categories:any[]=[];
  restaurants:any[]=[];
  private imageSrc: string = '';

  getProducts(){
    this.http.get("http://localhost:8089/product",{withCredentials:true}).subscribe((data:any)=>{this.products=data;console.log(this.products);
    })
  }

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

  addProduct(){
    const product=this.productForm.getRawValue();
    product.img=this.imageSrc;    
    this.http.post("http://localhost:8089/product",product).subscribe((data)=>{console.log(data);
    this.router.navigate(['admin/product'])  
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
    this.productForm=this.formBuilder.group({
      name:'',
      price:'',
      description:'',
      image:'',
      category_id:null,
      restaurant_id:null
    })


    this.getProducts()
    this.getCategory()
    this.getRestaurant()
  }

}
