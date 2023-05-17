import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { LibraryComponent } from './library/library.component';
import { SkillsComponent } from './skills/skills.component';
import { StatsComponent } from './stats/stats.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

// Import your components here

@NgModule({
    declarations: [],
    imports: [
        AboutComponent,
        ContactComponent,
        MainComponent,
        PortfolioComponent,
        ResumeComponent,
        LibraryComponent,
        SkillsComponent,
        StatsComponent,
        TestimonialsComponent
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        MainComponent,
        PortfolioComponent,
        ResumeComponent,
        LibraryComponent,
        SkillsComponent,
        StatsComponent,
        TestimonialsComponent
    ],
})
export class PagesModule { }