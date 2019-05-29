import { F1test3Component } from './f1test3/f1test3.component';
import { F1test2Component } from './f1test2/f1test2.component';
import { F1test1Component } from './f1test1/f1test1.component';
import { FeatureHomeComponent } from './feature-home/feature-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: FeatureHomeComponent,
  },
  {
    path: 'dynamic-route-test/:id',
    component: F1test1Component,
    children: [
      { path: '', redirectTo: 'child3', pathMatch: 'full' },
      { path: 'child2', component: F1test2Component },
      {
        path: 'child3',
        component: F1test3Component,
        data: { somethingCool: 'Cawabunga' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature1RoutingModule {}
