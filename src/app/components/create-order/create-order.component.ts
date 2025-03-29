import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewProductsComponent } from '../view-products/view-products.component';
import { ViewCustomersComponent } from '../view-customers/view-customers.component';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-create-order',
  imports: [
    CommonModule,
    FormsModule,
    ViewProductsComponent,
    ViewCustomersComponent
  ],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent implements AfterViewInit {
  @ViewChild(ViewProductsComponent) productsList!: ViewProductsComponent;
  @ViewChild(ViewCustomersComponent) customersList!: ViewCustomersComponent;
  createOrder: boolean = true;

  order = {
    customerId: 0,
    productId: 0,
    quantity: 0
  };

  constructor(private ordersService: OrdersService) { }  

  ngAfterViewInit() {
    this.productsList.productSelected.subscribe((product) => {
      this.order.productId = product.id;
      this.setStateSearchProducts(false);
    });

    this.customersList.customerSelected.subscribe((customer) => {
      this.order.customerId = customer.id;
      this.setStateSearchCustomers(false);
    });
  }

  searchProduct(): void {
    this.setStateSearchProducts(true);
  }

  searchCustomers(): void {
    this.setStateSearchCustomers(true);
  }

  setStateSearchProducts(state: boolean): void {
    this.createOrder = !state;
    this.productsList.searchVisible = state;
  }

  setStateSearchCustomers(state: boolean): void {
    this.createOrder = !state;
    this.customersList.searchVisible = state;
  }

  submitOrder() {
    this.ordersService.Create(this.order).subscribe();
  }

}
