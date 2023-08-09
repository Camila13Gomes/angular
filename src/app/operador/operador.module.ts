import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperadorRoutingModule } from './operador-routing.module';
import { PecaPrioritaryComponent } from './peca-prioritary/peca-prioritary.component';
import { OperadorComponent } from './operador/operador/operador.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PecaPrioritaryComponent,
    OperadorComponent,
  ],
  imports: [
    CommonModule,
    OperadorRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class OperadorModule { }
