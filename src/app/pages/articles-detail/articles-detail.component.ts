import { Component } from '@angular/core';
import { Article } from '../../models/articles';
import { ArticlesService } from '../../services/articles/articles.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Pages, components } from '../../models/pages';
import { ComponentsModule } from '../../components/components.module';
import { PagesModule } from '../pages.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  imports: [CommonModule, ComponentsModule, PagesModule, RouterLink],
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrl: './articles-detail.component.scss'
})
export class ArticlesDetailComponent {

  // public back:string = '/#articles';
  public components: Pages = components;
  public article: Article | null = null;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) {
    let articleName: string | null = this.route.snapshot.paramMap.get('name');
    if (articleName != null)
      this.article = this.articlesService.getByName(articleName);
    else
      this.article = null;
  }

}
