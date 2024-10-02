import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {   DatosEmpresa, DatosRespondiente, InsumosBasicos, manoDeObra, produccion, remuneraciones_cargas, servicios_basicos, UtilizacionInsumos, UtilizacionServicio } from 'src/app/Interfaces/models';


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


  // enviarDatosBienes(bienInsumo: UtilizacionInsumos) {
  //   const idEmpresa = bienInsumo.id_empresa;

  //   return this.http.post(`${this.baseUrl}/${idEmpresa}/insumosBasicos`, bienInsumo);
  // }

  // enviarDatosServicios(servicioUtilizacion: UtilizacionServicio) {
  //   const idEmpresa = servicioUtilizacion.id_empresa;

  //   return this.http.post(`${this.baseUrl}/${idEmpresa}/utilizacionServicio`, servicioUtilizacion);
  // }

  // enviarDatosServiciosBasicos(insumosUtilizacion: InsumosBasicos) {
  //   const idEmpresa = insumosUtilizacion.id_empresa;

  //   return this.http.post(`${this.baseUrl}/${idEmpresa}/utilizacionInsumos`, insumosUtilizacion);
  // }


  // enviarManoDeObra(manoObra: manoDeObra) {
  //   const idEmpresa = manoObra.id_empresa;

  //   return this.http.post(`${this.baseUrl}/${idEmpresa}/manoDeObra`, manoObra);
  // }


}
