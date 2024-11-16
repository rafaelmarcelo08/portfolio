import { NgModule } from '@angular/core';

import { ExperienceComponent } from './experience.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [SharedModule],
  exports: [ExperienceComponent],
})
export class ExperienceModule {}
