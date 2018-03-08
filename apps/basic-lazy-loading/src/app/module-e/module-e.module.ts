import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentEComponent } from './component-e/component-e.component';

const routesModuleE: Routes = [
  {
    path: '',
    component: ComponentEComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesModuleE)],
  declarations: [ComponentEComponent]
})
export class ModuleEModule {}
