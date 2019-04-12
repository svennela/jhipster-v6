import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterV6SharedLibsModule, JhipsterV6SharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterV6SharedLibsModule, JhipsterV6SharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterV6SharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterV6SharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterV6SharedModule
    };
  }
}
