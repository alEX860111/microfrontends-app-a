import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  products: Product[] = [
    { id: 1, name: 'iphone', price: 799 },
    { id: 2, name: 'razr', price: 459},
    { id: 3, name: 's9', price: 699 }
  ];

  @Output()
  selectProduct = new EventEmitter<number>();

  selectedProductId: number;

  handleSelectProduct(id: number) {
    this.selectedProductId = id;
    this.selectProduct.emit(id);
  }

  isSelected(id: number) {
    return id === this.selectedProductId;
  }

}
