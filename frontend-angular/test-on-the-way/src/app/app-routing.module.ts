import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { CategoryComponent } from './category/category.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryProductComponent } from './category.product/category.product.component';
import { RestaurantProductComponent } from './restaurant.product/restaurant.product.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CartComponent } from './cart/cart.component';
import { AdminPanleComponent } from './admin-panle/admin-panle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminAddcategoryComponent } from './admin-addcategory/admin-addcategory.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LogInComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"category",
    component:CategoryComponent
  },
  {
    path:"restaurant",
    component:RestaurantComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"orders",
    component:OrderComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"category/product/:id",
    component:CategoryProductComponent
  },
  {
    path:"restaurant/product/:id",
    component:RestaurantProductComponent
  },
  {
    path:"orders/details/:id",
    component:OrderdetailsComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"address",
    component:ManageAddressComponent,
    children:[
      {
        path:"addaddress",
        component:AddAddressComponent
      }
    ]
  },
  {
    path:"admin",
    component:AdminPanleComponent,
    children:[
      {
        path:"users",
        component:AdminDashboardComponent
      },
      {
        path:"product",
        component:AdminProductComponent
      },
      {
        path:"addproduct",
        component:AdminAddproductComponent
      },
      {
        path:"category",
        component:AdminCategoryComponent
      },
      {
        path:"addcategory",
        component:AdminAddcategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
