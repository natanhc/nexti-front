import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  responseCliente: Cliente[];
  constructor(private clienteService: ClienteService) { }

  async ngOnInit(){
    this.responseCliente = await this.clienteService.getClientes();
    console.log(this.responseCliente);
  }

}