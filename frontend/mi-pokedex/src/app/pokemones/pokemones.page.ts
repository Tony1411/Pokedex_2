import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../_services/pokemones.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  pokemones : any;

  constructor(
    private pokemonesService: PokemonesService
  ) {}

  ngOnInit() : void {
  }

  ionViewWillEnter(): void {
     this.pokemonesService.getPokemons().subscribe(data =>{
            this.pokemones = data;
     })
  }

  getPictureUrl(picture_url) {
    if (picture_url.includes("http://") || picture_url.includes("https://")){
      return picture_url;  
    }
    return environment.apiUrl + "/" + picture_url;
  }
 
}


