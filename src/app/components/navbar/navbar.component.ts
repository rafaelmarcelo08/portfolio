import { Component, HostListener } from '@angular/core';
import { faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public faCode = faCode;
  public faBars = faBars;
  public faTimes = faTimes;

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
    // Fecha o menu automaticamente em telas maiores
    if (this.screenWidth > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
