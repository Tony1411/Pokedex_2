import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../_services/pokemones.service';
import { range } from 'rxjs';


@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  pokemones : any[];

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

}

//}, error => {
//  console.error(error);
//});
