import { Component, OnInit } from '@angular/core';
import { encuestas } from '../Interfaces/models';
import { Router } from '@angular/router';
import { EncuestaService } from '../services/encuesta.service';  // Import the service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  encuesta: encuestas = {
    id_operativo: 0,
    id_empresa: 0,
    ingresador: '',
    analista: '',
    fecha_entrega: new Date(),
    fecha_recupero: new Date(),
    fecha_supervision: new Date(),
    fecha_ingreso: new Date(),  // No será visible
    medio: 'PAPEL',
    observaciones_ingresador: '',
    observaciones_analista: '',
  };

  idEmpresa: number = 0 ;


  constructor(private encuestaService: EncuestaService, private router: Router) { }  // Inject the service

  ngOnInit(): void { }


  onSubmit() {


    this.encuestaService.saveEncuesta(this.encuesta).subscribe({
      next: (response) => {
        console.log('Encuesta saved successfully:', response);
        
        // Suponiendo que el id_empresa viene en el response
        const idEmpresa = response.id_empresa;

        // Redirigir al componente 'oneComponent' con id_empresa como parámetro
        this.router.navigate(['/one', idEmpresa]);
      },
      error: (error) => {
        console.error('Error saving encuesta:', error);
      }
    });
  }

  nextStep() {
    console.log(this.encuesta);
    this.onSubmit();  // Save the form data when moving to the next step
  }
}
