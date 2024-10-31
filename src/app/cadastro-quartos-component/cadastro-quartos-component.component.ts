import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-quartos',
  templateUrl: './cadastro-quartos-component.component.html',
  styleUrls: ['./cadastro-quartos-component.component.css']
})
export class CadastroQuartosComponent {
  numero: number = 0;
  tipo: string = '';
  quantidadeDias: number = 1; // Novo campo para quantidade de dias
  valorDiaria: number = 0; // Novo campo para valor da diária

  constructor(private dadosService: DadosService) {}

  cadastrarQuarto() {
    const quarto = { numero: this.numero, tipo: this.tipo, quantidadeDias: this.quantidadeDias, valorDiaria: this.valorDiaria };
    this.dadosService.adicionarQuarto(quarto);
    this.numero = 0;
    this.tipo = '';
    this.quantidadeDias = 1; // Resetar quantidade de dias
    this.valorDiaria = 0; // Resetar valor da diária
    alert('Quarto cadastrado com sucesso!');
  }
}
