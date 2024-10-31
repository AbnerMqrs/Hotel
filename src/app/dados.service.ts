import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private hospedes: any[] = [];
  private quartos: any[] = [];
  private telefone: any[] = [];
  private cidade: any[] = [];

  adicionarHospede(hospede: any) {
    this.hospedes.push(hospede);
  }

  getHospedes() {
    return this.hospedes;
  }

  adicionarQuarto(quarto: any) {
    this.quartos.push(quarto);
  }

  getQuartos() {
    return this.quartos;
  }
  getTell() {
    return this.telefone;
  }
  getCid() {
    return this.cidade;
  }
}
