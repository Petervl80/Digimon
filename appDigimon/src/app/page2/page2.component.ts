import { Component } from '@angular/core';
import { DigimonService } from '../services/digimon.service';

interface DigimonCard {
  name: string;
  image_url: string;
  rarity: string;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {

  public digimon: DigimonCard | null = null;
  public won: string = "";

  public ganhou: string = "ganhou"

  constructor(private digimonService: DigimonService) {
    let randomIndex = Math.floor(Math.random() * 2542);

    this.digimonService.getDigimons().subscribe((data: any) => {
      const cardNumber = data[randomIndex].cardnumber;

      this.digimonService.getDigimon(cardNumber).subscribe((data: any) => {
        this.digimon = {
          name: data[0].name,
          image_url: data[0].image_url,
          rarity: data[0].cardrarity
        }

        this.won = Math.random() > 0.5 ? "Venceu" : "Perdeu";
      })

    })
  }

}
