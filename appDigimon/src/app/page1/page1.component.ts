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

  public digimon: DigimonCard | null = null; 

  constructor(private digimonService: DigimonService) {
    this.digimonService.getRandomDigimon()
      .subscribe((data: any) => {
        this.digimon = {
          name: data[0].name,
          image_url: data[0].image_url,
          rarity: data[0].cardrarity
        }
      })
  }

}
