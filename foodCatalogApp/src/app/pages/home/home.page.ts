import { CategoriaPage } from './../categoria/categoria.page';
import { Component, OnInit, PipeTransform, Input } from '@angular/core';

import { DataService } from './../../services/data.service';
import { Produto, Categoria } from './../../interfaces/interfaces';

import { Observable } from 'rxjs';

import { NavparamService } from '../../services/navparam.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  produtos: Observable<Produto[]>;
  produtosPratoDoDia: Observable<Produto[]>;
  categorias: Observable<Categoria[]>;

  @Input() tituloCategoria: string;

  // produtoEntrada: [];

  // private dataStore: { produtos: Produto[] } = { produtos: [] };

  constructor(
    private dataService: DataService,
    private navParamService: NavparamService) {
  }

  ngOnInit() {
    this.categorias = this.dataService.getCategorias();
    this.produtosPratoDoDia = this.dataService.getProducts('pratoDoDia');
    // this.getPratoDoDiaLocal(this.dataService.getProducts('entrada'));
    // this.getPratoDoDiaLocal();


    // console.log("Produtos Prato do dia");
    // console.dir(this.produtosPratoDoDia);
    // console.log("Categorias");
    // console.log(this.categorias);
  }

  goToCategoriasPage(anotherPage, nomeCategoria){
    let data = {
      'categoria': anotherPage,
      'nomeCategoria': nomeCategoria
    };

    this.navParamService.setNavData(data);
  
  }

  // getPratoDoDiaLocal(dataFrom) {
  //   console.log("dataFrom");
  //   console.log(dataFrom);

  //   var produtoLocal;

  //   // produtoLocal = this.dataService.getPratoDoDia('entrada');
  //   dataFrom.subscribe(
  //     data =>
  //   //     produtoLocal = data
  //     {
  //       var randomNumber = Math.floor(Math.random() * data.length) + 0;
  //       this.produtoEntrada = data.slice(randomNumber, randomNumber+1);

  //     }
  //     );
      
  //     console.log("data Intra");
  //     console.log(this.produtoEntrada);
  // }

}
