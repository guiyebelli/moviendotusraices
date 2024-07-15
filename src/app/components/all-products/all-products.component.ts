import { AfterViewInit, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const section = this.route.snapshot.params['sectionId']
      this.scroll(section)
    }, 100)
  }

  scroll(section: string) {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
