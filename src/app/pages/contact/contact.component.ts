import { Component } from '@angular/core';
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contacts = [
    {
      name: 'Email',
      icon: faEnvelope,
      link: 'mailto:seuemail@example.com',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      link: 'https://instagram.com/seuperfil',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      link: 'https://linkedin.com/in/seuperfil',
    },
    {
      name: 'GitHub',
      icon: faGithub,
      link: 'https://github.com/seuperfil',
    },
    {
      name: 'Discord',
      icon: faDiscord,
      link: 'https://discordapp.com/users/seuid',
    },
  ];

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
