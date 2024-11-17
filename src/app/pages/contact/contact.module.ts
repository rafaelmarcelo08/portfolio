import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [SharedModule],
  exports: [ContactComponent],
})
export class ContactModule {}
