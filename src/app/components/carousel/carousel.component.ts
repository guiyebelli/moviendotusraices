import { Component, HostListener, OnInit } from '@angular/core'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  imagesWeb = [
    {
      img: './assets/images/carousel/1.png',
      alt: 'carousel-moviendo-tus-raices-1',
    },
    {
      img: './assets/images/carousel/2.png',
      alt: 'carousel-moviendo-tus-raices-2',
    },
    {
      img: './assets/images/carousel/3.png',
      alt: 'carousel-moviendo-tus-raices-3',
    },
    {
      img: './assets/images/carousel/4.png',
      alt: 'carousel-moviendo-tus-raices-4',
    },
  ]
  imagesMobile = [
    {
      img: './assets/images/carousel/mobile-1.png',
      alt: 'carousel-moviendo-tus-raices-1',
    },
    {
      img: './assets/images/carousel/mobile-2.png',
      alt: 'carousel-moviendo-tus-raices-2',
    },
    {
      img: './assets/images/carousel/mobile-3.png',
      alt: 'carousel-moviendo-tus-raices-3',
    },
  ]

  images = this.imagesWeb
  isMobile = false
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setScreenSize(event.target.innerWidth)
  }

  ngOnInit(): void {
    this.setScreenSize(window.innerWidth)
  }

  setScreenSize(value: number): void {
    this.isMobile = Boolean(value <= 767)
    this.images = this.isMobile ? this.imagesMobile : this.imagesWeb
  }
}
