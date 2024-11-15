import { NgModule } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { ParticlesAnimationComponent } from './particles-animation.component';

@NgModule({
  declarations: [ParticlesAnimationComponent],
  imports: [BrowserAnimationsModule, SharedModule, NgxParticlesModule],
  exports: [ParticlesAnimationComponent],
})
export class ParticlesAnimationModule {}
