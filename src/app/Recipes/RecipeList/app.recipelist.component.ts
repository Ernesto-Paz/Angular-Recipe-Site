import { Component, EventEmitter, Output } from '@angular/core';
import { AppRecipeListItemComponent } from './app.recipelistitem.component'
import { Recipe } from '../recipeclass';
@Component({

selector: "ra-recipelist",
templateUrl: "app.recipelist.component.html",
directives: [AppRecipeListItemComponent],
})

export class AppRecipeListComponent {

recipes: Recipe[] = [];

@Output() recipeSelected = new EventEmitter<Recipe>();

dummyrecipe: Recipe = new Recipe("Cat", "A Caitlyn.", "/Gatomon.png");
constructor(){

}

onSelected(recipe: Recipe){
this.recipeSelected.emit(recipe);

}
}