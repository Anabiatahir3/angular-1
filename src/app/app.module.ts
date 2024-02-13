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
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from "@angular/material/dialog"
import { CheckoutModalComponent } from './cart/checkout-modal/checkout-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchboxComponent } from './product/searchbox/searchbox.component';
import { SingleProductComponent } from './product-details/single-product/single-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './spinner/spinner.component';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './services/interceptors/loader.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    CartItemComponent,
    CheckoutModalComponent,
    SearchboxComponent,
    SingleProductComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
  
  ],
  providers: [CartService, UserService,HttpClient,SnackbarService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true},
     { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
