import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  
  constructor(private http:HttpClient) {}
  
  userid=0;
  user:any={}
  searchText:string="";


  setSearchText(text:string){
    this.searchText=text
  }
  getsearchText(){
    return this.searchText
  }
  setuserId(id:any){
    this.userid=id
  }
  getUserId(){
    return this.userid
  }

  setUser(data:any){
    this.user=data
  }

  getUser(){
    return this.user
  }
  
  getCategory(){
      let categoryUrl:string = "http://localhost:8089/category"; 
      return this.http.get(categoryUrl) 
        }

    getRestaurant(){
      let restaurantUrl:string = "http://localhost:8089/restaurant";
      return this.http.get(restaurantUrl)
  }

  getCartId(){

  }
}
