import { NgModule } from '@angular/core';

import { EsrsApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EsrsApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EsrsApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EsrsApplicationSharedCommonModule {}
