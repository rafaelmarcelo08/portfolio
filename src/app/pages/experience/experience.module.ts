import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ExperienceComponent } from './experience.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [SharedModule, BrowserAnimationsModule],
  exports: [ExperienceComponent],
})
export class ExperienceModule {}
