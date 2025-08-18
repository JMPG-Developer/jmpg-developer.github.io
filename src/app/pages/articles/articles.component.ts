import { Component, Input } from '@angular/core';
import { Article, Articles } from '../../models/articles';
import { ArticlesService } from '../../services/articles/articles.service';
import { Router, RouterLink } from '@angular/router';
import { DeviceService } from '../../services/device/device.service';

@Component({
  selector: 'app-articles',
  imports: [ RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  @Input() isMobile: boolean = false;

  size: number = 6;
  showTags: boolean = false;
  showMoreButton: boolean = false;

  public articles: Articles = { list: [] };
  public _articles: Article[] = [];
  public tags: string[] = [];

  constructor(private router: Router, private deviceService: DeviceService, private articlesService: ArticlesService) {
    let articles: Articles = this.articlesService.getAll();

    if( router.url === '/articles' || router.url === '/articles/'){
      this.showMoreButton = false;
      this.size = articles.list.length;
    }
    else
    {
      this.size = this.isMobile ? 3 : this.size;
    }
    
    this.articles = articles;
    this._articles = articles.list.slice(0, this.size);
    this.tags = ["All", ...new Set(this.articles.list.flatMap(article => article.tags))];

    
  }
  
  selectedTag: string = "All";

  selectTag(tag: string) {
    this.selectedTag = tag;
    this._articles = this.articles.list.filter(article => {
      return article.tags.includes(this.selectedTag) || this.selectedTag === "All";
    });
  }

}
