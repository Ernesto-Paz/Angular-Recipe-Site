import { Component } from '@angular/core';
import { AppRecipeListComponent } from './RecipeList';
import { RecipeDetailComponent } from '../RecipeDetail';
import { Recipe } from './recipeclass';

@Component({

selector: "ra-recipes",
templateUrl: "app.recipe.component.html",
directives:[AppRecipeListComponent, RecipeDetailComponent ],

})

export class AppRecipeComponent {
selectedRecipe: Recipe;
}