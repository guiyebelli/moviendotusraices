import { Component } from '@angular/core'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email = environment.email
  phone = environment.phone
  location = environment.location
  instagram = environment.instagram

  goToLink() {
    window.open(environment.instagramUrl, '_blank')
  }

  goToWhatsapp() {
    window.open(`https://api.whatsapp.com/send?phone=${environment.whatsapp}`, '_blank')
  }
}
