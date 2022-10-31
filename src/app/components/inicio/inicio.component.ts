import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

    peso: number = 60;
    edad: number = 25;
    altura: number = 150;
    
    constructor(private router: Router ) { }

    
    ngOnInit(): void { }
    
    cambiarAltura(event: any) {
        this.altura = event.target.value;
    }
    
    sexo: string = "masculino";

    masculino (){
        this.sexo = "masculino";
    }
    femenino (){
        this.sexo = "femenino";
    }

    calcularIMC(){
        const IMC = ( this.peso ) / ( Math.pow( this.altura/100,2 ) );
        this.router.navigate(['/resultado', IMC.toFixed(1)]);
    }
   

}
