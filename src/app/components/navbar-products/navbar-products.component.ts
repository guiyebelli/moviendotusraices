import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-navbar-products',
  templateUrl: './navbar-products.component.html',
  styleUrl: './navbar-products.component.scss',
})
export class NavbarProductsComponent {
  @Output() selectOption: EventEmitter<string> = new EventEmitter()
  navbarCollapsed = true

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed
  }

  selectEmit(value: string) {
    this.selectOption.emit(value)
  }
}
