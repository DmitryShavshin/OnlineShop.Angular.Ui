import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditBrandComponent } from './components/edit-brand/edit-brand.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { HeaderComponent } from './components/UI/header/header.component'; 
import { FooterComponent } from './components/UI/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BaseComponent } from './components/base/base.component';
import { DialogBoxComponent } from './components/UI/dialog-box/dialog-box.component';
import { AdminLayoutComponent } from './components/AdminArea/admin-layout/admin-layout.component';
import { AdminProductComponent } from './components/AdminArea/admin-product/admin-product.component';
import { LoginComponent } from './components/Authorization/login/login.component';
import { RegistrationComponent } from './components/Authorization/registration/registration.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ACCESS_TOKEN_KEY } from './services/auth.service';
export function tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    EditBrandComponent,
    EditCategoryComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CartComponent,
    ProductDetailsComponent,
    BaseComponent,
    DialogBoxComponent,
    AdminLayoutComponent,
    AdminProductComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSidenavModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,

     JwtModule.forRoot({
      config: {
        tokenGetter
      }
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }