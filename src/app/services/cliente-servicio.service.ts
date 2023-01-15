import { Cliente } from './../interfaces/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClienteServicioService {
  API_URL:string= 'http://localhost:3000/cliente';
  
  constructor( private http: HttpClient ) { }
  
  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.API_URL}/list`);
  }
  getCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.API_URL}/${id}`);
  }
  createCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.API_URL}/create`,cliente);
  }
  updateCliente(id:number,cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.API_URL}/update/${id}`,cliente);
  }
  deleteCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.API_URL}/delete/${id}`);
  }
}
