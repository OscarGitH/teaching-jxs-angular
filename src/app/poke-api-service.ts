import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private baseUrl = 'http://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokedex/1`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }

  getPokemonCardImage(name: string): Observable<string | null> {
    const url = `https://api.pokemontcg.io/v2/cards?q=name:${name}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        if (response?.data?.length) {
          return response.data[0].images?.large || response.data[0].images?.small || null;
        }
        return null;
      }),
      catchError(() => of(null))
    );
  }

}
