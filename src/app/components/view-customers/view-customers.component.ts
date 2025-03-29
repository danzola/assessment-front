import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-view-customers',
  imports: [CommonModule],
  templateUrl: './view-customers.component.html',
  styleUrl: './view-customers.component.scss'
})
export class ViewCustomersComponent implements OnInit {  
  @Output() customerSelected = new EventEmitter<any>();
  customers: any[] = [];
  searchVisible: boolean = false;

  constructor(private customerService: CustomersService) {}

  ngOnInit(): void {
    this.customerService.getAll().subscribe((data: any) => {
      this.customers = data;
    });
  }

  selectCustomer(customer: any): void {
    this.customerSelected.emit(customer);
  }

}
