import { Component } from '@angular/core';

import { contacts } from 'src/app/shared/constants/contacts.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public contacts = contacts;

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
