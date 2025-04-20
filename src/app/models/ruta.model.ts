export interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  
  export interface Ruta {
    nombre: string;
    tipo: string; // 'ida' o 'vuelta'
    coordenadas: LatLngLiteral[];
    puntos: PuntoInteres[];
  }
    
  export interface PuntoInteres {
    nombre: string;
    coordenadas: LatLngLiteral;
    tipo: string; // 'parada', 'terminal', etc.
  }