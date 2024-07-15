import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingComponent } from './components/landing/landing.component'
import { AllProductsComponent } from './components/all-products/all-products.component'

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'services/:sectionId',
    component: AllProductsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
