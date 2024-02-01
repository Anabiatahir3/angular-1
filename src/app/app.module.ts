import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { UserService } from './services/user.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import {MatSnackBarModule} from "@angular/material/snack-bar"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarService } from './services/snackbar.service';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MenuComponent,
    AboutComponent,
    ProductComponent,
    ProductDetailsComponent,
    NewProductComponent,
    SignupComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  
  ],
  providers: [CartService, UserService,HttpClient,SnackbarService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
