import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
