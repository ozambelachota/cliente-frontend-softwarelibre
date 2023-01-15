import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClienteComponent } from './components/list-cliente/list-cliente.component';
import { FormsCreateClienteComponent } from './components/forms-create-cliente/forms-create-cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ClienteServicioService } from './services/cliente-servicio.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import localPy from '@angular/common/locales/es-PY';
import {registerLocaleData} from '@angular/common';
import { EditFormsComponent } from './components/edit-forms/edit-forms.component';

registerLocaleData(localPy,'es');
@NgModule({
  declarations: [
    AppComponent,
    ListClienteComponent,
    FormsCreateClienteComponent,
    NavbarComponent,
    EditFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ClienteServicioService,{provide:LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
