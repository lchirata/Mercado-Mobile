import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produto} from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<any> {
    return this.http.get('http://localhost:3000/produtos');
  }

  comprar(produtos: Array<Produto>): Observable<any> {
    return new Observable();
    }
}
