import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ClientesComponent } from '../clientes.component';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  request: RequestCreate = {
    nome: '',
    cpf:'',
    dataNascimento:''
  }
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  save() {
    this.clienteService.createCliente(this.request).subscribe(
      res => {}
    );
  }

}
