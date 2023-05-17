import { Component, Input } from '@angular/core';
import { Social, Socials } from '../../models/socials';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() title: string = '';
  @Input() company: string = '';
  @Input() socials: Socials = { list: [] };

  _socials: Social[] = [];

  ngOnInit() {
    this._socials = this.socials.list.filter(social => social.enabled);
  }
}
