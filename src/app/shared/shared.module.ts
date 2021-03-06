
import { SliderComponent } from './../components/slider/slider.component';
import { RouterModule } from '@angular/router';
import { AdminProductsComponent } from './../admin/admin-products/admin-products.component';
import { MyOrdersComponent } from '../pages/my-orders/my-orders.component';
import { OrderSuccessComponent } from '../pages/order-success/order-success.component';
import { CheckOutComponent } from '../pages/check-out/check-out.component';
import { ShoppingCartComponent } from '../pages/shopping-cart/shopping-cart.component';
import { ProductsComponent } from '../pages/products/products.component';
import { PackagesComponent } from '../components/packages/packages.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from './../pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from '../admin/admin-orders/admin-orders.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [
        HomeComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        OrderSuccessComponent,
        MyOrdersComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
    ]
})
export class SharedModule { }
