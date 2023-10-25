import { Component, OnInit } from '@angular/core';
import { DbdataService } from 'src/app/services/dbdata.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  polygons: any[]; // Define una propiedad para almacenar los datos de los polígonos

  constructor(private dbdataService: DbdataService) { }

  ngOnInit() {
    // Llama al método para obtener los polígonos desde tu servicio
    this.dbdataService.getPolygons().subscribe(
      (data) => {
        this.polygons = data; // Almacena los datos en la propiedad "polygons"
      },
      (error) => {
        console.error('Error al obtener los polígonos', error);
      }
    );
  }
}
