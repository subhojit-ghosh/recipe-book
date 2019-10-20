import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipesComponent } from "./containers/recipes/recipes.component";
import { containers } from "./containers";
import { Routes, RouterModule } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: "",
    component: RecipesComponent
  }
];

@NgModule({
  declarations: [...containers],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class RecipesModule {}
