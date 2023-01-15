import { FormsCreateClienteComponent } from './components/forms-create-cliente/forms-create-cliente.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListClienteComponent },

  {
    path: 'clientes',
    component: ListClienteComponent,
  },
  {
    path: 'cliente/create',
    component: FormsCreateClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
