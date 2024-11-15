import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const navbar = this.el.nativeElement.querySelector('header');
    const container = this.el.nativeElement.querySelector('.container');
    const navbarHeight = navbar.offsetHeight;
    this.renderer.setStyle(container, 'margin-top', `${navbarHeight}px`);
  }
}
