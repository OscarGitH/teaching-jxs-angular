import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected POKEMON = 'assets/pokemon.png';
  readonly showAbout = signal(false);
  searchMode = false;
  searchText = '';

  openAbout(): void {
    this.showAbout.set(true);
  }

  closeAbout(): void {
    this.showAbout.set(false);
  }

  toggleSearch(event?: Event | boolean): void {
    if (event instanceof Event) event.stopPropagation();
    if (typeof event === 'boolean') {
      this.searchMode = event;
    } else {
      this.searchMode = !this.searchMode;
    }
  }
}
