import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule  } from "@angular/common/http";
//Paginas
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterrComponent } from './shared/footerr/footerr.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
//Servicios
import { InfoPaginaService } from './services/info-pagina.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterrComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InfoPaginaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
