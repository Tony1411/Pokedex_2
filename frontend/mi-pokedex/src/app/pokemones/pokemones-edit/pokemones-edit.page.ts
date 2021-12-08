import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonesService } from 'src/app/_services/pokemones.service';

@Component({
  selector: 'app-pokemones-edit',
  templateUrl: './pokemones-edit.page.html',
  styleUrls: ['./pokemones-edit.page.scss'],
})
export class PokemonesEditPage implements OnInit {

  id: any;
  pokemon: any;
  pokemonForm : FormGroup;

  constructor(
     private pokemonesService : PokemonesService,
     private activatedRoute: ActivatedRoute,
     private formBuilder : FormBuilder,
     private router : Router
  ) {
     this.pokemonForm = this.formBuilder.group({
       id: [''],
       nombre: [''],
       altura: [''],
       categoria: [''],
       peso: [''],
       habilidad: [''],
       tipo: [''],
       img: ['']
    });    
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.id = data.get('id');
        this.pokemonesService.getPokemonsById(this.id).subscribe(
          response => {
            console.log(response);
            this.pokemon = response;
            this.pokemonForm.patchValue(response);
          },
          error =>{
            console.error(error);
          }
        )   
      }
    );
  }

  actualizarPokemon(pokemon : any){
    this.pokemonesService.editPokemon(this.id, pokemon).subscribe(response => {
      console.log(response);
      this.router.navigate(['/pokemons']);
    }, error => {
      console.error(error);
    });
  }

}


