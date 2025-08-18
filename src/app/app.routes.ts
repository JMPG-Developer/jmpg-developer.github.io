import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ArticlesDetailComponent } from './pages/articles-detail/articles-detail.component';
import { ArticlesComponent } from './pages/articles/articles.component';


export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/:name', component: ArticlesDetailComponent },
    { path: '**', component: IndexComponent }
];