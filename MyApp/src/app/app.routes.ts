
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { WhoAreWe1Component } from './who-are-we1/who-are-we1.component';
import { WhoAreWe2Component } from './who-are-we2/who-are-we2.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'who-are-we-1', component: WhoAreWe1Component },
  { path: 'who-are-we-2', component: WhoAreWe2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }