import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { bienes, datos_empresas, domicilio_industrial, email_respondente, nombres_fantasia, opciones_servicios, produccion, productos, respondente, servicios, telefonos_empresa, telefonos_repondente, unidad_medidas } from 'src/app/Interfaces/models';
import { bienes_insumos, produccion, unidad_medidas, servicios, servicios_basicos, remuneraciones_cargas, DatosEmpresa  } from 'src/app/Interfaces/models';
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
  // nombreFantasia: nombres_fantasia = {
  //   id: 0,
  //   id_empresa: 0,
  //   razon_social: '',
  //   fecha_actualizacion: new Date(),
  //   nombre_fantasia: ''
  // };

  // domicilioIndustrial: domicilio_industrial = {
  //   id: 0,
  //   id_empresa: 0,
  //   razon_social: '',
  //   domicilio_establecimiento_industrial: '',
  //   departamento_domicilio_industrial: ''
  // };

  // datosEmpresa: datos_empresas = {
  //   id_empresa: 0,
  //   razon_social: '',
  //   fecha_actualizacion: new Date(),
  //   actividad_principal: '',
  //   clanae: '',
  //   domicilio_administracion: '',
  //   observaciones: '',
  //   cuit: '',
  // };

  // respondente: respondente = {
  //   id: 0,
  //   nombre_apellido: '',
  //   cargo_area: '',
  //   observaciones: ''
  // };

  // emailRespondente: email_respondente = {
  //   id: 0,
  //   id_respondente: 0,
  //   email: ''
  // };

  // telefonosRespondente: telefonos_repondente = {
  //   id: 0,
  //   id_respondente: 0,
  //   tipo_telefono: '',
  //   numero_telefono: ''
  // };

  // producto: productos = {
  //   nombre: '',
  //   descripcion: ''
  // };

  // biene: bienes = {
  //   id: 0,
  //   id_modulo: 0,
  //   producto: '',
  //   unidad_medida: null,
  //   monto_pesos: 0,
  //   cantidad: 0,
  // };

  // opciones_servicio: opciones_servicios = {
  //   nombre: '',
  //   descripcion: ''
  // };  

  // opcionesServicios: opciones_servicios[] = [];


  constructor(
    private router: Router,
    private productoService: ServicesService,
    private http: HttpClient,
  ) { }

  // ngOnInit(): void {
  //   this.agregarNuevaFila(); // Agregar una fila inicial
  
  // }
  
  ngOnInit(): void {
    this.agregarNuevaFila(); // Agregar una fila inicial
    this.agregarNuevaFila3(); // Agregar una fila inicial
    this.agregarNuevaFilaServicio();
    this. agregarNuevaFilaServicioBasico()
    // this.searchTermSubject.pipe(
    //   debounceTime(300),
    //   switchMap(term => this.http.get<datos_empresas[]>(`/api/empresas/buscar?term=${term}`))
    // ).subscribe(result => {
    //   this.empresas = result;
    // });

    // this.searchTermSubject.next(this.searchTerm); // Initialize the search
  }

  onSearchChange(term: string) {
    this.searchTermSubject.next(term);
  }


  Enviars1() {
    this.productoService.enviarDatos(this.datosEmpresa).subscribe(
      (response) => {
        console.log('Datos enviados exitosamente:', response);
      },
      (error) => {
        console.error('Error al enviar los datos:', error);
      }
    );
  }
  // onBuscarOAgregarProducto(event: Event, index: number) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const nombre = inputElement?.value || '';

  //   if (!nombre) return;

  //   this.productoService.buscarProducto(nombre).subscribe(
  //     (productoExistente) => {
  //       if (!productoExistente) {
  //         const nuevoProducto: productos = { nombre, descripcion: 'Descripción predeterminada' };
  //         this.productoService.agregarProducto(nuevoProducto).subscribe((productoAgregado) => {
  //           this.actualizarProduccion(index, productoAgregado.nombre);
  //         });
  //       } else {
  //         this.actualizarProduccion(index, productoExistente.nombre);
  //       }
  //     }
  //   );
  // }

  // buscarEmpresas() {
  //   this.http.get<datos_empresas[]>(`/api/empresas/buscar?term=${this.searchTerm}`)
  //     .subscribe(result => {
  //       this.empresas = result;
  //     });
  // }

  // seleccionarEmpresa(empresa: datos_empresas) {
  //   this.selectedEmpresa = empresa;
  //   // empresa.cuit = this.selectedEmpresa.cuit
  //   // Aquí puedes llenar los demás campos del formulario con los datos seleccionados
  // }

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
