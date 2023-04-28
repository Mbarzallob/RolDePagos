import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarPersonasComponentComponent } from './pages/ingresar-personas-component/ingresar-personas-component.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { ConsultarUsuarioComponent } from './pages/consultar-usuario/consultar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarPersonasComponentComponent,
    PaginaPrincipalComponent,
    ConsultarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
