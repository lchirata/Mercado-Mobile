import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
 providedIn: 'root'
})
export class ClientesService {
 
 constructor(private http: HttpClient) { }
 
 login(email: string, senha: string): Observable<any> {
 const body = {
 email,
 senha,
 }
 return this.http.post('http://localhost:3000/clientes/login', body);
 }
 
}