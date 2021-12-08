import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  constructor(
    private http : HttpClient
  ) {}
  
  getPokemons(){
     return this.http.get<any>('http://localhost:3000/pokemons');
  }

  getPokemonsById(id : any){
     return this.http.get<any>(`http://localhost:3000/pokemons/${id}`);
  }

  newPokemon(pokemon : any){
     return this.http.post<any>('http://localhost:3000/pokemons',pokemon);    
  }

  editPokemon(id : any, pokemon : any){
     return this.http.put<any>(`http://localhost:3000/pokemons/${id}`,pokemon);
  }

  deletePokemon(id : any){
     return this.http.delete<any>(`http://localhost:3000/pokemons/${id}`);
  }  
}
