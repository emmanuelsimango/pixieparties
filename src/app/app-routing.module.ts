import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuard } from './auth-guard.service';
import { AdminAuthGaurd } from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'login', component: LoginComponent },

    { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },

    {
        path: 'admin-products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGaurd]
    },
    {
        path: 'admin-products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGaurd]
    },
    {
        path: 'admin-orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGaurd]
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
