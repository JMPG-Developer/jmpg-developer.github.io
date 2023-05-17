import { Component, Input } from '@angular/core';
import { Social, Socials } from '../../models/socials';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @Input() title: string = "";
  @Input() socials:Socials = { list: [] };

  _socials: Social[] = [];
  private availableDescriptions: string[] = [
    "Developer",
    "Engineer",
    "Designer",
    "Architect",
    "Consultant",
    "Specialist",
    "Leader",
  ];
  description: string = this.availableDescriptions[0];

  private intervalId: any;
  private currentDescriptionIndex: number = 0;
  private currentCharIndex: number = 0;
  private delayAfterCompleteWord: number = 1000; // 1 second delay
  private intervalDelay: number = 100; // 0.05 seconds delay between letters
  private isWordComplete: boolean = false;

  ngOnInit() {
    this._socials = this.socials.list.filter(social => social.enabled);
    this.intervalId = setInterval(() => this.updateDescription(), this.intervalDelay); // Change every 0.05 seconds
  }

  private updateDescription() {
    if (this.isWordComplete) {
      setTimeout(() => {
        this.isWordComplete = false;
        this.currentCharIndex = 0;
        this.currentDescriptionIndex = (this.currentDescriptionIndex + 1) % this.availableDescriptions.length;
      }, this.delayAfterCompleteWord);
      return;
    }

    const currentDescription = this.availableDescriptions[this.currentDescriptionIndex];
    if (this.currentCharIndex < currentDescription.length) {
      let description = currentDescription.substring(0, this.currentCharIndex + 1);
      if( description.length > 1 ) this.description = description;
      this.currentCharIndex++;
    } else {
      this.isWordComplete = true;
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
