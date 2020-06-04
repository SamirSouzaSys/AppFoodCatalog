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

      case "entrada":
        return this.http.get<Produto[]>('../../../assets/data/produtosEntrada.json');
        break;

      case "refeicao":
        return this.http.get<Produto[]>('../../../assets/data/produtosRefeicao.json');
        break;

      case "sobremesa":
        return this.http.get<Produto[]>('../../../assets/data/produtosSobremesa.json');
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

    // return this.getProducts('entrada');

    var consoleLog = true;
    var returnData;
    this.getProducts('entrada').subscribe(
      data => {
        //  {
        // console.log("getProducts");

        // Math.floor(Math.random() * 10);
        // var randomNumber = Math.floor(Math.random() * data.length) + 0;

        // returnData = data.slice(randomNumber, randomNumber+1);
        returnData = data.length
        // console.log(returnData);


      }
    );
    // console.log("dir");
    // console.dir(returnData);
    // this.getProducts('entrada')
    // .subscribe(
    //   data => {
    //     // console.log("getProducts");

    //     Math.floor(Math.random() * 10);
    //     var randomNumber = Math.floor(Math.random() * data.length) + 0;

    //     if (consoleLog)
    //     console.log("Random "+randomNumber);

    //     returnData = data.slice(randomNumber, randomNumber+1);
    //     console.log("return data - inside");
    //     console.log(returnData);
    //   }
    //   );

    //   console.log("return data - outs");
    //   console.log(returnData);
    return returnData;
  }

}

// Second
        // for (var [key, value] of Object.entries(data)) {
        //   for (var [tipoKey, produtoValue] of Object.entries(value)) {
        //     if (consoleLog)
        //       // Tipo
        //       console.log("Tipo Produto - " + tipoKey);
        //     objDadosProduto['tipo'] = tipoKey;

        //     var produtoValueArray = Object.entries(produtoValue);
        //     // Math.floor(Math.random() * 10) + 1;
        //     var randomNumber = Math.floor(Math.random() * produtoValueArray.length) + 0;

        //     if (consoleLog)
        //       console.log("RandonNumber - " + randomNumber);

        //     for (var [subKey, subValue] of Object.entries(produtoValueArray[randomNumber])) {
        //       // console.log("\t" + subKey + " - " + subValue + "\n");
        //       // var objDadosProduto = new Object();
        //       var objDadosProduto = new Object();

        //       for (var [subsKey, subsValue] of Object.entries(subValue)) {
        //         if (consoleLog)
        //           // Valores
        //           console.log("\tSubsKey " + subsKey + " - SubsValue " + subsValue + "\n");
        //         objDadosProduto[subsKey] = subsValue;
        //       }

        //       arrayPratoDoDia[tipoKey] = objDadosProduto;
        //     }
        //   }
        // }