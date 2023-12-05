import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private httpClient: HttpClient) { }

  getRandomDigimon() {
    return this.httpClient.get('https://digimoncard.io/api-public/search.php?n=Agumon&desc=Reveal 5 cards&color=red&type=digimon&attribute=Vaccine&card=BT1-010&pack=BT01-03: Release Special Booster Ver.1.0&sort=name&sortdirection=desc&series=Digimon Card Game');
  }

  getDigimons() {
    return this.httpClient.get('https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc');
  }

}
