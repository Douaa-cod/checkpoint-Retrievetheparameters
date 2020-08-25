import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorChangeComponent } from './color-change/color-change.component';


const routes: Routes = [
  {
    path: 'color/:color',
    component: ColorChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
