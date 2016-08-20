import { Component, Input } from '@angular/core';
import { Recipe } from '../Recipes/recipeclass.ts';

@Component({
  selector: 'ra-recipedetail',
  templateUrl: 'app.recipedetail.component.html',
  directives:[]
})
export class RecipeDetailComponent {

@Input() selectedRecipe: Recipe;

constructor(){

}

}
