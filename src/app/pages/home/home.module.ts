import { NgModule } from '@angular/core';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { ParticlesAnimationModule } from 'src/app/components/particles-animation/particles-animation.module';
import { ProfileModule } from '../profile/profile.module';
import { AboutMeModule } from '../about-me/about-me.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    NavbarModule,
    ParticlesAnimationModule,
    ProfileModule,
    AboutMeModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
