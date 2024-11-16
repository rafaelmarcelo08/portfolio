import { MatCardModule } from '@angular/material/card';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';

const sharedModules: Array<Type<any>> = [
  CommonModule,
  MatCardModule,
  FontAwesomeModule,
  MatButtonToggleModule,
  MatListModule,
];

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
  declarations: [],
})
export class SharedModule {}
