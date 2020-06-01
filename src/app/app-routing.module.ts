import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGaurd } from './services/admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component:AboutComponent },
    { path: 'contact', component: ContactUsComponent },


    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'login', component: LoginComponent },

    { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },

    {
        path: 'admin-products/new',
        component: ProductFormComponent,
        // canActivate: [AuthGuard, AdminAuthGaurd]
    },
    {
        path: 'admin-products/:id',
        component: ProductFormComponent,
        // canActivate: [AuthGuard, AdminAuthGaurd]
    },
    {
        path: 'admin-products',
        component: AdminProductsComponent,
        // canActivate: [AuthGuard, AdminAuthGaurd]
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
