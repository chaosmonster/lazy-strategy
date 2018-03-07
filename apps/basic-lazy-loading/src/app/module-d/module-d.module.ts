import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ComponentDComponent } from './component-d/component-d.component';

const routesModuleD: Routes = [
  {
    path: '',
    component: ComponentDComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesModuleD)
  ],
  declarations: [ComponentDComponent]
})
export class ModuleDModule { }
