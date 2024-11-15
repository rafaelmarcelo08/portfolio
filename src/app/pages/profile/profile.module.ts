import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProfileComponent } from './profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule, NgxTypedJsModule, FontAwesomeModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
