import { Component } from '@angular/core';
import { AppRecipeListItemComponent } from './app.recipelistitem.component'
import { Recipe } from '../recipeclass';
@Component({

selector: "ra-recipelist",
templateUrl: "app.recipelist.component.html",
directives: [AppRecipeListItemComponent],
})

export class AppRecipeListComponent {

recipes: Recipe[] = [];
dummyrecipe: Recipe = new Recipe("Dummy", "Dummy", "/Gatomon.png");
constructor(){

}
}