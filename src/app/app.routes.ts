import { Routes } from '@angular/router';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';

export const routes: Routes = [
    {
        path: 'orders',
        component: CreateOrderComponent
    },
    {
        path: 'products/:visible',
        component: ViewProductsComponent
    }
];
