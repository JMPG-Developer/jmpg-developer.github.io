import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components.module';
import { PagesModule } from '../../pages/pages.module';
import { Pages, components } from '../../models/pages';
import { Socials, socials } from '../../models/socials';
import { DeviceService } from '../../services/device/device.service';

@Component({
  imports: [CommonModule, ComponentsModule, PagesModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  
  public isMobile: boolean = false;
  public title = 'Jose Miguel Pérez';
  public company = "JMPG Developer";
  public components: Pages = components;
  public socials: Socials = socials;

  constructor(deviceService: DeviceService) {
    if(deviceService.isMobile()){
      this.components.stats.enabled = false;
      this.isMobile = true;
    }
  }

}
