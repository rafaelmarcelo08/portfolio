import { Component, HostListener } from '@angular/core';
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public faCode = faCode;
  public faBars = faBars;

  public isSticky = false;
  public menuOpen: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 0;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
