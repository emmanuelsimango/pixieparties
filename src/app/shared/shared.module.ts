import { RouterModule } from '@angular/router';
import { AdminProductsComponent } from './../admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './../my-orders/my-orders.component';
import { OrderSuccessComponent } from './../order-success/order-success.component';
import { CheckOutComponent } from './../check-out/check-out.component';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { ProductsComponent } from './../products/products.component';
import { PackagesComponent } from './../pages/home/packages/packages.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from '../admin/admin-orders/admin-orders.component';



@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent,
        PackagesComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HomeComponent,
        NavbarComponent,
        PackagesComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent
    ]
})
export class SharedModule { }