import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerr',
  templateUrl: './footerr.component.html',
  styleUrls: ['./footerr.component.scss']
})
export class FooterrComponent implements OnInit {
    // Para poner el año en la vista sin necesidad de cambiarlo cada año
  anio: number = new Date().getFullYear();
 
  constructor() { }

  ngOnInit() {
  }

}
