import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ruta } from '../models/ruta.model';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private apiUrl = 'assets/data/rutas.json'; // Ruta al archivo JSON (puedes cambiar esto por una API real)

  constructor(private http: HttpClient) { }

  obtenerRutas(): Observable<Ruta[]> {
    // Por ahora devolvemos datos simulados
    // En un entorno real, deberías obtener estos datos de tu backend
    return of(this.getRutasSimuladas());
  }

  private getRutasSimuladas(): Ruta[] {
    const rutaIda: Ruta = {
      nombre: 'Ruta Principal - Ida',
      tipo: 'ida',
      coordenadas: [
        { lat: 8.2473, lng: -73.3589 }, // Maravel
        { lat: 8.2499, lng: -73.3565 }, // Centenario
        { lat: 8.2520, lng: -73.3532 }, // Llanadas
        { lat: 8.2439, lng: -73.3510 }, // Llano
        { lat: 8.2401, lng: -73.3527 }, // Hatillo
        { lat: 8.2420, lng: -73.3590 }, // Circunvalar
        { lat: 8.2460, lng: -73.3600 }  // Ermita
      ],
      puntos: [
        { nombre: 'Maravel', coordenadas: { lat: 8.2473, lng: -73.3589 }, tipo: 'parada' },
        { nombre: 'Centenario', coordenadas: { lat: 8.2499, lng: -73.3565 }, tipo: 'parada' },
        { nombre: 'Llanadas', coordenadas: { lat: 8.2520, lng: -73.3532 }, tipo: 'parada' },
        { nombre: 'Llano', coordenadas: { lat: 8.2439, lng: -73.3510 }, tipo: 'parada' },
        { nombre: 'Hatillo', coordenadas: { lat: 8.2401, lng: -73.3527 }, tipo: 'parada' },
        { nombre: 'Circunvalar', coordenadas: { lat: 8.2420, lng: -73.3590 }, tipo: 'parada' },
        { nombre: 'Ermita', coordenadas: { lat: 8.2460, lng: -73.3600 }, tipo: 'terminal' }
      ]
    };

    const rutaVuelta: Ruta = {
      nombre: 'Ruta Principal - Vuelta',
      tipo: 'vuelta',
      coordenadas: [
        { lat: 8.2460, lng: -73.3600 }, // Ermita
        { lat: 8.2420, lng: -73.3590 }, // Circunvalar
        { lat: 8.2401, lng: -73.3527 }, // Hatillo
        { lat: 8.2439, lng: -73.3510 }, // Llano
        { lat: 8.2520, lng: -73.3532 }, // Llanadas
        { lat: 8.2499, lng: -73.3565 }, // Centenario
        { lat: 8.2473, lng: -73.3589 }, // Maravel
        { lat: 8.2450, lng: -73.3610 }, // Aguas Claras
        { lat: 8.2430, lng: -73.3625 }  // Sauces
      ],
      puntos: [
        { nombre: 'Ermita', coordenadas: { lat: 8.2460, lng: -73.3600 }, tipo: 'terminal' },
        { nombre: 'Circunvalar', coordenadas: { lat: 8.2420, lng: -73.3590 }, tipo: 'parada' },
        { nombre: 'Hatillo', coordenadas: { lat: 8.2401, lng: -73.3527 }, tipo: 'parada' },
        { nombre: 'Llano', coordenadas: { lat: 8.2439, lng: -73.3510 }, tipo: 'parada' },
        { nombre: 'Llanadas', coordenadas: { lat: 8.2520, lng: -73.3532 }, tipo: 'parada' },
        { nombre: 'Centenario', coordenadas: { lat: 8.2499, lng: -73.3565 }, tipo: 'parada' },
        { nombre: 'Maravel', coordenadas: { lat: 8.2473, lng: -73.3589 }, tipo: 'parada' },
        { nombre: 'Aguas Claras', coordenadas: { lat: 8.2450, lng: -73.3610 }, tipo: 'parada' },
        { nombre: 'Sauces', coordenadas: { lat: 8.2430, lng: -73.3625 }, tipo: 'parada' }
      ]
    };

    return [rutaIda, rutaVuelta];
  }
}