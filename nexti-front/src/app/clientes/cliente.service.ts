import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente,RequestCreate,ResponseCreate } from './cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = "http://localhost:8080/cliente";
  private urlC = "http://localhost:8080/cliente/salvar";
  
  constructor(private http: HttpClient) { }

  
  getClientes(): Promise<any> {
    return new Promise(
      (resolve, reject)=> {
        this.http.get(this.url).subscribe(responseCliente => {
          resolve(responseCliente);
        }  );
      }
    );
  }

  createCliente(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.urlC, request);
  }
}
