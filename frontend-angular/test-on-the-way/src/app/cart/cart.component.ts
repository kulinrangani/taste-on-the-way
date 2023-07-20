import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {of} from 'rxjs';
import { QtyService } from '../services/qty.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit{

  closeResult: string="";
  user_id=0;
  addresses:any[]=[];
  payment:any[]=[
    {
      id:1,
      mode:"COD"
    },{
      id:2,
      mode:"Card"
    },{
      id:3,
      mode:"UPI"
    },
  ];
  selectedPayment:string='';
  cart:any={};
  cartDetails:any[]=[];
  selectedAddId:string="";
  cartId:any;
  cartTotal:number=0;
  cartObservable$:any;
  createdOrderId:any;

  constructor(private homeService:HomeService,private router:Router,private http:HttpClient,private qtyService:QtyService){}

  changeAddress($event:Event) {
    const target = $event.target as HTMLInputElement
    this.selectedAddId=target.id;
    console.log(this.selectedAddId);
  }

  changeMode($event:Event){
    const target = $event.target as HTMLInputElement
    this.selectedPayment=target.value;
    console.log(this.selectedPayment);

  }

  increaseQuantity(id:any,qty:any,price:any,i:any){
    let updatedQty=qty+1;
    const subtotal=price*updatedQty;
    const valueToBeUpdate={
      qty:updatedQty,
      subtotal:subtotal
    }
    this.cartDetails[i].qty=updatedQty;
    this.cartDetails[i].subtotal=subtotal;
    this.http.put("http://localhost:8089/cartdetails/"+id,valueToBeUpdate).subscribe((data)=>{console.log(data);
    })
    // this.getTotal(this.cartDetails)
  }


  decreaseQuantity(id:any,qty:any,price:any,i:any,cart_id:any,pid:any){
    if(qty>1){
    let updatedQty=qty-1;
    const subtotal=price*updatedQty;
    const valueToBeUpdate={
      qty:updatedQty,
      subtotal:subtotal
    }
    this.cartDetails[i].qty=updatedQty;
    this.cartDetails[i].subtotal=subtotal;

    this.http.put("http://localhost:8089/cartdetails/"+id,valueToBeUpdate).subscribe((data)=>{console.log(data);
    this.router.navigate(['/cart'])
    })

    console.log(id,qty,price);
    }else{
    this.http.delete("http://localhost:8089/cartdetails/product/"+pid+"/"+cart_id).subscribe((data)=>{
      this.getCartDetails()
    })
    }
  }

  getTotal(cartDetails:any){
    for(let i =0 ;i<cartDetails.length;i++){
     this.cartTotal +=cartDetails[i].subtotal
    }
  }

  getCartDetails(){
     //getcartDetails
     this.http.get("http://localhost:8089/cartdetails/"+this.user_id).subscribe((data:any)=>
     {
       this.getTotal(data)
       this.cartDetails=data;
     }
     )
  }


   createOrder(total:any){

    const body={
      total:total,
      user_id:this.user_id,
      address_id:this.selectedAddId,
      paymentStatus:"Done",
      paymentMode: this.selectedPayment
    }

    if(body.address_id && this.cartDetails.length>0){
      this.http.post("http://localhost:8089/order",body).subscribe((data:any)=>{
        this.createdOrderId=data.id ; console.log(this.createdOrderId);

        for(let i=0;i<this.cartDetails.length;i++){
          const body={
            o_id:this.createdOrderId,
            p_id:this.cartDetails[i].product_id,
            subtotal:this.cartDetails[i].subtotal,
            qty:this.cartDetails[i].qty
          }
          this.http.post("http://localhost:8089/order/details",body).subscribe((data)=>{console.log(data);
        })
      }
      alert("Order Placed Succesfully With OrderId: "+this.createdOrderId)
      this.router.navigate(['/orders'])
  })

  this.http.delete("http://localhost:8089/cartdetails/"+this.cartDetails[0].cart_id).subscribe((data)=>{console.log(data);
})
}else if(this.cartDetails.length==0){
  alert("Cart Can Not Be Empty")
}else if(this.selectedAddId=="" || this.selectedAddId==null){
  alert("Please Select Address For delivery")
}


  }

  ngOnInit(): void {
    this.user_id=this.homeService.getUserId()
    // this.cartId=this.homeService.getCartId()
    //getCart
    this.http.get("http://localhost:8089/user/cart/"+this.user_id).subscribe((data)=>{this.cart=data;console.log(data);
    })

    //get Addresses
    this.http.get("http://localhost:8089/user/address/"+this.user_id).subscribe((data:any)=>{
      this.addresses=data
    })

   this.getCartDetails()

    //calling get total

  }
}
