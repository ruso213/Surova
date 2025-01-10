import { Component, inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsStore} from '@surova/utils';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@surova/ui';
import { User } from '../utils/store/user.store';
@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'Surova';
  user = inject(User);
  iconToRegister = [
    "chevronLeft",
    "chevronRight",
    "search",
    "progressActivity",
    "surova"
  ]
  productsStore = inject(ProductsStore)

  ngOnInit(): void {
    this.productsStore.loadData()
    this.user.loadCart()
  }

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
  ){
    this.iconToRegister.forEach(icon =>{
      this.matIconRegistry.addSvgIcon(icon,this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icon/${icon}.svg`))
    })
  }
}
