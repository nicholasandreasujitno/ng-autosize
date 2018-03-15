import { NgModule } from '@angular/core';
import { ngAutosizeDirective } from './src/autosize.directive';

export * from './src/autosize.directive';

@NgModule({
  declarations: [ngAutosizeDirective],
  exports: [ngAutosizeDirective],
})
export class AutosizeModule { }
