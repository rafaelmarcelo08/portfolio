import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
