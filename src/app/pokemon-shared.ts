import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonSharedService {
  private pokemonIdSource = new BehaviorSubject<string>('');
  pokemonId$ = this.pokemonIdSource.asObservable();

  private pokedexCache: (Pokemon | null)[] | null = null;

  setPokemonId(newId: string) {
    this.pokemonIdSource.next(newId);
  }

  setPokedex(pokedex: (Pokemon | null)[]) {
    this.pokedexCache = pokedex;
  }

  getPokedex(): (Pokemon | null)[] {
    return this.pokedexCache ?? [];
  }

  hasPokedex(): boolean {
    return this.pokedexCache !== null;
  }
}
