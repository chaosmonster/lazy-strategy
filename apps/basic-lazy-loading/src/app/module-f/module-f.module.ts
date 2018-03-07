import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ComponentFComponent} from './component-f/component-f.component';

const routesModuleF: Routes = [
  {
    path: '',
    component: ComponentFComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesModuleF)
  ],
  declarations: [ComponentFComponent]
})
export class ModuleFModule {
}
