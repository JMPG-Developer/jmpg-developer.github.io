import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { StatsComponent } from './stats/stats.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { LibraryComponent } from './library/library.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
    declarations: [],
    imports: [
        AboutComponent,
        ArticlesComponent,
        ContactComponent,
        MainComponent,
        PortfolioComponent,
        ResumeComponent,
        ServicesComponent,
        LibraryComponent,
        SkillsComponent,
        StatsComponent,
        TestimonialsComponent
    ],
    exports: [
        AboutComponent,
        ArticlesComponent,
        ContactComponent,
        MainComponent,
        PortfolioComponent,
        ResumeComponent,
        ServicesComponent,
        LibraryComponent,
        SkillsComponent,
        StatsComponent,
        TestimonialsComponent
    ],
})
export class PagesModule { }