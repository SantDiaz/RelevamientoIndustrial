export interface encuestas {

    id_empresa: number;
    id_operativo: number;
    ingresador: string;
    analista: string;
    fecha_entrega : Date;
    fecha_recupero : Date;
    fecha_supervision : Date;
    fecha_ingreso : Date;
    medio: 'PAPEL' | 'DIGITAL'
    observaciones_ingresador: string;
    observaciones_analista: string;
    anio? : '2024'
}

export interface DatosEmpresa {
    id: number;
    nombreEmpresa: string;
    nombreFantasia: string;
    cuit: string;
    direccionEstablecimiento: string;
    direccionAdministracion: string;
    localidadEstablecimiento: string;
    actividadPrincipal: string;
    id_empresa?: number;  // Agregar id_empresa
    clanae?: string;

  }
  
  export interface DatosRespondiente {
    id: number; //hay que agregarselo para hacer las PK Y FK listo.
    nombreApellido: string;
    cargoArea: string;
    tipoTelefono: 'Particular' | 'Corporativo';
    numeroTelefono: string;
    email: string;
    id_empresa?: number;  // Agregar id_empresa

  }


export interface produccion {
    id: number ;
    producto: string;
    unidad_medida:  
    'METRO (m)' | 
    'METRO CUADRADO (m2)' | 
    'METRO CÚBICO (m3)' | 
    'CENTÍMETRO (cm)' | 
    'CENTÍMETRO CUADRADO (cm2)' | 
    'CENTÍMETRO CÚBICO (cm3)' | 
    'KILOGRAMOS (kg)' | 
    'ONZA (oz)' | 
    'TONELADA (tn)' | 
    'QUINTAL (q)' | 
    'LITROS (lts)' | 
    'HECTOLITROS (hlts)' | 
    'UNIDADES (u)' | 
    'DOCENA (d)' | 
    'DECENA (dc)' | 
    'PACKS (pk)' | 
    'PARES (pr)' | 
    'OTRA UNIDAD' ,
  
    mercado_interno: number | null;
    mercado_externo: number | null;
    id_empresa?: number;  // Agregar id_empresa
    observaciones?: string;

}
export interface UtilizacionInsumos {
  id: number;
  producto: string;
  unidad_medida:  
  'METRO (m)' | 
  'METRO CUADRADO (m2)' | 
  'METRO CÚBICO (m3)' | 
  'CENTÍMETRO (cm)' | 
  'CENTÍMETRO CUADRADO (cm2)' | 
  'CENTÍMETRO CÚBICO (cm3)' | 
  'KILOGRAMOS (kg)' | 
  'ONZA (oz)' | 
  'TONELADA (tn)' | 
  'QUINTAL (q)' | 
  'LITROS (lts)' | 
  'HECTOLITROS (hlts)' | 
  'UNIDADES (u)' | 
  'DOCENA (d)' | 
  'DECENA (dc)' | 
  'PACKS (pk)' | 
  'PARES (pr)' | 
  'OTRA UNIDAD' ,
    cantidad: number;
    monto_pesos: number;
    id_empresa?: number; // Add this line

}


export interface UtilizacionServicio {
    id: number;
    nombre: string;
    monto_pesos: number;
    id_empresa?: number;  // Agregar id_empresa

}

export interface InsumosBasicos {
    id: number;
    tipo:  '4.9. Energía eléctrica consumida (kw/h)' | '4.10. GasOil consumido (litros)' | '4.11. Gas consumido (m3)' | '4.12. Agua consumida (Litros/m3)';
    cantidad: number;
    monto_pesos: number;
    id_empresa?: number;  // Agregar id_empresa

}





export interface manoDeObra {
  id: number;
  tipo:   '4.13. Sueldos y Jornales Brutas totales, incluido SAC y horas extras' | '4.14. Cargas Sociales, incluido A.R.T.' ;
  monto_pesos: number;
  id_empresa?: number;  // Agregar id_empresa
}

  export interface cantidadTrabajadores {
      id: number;
      id_empresa?: number;  // Agregar id_empresa
      plantaAfPermanente: string;
      plantaAfContratado: string;
      plantaResto: string;
      temporalAfectado: string;
      temporalResto: string;
      periodo: string;
  }

  export interface horasNormales {
    id: number;
    id_empresa?: number;  // Agregar id_empresa
    plantaAfPermanente: string;
    plantaAfContratado: string;
    plantaResto: string;
    temporalAfectado: string;
    temporalResto: string;
    periodo: string;
  }

  export interface horasExtras {
    id: number;
    id_empresa?: number;  // Agregar id_empresa
    plantaAfPermanente: string;
    plantaAfContratado: string;
    plantaResto: string;
    temporalAfectado: string;
    temporalResto: string;
    periodo: string;
  }



// constantes



export const tipo = [ 
  '4.9. Energía eléctrica consumida (kw/h)' , '4.10. GasOil consumido (litros)' , '4.11. Gas consumido (m3)' , '4.12. Agua consumida (Litros/m3)'
];

export const unidad_medidas = [
    'METRO (m)', 
    'METRO CUADRADO (m2)', 
    'METRO CÚBICO (m3)', 
    'CENTÍMETRO (cm)', 
    'CENTÍMETRO CUADRADO (cm2)', 
    'CENTÍMETRO CÚBICO (cm3)', 
    'KILOGRAMOS (kg)', 
    'ONZA (oz)', 
    'TONELADA (tn)', 
    'QUINTAL (q)', 
    'LITROS (lts)', 
    'HECTOLITROS (hlts)', 
    'UNIDADES (u)', 
    'DOCENA (d)', 
    'DECENA (dc)', 
    'PACKS (pk)', 
    'PARES (pr)', 
    'OTRA UNIDAD'
  ];


  export const servicios_basicos = [
    '4.9. Energía eléctrica consumida (kw/h)', 
    '4.10. GasOil consumido (litros)', 
    '4.11. Gas consumido (m3)', 
    '4.12. Agua consumida (Litros/m3)', 
  ];
  export const remuneraciones_cargas = [
    '4.13. Sueldos y Jornales Brutas totales, incluido SAC y horas extras' , 
    '4.14. Cargas Sociales, incluido A.R.T.', 
  
  ];



  // paso3
  export interface ItemVenta {
    item: string; // Nombre del item
    monto: number; // Monto asociado
   id_empresa?: number; // Agregar id_empresa
   periodo?: string;

}
  
export interface ventas {
   
  id: number;
  id_empresa?: number; // Agregar id_empresa
  items: ItemVenta[]; // Cambiar a un array de ItemVenta
  // items: '9.1.1 Al mercado interno' | '9.1.2 Al mercado externo'| '9.1.3 Transferencias';
  periodo: string;

}

export interface actividades {
   
  id_empresa?: number; // Agregar id_empresa
  nombre: string;
  monto: number;
  realiza: string;
}


export interface investigacionDesarrollo {
  id:number;
  id_empresa?: number; // Agregar id_empresa
  actividad: actividades[];

}

export interface perspectiva{
  id: number;
  id_empresa?: number; // Agregar id_empresa
  item: items[];
}
export interface items{
  id_empresa?: number; // Agregar id_empresa
  nombre: string;
  observaciones: string;
  respuesta: string;

}


// export interface operativos {
//     id: number;
//     periodo_referencia: string;
//     fecha_inicio: Date;
//     fecha_fin: Date;
// }


// export interface datos_empresas {
//     id_empresa: number;
//     razon_social: string;
//     fecha_actualizacion: Date;
//     actividad_principal: string;
//     clanae: string;
//     domicilio_administracion : string;
//     observaciones: string;
//     cuit: string;

// }

// export interface domicilio_industrial {
//     id: number;
//     id_empresa: number;
//     razon_social: string;
//     domicilio_establecimiento_industrial : string;
//     departamento_domicilio_industrial: string;
// }

// export interface nombres_fantasia {
//     id: number;
//     id_empresa: number;
//     razon_social: string;
//     fecha_actualizacion: Date;
//     nombre_fantasia: string;
// }

// export interface telefonos_empresa {
//     id: number;
//     id_empresa: number;
//     razon_social: string;
//     numero_telefono: string;
//     observaciones: string;
// }

// export interface empresas_respondentes {
//     id_empresa: number;
//     id_respondente: number;
// }

// export interface respondente {
//     id: number;
//     nombre_apellido: string;
//     cargo_area: string;
//     observaciones: string;
// }

// export interface email_respondente {
//     id: number;
//     id_respondente: number;
//     email: string;
// }

// export interface telefonos_repondente {
//     id: number;
//     id_respondente: number;
//     tipo_telefono: string;
//     numero_telefono: string;
// }

// export interface modulos {
//     id: number;
//     id_encuesta: number;
//     id_tipos: number;
//     observaciones_respondente: string;
//     observaciones_ingresador: string;
//     observaciones_analista: string;
// }

// export interface tipos_modulos {
//     id: number;
//     titulo: string;
//     numero_orden: number;
//     periodicidad: string;
// }

// export interface unidad_medida {
//     completo: string;
//     abreviatura: string;
// }

// export interface productos {
//     nombre: string;
//     descripcion: string;
// }


// export interface produccion {
//     id: number ;
//     id_modulo: number;
//     producto: string;
//     unidad_medida:  
//     'METRO (m)' | 
//     'METRO CUADRADO (m2)' | 
//     'METRO CÚBICO (m3)' | 
//     'CENTÍMETRO (cm)' | 
//     'CENTÍMETRO CUADRADO (cm2)' | 
//     'CENTÍMETRO CÚBICO (cm3)' | 
//     'KILOGRAMOS (kg)' | 
//     'ONZA (oz)' | 
//     'TONELADA (tn)' | 
//     'QUINTAL (q)' | 
//     'LITROS (lts)' | 
//     'HECTOLITROS (hlts)' | 
//     'UNIDADES (u)' | 
//     'DOCENA (d)' | 
//     'DECENA (dc)' | 
//     'PACKS (pk)' | 
//     'PARES (pr)' | 
//     'OTRA UNIDAD' | 
//     null;
//       mercado_interno: number | null;
//     mercado_externo: number | null;
// }

// export interface expectativas {
//     id: number;
//     id_modulo: number;
//     id_pregunta: number;
//     respuesta: 'AUMENTARA' | 'NO VARIARA' | 'DISMINUIRA' | 'NO SE APLICA';
//     observaciones: string;
// }

// export interface investigacion_desarrollo {
//     id: number;
//     id_modulo: number;
//     id_actividad: number;
//     realiza: 'SI' | 'NO';
//     monto_pesos: number;
// }

// export interface preguntas_expectativas {
//     id: number;
//     pregunta: string;
// }

// export interface actividades {
//     id: number;
//     actividad: string;
// }

// export interface servicios_basicos {
//     id: number;
//     id_modulo: number;
//     id_servicio_basico: number;
//     monto_pesos: number;
//     cantidad: number;
// }



// export interface remuneraciones_cargas {
//     id: number;
//     id_modulo: number;
//     id_remuneracion_carga: number;
//     monto_pesos: number;
// }



// export interface servicios {
//     id: number;
//     id_modulo: number;
//     nombre: string;
//     monto_pesos: number;
// }

// export interface opciones_servicios {
//     nombre: string;
//     descripcion: string;
// }

// export interface ventas {
//     id: number;
//     id_modulo: number;
//     id_desagregacion_venta: number;
//     monto_pesos: number;
//     periodo: string;
// }


// export interface ventas_clasificacion {
//     id: number;
//     desagregacion: string;
// }


  