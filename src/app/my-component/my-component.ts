import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApiService } from '../poke-api-service';
import { PokemonSharedService } from '../pokemon-shared';
import { catchError, Observable, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {
  protected LOADER = 'assets/loader.gif';

  pokedex: (Pokemon | null)[] = [];
  pagedPokedex: (Pokemon | null)[] = [];
  selectedPokemon?: string;
  pokemonValided?: Pokemon = undefined;
  filtre: string = '';

  pageSize = 20;
  currentPage = 0;
  isLoading = true;

  totalPokemon = 0;
  loadedCount = 0;
  progressValue = 0;

  constructor(
    private pokeApiService: PokeApiService,
    private pokemonSharedService: PokemonSharedService
  ) {
    this.initPokedex();
  }

  initPokedex(): void {
    if (this.pokemonSharedService.hasPokedex()) {
      this.pokedex = this.pokemonSharedService.getPokedex()!;
      this.updatePagedData();
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.loadedCount = 0;
    this.progressValue = 0;

    this.pokeApiService.getPokemonList().subscribe((data: any) => {
      const entries = data.pokemon_entries;
      this.totalPokemon = entries.length;

      const requests: Observable<any>[] = entries.map((entry: any) =>
        this.pokeApiService.getPokemonDetails(entry.pokemon_species.name).pipe(
          catchError(() => of(null))
        )
      );

      const results: (Pokemon | null)[] = [];
      requests.forEach((req, index) => {
        req.subscribe({
          next: (r) => {
            if (r) {
              const p = new Pokemon(r);
              results.push(p);
            }
            this.loadedCount++;
            this.progressValue = Math.round((this.loadedCount / this.totalPokemon) * 100);
          },
          complete: () => {
            if (this.loadedCount === this.totalPokemon) {
              this.pokedex = results.sort((a, b) => (a!.id - b!.id));
              this.pokemonSharedService.setPokedex(this.pokedex);
              this.updatePagedData();
              this.isLoading = false;
            }
          }
        });
      });
    });
  }

  updatePagedData(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedPokedex = this.pokedex.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedData();
  }

  updateDataByName(name: string): void {
    this.pokeApiService.getPokemonDetails(name).subscribe((data: any) => {
      if (data) {
        this.pokemonValided = new Pokemon(data);
        this.selectedPokemon = this.pokemonValided.name;
      }
    });
  }

  onPokemonSelected() {
    this.pokemonSharedService.setPokemonId(this.selectedPokemon || '');
    this.updateDataByName(this.selectedPokemon || '');
  }
}
