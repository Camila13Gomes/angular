import { Component } from '@angular/core';
import { PedidoService } from 'src/app/pedido.service';
@Component({
  selector: 'app-preparador-cmd',
  templateUrl: './preparador-cmd.component.html',
  styleUrls: ['./preparador-cmd.component.scss']
})
export class PreparadorCMDComponent {
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) {
    this.pedidos = this.pedidoService.getPedidosCMD();
  }
}
