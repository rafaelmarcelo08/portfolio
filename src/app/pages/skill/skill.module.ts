import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { SkillComponent } from './skill.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SkillComponent],
  imports: [SharedModule, MatCardModule],
  exports: [SkillComponent],
})
export class SkillModule {}
