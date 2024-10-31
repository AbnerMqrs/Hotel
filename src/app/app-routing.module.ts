import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroHospedesComponent } from './cadastro-hospedes-component/cadastro-hospedes-component.component';
import { CadastroQuartosComponent } from './cadastro-quartos-component/cadastro-quartos-component.component';
import { ReservaComponent } from './reserva-component/reserva-component.component';

const routes: Routes = [
  { path: 'cadastro-hospedes', component: CadastroHospedesComponent },
  { path: 'cadastro-quartos', component: CadastroQuartosComponent },
  { path: 'reservas', component: ReservaComponent },
  { path: '', redirectTo: '/cadastro-hospedes', pathMatch: 'full' }, // Redireciona para cadastro de hóspedes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
