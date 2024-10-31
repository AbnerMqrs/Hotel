import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva-component.component.html',
  styleUrls: ['./reserva-component.component.css']
})
export class ReservaComponent {
  hospedes: any[] = [];
  quartos: any[] = [];
  hospedeSelecionado: any;
  quartoSelecionado: any;
  quantidadeDias: number = 1; // Novo campo para quantidade de dias
  valorDiaria: number = 0; // Novo campo para valor da diária
  valorTotal: number = 0; // Campo para o valor total da reserva

  constructor(private dadosService: DadosService) {
    this.hospedes = this.dadosService.getHospedes();
    this.quartos = this.dadosService.getQuartos();
  }

  calcularValorTotal() {
    if (this.quartoSelecionado) {
      this.valorDiaria = this.quartoSelecionado.valorDiaria; // Acesse o valor da diária do quarto selecionado
      this.valorTotal = this.valorDiaria * this.quantidadeDias; // Calcule o valor total
    } else {
      this.valorTotal = 0; // Reseta o valor total se nenhum quarto estiver selecionado
    }
  }

  fazerReserva() {
    if (this.hospedeSelecionado && this.quartoSelecionado) {
      alert(`Reserva feita com sucesso para ${this.hospedeSelecionado.nome} no quarto ${this.quartoSelecionado.numero}! Valor total: R$ ${this.valorTotal.toFixed(2)}`);
    } else {
      alert('Por favor, selecione um hóspede e um quarto.');
    }
  }
}
