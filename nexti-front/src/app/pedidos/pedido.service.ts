import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pedido, ResponsePedido, RequestCreate, ResponseCreate } from './pedido.model';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url = "http://localhost:8080/pedido";
  private urlC = "http://localhost:8080/pedido/salvar";

  constructor(private http: HttpClient) { }

  getPedido(): Observable<ResponsePedido>{
    return this.http.get<ResponsePedido>(this.url)
  }

  createPedido(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.urlC, request);
  }
}
