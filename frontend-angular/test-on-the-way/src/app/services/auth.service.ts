import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // isLoggedIn() {
  //   const token = localStorage.getItem('token'); 
  //   const payload = atob(token.split('.')[1]); 
  //   const parsedPayload = JSON.parse(payload); 

  //   return parsedPayload.exp > Date.now() / 1000; 

  // }
}
