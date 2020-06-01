
import { SliderComponent } from './../components/slider/slider.component';
import { RouterModule } from '@angular/router';
import { AdminProductsComponent } from './../admin/admin-products/admin-products.component';
import { MyOrdersComponent } from '../pages/my-orders/my-orders.component';
import { OrderSuccessComponent } from '../pages/order-success/order-success.component';
import { CheckOutComponent } from '../pages/check-out/check-out.component';
import { ShoppingCartComponent } from '../pages/shopping-cart/shopping-cart.component';
import { ProductsComponent } from '../pages/products/products.component';
import { PackagesComponent } from '../pages/packages/packages.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from '../admin/admin-orders/admin-orders.component';
import { AboutComponent } from '../components/about/about.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    declarations: [
        HomeComponent,
        PackagesComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        AboutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [
        HomeComponent,
        PackagesComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        AboutComponent,
    ]
})
export class SharedModule { }
