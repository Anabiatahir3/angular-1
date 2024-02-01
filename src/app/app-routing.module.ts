import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'about/:username',
    component:AboutComponent
  },
  {
    path:'login',
    component:FormComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:'new-product',
    component:NewProductComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
