import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { CitaComponent } from './componentes/cita/cita.component';
import { MedicoComponent } from './componentes/medico/medico.component';
import { CitasComponent } from './componentes/administrador/citas/citas.component';
import { MensajeriaComponent } from './componentes/mensajeria/mensajeria.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacientesComponent,
    CitaComponent,
    MedicoComponent,
    CitasComponent,
    MensajeriaComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    ContactenosComponent,
    HeaderComponent,
    TratamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
