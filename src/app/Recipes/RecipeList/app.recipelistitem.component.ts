import { Component, Input } from '@angular/core';
import { Recipe } from '../recipeclass';

@Component({

selector: "ra-recipelistitem",
templateUrl: "app.recipelistitem.component.html",

})

export class AppRecipeListItemComponent {
@Input() recipeitem: Recipe;
recipeId: number;

constructor() {

}


}