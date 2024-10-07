import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ventas } from 'src/app/Interfaces/models';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  currentStep = 1;
  idEmpresa: number = 0 ;

  venta: ventas = {
    id: 0,
    items: [
      { item: '9.1.1 Al mercado interno', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.1.2 Al mercado externo', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.1.3 Transferencias', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.2 Trabajos industriales realizados con materia prima de terceros', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.3. Reparación de maquinarias y equipos pertenecientes a terceros', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.4. Venta de mercadería en el mismo estado que se encuentran', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.5. Valor de los trabajos industriales realizados a contrato de trabajo o avance de obra', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.6. Otros Ingresos', monto: 0, id_empresa: this.idEmpresa },
      // Agrega otros items aquí
    ],
    periodo: '',
  };
  constructor(   private router: Router, private route: ActivatedRoute,     private threeService: ServicesService,


  ) { }

  ngOnInit(): void {
    this.idEmpresa = Number(this.route.snapshot.paramMap.get('id'));
    this.initializeItems();

  }
  initializeItems() {
    this.venta.items = [
      { item: '9.1.1 Al mercado interno', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.1.2 Al mercado externo', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.1.3 Transferencias', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.2 Trabajos industriales realizados con materia prima de terceros', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.3. Reparación de maquinarias y equipos pertenecientes a terceros', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.4. Venta de mercadería en el mismo estado que se encuentran', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.5. Valor de los trabajos industriales realizados a contrato de trabajo o avance de obra', monto: 0, id_empresa: this.idEmpresa },
      { item: '9.6. Otros Ingresos', monto: 0, id_empresa: this.idEmpresa },
      // Agrega otros items aquí
    ];
  }
  nextStep() {
    if (this.currentStep < 10) {  // Ajusta este número si añades más pasos
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

  nextSteper(){
    this.router.navigate(['/four'])
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


  step1(){
//   console.log('Datos a guardar:', this.venta);
console.log('Datos a guardar:', this.venta);
    this.venta.periodo = "Enero a Marzo"
    this.venta.id_empresa = this.idEmpresa;
    this.threeService.createVenta( this.idEmpresa , this.venta).subscribe(response => {
      console.log('Venta guardada', response);
    }, error => {
      console.error('Error al guardar la venta', error);
    });
  }
}


