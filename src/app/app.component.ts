import { Component } from '@angular/core';
import { AppNavbarComponent } from './Navbar/app.navbar.component';
import { AppRecipeComponent } from './Recipes';

@Component({
  selector: 'ra-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[AppNavbarComponent, AppRecipeComponent]
})
export class AppComponent {


}
