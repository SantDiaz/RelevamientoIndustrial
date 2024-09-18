import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { bienes, datos_empresas, domicilio_industrial, email_respondente, nombres_fantasia, opciones_servicios, produccion, productos, respondente, servicios, telefonos_empresa, telefonos_repondente, unidad_medidas } from 'src/app/Interfaces/models';
import { bienes_insumos, produccion, unidad_medidas, servicios, servicios_basicos, remuneraciones_cargas, DatosEmpresa, DatosRespondiente  } from 'src/app/Interfaces/models';
import { ServicesService } from 'src/app/services/services.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  currentStep = 1;
  unidad_medida = unidad_medidas;
  // empresas: datos_empresas[] = [];
  // selectedEmpresa: datos_empresas | null = null;
  
  private searchTermSubject = new Subject<string>();
  
  searchTerm: string = '';  
  servicios: { id: number;  nombre: string; monto_pesos: number; }[] = [];
  
  producciones: produccion[] = [];
  bieness: bienes_insumos[] = [];
  
  servicio_basic: servicios_basicos [] = [];
  servicio_basico = servicios_basicos;

  remuneraciones_cargas : remuneraciones_cargas[] = [];
  remuneracion_carga = remuneraciones_cargas;


  datosEmpresa: DatosEmpresa = {
    nombreEmpresa: '',
    nombreFantasia: '',
    cuit: '',
    direccionEstablecimiento: '',
    direccionAdministracion: '',
    localidadEstablecimiento: '',
    actividadPrincipal: ''
  };

  datosRespondiente: DatosRespondiente = {
    nombreApellido: '',
    cargoArea: '',
    tipoTelefono: 'Particular',
    email: ''
  };
 
  constructor(
    private router: Router,
    private productoService: ServicesService,
    private http: HttpClient,
  ) { }


  
  ngOnInit(): void {
    this.agregarNuevaFila(); // Agregar una fila inicial
    this.agregarNuevaFila3(); // Agregar una fila inicial
    this.agregarNuevaFilaServicio();
    this. agregarNuevaFilaServicioBasico()
 
  }

  onSearchChange(term: string) {
    this.searchTermSubject.next(term);
  }


  EnviarS1() {
    this.productoService.enviarDatos(this.datosEmpresa).subscribe(
      (response) => {
        console.log('Datos enviados exitosamente:', response);
      },
      (error) => {
        console.error('Error al enviar los datos:', error);
      }
    );

    this.productoService.enviarDatosRespondiente(this.datosRespondiente).subscribe(
      (response) => {
        console.log('Datos del respondiente enviados exitosamente:', response);
      },
      (error) => {
        console.error('Error al enviar los datos del respondiente:', error);
      }
    );
  }
 
  actualizarProduccion(index: number, nombre: string) {
    this.producciones[index].producto = nombre;
  }


  // AGREGAR FILAS

  agregarNuevaFila() {
    const nuevaProduccion: produccion = {
      id: 0,
      producto: '',
      unidad_medida: null,
      mercado_interno: 0,
      mercado_externo: 0
    };
    this.producciones.push(nuevaProduccion);
  }

  

  agregarNuevaFila3() {
    const nuevaBienes: bienes_insumos = {
      id: 0,
      producto: '',
      unidad_medida: null,
      monto_pesos: 0,
      cantidad: 0,
    };
    this.bieness.push(nuevaBienes);
  }

  agregarNuevaFilaServicio() {
    this.servicios.push({ id: 0,  nombre: '', monto_pesos: 0 });
  }

  agregarNuevaFilaServicioBasico(){
    const nuevaServicioBasico: servicios_basicos = {
      id: 0,
      tipo: '4.9. Energía eléctrica consumida (kw/h)',
      cantidad: 0,
      monto_pesos: 0,
    };
    this.servicio_basic.push(nuevaServicioBasico);
  }

  agregarNuevaFilaRemuneracionCarga(){
    const nuevaRemuneracionCarga: remuneraciones_cargas = {
      id: 0,
      tipo: '4.13. Sueldos y Jornales Brutas totales, incluido SAC y horas extras',
      monto_pesos: 0,
    };
    this.remuneraciones_cargas.push(nuevaRemuneracionCarga);
  }


  //ELIMINAR FILAS

  eliminarUltimaFilaProduccion() {
    if (this.producciones.length > 0) {
      this.producciones.pop();
    }
  }
  
  eliminarUltimaFilaServicios() {
    if (this.servicios.length > 0)  {
      this.servicios.pop();

    }
  }
  
  eliminarUltimaFilaBienes() {
    if (this.bieness.length > 0) {
      this.bieness.pop();
    }
  }


  eliminarUltimaFilaServicioBasico(){
    if (this.servicio_basic.length > 0) {
      this.servicio_basic.pop();
    }
  }
  

  eliminarUltimaFilaRemuneracionCarga(){
    if (this.remuneraciones_cargas.length > 0) {
      this.remuneraciones_cargas.pop();
    }
  }
  









  nextStep() {
    if (this.currentStep < 10) {
      this.currentStep++;
      this.updateStepVisibility();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateStepVisibility();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextStepper() {
    this.router.navigate(['/two']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateStepVisibility() {
    for (let i = 1; i <= 10; i++) {
      const step = document.getElementById(`step-${i}`);
      if (step) {
        if (i === this.currentStep) {
          step.classList.remove('hidden');
        } else {
          step.classList.add('hidden');
        }
      }
    }
  }
}
