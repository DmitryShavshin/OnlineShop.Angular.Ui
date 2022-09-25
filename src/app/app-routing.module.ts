import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/AdminArea/admin-layout/admin-layout.component';
import { AdminProductComponent } from './components/AdminArea/admin-product/admin-product.component';
import { LoginComponent } from './components/Authorization/login/login.component';
import { RegistrationComponent } from './components/Authorization/registration/registration.component';
import { BaseComponent } from './components/base/base.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductResolver } from './services/product.resolver';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent, 
    resolve: { data: ProductResolver } 
  },
  { path: 'AdminArea/adminlayout', component: AdminLayoutComponent },
  { path: 'AdminArea/adminroduct', component: AdminProductComponent },
  
  { path: 'Authorization/login', component: LoginComponent },
  { path: 'Authorization/registration', component: RegistrationComponent },


  { path: "**", redirectTo: "", component: BaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
