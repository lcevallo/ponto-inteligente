import {RouterModule, Routes} from '@angular/router';
import {CadastroPjComponent} from './components/cadastro-pj.component';
import {NgModule} from '@angular/core';
import {CadastrarPjComponent} from './components/cadastrar-pj';


export const CadastroPjRoutes: Routes = [
  {
    path: 'cadastro-pj',
    component: CadastroPjComponent,
    children: [
      {
        path: '',
        component: CadastrarPjComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CadastroPjRoutes)
  ]
})
export class CadastroPjRoutingModule {
}
