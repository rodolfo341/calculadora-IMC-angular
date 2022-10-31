import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.component.html',
    styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
    IMC: number;
    resultado: string;
    interpretacion: string;

    constructor(private route: ActivatedRoute) {
        this.resultado = '';
        this.interpretacion = '';
        this.IMC = +route.snapshot.paramMap.get('valor')!;
    }

    ngOnInit(): void { 
        this.getResultado();
    }

    getResultado() {
        if(this.IMC > 25) {
            this.resultado = "Exceso de peso";
            this.interpretacion = "Tiene exceso de peso, haga ejercicio";
        } else if(this.IMC >= 18.5) {
            this.resultado = "Peso normal";
            this.interpretacion = "Tiene un peso normal, buen trabajo";
        } else {
            this.resultado = "Peso bajo normal";
            this.interpretacion = "Tiene un peso bajo lo normal, coma mas";
        }
    }


}
