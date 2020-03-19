import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2 fxLayoutAlign="center"> Controle de Ponto - Admin</h2>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
