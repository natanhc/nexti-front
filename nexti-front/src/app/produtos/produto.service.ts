import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, ResponseProduto, RequestCreate, ResponseCreate } from './produto.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  private url = "http://localhost:8080/produto";
  private urlC = "http://localhost:8080/produto/salvar";
  
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<ResponseProduto>{
    return this.http.get<ResponseProduto>(this.url);
  }

  createProduto(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.urlC, request);
  }
}
