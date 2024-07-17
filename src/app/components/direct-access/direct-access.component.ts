import { Component } from '@angular/core'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-direct-access',
  templateUrl: './direct-access.component.html',
  styleUrl: './direct-access.component.scss',
})
export class DirectAccessComponent {
  goToLink() {
    window.open(environment.instagramUrl, '_blank')
  }

  goToWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=${environment.whatsapp}`, '_blank')
  }
}
