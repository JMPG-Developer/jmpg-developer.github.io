import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  mobilePhone: string = "+34 611 097 354";
  email: string = "jmpg.dev@outlook.com";
  linkedin: string = "https://www.linkedin.com/in/jmpgdeveloper/";

  loading: boolean = false;

  submit() {
    const restoreTimeout = 10000;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, restoreTimeout);
  }

}