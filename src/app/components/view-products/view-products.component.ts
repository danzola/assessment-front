import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-view-products',
  imports: [CommonModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.scss'
})
export class ViewProductsComponent implements OnInit {  
  @Output() productSelected = new EventEmitter<any>();
  products: any[] = [];
  searchVisible: boolean = false;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: any) => {
      this.products = data;
    });
  }

  selectProduct(product: any): void {
    this.productSelected.emit(product);
  }
}
