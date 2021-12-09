import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
  constructor(
    private http : HttpClient
  ) {}
  
  getPokemons(){
     return this.http.get<any>(`${environment.apiUrl}/pokemons`);
  }

  getPokemonsById(id : any){
     return this.http.get<any>(`${environment.apiUrl}/pokemons/${id}`);
  }

  newPokemon(pokemon : any){
     return this.http.post<any>(`${environment.apiUrl}/pokemons`, pokemon);    
  }

  editPokemon(id : any, pokemon : any){
     return this.http.put<any>(`${environment.apiUrl}/pokemons/${id}`, pokemon);
  }

  deletePokemon(id : any){
     return this.http.delete<any>(`${environment.apiUrl}/pokemons/${id}`);
  }  
}
