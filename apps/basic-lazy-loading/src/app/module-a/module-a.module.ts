import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';

const routesModuleA: Routes = [
  {
    path: '',
    component: ComponentAComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesModuleA)],
  declarations: [ComponentAComponent]
})
export class ModuleAModule {}
