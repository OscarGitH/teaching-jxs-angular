import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyComponent } from './my-component/my-component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {PokeApiService} from './poke-api-service';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {PokemonSharedService} from './pokemon-shared';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { PokemonCard } from './pokemon-card/pokemon-card';
import { AboutPage } from './about-page/about-page';
import { MarkdownModule } from 'ngx-markdown';
import {MatDivider} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    App,
    MyComponent,
    FilterPokemonPipePipe,
    PokemonCard,
    AboutPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggle,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MarkdownModule.forRoot(),
    MatDivider,
    MatPaginatorModule,
    MatProgressBarModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    PokeApiService,
    PokemonSharedService,
],
  bootstrap: [App]
})
export class AppModule { }
