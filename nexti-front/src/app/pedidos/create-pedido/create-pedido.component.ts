import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../pedido.model';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.css']
})
export class CreatePedidoComponent implements OnInit {

  request: RequestCreate = {
    idCliente:0,
    idProduto:0,
    dataCompra:'',
    valorTotalCompra:0
  }
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  save() {
    this.pedidoService.createPedido(this.request).subscribe(
      res => {}
    );
  }

}
