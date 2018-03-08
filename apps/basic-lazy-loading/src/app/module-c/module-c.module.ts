import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCComponent } from './component-c/component-c.component';

const routesModuleC: Routes = [
  {
    path: '',
    component: ComponentCComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesModuleC)],
  declarations: [ComponentCComponent]
})
export class ModuleCModule {}
