
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonTabBar, IonTabs } from '@ionic/angular';


@Component({
  selector: 'app-prato-do-dia',
  templateUrl: './prato-do-dia.page.html',
  styleUrls: ['./prato-do-dia.page.scss'],
})
export class PratoDoDiaPage implements OnInit {

  @ViewChild('slidesPratos') slides: IonSlides;
  buttonentrada: string = "";

  titulo: string;

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName("ion-tab-button")[0].classList.add("tabButtonSelected")
   }

  changeSlide(slideNumber) {
    this.slides.slideTo(slideNumber);
  }

  changeButton(buttonToSelect) {

    document.getElementsByTagName("ion-tab-button")[0].classList.remove("tabButtonSelected");
    document.getElementsByTagName("ion-tab-button")[1].classList.remove("tabButtonSelected");
    document.getElementsByTagName("ion-tab-button")[2].classList.remove("tabButtonSelected");

    document.getElementsByTagName("ion-tab-button")[buttonToSelect].classList.add("tabButtonSelected");

  }

  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
      this.changeButton(index);
    });
  }
}