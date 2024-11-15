import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NgParticlesService } from '@tsparticles/angular';
import { InteractivityDetect, MoveDirection } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-particles-animation',
  templateUrl: './particles-animation.component.html',
  styleUrls: ['./particles-animation.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('15s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ParticlesAnimationComponent {
  id = 'tsparticles';
  particlesOptions = {
    fpsLimit: 144,
    interactivity: {
      detectsOn: 'window' as InteractivityDetect,
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          quantity: 1,
        },
      },
    },
    particles: {
      color: {
        value: '#50fa7b',
        opacity: 0.3,
      },
      links: {
        color: '#F8F8F2',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none' as MoveDirection,
        enable: true,
        outMode: 'bounce',
        speed: 0.5,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.4,
      },
      shape: {
        type: 'circle',
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  async ngOnInit(): Promise<void> {
    await this.loadParticles();
  }

  private async loadParticles(): Promise<void> {
    await this.ngParticlesService.init(async (engine) => {
      console.log(engine);
      await loadSlim(engine);
    });
  }
}
