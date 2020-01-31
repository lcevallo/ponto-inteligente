import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastrarPfComponent, CadastroPfComponent} from './components';


const routes: Routes = [];

export const CadastroPfRoutes: Routes = [
  {
     path: 'cadastro-pf',
    component: CadastroPfComponent,
    children: [
              {
                path: '',
                component: CadastrarPfComponent
              }
            ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CadastroPfRoutes)],
  exports: [RouterModule]
})
export class CadastroPfRoutingModule {

}
