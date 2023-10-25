import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbdataService {
  private apiUrl = 'http://localhost:7028/api/GetPolygons'; // Reemplaza con la URL de tu API en Azure Functions

  constructor(private http: HttpClient) { }

  // Ejemplo de método para obtener datos de tu API
  getPolygons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/GetPolygons`);
  }

  // Agrega más métodos según tus necesidades, como agregar, actualizar o eliminar datos en la base de datos
}
