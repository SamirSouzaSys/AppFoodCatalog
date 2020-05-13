import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home',
    loadChildren: () => import('./pages/home/home.module')
    .then( m => m.HomePageModule)
  },
  {path: 'prato-do-dia',
    loadChildren: () => import('./pages/prato-do-dia/prato-do-dia.module')
    .then( m => m.PratoDoDiaPageModule)
  },
  {path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module')
    .then( m => m.CategoriasPageModule)
  },
  {path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module')
    .then( m => m.CategoriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
