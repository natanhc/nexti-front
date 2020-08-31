import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CreateProdutoComponent } from './produtos/create-produto/create-produto.component';
import { FormsModule } from '@angular/forms';
import { CreatePedidoComponent } from './pedidos/create-pedido/create-pedido.component';
import { CreateClienteComponent } from './clientes/create-cliente/create-cliente.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProdutosComponent,
    PedidosComponent,
    CreateProdutoComponent,
    CreatePedidoComponent,
    CreateClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
