import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './componentes/administrador/citas/citas.component';
import { CitaComponent } from './componentes/cita/cita.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MedicoComponent } from './componentes/medico/medico.component';
import { MensajeriaComponent } from './componentes/mensajeria/mensajeria.component';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'login',component:LoginComponent},
{path:'registro',component:RegistroComponent},
{path:'citas',component:CitasComponent},
{path:'pacientes',component: PacientesComponent},
{path:'cita',component: CitaComponent},
{path:'contactenos',component: ContactenosComponent},
{path:'footer',component: FooterComponent},
{path:'medico',component: MedicoComponent},
{path:'tratamientos',component: TratamientosComponent},
{path:'mensajeria',component: MensajeriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
