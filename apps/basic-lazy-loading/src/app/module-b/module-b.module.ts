import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ComponentBComponent } from './component-b/component-b.component';

const routesModuleB: Routes = [
  {
    path: '',
    component: ComponentBComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesModuleB)
  ],
  declarations: [ComponentBComponent]
})
export class ModuleBModule { }
