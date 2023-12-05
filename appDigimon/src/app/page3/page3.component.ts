import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit{

  public digimons : any[] = [];

  constructor(
    private digimon : DigimonService
  ){}

  ngOnInit(): void {
      this.digimon.getDigimons()
      .subscribe((data: any) => {
        this.digimons.push(data);
      })
  }

}
