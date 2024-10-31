import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroHospedesComponent } from './cadastro-hospedes-component/cadastro-hospedes-component.component';
import { CadastroQuartosComponent } from './cadastro-quartos-component/cadastro-quartos-component.component';
import { ReservaComponent } from './reserva-component/reserva-component.component';
import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroHospedesComponent,
    CadastroQuartosComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Adicione o FormsModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
