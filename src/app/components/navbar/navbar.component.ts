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
  private screenWidth: number;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 0;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.checkMenuState();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  private checkMenuState() {
    // Se a tela for maior que 768px (ou o breakpoint usado), fecha o menu
    if (this.screenWidth > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
