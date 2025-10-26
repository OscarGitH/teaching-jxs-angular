# TP Web : Javascript et HTML5

## Overview
This project is a university assignment aimed at introducing the Angular framework through the creation of a Pokédex web application.
The goal is to explore Angular components, services, dependency injection, data binding, pipes, and HTTP communication with an external API.

The base project and detailed steps were provided here: [subject documentation](README-SUBJECT.md).

---

## Features
The main features implemented include:  
- Search a Pokémon by its name or ID
- Display a list of Pokémon with a filter input
- Two-way data binding using ngModel
- Custom pipe for filtering Pokémon dynamically
- PokéAPI integration to fetch real Pokémon data (name, ID, stats, image, etc.)
- Shared service for communication between components
- Angular Material integration for improved UI components

---

## API Integration

This project uses the PokéAPI to retrieve Pokémon data.  

- ```https://pokeapi.co/api/v2/pokemon``` – list of all Pokémon

- ```https://pokeapi.co/api/v2/pokemon/{id}``` – details for a specific Pokémon

The HTTP communication is handled via Angular’s HttpClient module, using observables for asynchronous data fetching.

---

## Run the App
1. Clone the repository:
  ```bash
    git clone https://github.com/OscarGitH/teaching-jxs-angular.git
    cd pokedemo
  ```

2. Install dependencies:
  ```bash
    npm install
  ```

3. Start the development server:
  ```bash
    ng serve
  ```

4. Open your browser and go to:
  ```
   http://localhost:4200/
  ```
The app will automatically reload when source files are modified.

---

## Build
To create a production build:
  ```bash
    ng build
  ```

---

## Technologies

The technologies used in this project are:

- Angular (V 20.3.3)
- TypeScript
- HTML5 & CSS3
- Angular CLI
- Angular Material
- PokéAPI

---

## Author
PAVOINE Oscar  
Master 1 – Informatique (IL, Apprentissage)
