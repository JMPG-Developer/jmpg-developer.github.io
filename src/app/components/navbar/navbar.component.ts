import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pages, Page } from '../../models/pages';
import { CommonModule } from '@angular/common';
import { PageOrderPipe } from '../../pipes/page-order.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, PageOrderPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() components: Pages | null = null;
  menu: Map<string, Page>;

  constructor() {
    this.menu = new Map<string, Page>();
  }

  ngOnInit() {
    if (this.components) {
      Object.entries(this.components).forEach(([key, value]) => {
        const page = value as Page;
        if (page.enabled) {
          this.menu.set(key, page);
        }
      });
    }
  }
}
