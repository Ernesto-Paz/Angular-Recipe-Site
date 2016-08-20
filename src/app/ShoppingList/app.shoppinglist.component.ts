import { Component, Input } from '@angular/core';
import { ShoppingListAddComponent } from './app.shoppinglistadd.component';

@Component({
  selector: 'ra-shoppinglist',
  templateUrl: 'app.shoppinglist.component.html',
  directives:[ ShoppingListAddComponent ]
})
export class ShoppingListComponent {

constructor(){

}

}
