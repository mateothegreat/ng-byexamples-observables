import { NgModule }                from '@angular/core';
import { MatButtonModule }         from '@angular/material';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }                from './app.component';
import { ComponentsSharingAComponent } from './components-sharing/components-sharing-a/components-sharing-a.component';
import { ComponentsSharingBComponent } from './components-sharing/components-sharing-b/components-sharing-b.component';
import { ComponentsSharingComponent }  from './components-sharing/components-sharing.component';

@NgModule({
    declarations: [

        AppComponent,
        ComponentsSharingComponent,
        ComponentsSharingAComponent,
        ComponentsSharingBComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,

    ],

    providers: [],

    bootstrap: [ AppComponent ]

})
export class AppModule {
}
