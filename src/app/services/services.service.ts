import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  DatosEmpresa, DatosRespondiente, produccion } from 'src/app/Interfaces/models';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://localhost:8080/api'; // Assuming your Spring Boot app runs on port 8080

  idEmpresa: number = 0;

  constructor(private http: HttpClient) { }
 
 

  enviarDatosEmpresa(datosEmpresa: DatosEmpresa): Observable<DatosEmpresa> {
    const idEmpresa = datosEmpresa.id_empresa; 
    return this.http.post<DatosEmpresa>(`${this.baseUrl}/${idEmpresa}/datosempresa`, datosEmpresa);
  }

  enviarDatosRespondiente(datosRespondiente: DatosRespondiente): Observable<DatosRespondiente> {
    const idEmpresa = datosRespondiente.id_empresa;
    return this.http.post<DatosRespondiente>(`${this.baseUrl}/${idEmpresa}/respondiente`, datosRespondiente);
  }


  enviarDatosProduccion(produccionData: produccion): Observable<any> {
    const idEmpresa = produccionData.id_empresa;

    return this.http.post(`${this.baseUrl}/${idEmpresa}/produccion`, produccionData);
  }

 // buscarProducto(nombre: string): Observable<productos> {
  //   return this.http.get<productos>(`${this.baseUrl}/productos?nombre=${nombre}`);
  // }

  // agregarProducto(producto: productos): Observable<productos> {
  //   return this.http.post<productos>(`${this.baseUrl}/productos`, producto);
  // }

  // agregarProduccion(produccion: produccion): Observable<produccion> {
  //   return this.http.post<produccion>(`${this.baseUrl}/produccion`, produccion);
  // }

}
