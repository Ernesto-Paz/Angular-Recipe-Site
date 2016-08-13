import { Component } from '@angular/core';
import { AppRecipeListComponent } from './RecipeList'

@Component({

selector: "ra-recipes",
templateUrl: "app.recipe.component.html",
directives:[AppRecipeListComponent],

})

export class AppRecipeComponent {

}