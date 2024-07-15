import { AfterViewInit, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const section = this.route.snapshot.params['sectionId']
      const element = document.getElementById(section)
      if (section !== 'all' && element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView()
  }
}
