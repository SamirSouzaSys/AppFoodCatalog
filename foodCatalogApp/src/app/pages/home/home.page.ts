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

  constructor(
    private dataService: DataService,
    private navParamService: NavparamService) {
  }

  ngOnInit() {
    this.categorias = this.dataService.getCategorias();
    this.produtosPratoDoDia = this.dataService.getProducts('pratoDoDia');
  }

  goToCategoriasPage(anotherPage, nomeCategoria){
    let data = {
      'categoria': anotherPage,
      'nomeCategoria': nomeCategoria
    };

    this.navParamService.setNavData(data);
  }
}
