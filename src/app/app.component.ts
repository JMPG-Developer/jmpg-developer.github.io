import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { Socials, socials } from './models/socials';
import { Pages, components} from './models/pages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  public title = 'Jose Miguel Pérez';
  public company = "JMPG Developer";
  public components: Pages = components;
  public socials: Socials = socials;

}