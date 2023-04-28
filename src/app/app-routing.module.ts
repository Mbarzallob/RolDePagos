import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IngresarPersonasComponentComponent } from './pages/ingresar-personas-component/ingresar-personas-component.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'ingresarPersonas', component: IngresarPersonasComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
