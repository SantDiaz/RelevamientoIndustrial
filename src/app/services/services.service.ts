import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {   cantidadTrabajadores, DatosEmpresa, DatosRespondiente, horasExtras, horasNormales, InsumosBasicos, manoDeObra, produccion, remuneraciones_cargas, servicios_basicos, UtilizacionInsumos, UtilizacionServicio } from 'src/app/Interfaces/models';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://localhost:8080/api'; // Assuming your Spring Boot app runs on port 8080
  private baseUrl2 = 'http://localhost:8080/apiTwo'; // Assuming your Spring Boot app runs on port 8080

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
    return this.http.post<produccion>(`${this.baseUrl}/${idEmpresa}/produccion`, produccionData);

  }
// Suponiendo que baseUrl es algo como 'http://tuservidor/api'

enviarDatosBienes(idEmpresa: number, bienInsumo: UtilizacionInsumos) {
  return this.http.post(`${this.baseUrl}/${idEmpresa}/insumosBasicos`, bienInsumo);
}

enviarDatosServicios(idEmpresa: number, servicioUtilizacion: UtilizacionServicio) {
  return this.http.post(`${this.baseUrl}/${idEmpresa}/utilizacionServicio`, servicioUtilizacion);
}

enviarDatosServiciosBasicos(idEmpresa: number, insumosUtilizacion: InsumosBasicos) {
  return this.http.post(`${this.baseUrl}/${idEmpresa}/utilizacionInsumos`, insumosUtilizacion);
}

enviarManoDeObra(idEmpresa: number, manoObra: manoDeObra) {
  return this.http.post(`${this.baseUrl}/${idEmpresa}/manoDeObra`, manoObra);
}


// PASO 2
enviarCantidadTrabajadores(idEmpresa: number, cantidadTrabajadoresData: cantidadTrabajadores): Observable<cantidadTrabajadores> {
  return this.http.post<cantidadTrabajadores>(`${this.baseUrl2}/${idEmpresa}/cantidadTrabajadores`, cantidadTrabajadoresData);
}

// Enviar datos de horas normales
enviarHorasNormales(idEmpresa: number, horasNormalesData: horasNormales): Observable<horasNormales> {
  return this.http.post<horasNormales>(`${this.baseUrl2}/${idEmpresa}/horasNormales`, horasNormalesData);
}

// Enviar datos de horas extras
enviarHorasExtras(idEmpresa: number, horasExtrasData: horasExtras): Observable<horasExtras> {
  return this.http.post<horasExtras>(`${this.baseUrl2}/${idEmpresa}/horasExtras`, horasExtrasData);
}

}
