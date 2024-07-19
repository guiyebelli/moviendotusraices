import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ContactComponent } from './components/contact/contact.component'
import { ProductsComponent } from './components/products/products.component'
import { PresentationComponent } from './components/presentation/presentation.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component';
import { CityComponent } from './components/city/city.component';
import { LandingComponent } from './components/landing/landing.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { NavbarProductsComponent } from './components/navbar-products/navbar-products.component';
import { DirectAccessComponent } from './components/direct-access/direct-access.component';
import { CarouselComponent } from './components/carousel/carousel.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProductsComponent,
    PresentationComponent,
    FooterComponent,
    HeaderComponent,
    CityComponent,
    LandingComponent,
    AllProductsComponent,
    NavbarLandingComponent,
    NavbarProductsComponent,
    DirectAccessComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
