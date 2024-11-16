import { NgModule } from '@angular/core';

import { SkillComponent } from './skill.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SkillComponent],
  imports: [SharedModule],
  exports: [SkillComponent],
})
export class SkillModule {}
