import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewProductsComponent } from '../view-products/view-products.component';

@Component({
  selector: 'app-create-order',
  imports: [
    CommonModule,
    FormsModule,
    ViewProductsComponent
  ],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent implements AfterViewInit {
  @ViewChild(ViewProductsComponent) productsList!: ViewProductsComponent;
  createOrder: boolean = true;

  order = {
    customerId: 0,
    productId: 0,
    quantity: 0
  };

  constructor() { }

  ngAfterViewInit() {
    this.productsList.productSelected.subscribe((product) => {
      this.order.productId = product.id;
      this.setStateSearchProducts(false)
    });
  }

  searchProduct(): void {
    this.setStateSearchProducts(true);
  }

  setStateSearchProducts(state: boolean): void {
    this.createOrder = !state;
    this.productsList.searchVisible = state;
  }

  submitOrder() {
    console.log('Order Submitted:', this.order);    
  }

}
