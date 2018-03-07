import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'module-a',
    loadChildren: './module-a/module-a.module#ModuleAModule'
  },
  {
    path: 'module-b',
    loadChildren: './module-b/module-b.module#ModuleBModule'
  },
  {
    path: 'module-c',
    loadChildren: './module-c/module-c.module#ModuleCModule'
  },
  {
    path: 'module-d',
    loadChildren: './module-d/module-d.module#ModuleDModule'
  },
  {
    path: 'module-e',
    loadChildren: './module-e/module-e.module#ModuleEModule'
  },
  {
    path: 'module-f',
    loadChildren: './module-f/module-f.module#ModuleFModule'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
