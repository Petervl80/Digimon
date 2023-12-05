import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';

interface DigimonCard {
  name: string;
  rarity: string;
  cardnumber: string;
  image_url: string;
}

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  public digimons: any[] = [];
  public selectedDigimon: DigimonCard | null = null;
  public page: number = 0;

  constructor(private digimonService: DigimonService) { }

  ngOnInit(): void {
    this.digimonService.getDigimons()
      .subscribe((data: any) => {
        this.digimons = this.filterNoRepeated(data);
        console.log(this.digimons);

      })
  }

  public selectDigimon(cardNumber: string) {
    if (cardNumber === '' || cardNumber === this.selectedDigimon?.cardnumber) return;

    this.digimonService.getDigimon(cardNumber).subscribe((data: any) => {
      console.log(data);
      
      this.selectedDigimon = {
        name: data[0].name,
        image_url: data[0].image_url,
        rarity: data[0].cardrarity,
        cardnumber: data[0].cardnumber
      }
    })
  }

  private filterNoRepeated(digimons: any[]) {
    const digimonsFiltered = digimons.filter((digimon, index, self) =>
      index === self.findIndex((t) => (
        t.name === digimon.name
      ))
    )
    return digimonsFiltered;
  }

}
