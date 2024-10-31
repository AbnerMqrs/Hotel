import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-hospedes',
  templateUrl: './cadastro-hospedes-component.component.html',
  styleUrls: ['./cadastro-hospedes-component.component.css']
})
export class CadastroHospedesComponent {
  nome: string = '';
  documento: string = '';
  telefone: string = '';
  cidade: string = '';
  
  constructor(private dadosService: DadosService) {}

  cadastrarHospede() {
    const hospede = { nome: this.nome, documento: this.documento };
    this.dadosService.adicionarHospede(hospede);
    this.nome = '';
    this.documento = '';
    this.telefone = '';
    this.cidade = '';
    alert('Hóspede cadastrado com sucesso!');
  }
}
