import { NgModule } from '@angular/core';

import { AboutMeComponent } from './about-me.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [SharedModule],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
