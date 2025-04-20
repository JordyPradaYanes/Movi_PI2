export interface Buseta {
    id: string;
    ruta: string;
    tipoRuta: string; // 'ida' o 'vuelta'
    conductor: string;
    velocidad: number;
    posicion: {
      latitud: number;
      longitud: number;
    };
    ultimaActualizacion: Date;
  }