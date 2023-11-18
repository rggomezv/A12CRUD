import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];
  constructor(private crudService: CRUDService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
