import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [],
    imports: [
        FooterComponent,
        NavbarComponent,
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
    ],
})
export class ComponentsModule { }