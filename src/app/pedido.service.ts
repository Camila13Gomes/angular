import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})export class PedidoService {
  pedidosCMD: any[] = [];
  pedidosPRI: any[] = [];

  constructor() { }

  adicionarPedidoCMD(pedido: any) {
    this.pedidosCMD.push(pedido);
  }

  adicionarPedidoPRI(pedido: any) {
    this.pedidosPRI.push(pedido);
  }

  getPedidosCMD() {
    return this.pedidosCMD;
  }

  getPedidosPRI() {
    return this.pedidosPRI;
  }
}
