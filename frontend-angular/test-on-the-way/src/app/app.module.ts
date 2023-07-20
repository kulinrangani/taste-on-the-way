import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryProductComponent } from './category.product/category.product.component';
import { RestaurantProductComponent } from './restaurant.product/restaurant.product.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { AdminPanleComponent } from './admin-panle/admin-panle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminAddcategoryComponent } from './admin-addcategory/admin-addcategory.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { SearchComponent } from './search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CategoryComponent,
    HomeComponent,
    RestaurantComponent,
    RegistrationComponent,
    NavComponent,
    OrderComponent,
    ProfileComponent,
    CategoryProductComponent,
    RestaurantProductComponent,
    OrderdetailsComponent,
    CartComponent,
    AddressComponent,
    AdminPanleComponent,
    AdminDashboardComponent,
    AdminAddproductComponent,
    AdminProductComponent,
    AdminAddcategoryComponent,
    AdminCategoryComponent,
    ManageAddressComponent,
    AddAddressComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
