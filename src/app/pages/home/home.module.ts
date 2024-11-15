import { NgModule } from '@angular/core';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { ParticlesAnimationModule } from 'src/app/components/particles-animation/particles-animation.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, NavbarModule, ParticlesAnimationModule],
  exports: [HomeComponent],
})
export class HomeModule {}
