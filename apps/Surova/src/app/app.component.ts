import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderComponent } from '@surova/ui';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent,],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Surova';
  iconToRegister = [
    "chevronLeft",
    "chevronRight",
    "search",
    "progressActivity"
  ]

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ){
    this.iconToRegister.forEach(icon =>{
      this.matIconRegistry.addSvgIcon(icon,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icon/${icon}.svg`))
    })
  }
}
