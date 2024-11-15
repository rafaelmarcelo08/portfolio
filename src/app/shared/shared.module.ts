import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

const sharedModules: Array<Type<any>> = [CommonModule];

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
  declarations: [],
})
export class SharedModule {}
