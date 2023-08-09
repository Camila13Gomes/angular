import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PecaPrioritaryComponent } from './operador/peca-prioritary/peca-prioritary.component';

const routes: Routes = [
  {path: '',  pathMatch:'full', redirectTo: 'operador'},

  { path: 'operador',
   loadChildren:() => import('./operador/operador.module'). then(m => m.OperadorModule )   },

   {path: 'prio', component: PecaPrioritaryComponent},
   {path: 'edit/id', component: PecaPrioritaryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
