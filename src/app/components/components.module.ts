import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [],
    imports: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
    ],
})
export class ComponentsModule { }