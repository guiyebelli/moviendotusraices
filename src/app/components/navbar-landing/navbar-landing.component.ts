import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrl: './navbar-landing.component.scss',
})
export class NavbarLandingComponent {
  @Output() selectOption: EventEmitter<string> = new EventEmitter()
  navbarCollapsed = true

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed
  }

  selectEmit(value: string) {
    this.selectOption.emit(value)
  }
}
