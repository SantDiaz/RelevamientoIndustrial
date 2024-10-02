import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  produccion: any[] = [];  // Aquí tienes los datos de producción, asumo que ya está inicializado

  bieness: bienes_insumos[] = [];
  
  servicio_basic: servicios_basicos [] = [];
  servicio_basico = servicios_basicos;

  remuneraciones_cargas : remuneraciones_cargas[] = [];
  remuneracion_carga = remuneraciones_cargas;



//Recibir id_empresa de tabla encuestas
idEmpresa: number = 0 ;



  datosEmpresa: DatosEmpresa = {
    id : 0,
    nombreEmpresa: '',
    nombreFantasia: '',
    cuit: '',
    direccionEstablecimiento: '',
    direccionAdministracion: '',
    localidadEstablecimiento: '',
    actividadPrincipal: '',

  };

  datosRespondiente: DatosRespondiente = {
    id: 0,
    nombreApellido: '',
    cargoArea: '',
    tipoTelefono: 'Particular',
    numeroTelefono: 0,
    email: ''
  };
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private oneService: ServicesService,
    private http: HttpClient,
  ) { }


  
  ngOnInit(): void {
    this.agregarNuevaFila(); // Agregar una fila inicial
    this.agregarNuevaFila3(); // Agregar una fila inicial
    this.agregarNuevaFilaServicio();
    this. agregarNuevaFilaServicioBasico()
    this.idEmpresa = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID Empresa recibido:', this.idEmpresa);
  }

  onSearchChange(term: string) {
    this.searchTermSubject.next(term);
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
  

        // this.router.navigate(['/one', idEmpresa]);


    EnviarS1() {      
      console.log(this.datosEmpresa); // Verificar datos enviados
    
      // Agrega el idEmpresa a los datos que vas a enviar
      this.datosEmpresa.id_empresa = this.idEmpresa;
      this.datosRespondiente.id_empresa = this.idEmpresa;
    
      // Enviar datos de la empresa
      this.oneService.enviarDatosEmpresa(this.datosEmpresa).subscribe({
        next: (response) => {
          console.log('Datos enviados exitosamente:', response);
          if (this.currentStep < 10) {
            this.currentStep++;
            this.updateStepVisibility();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }    
        },
        error: (error) => {
          console.error('Error al enviar los datos:', error);
        },
        complete: () => {
          console.log('Solicitud completada.');
        }
      });
    
      // Enviar datos del respondiente
      this.oneService.enviarDatosRespondiente(this.datosRespondiente).subscribe(
        (response) => {
          console.log('Datos del respondiente enviados exitosamente:', response);
        },
        (error) => {
          console.error('Error al enviar los datos del respondiente:', error);
        }
      );
    }
 

    step2() {
      // Asigna id_empresa a cada producción
      this.producciones.forEach(p => p.id_empresa = this.idEmpresa);
    
      // Enviar cada producción por separado
      this.producciones.forEach((produccion) => {
        this.oneService.enviarDatosProduccion(produccion).subscribe(
          response => {
            console.log('Producción enviada correctamente', response);
          },
          error => {
            console.error('Error al enviar la producción', error);
          }
        );
      });
    
      // Si todo va bien, pasar al siguiente step
      if (this.currentStep < 10) {
        this.currentStep++;
        this.updateStepVisibility();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
