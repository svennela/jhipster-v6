import { NgModule } from '@angular/core';

import { JhipsterV6SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterV6SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterV6SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterV6SharedCommonModule {}
