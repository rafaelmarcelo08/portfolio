import { NgModule } from '@angular/core';

import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { ParticlesAnimationModule } from 'src/app/components/particles-animation/particles-animation.module';
import { ProfileModule } from '../profile/profile.module';
import { AboutMeModule } from '../about-me/about-me.module';
import { SkillModule } from '../skill/skill.module';
import { ExperienceModule } from '../experience/experience.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    NavbarModule,
    ParticlesAnimationModule,
    ProfileModule,
    AboutMeModule,
    SkillModule,
    ExperienceModule,
    FooterModule,
    ContactModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
