import { Component } from '@angular/core';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public faCertificate = faCertificate;
}
