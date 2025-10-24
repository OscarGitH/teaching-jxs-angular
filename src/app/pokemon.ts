export class Pokemon {
  id: number = 0;
  name: string = '';
  height: number = 0;
  weight: number = 0;
  types: string[] = [];
  sprite: string = '';
  cardImage: string = '';

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.height = data.height;
      this.weight = data.weight;
      this.types = data.types ? data.types.map((t: any) => t.type.name) : [];
      this.sprite = data.sprites?.front_default || '';
    }
  }
}
