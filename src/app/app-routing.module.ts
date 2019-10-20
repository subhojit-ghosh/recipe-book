import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesModule } from './recipes/recipes.module';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
