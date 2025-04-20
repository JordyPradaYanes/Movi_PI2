import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Buseta } from '../models/buseta.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private busetas: Buseta[] = [];

  constructor() {
    // Inicializar datos simulados
    this.inicializarDatosSimulados();
  }

  obtenerUbicacionBusetas(tipoRuta: string = ''): Observable<Buseta[]> {
    // Simulamos la actualización de posición cada 2 segundos
    return interval(2000).pipe(
      map(() => {
        // Actualizamos las posiciones simuladas
        this.actualizarPosicionesSimuladas();
        
        // Filtrar por tipo de ruta si es necesario
        if (tipoRuta) {
          return this.busetas.filter(b => b.tipoRuta === tipoRuta);
        }
        
        return this.busetas;
      })
    );
  }

  private inicializarDatosSimulados(): void {
    // Crear busetas simuladas para la ruta de ida
    this.busetas = [
      {
        id: 'B001',
        ruta: 'Ruta Principal - Ida',
        tipoRuta: 'ida',
        conductor: 'Juan Pérez',
        velocidad: 35,
        posicion: {
          latitud: 8.2473,
          longitud: -73.3589
        },
        ultimaActualizacion: new Date()
      },
      {
        id: 'B002',
        ruta: 'Ruta Principal - Ida',
        tipoRuta: 'ida',
        conductor: 'Carlos Rodríguez',
        velocidad: 30,
        posicion: {
          latitud: 8.2499,
          longitud: -73.3565
        },
        ultimaActualizacion: new Date()
      },
      {
        id: 'B003',
        ruta: 'Ruta Principal - Vuelta',
        tipoRuta: 'vuelta',
        conductor: 'María González',
        velocidad: 28,
        posicion: {
          latitud: 8.2460,
          longitud: -73.3600
        },
        ultimaActualizacion: new Date()
      },
      {
        id: 'B004',
        ruta: 'Ruta Principal - Vuelta',
        tipoRuta: 'vuelta',
        conductor: 'Pedro Díaz',
        velocidad: 32,
        posicion: {
          latitud: 8.2439,
          longitud: -73.3510
        },
        ultimaActualizacion: new Date()
      }
    ];
  }

  private actualizarPosicionesSimuladas(): void {
    // Simulamos el movimiento de las busetas con pequeños cambios en las coordenadas
    this.busetas.forEach(buseta => {
      // Movimientos aleatorios pequeños para simular desplazamiento
      const deltaLat = (Math.random() - 0.5) * 0.0005;
      const deltaLng = (Math.random() - 0.5) * 0.0005;
      
      buseta.posicion.latitud += deltaLat;
      buseta.posicion.longitud += deltaLng;
      
      // Actualizar velocidad (simulada)
      buseta.velocidad = Math.floor(25 + Math.random() * 15);
      buseta.ultimaActualizacion = new Date();
    });
  }
}