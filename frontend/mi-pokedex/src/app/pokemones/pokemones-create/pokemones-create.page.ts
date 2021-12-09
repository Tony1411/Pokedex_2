import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonesService } from 'src/app/_services/pokemones.service';
import { PhotoService } from 'src/app/_services/photo.service';



@Component({
  selector: 'app-pokemones-create',
  templateUrl: './pokemones-create.page.html',
  styleUrls: ['./pokemones-create.page.scss'],
})
export class PokemonesCreatePage implements OnInit {

  pokemonForm : FormGroup

  constructor(
     private formBuilder : FormBuilder,
     private pokemonesService : PokemonesService,
     private router : Router,
     private photoService : PhotoService
  ) {
    this.pokemonForm = this.formBuilder.group({
      nombre: [''],
      altura: [''],
      categoria: [''],
      peso: [''],
      habilidad: [''],
      tipo: [''],
      img: ['']
    })    
  }


  ngOnInit() {
  }

  agregarPokemon(values: any){
    this.pokemonesService.newPokemon(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    );
  }

  async openCamera() {
    const picture_data = await this.photoService.takePicture();
    
    this.pokemonForm.patchValue(picture_data);
  }

}
