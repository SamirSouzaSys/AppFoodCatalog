import { isNullOrUndefined } from 'util';
import { Produto } from './../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavparamService } from '../../services/navparam.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  produtos: Observable<Produto[]>;

  @Input() tituloCategoria: string;

  data: any;

  constructor(
    private dataService: DataService,
    private navParamService: NavparamService ) { 
    
  }

  ngOnInit() {
      if( isNullOrUndefined(this.navParamService.getNavData().categoria) ){
        let data = {
          'categoria': 'entrada',
          'nomeCategoria': 'Entradas'
        }
        this.navParamService.setNavData(data);
      }
    
     this.produtos = this.dataService.getProducts(this.navParamService.getNavData().categoria);
     this.tituloCategoria = this.navParamService.getNavData().nomeCategoria;
  }

  goToCategoriaPage(produtoLocal, tituloCategoria){
    let data = {
      'nome': produtoLocal.nome,
      'imagem': produtoLocal.imagem,
      'detalhes': produtoLocal.detalhes,
      'tituloCategoria': tituloCategoria
    };

    this.navParamService.setNavData(data);
  }

}
