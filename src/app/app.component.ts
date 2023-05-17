import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { Pages } from './models/pages';
import { Socials } from './models/socials';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ComponentsModule, PagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Jose Miguel Pérez';
  company = "JMPG Developer";
  components: Pages = {
    "about" : { order: 1, name: "About", icon: "fas fa-id-card", enabled: true },
    "resume" : { order: 2, name: "Resume", icon: "fas fa-terminal", enabled: true },
    "skills" : { order: 3, name: "Skills", icon: "fas fa-code", enabled: true },
    "portfolio" : { order: 4, name: "Portolio", icon: "fas fa-lightbulb", enabled: true },
    "library" : { order: 5, name: "Library", icon: "fas fa-book", enabled: true },
    "testimonials" : { order: 6, name: "Testimonials", icon: "fas fa-quote-left", enabled: false },
    "stats" : { order: 7, name: "Stats", icon: "fas fa-chart-area", enabled: true },
    "contact" : { order: 8, name: "Contact", icon: "fas fa-envelope", enabled: true },
  };
  socials: Socials = {
    list: [
      { name: "Facebook", url: "https://www.facebook.com/jmperezg", icon: "fa-brands fa-facebook", enabled: false },
      { name: "Twitter", url: "https://twitter.com/jmperezg", icon: "fa-brands fa-twitter", enabled: false },
      { name: "Instagram", url: "https://www.instagram.com/jmperezg", icon: "fa-brands fa-instagram", enabled: false },
      { name: "Linkedin", url: "https://www.linkedin.com/in/jmperezg", icon: "fa-brands fa-linkedin", enabled: false },
      { name: "Github", url: "", icon: "fa-brands fa-github", enabled: false },
      { name: "Gitlab", url: "", icon: "fa-brands fa-gitlab", enabled: false },
    ]
  };

}