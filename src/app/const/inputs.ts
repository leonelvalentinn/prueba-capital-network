import { Input } from '../types/input.interface'

export const MODELS: { brand: string; models: string[] }[] = [
  { brand: 'Nissan', models: ['Versa', 'Sentra', 'Altima', 'Kicks'] },
  { brand: 'Mazda', models: ['Mazda 2', 'Mazda 3', 'Mazda 6', 'CX-3'] },
  { brand: 'Hyundai', models: ['Elantra', 'Tucson', 'Santa Fe', 'Creta'] },
]

export const INPUTS: Input[] = [
  {
    id: 1,
    name: 'vin',
    label: 'VIN',
    type: 'text',
    placeholder: 'Ingresa el VIN del vehículo',
    required: true,
    errorMessage: 'Campo requerido',
  },
  {
    id: 2,
    name: 'brand',
    label: 'Marca',
    type: 'select',
    placeholder: 'Ingresa la marca del vehículo',
    required: true,
    errorMessage: 'Campo requerido',
    options: ['Nissan', 'Hyundai', 'Mazda'],
  },
  {
    id: 3,
    name: 'model',
    label: 'Modelo',
    type: 'select',
    placeholder: 'Ingresa el modelo del vehículo',
    required: true,
    errorMessage: 'Campo requerido',
    options: [],
  },
  {
    id: 4,
    name: 'year',
    label: 'Año',
    type: 'select',
    placeholder: 'Ingresa el año del vehículo',
    required: true,
    errorMessage: 'Campo requerido',
    options: ['2025', '2024', '2023', '2022', '2021', '2020'],
  },
  {
    id: 5,
    name: 'licensePlate',
    label: 'Placa',
    type: 'text',
    placeholder: 'Ingresa la placa del vehículo',
    required: true,
    errorMessage: 'Campo requerido',
  },
  {
    id: 6,
    name: 'ownerName',
    label: 'Nombre del Propietario',
    type: 'text',
    placeholder: 'Ingresa el nombre del propietario',
    required: true,
    errorMessage: 'Campo requerido',
  },
  {
    id: 7,
    name: 'ownerPhone',
    label: 'Teléfono del Propietario',
    type: 'text',
    placeholder: 'Ingresa el teléfono del propietario',
    required: true,
    errorMessage: 'Campo requerido',
  },
  {
    id: 8,
    name: 'service',
    label: 'Servicio',
    type: 'select',
    placeholder: '¿Por qué motivo ingresa al taller?',
    required: true,
    errorMessage: 'Campo requerido',
    options: [
      'Servicio General',
      'Cambio de Aceite y Filtros',
      'Revisión de Frenos',
      'Diagnóstico por Ruido o Vibración',
    ],
  },
  {
    id: 9,
    name: 'observations',
    label: 'Observaciones',
    type: 'textarea',
    placeholder: 'Ingresa comentarios adicionales',
    required: false,
    errorMessage: '',
  },
]

export const INPUTS_TIRES_FRONT: Input[] = [
  {
    id: 1,
    name: 'frontLeft',
    label: 'Frontal Izquierda',
    type: 'number',
    placeholder: 'PSI',
    required: true,
  },
  {
    id: 2,
    name: 'frontRight',
    label: 'Frontal Derecha',
    type: 'number',
    placeholder: 'PSI',
    required: true,
  },
]

export const INPUTS_TIRES_REAR: Input[] = [
  {
    id: 1,
    name: 'rearLeft',
    label: 'Posterior Izquierda',
    type: 'number',
    placeholder: 'PSI',
    required: true,
  },
  {
    id: 2,
    name: 'rearRight',
    label: 'Posterior Derecha',
    type: 'number',
    placeholder: 'PSI',
    required: true,
  },
]
