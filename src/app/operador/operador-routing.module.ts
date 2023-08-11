import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperadorComponent } from './operador/operador/operador.component';

import { Peca3DComponent } from './peca3-d/peca3-d.component';
import { PecaPrioritaryComponent } from './peca-prioritary/peca-prioritary.component';

const routes: Routes = [
 {path:'', component:OperadorComponent},
 {path: '', component:Peca3DComponent},
 {path:'', component:PecaPrioritaryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadorRoutingModule { }
