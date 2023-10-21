import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component'; // Importa el componente "Crear"
import { EditarComponent } from './editar/editar.component'; // Importa el componente "Editar"

const routes: Routes = [
  {
    path: 'admin/crear',
    component: CrearComponent, // Asigna el componente "Crear" a la ruta "admin/crear"
  },
  {
    path: 'admin/editar',
    component: EditarComponent, // Asigna el componente "Editar" a la ruta "admin/editar"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
