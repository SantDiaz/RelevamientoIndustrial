import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  DatosEmpresa, produccion } from 'src/app/Interfaces/models';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://tu-backend.com/api'; // Cambia esto a la URL de tu backend
  private apiUrlDatosEmpresa = 'http://localhost:8080/api/datosempresa'; // URL del backend

  constructor(private http: HttpClient) { }

  // buscarProducto(nombre: string): Observable<productos> {
  //   return this.http.get<productos>(`${this.baseUrl}/productos?nombre=${nombre}`);
  // }

  // agregarProducto(producto: productos): Observable<productos> {
  //   return this.http.post<productos>(`${this.baseUrl}/productos`, producto);
  // }

  agregarProduccion(produccion: produccion): Observable<produccion> {
    return this.http.post<produccion>(`${this.baseUrl}/produccion`, produccion);
  }

  enviarDatos(datosEmpresa: DatosEmpresa): Observable<any> {
    return this.http.post(this.apiUrlDatosEmpresa, datosEmpresa);
  }


}
