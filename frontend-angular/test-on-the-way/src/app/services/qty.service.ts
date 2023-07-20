import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';


@Injectable({
  providedIn: 'root'
})
export class QtyService {

  constructor(private http:HttpClient,private homeService:HomeService ) { }

  getcart():Observable<any>{
    let user_id=this.homeService.getUserId()
    return this.http.get("http://localhost:8089/cartdetails/"+user_id)
  }
}
