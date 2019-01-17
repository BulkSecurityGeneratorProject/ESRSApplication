import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EsrsApplicationSharedModule } from 'app/shared';
import {
    ProvisioningStatus1Component,
    ProvisioningStatus1DetailComponent,
    ProvisioningStatus1UpdateComponent,
    ProvisioningStatus1DeletePopupComponent,
    ProvisioningStatus1DeleteDialogComponent,
    provisioningStatus1Route,
    provisioningStatus1PopupRoute
} from './';

const ENTITY_STATES = [...provisioningStatus1Route, ...provisioningStatus1PopupRoute];

@NgModule({
    imports: [EsrsApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProvisioningStatus1Component,
        ProvisioningStatus1DetailComponent,
        ProvisioningStatus1UpdateComponent,
        ProvisioningStatus1DeleteDialogComponent,
        ProvisioningStatus1DeletePopupComponent
    ],
    entryComponents: [
        ProvisioningStatus1Component,
        ProvisioningStatus1UpdateComponent,
        ProvisioningStatus1DeleteDialogComponent,
        ProvisioningStatus1DeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsrsApplicationProvisioningStatus1Module {}
