import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EsrsApplicationProvisioningStatusModule } from './provisioning-status/provisioning-status.module';
import { EsrsApplicationProvisioningStatus1Module } from './provisioning-status-1/provisioning-status-1.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        EsrsApplicationProvisioningStatusModule,
        EsrsApplicationProvisioningStatus1Module,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsrsApplicationEntityModule {}
