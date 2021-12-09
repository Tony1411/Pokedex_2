import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from 'src/app/_services/pokemones.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemones-view',
  templateUrl: './pokemones-view.page.html',
  styleUrls: ['./pokemones-view.page.scss'],
})
export class PokemonesViewPage implements OnInit {
  pokemon: any;

  constructor(
     private activatedRoute : ActivatedRoute,
     private pokemonService : PokemonesService
  ) {}

  ngOnInit() {
     this.activatedRoute.paramMap.subscribe(data => {
           const id = data.get('id');
           this.pokemonService.getPokemonsById(id).subscribe(
               response => {
                  console.log(response);
                  this.pokemon = response
               },
               error => {
                  console.error(error);
               }
           )
        }
     );
  }

  getPictureUrl(picture_url) {
   if (picture_url.includes("http://") || picture_url.includes("https://")){
     return picture_url;  
   }
  return environment.apiUrl + "/" + picture_url;
  }

}
