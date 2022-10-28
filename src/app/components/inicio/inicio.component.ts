import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

    peso: number = 60;
    edad: number = 25;
    altura: number = 150;

    constructor() { }

    ngOnInit(): void { }

    cambiarAltura(event: any) {
        this.altura = event.target.value;
    }

}
