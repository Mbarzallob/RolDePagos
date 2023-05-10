import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IngresarPersonasComponentComponent } from './pages/ingresar-personas-component/ingresar-personas-component.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { ConsultarUsuarioComponent } from './pages/consultar-usuario/consultar-usuario.component';
import { RolPagosComponent } from './pages/rol-pagos/rol-pagos.component';
import { PagosComponent } from './pages/pagos/pagos.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'ingresarPersonas', component: IngresarPersonasComponentComponent },
  { path: 'consultaUsuario', component: ConsultarUsuarioComponent},
  { path: 'rolPagos', component: RolPagosComponent},
  {path: 'pagos', component: PagosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
