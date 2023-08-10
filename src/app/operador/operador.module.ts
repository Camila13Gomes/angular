import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperadorRoutingModule } from './operador-routing.module';
import { PecaPrioritaryComponent } from './peca-prioritary/peca-prioritary.component';
import { OperadorComponent } from './operador/operador/operador.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CmdComponent } from './cmd/cmd.component';
import { Peca3DComponent } from './peca3-d/peca3-d.component';

@NgModule({
  declarations: [
    PecaPrioritaryComponent,
    OperadorComponent,
    CmdComponent,
    Peca3DComponent,
  ],
  imports: [
    CommonModule,
    OperadorRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class OperadorModule { }
