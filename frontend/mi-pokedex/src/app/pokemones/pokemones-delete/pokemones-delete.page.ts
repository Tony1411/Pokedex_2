import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonesService } from 'src/app/_services/pokemones.service';

@Component({
  selector: 'app-pokemones-delete',
  templateUrl: './pokemones-delete.page.html',
  styleUrls: ['./pokemones-delete.page.scss'],
})
export class PokemonesDeletePage implements OnInit {

  id: any;
  constructor(
    private activatedRoute : ActivatedRoute,
    private pokemonesService : PokemonesService,
    private router : Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
       data => {
          this.id = data.get('id');
       }
    )
  }

  deletePokemon(id:any){
    this.pokemonesService.deletePokemon(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    );
  }

}
