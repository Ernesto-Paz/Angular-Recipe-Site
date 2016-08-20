import { Component } from '@angular/core';
import { AppNavbarComponent } from './Navbar/app.navbar.component';
import { AppRecipeComponent } from './Recipes';
import { ShoppingListComponent } from './ShoppingList';

@Component({
  selector: 'ra-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[AppNavbarComponent, AppRecipeComponent, ShoppingListComponent]
})
export class AppComponent {


}
