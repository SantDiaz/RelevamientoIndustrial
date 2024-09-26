import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  DatosEmpresa, DatosRespondiente, produccion } from 'src/app/Interfaces/models';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://localhost:8080/api'; // Assuming your Spring Boot app runs on port 8080


  constructor(private http: HttpClient) { }
 
  // buscarProducto(nombre: string): Observable<productos> {
  //   return this.http.get<productos>(`${this.baseUrl}/productos?nombre=${nombre}`);
  // }

  // agregarProducto(producto: productos): Observable<productos> {
  //   return this.http.post<productos>(`${this.baseUrl}/productos`, producto);
  // }

  // agregarProduccion(produccion: produccion): Observable<produccion> {
  //   return this.http.post<produccion>(`${this.baseUrl}/produccion`, produccion);
  // }

  enviarDatosEmpresa(datosEmpresa: DatosEmpresa): Observable<any> {
    return this.http.post(`${this.baseUrl}/datosempresa`, datosEmpresa);
  }

  enviarDatosRespondiente(datosRespondiente: DatosRespondiente): Observable<any> {
    return this.http.post(`${this.baseUrl}/respondiente`, datosRespondiente);
  }

  // If you need a general method for sending Encuesta data
  enviarEncuesta(encuesta: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, encuesta);
  }

  enviarDatosProduccion(produccionData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/produccion`, produccionData);
  }

}
