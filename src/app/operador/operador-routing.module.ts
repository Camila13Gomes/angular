import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperadorComponent } from './operador/operador/operador.component';

const routes: Routes = [
 {path:'', component:OperadorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadorRoutingModule { }
