import { Injectable } from '@angular/core';
import { Article, Articles, articles } from '../../models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() {}

  public getAll(): Articles {
    return articles;
  }

  public getByName(alias: string): Article | null {
    let article = articles.list.find(article => article.alias === alias);
    return article || null;
  }

}
