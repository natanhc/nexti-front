import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CreateProdutoComponent } from './produtos/create-produto/create-produto.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CreatePedidoComponent } from './pedidos/create-pedido/create-pedido.component';
import { CreateClienteComponent } from './clientes/create-cliente/create-cliente.component';

const routes: Routes = [

  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/create', component: CreateClienteComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos/create', component: CreateProdutoComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'pedidos/create', component: CreatePedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
