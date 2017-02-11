import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name1 = '';
  name2 = '';

  constructor(public alerCtrl: AlertController){}

  get score(){
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for(let i = 0; i < letters.length; i++){
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

  showAlert() {
    let status = '';
    if(this.score<50){
      status = 'Your love is Bad';
    }else{
      status = 'Your love is Good';
    }
    let alert = this.alerCtrl.create({
      title: 'Love Status',
      subTitle: status,
      buttons: ['OK']
    });
    alert.present();
  }
}
