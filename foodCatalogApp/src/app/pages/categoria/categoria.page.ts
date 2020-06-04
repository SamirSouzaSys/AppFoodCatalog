import { isNullOrUndefined } from 'util';
import { NavparamService } from './../../services/navparam.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  titulo: string;
  backTo: string;

  @Input() produto: any;

  constructor(
    private navParamService: NavparamService ) { }

  ngOnInit() {
    if( isNullOrUndefined(this.navParamService.getNavData()) ){
      let data = {
        'imagem': 'https://cdn0.matrimonios.cl/emp/fotos/4/8/9/7/t30_2x_ensalada-de-aguacate-y-gambas_8_124897.jpg',
        'nome': 'Entrada 1',
        "detalhes": "Donec lobortis laoreet odio, vitae efficitur mi tempus eu. Integer viverra tellus a tristique pulvinar.",
        'tituloCategoria': "Entrada"
      };
      this.navParamService.setNavData(data);
    }
    this.produto = this.navParamService.getNavData();
  }
}
