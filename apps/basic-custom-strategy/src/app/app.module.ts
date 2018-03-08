import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadStrategy } from './custom-preload-strategy';

const routes: Routes = [
  {
    path: 'module-a',
    loadChildren: './module-a/module-a.module#ModuleAModule',
    data: {
      preload: true
    }
  },
  {
    path: 'module-b',
    loadChildren: './module-b/module-b.module#ModuleBModule'
  },
  {
    path: 'module-c',
    loadChildren: './module-c/module-c.module#ModuleCModule',
    data: {
      preload: true
    }
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
    loadChildren: './module-f/module-f.module#ModuleFModule',
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadStrategy
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [CustomPreloadStrategy]
})
export class AppModule {}
