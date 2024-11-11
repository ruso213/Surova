import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsStore} from '@surova/utils';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterOutlet],
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
  productsStore = inject(ProductsStore)
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ){
    this.iconToRegister.forEach(icon =>{
      this.matIconRegistry.addSvgIcon(icon,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icon/${icon}.svg`))
    })
    this.productsStore.loadData()
  }
}
