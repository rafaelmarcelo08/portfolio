import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule, FontAwesomeModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
