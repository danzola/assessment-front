import { Routes } from '@angular/router';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';

export const routes: Routes = [
    {
        path: 'create-order',
        component: CreateOrderComponent
    },
    {
        path: 'view-orders',
        component: ViewOrdersComponent
    }
];
