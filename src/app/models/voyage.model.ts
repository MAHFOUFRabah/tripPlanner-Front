import { Article } from './article.model';

export class Voyage {
  constructor(
    public codeBarre: string,
    public idVoyage: string,
    public items: Article[],
    public nomVoyage: string
  ) {}
}
