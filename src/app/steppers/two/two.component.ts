import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cantidadTrabajadores, horasExtras, horasNormales } from 'src/app/Interfaces/models';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  currentStep = 1;
  idEmpresa: number = 0 ;

  // cantidadTrabajadores: cantidadTrabajadores[] = [];
  // horasNormales: horasNormales[] = [];
  // horasExtras : horasExtras  [] = [];
  cantidadTrabajadores: cantidadTrabajadores = {
    id: 0,
    id_empresa: 123,  // ID de la empresa
    plantaAfPermanente: '',
    plantaAfContratado: '',
    plantaResto: '',
    temporalAfectado: '',
    temporalResto: '',
    periodo: 'Enero a Marzo 2023'
  };

  horasNormales: horasNormales = {
    id: 0,
    id_empresa: 123,  // ID de la empresa
    plantaAfPermanente: '',
    plantaAfContratado: '',
    plantaResto: '',
    temporalAfectado: '',
    temporalResto: '',
    periodo: 'Enero a Marzo 2023'
  };

  horasExtras: horasExtras = {
    id: 0,
    plantaAfPermanente: '',
    plantaAfContratado: '',
    plantaResto: '',
    temporalAfectado: '',
    temporalResto: '',
    periodo: ''
  };

  constructor(   private router: Router , private twoService: ServicesService,

  ) { }

  ngOnInit(): void {
  }

  nextStep() {
    if (this.currentStep < 10) {  // Ajusta este número si añades más pasos
      this.currentStep++;
      this.updateStepVisibility();
  
      // Desplaza la página al inicio
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

  updateStepVisibility() {
    for (let i = 1; i <= 10; i++) {  // Ajusta este número si añades más pasos
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

  nextSteper(){
    this.router.navigate(['/three'])
    window.scrollTo({ top: 0, behavior: 'smooth' });

 }



  Step1() {
    this.cantidadTrabajadores.id_empresa = this.idEmpresa;
    this.horasNormales.id_empresa = this.idEmpresa;
    this.horasExtras.id_empresa = this.idEmpresa;
    this.cantidadTrabajadores.periodo = 'Enero a Marzo 2023';
    this.horasNormales.periodo = 'Enero a Marzo 2023';
    this.horasExtras.periodo = 'Enero a Marzo 2023';

    // Enviar los datos
      // Enviar cantidad de trabajadores
      this.twoService.enviarCantidadTrabajadores(this.idEmpresa, this.cantidadTrabajadores)
        .subscribe(response => {
          console.log('Cantidad de trabajadores enviada:', response);
        }, error => {
          console.error('Error al enviar cantidad de trabajadores:', error);
        });
  
      // Enviar horas normales
      this.twoService.enviarHorasNormales(this.idEmpresa, this.horasNormales)
        .subscribe(response => {
          console.log('Horas normales enviadas:', response);
        }, error => {
          console.error('Error al enviar horas normales:', error);
        });
  
      // Enviar horas extras
      this.twoService.enviarHorasExtras(this.idEmpresa, this.horasExtras)
        .subscribe(response => {
          console.log('Horas extras enviadas:', response);
        }, error => {
          console.error('Error al enviar horas extras:', error);
        });
    }

    
  } 

