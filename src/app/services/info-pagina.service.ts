import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
info: InfoPagina = {};
cargada= false;

equipo: any[]= [];
  constructor( private http: HttpClient) {
    console.log('Servicio cargando ');
    
      this.cargarEquipo();
   }
   private cagarInfo(){
         //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina)=>{
      this.cargada=true;
      this.info=resp;

      
    });
   }

   private cargarEquipo(){
      //Leer el archivo JSON
      this.http.get('https://angular-html-2dd19.firebaseio.com/equipo.json')
      .subscribe((resp:any[])=>{
       this.equipo= resp;
        
      });
   }
}
