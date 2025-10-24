import {Component, Input} from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: false,
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  @Input() pokemon?: Pokemon;
}
