import { Component, OnInit } from '@angular/core';
import { PedidoService } from "./pedido.service";
import { ResponsePedido } from './pedido.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  responsePedido: ResponsePedido;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getPedido().subscribe(
      res => this.responsePedido = res
    )
  }

}
