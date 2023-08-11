import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PecaPrioritaryComponent } from './operador/peca-prioritary/peca-prioritary.component';
import { CmdComponent } from './operador/cmd/cmd.component';
import { Peca3DComponent } from './operador/peca3-d/peca3-d.component';

const routes: Routes = [
  {path: '',  pathMatch:'full', redirectTo: 'operador'},

  { path: 'operador',
   loadChildren:() => import('./operador/operador.module'). then(m => m.OperadorModule )   },

   {path: 'prio', component: PecaPrioritaryComponent},
   {path: 'cmd', component: CmdComponent},
   {path: '3D', component: Peca3DComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
