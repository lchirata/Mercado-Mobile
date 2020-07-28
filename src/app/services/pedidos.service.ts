import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';
 
@Injectable({
 providedIn: 'root'
})
export class PedidosService {
 
 constructor(private http: HttpClient) { }
 
 listarPedidos(): Observable<any> {
 return this.http.get('http://localhost:3000/pedidos');
 }
 
 comprar(compra: object): Observable<any> {
 return this.http.post('http://localhost:3000/pedidos', compra);
 }
 
}