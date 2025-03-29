import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router'; 

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

  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('visible') === 'true') {
        this.searchVisible = true;
      }
    });

    this.productService.getAll().subscribe((data: any) => {
      this.products = data;
    });
  }

  selectProduct(product: any): void {
    this.productSelected.emit(product);
  }
}
