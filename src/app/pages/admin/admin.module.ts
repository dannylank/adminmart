import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component'; // Importa el componente "Crear"
import { EditarComponent } from './editar/editar.component'; // Importa el componente "Editar"
import { AdminRoutingModule } from './admin.routing.module'; // Importa el módulo de rutas "AdminRoutingModule"

@NgModule({
  declarations: [CrearComponent, EditarComponent], // Agrega los componentes al módulo
  imports: [CommonModule, AdminRoutingModule], // Importa el módulo de rutas
})
export class AdminModule {}
