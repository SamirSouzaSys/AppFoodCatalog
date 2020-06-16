import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto, Categoria } from './../interfaces/interfaces';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  getProducts(tipo: String) {
    switch (tipo) {

      case "lanche":
        return this.http.get<Produto[]>('../../../assets/data/produtosLanche.json');
        break;

      case "entrada":
        return this.http.get<Produto[]>('../../../assets/data/produtosEntrada.json');
        break;

      case "refeicao":
        return this.http.get<Produto[]>('../../../assets/data/produtosRefeicao.json');
        break;

      case "sobremesa":
        return this.http.get<Produto[]>('../../../assets/data/produtosSobremesa.json');
        break;

      case "bebida":
        return this.http.get<Produto[]>('../../../assets/data/produtosBebida.json');
        break;
        
      case "pratoDoDia":
        return this.http.get<Produto[]>('../../../assets/data/produtosPratoDoDia.json');
        break;

      default:
        return this.http.get<Produto[]>("ERRO - Tipo inválido!!");
        break;
    }
  }

  getCategorias() {
    return this.http.get<Categoria[]>('../../../assets/data/categorias.json');
  }

  getPratoDoDia(tipo: string) {
    var consoleLog = true;
    var returnData;
    this.getProducts('entrada').subscribe(
      data => {
        returnData = data.length
      }
    );
    return returnData;
  }

}