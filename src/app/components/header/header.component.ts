import { Component, Input } from '@angular/core';
import { Pages, components } from '../../models/pages';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() back: string | null = null;

  public components: Pages = components;

}
