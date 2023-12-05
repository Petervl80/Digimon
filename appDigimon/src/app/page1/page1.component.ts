import { Component } from '@angular/core';
import { DigimonService } from '../services/digimon.service';

interface DigimonCard {
  name: string;
  image_url: string;
  rarity: string;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {

  public digimon: any; 

  constructor(private digimonService: DigimonService) {
    this.digimonService.getRandomDigimon()
      .subscribe(data => {
        console.log(data);
      })
  }

}
